import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponseBase,
  HttpResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";

// let users = [
//   {
//     id: 1,
//     firstName: "Jason",
//     lastName: "Watmore",
//     email: "test@test.com",
//     password: "test"
//   }
// ];
let users = JSON.parse(localStorage.getItem('users')) || [];
export class FakeBackendInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ){
    const { url, method, body, headers } = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith("/users/authenticate") && method === "POST":
          return authenticate();
        case url.endsWith("/users/register") && method === "POST":
          return register();
        // case url.endsWith('/users') && method == 'GET':
        // return getUsers();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    function authenticate() {
      const { email, password } = body;
      const user = users.find(
        x => x.email === email && x.password === password
      );
      if (!user) {
        console.log("Username or password is incorrect");
        return error("Username or password is incorrect");
      }
      return ok({
        id: user.id,
        email: user.email,
        firstname: user.firstName,
        lastname: user.lastName,
        token: "fake-jwt-token"
      });
    }

    function register() {
      const user = body;
      if (users.find(x => x.email === user.email)) {
        console.log("email is already taken");
        return error("Email" + user.email + "is alredy taken");
      }

      user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      return ok();
    }

    function error(message) {
      return of({ error: { message } });
    }

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }
  }
}
