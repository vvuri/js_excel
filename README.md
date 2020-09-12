# js_excel
Native js project

#### process
- add .gitignore
- $ git checkout -b webpack
- $ npm init
- package.json -> "private": true - do not publish
- goto webpack.js.org for new documentation
- $ npm install webpack webpack-cli --save-dev
- configure file webpack.config.js
    - 'bandle.[hash].js' -  add diferent file - no browser catch
    - add plugins
    - $ npm install --save-dev html-webpack-plugin
    - $ npm install --save-dev copy-webpack-plugin
    - $ npm install --save-dev clean-webpack-plugin
    - $ npm install --save-dev mini-css-extract-plugin
- add scripts run and build in package.json
- $ npm run start  - build in develope mode
- $ node dist/bundle.***.js - run
- $ npm run build  - build in production mode
- add index.html -> !+Tab - run emmit script for empty html
    - div#app + Tab -> <div id="app"></div>
- add fivicon.ico
- $ npm install sass-loader node-sass css-loader --save-dev
- add modules in config file
- goto [babel](https://babeljs.io/setup#installation)
- $ npm install --save-dev babel-loader @babel/core
- $ npm install @babel/preset-env --save-dev
- add rules to webpack.config 
- add brouser support in package.json
    - "browserslist": "> 0.25%, not dead"
- add work with ENV
    - $ npm i -D cross-env    
    - work with process.env.NODE_ENV
    - add bool param drive minification
- add SourceMap link original es6 syntax code to transpilled
    - add to webpack conf
    - devtool: isDev ? 'source-map' : false
- add [DevServer](https://webpack.js.org/configuration/dev-server/)
    - $ npm install webpack-dev-server --save-dev
    - upgrade dependency:
    - $ npm install fsevents
    - run webpack-dev-server



