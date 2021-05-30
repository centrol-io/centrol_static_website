## Install
1. Get npm 
`brew install node`
2. Install n, a node version manager
`npm install -g n `
3. Install v15 node, v15 because node-sass is not compatible with v16 right now 2021/05/30
`sudo n v15`
4. Confirm
`node --version`
(should output: v15.14.0)
5. Run in folder:
`npm install`

## To run locally
The code will automatically look for changes and update 'dist' folder which is served using BrowserSync

`npm run build`
`npm run serve`