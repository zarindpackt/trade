### Node Version
Node version should be 10.9 or greater

### start for development ###
npm run start   
   
     
### build and run as SSR ###
npm run build:ssr   
npm run serve:ssr   
   

### docker build and run as  SSR ###
docker build -t angular-app:dev .  
docker rm product_ang_univ -f  
docker run -d --name product_ang_univ -v ${PWD}:/app -v /app/node_modules -p 4200:4000 angular-app:dev
     
    