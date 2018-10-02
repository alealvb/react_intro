* iteradores funcionales
* clases
* promesas
* arrow functions
* spread operator
* instalar react



# pasos para configurar webpack con react
* 1 crear una carpeta y cd dentro 
* yarn add yarn add webpack webpack-cli webpack-dev-server babel-loader @babel/core react react-dom @babel/preset-react -D
* Agregar en el package.json
```json
"scripts": {
    "build": "webpack",
    "start": "webpack-dev-server"
  }
```
* crear y configurar el webpack.config.js en el root, agregar el `entry, output, mode` https://webpack.js.org/concepts/
* crear carpeta `src` y el archivo `index.js` dentro
* crear carpeta `dist` y dentro crear `index.html` con el script tag de bundle
* configurar el `webpack-dev-server` ver https://webpack.js.org/configuration/dev-server/
* configurar babel para que corra con webpack, ver https://babeljs.io/setup#installation (seleccionar webpack)
* crear el .babelrc y agregar el preset de react, ver https://babeljs.io/docs/en/babel-preset-react#docsNav
* correr `yarn build` o `yarn start`