import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpResponseBase, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

let users = [{ id: 1, firstName: 'Jason', lastName: 'Watmore', email: 'test', password: 'test' }];
//let users = JSON.parse(localStorage.parseItem('users')) || [];
export class FakeBackendInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const { url, method ,body} = request;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method == 'POST':
                    return authenticate();
                // case url.endsWith('/users/register') && method == 'POST' :
                //     return register();
                // case url.endsWith('/users') && method == 'GET':
                // return getUsers();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
            
        }

        function authenticate() {
            const { email, password } = body ;
            const user = users.find(x => x.email === email && x.password === password);
            if (!user) {
                return error('Username or password is incorrect');
            }
            return ok(
                {
                    id: user.id,
                    email: user.email,
                    firstname: user.firstName,
                    lastname: user.lastName,
                    token: 'fake-jwt-token'
                }
            )
        }

        function error(message) {
            return of({ error: { message } });
        }

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

    }
}
