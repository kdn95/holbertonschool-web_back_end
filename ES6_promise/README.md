# ES6 Promises

A promise is a type of JavaScript/ES6 object that represents expected completion (resolved) or failure (rejected) of an 'asynchronous' operation and the resulting value. Promises can be in one of 3 states, pending, resolved (success) or rejected (fail). Promises follow the very same concept as to what they mean to everyone, they act as containers for future values and allow you to defines what should happen once the 'asynchronous' operation happens (resolved) or not (rejected). 

## Learning Objectives

This project was all about learning the "Promises" concept. Some of the key takeaways from this project were learning:
- How, why and what are Promises?
- How to use all methods of the Promise object
- Throw / Try
- The await operator
- How to use an async function

## Installation
In our home directory, we used NodeJS from by installing this in our home directory.
```
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
Example:
```
$ nodejs -v
v20.15.1
$ npm -v
10.7.0
```
- Jest
```
npm install --save-dev jest
```
- Babel
```
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
```
- ESLint
```
npm install --save-dev eslint
```
Other files installed/added:
- package.json
  - Once added, we ran the following npm install:
  ```
  $ npm install
  ```
- babel.config.js
- utils.js
- .eslintrc.js


