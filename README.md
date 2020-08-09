# react-base
This project is boilerplate code intended to be used as a base for modern lightweight web projects based on the React library. It includes a basic working structure as a starting point and it's highly recommended adding Jest support and setting Babel browser targets.

### Tech
This project uses:
- react / redux / styled-components as the component based interface building library
- webpack / babel for parsing, minification and bundling with cache busting via filename hashing
- eslint based on airnbn rules and stylelint to enforce good coding practices

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

### Contributing
If you wish to contribute, you are welcome to open issues and PRs on the github project.

### Todos
- add redux-saga
- add axios
- add redux devtools

### Credits
- Author: Thiago L. Lima

### License
MIT
