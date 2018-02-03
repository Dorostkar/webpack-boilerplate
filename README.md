# React-Webpack simple configuration
## What I have done:

- npm init
- npm install webpack
- create webpack.config.js in the root folder of the project
-  bayad bedunim entry kodume
- create a src folder inside the root folder
-  create app.js file inside the src folder, this file actually is the entry of the project.
- create another folder which is public in the root of the project
- create index.html inside the public folder and write html5 structure inside that.
- add a div tag inside body and assign "app" as a value to the id .
- create bundle.js file in the public folder,Basically This file will keep the built code of the project.
-  install react and react-dom by running this command 
 ` npm install react react-dom --save`

- insall babel-core and babel-loader by running  command below
-`npm install babel-core babel-loader --save`
- - babel-core "for running babel by webpack"
- - babel-loader "teaches webpack how to run babel when webpack sees certain files"
- configure the webpack-config.js 
 - install "babel-preset-react" and "babel-preset-env"
 -  create .babelrc in the root of the project and config babel in .babelrc
-  config devtool, it will help us for debugging errors in the  devtools
- installing webpack dev server  by running command below
`npm install webpack-dev-server --save`
- configur webpack again and add devServer 
- finaly add the script to package.json to let us run the project
