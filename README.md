# MySQL, Express, React(SCSS), Node.js

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  * [📸 Screenshots](#screenshots)


## Configuration and Setup

In the first terminal

```
$ cd client
$ npm install [--legacy-peer-deps] (The option flag allows you to bypass peer dependency conflicts when installing packages)
$ npm run dev
```

- Create your MySQL database, which you will use as your database
- Open xampp and start the Apache and MySQL services
- Once MySQL is running, click on "Admin" to open the phpMyAdmin interface

In the second terminal

```
$ cd server
$ npm install [--legacy-peer-deps]
$ npm start
```

##  Key Features

- User registration and login
- Authentication using JWT Tokens
- Responsive Design

##  Technologies used

####  Frontend 

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks  ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [SCSS](https://sass-lang.com/) - For User Interface
- [React icons](https://react-icons.github.io/react-icons/) -
 Small library that helps you add icons  to your react apps.


####  Backend 

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [mysql](https://www.npmjs.com/package/mysql) - For authentication
- [cors](https://www.npmjs.com/package/uuid) - Provides a Connect/Express middleware

####  Database 

 - [MySQL ](https://www.mysql.com/) - It provides a free cloud service to store MongoDB collections.

 ##  Screenshots 

![Screenshot](./client/src/Assets/Screenshot.png)
