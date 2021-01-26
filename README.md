# Role based auth

[![Build Status](https://travis-ci.org/flowck/role-based-auth-nodejs.svg?branch=master)](https://travis-ci.org/flowck/role-based-auth-nodejs)

An implementation of role based authentication using ```express.js``` and ```jsonwebtoken```.

## How to run

1 - After cloning this respository to your computer, open the terminal and navigate to the root: 

    cd src

2 - Install Nodejs dependencies

    npm install

3 - Assuming you have an instance of PostgreSQL installed in your computer, create a new database by running the following commands:

    sequelize db:create
    sequelize db:migrate
    sequelize db:seed:all

4 - Start the API by running:

    npm run dev

5 - Start ES-Lint and Prettier on a different tab of your terminal

    npm run dev

## Context

Information is the power of every application and therefore we must pay anttention on only expose the information that the user needs and nothing more.

This project I contain the following features:

- Authtentication of two types of users: ```MANAGER``` and ```EMPLOYEE```
- Manager can access users list and orders
- Employee can only access orders

## Goals

- Implement a HTTP API
- Implement token based authentication
- Prevent unauthorized access through roles verification

## Non-Goals

Requirements or features which are out of scope of this project, therefore will not be implemented.

- Implement an RESTful API
- Users registration
- Password

## Diagrams

In case you need more context I created the following [diagrams](./docs/diagrams/DIAGRAMS.md):

* Database diagram
* Use case diagram
* Flow diagrams

On this repository is implemented an HTTP API which expose the following resources:

* [POST] /auth
* [GET] /orders
* [GET] /users

## License

Under the [MIT License](./LICENSE.md) - Firmino Changani

