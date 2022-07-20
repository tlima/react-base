# react-base
This was a practice project used to learn and explore configurations for multiple tools from the ground up, the main one being webpack.
Centered around boilerplate code, it could be used as a base for simple web projects based on React. It includes a working structure and opinionated settings as a starting point.

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
$ npm ci
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
Then check the **dist** folder for them. You can also serve them locally using **http-server** for testing purposes:
```sh
$ npm install -g http-server
$ npm run serve
```

### Credits
- Author: Thiago L. Lima

### License
MIT
