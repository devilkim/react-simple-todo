# React Simple Todo App
This app is created for my friend that is studying for the first time.

This app is testing React libraries.

# Run
~~~
npm install
npm start
~~~

# Branches
## master
Working branch.

## one_file
1 file, 1 react component.

## component
Multiple files, multiple react components.

## redux
Multiple files, multiple react components.

Using redux.

## redux-server
Redux branch + HTTP API.

#### Server run
~~~
npm run server
// Default port 9191
~~~
#### Changing port
~~~
//package.json
{  
  ...
  "scripts": {
    ...
    "server": "PORT=9191 node ./server/app.js"
  },
  ...
}
~~~
