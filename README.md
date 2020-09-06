# js_excel
Native js project

#### processi
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
- $ node dist/bundle.js - run
- $ npm run build  - build in production mode
- add index.html -> !+Tab - run emmit script for empty html
    - div#app + Tab -> <div id="app"></div>
- add fivicon.ico





