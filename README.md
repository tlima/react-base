# react-base
This project is boilerplate code intended to be used as a base for modern lightweight web projects based on the React library. It includes a basic working structure as a starting point and it's highly recommended adding Jest support and setting Babel browser targets.

### Tech
This project uses:
- `react` + `styled-components` for building a component-based interface
- `redux` + `redux-saga` for managing state and side effects
- `webpack` + `babel` for transpiling, minificating and bundling, set up with cache busting via filename hashing
- `eslint` + `stylelint` to enforce good coding practices and avoiding simple errors - based on airbnb configs

### Installation
Install the dependencies and devDependencies.
```sh
$ cd react-base
$ npm install
```

### Development
To run the project locally using the webpack-dev-server:
```sh
$ npm start
```

### Building
To generate assets for a production server:
```sh
$ npm run build
```
Then check the **build** folder for them. You can also serve them locally using **http-server** for testing purposes:
```sh
$ npm install -g http-server
$ npm run serve
```

### Todos
- add webpack chunk splitting
- improve description

### Credits
- Author: Thiago L. Lima

### License
MIT
