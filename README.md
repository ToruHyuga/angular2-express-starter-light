<img width="150" src="https://i.cloudup.com/zfY6lL7eFa-3000x3000.png" />
<img width="50" src="https://angular.io/resources/images/logos/angular2/angular.svg" />

## The light version of Angular2 Express Starter
Thank you [Vlado Tesanovic](Vlado Tesanovic), for your  [Angular2 Express Starter](https://github.com/vladotesanovic/angular2-express-starter)

## Angular2 Express Starter Light ( Advanced )

- Angular 2 ( 2.x )
- ExpressJS ( 4.x - with compression )
- Webpack ( angular-cli )

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Concepts

- Redux ( NgRx/Store - with server calls)
- Smart & dumb components
- AOT: Ahead-of-Time compilation
- Advanced routing ( lazy loading, router outlets...)

## Install / Development

```bash
git clone https://github.com/ToruHyuga/angular2-express-starter-light
cd angular2-express-starter-light

# Install dependencies
npm install

# start server
npm run start

# Client url: http://localhost:4200
# Application ( epxress ) API: http://localhost:4300
```

Install Redux DevTools chrome extenstion:

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

## Build / Production

```bash

npm run build

## Deploy dist folder to app server

Structure of dist folder:

/dist/server <-- expressjs
/dist/client <-- angular2

```
