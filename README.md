# Pomelo NodeJS Challenge

My proejct from [this](https://github.com/pomelofashion/challenges/tree/master/challenge-nodejs) challenge

Install
```console
yarn install
```
Run project
```console
yarn start
```

### Assignment 1
Description: Put the child object to the parent's array property.
API documentation [http://localhost:3000/documentation](http://localhost:3000/documentation)

Run test
```console
yarn test
```

### Assignment 2
Description: Build a pagination for Github Search API.
Open url [http://localhost:3000/assignment2/index.html](http://localhost:3000/assignment2/index.html)


##### Structure description

```
|--project
        |-controllers
        |-public
        |-routes
        |-spec
            |-data
            |-docs
        |-utils
```
controllers - contain handler files for routes.
public - contain static files.
routes - contain route files to use in utils/routes.js.
spec - contain test files.
spec/data - contain mock data for tests.
spec/docs - contain documentation that generate from Insomnia.json.
utils - contain utility functions. For example, routes.js is used to auto generate new routes in folder routes.