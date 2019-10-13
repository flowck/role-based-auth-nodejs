# Role based auth

[![Build Status](https://travis-ci.org/flowck/role-based-auth-nodejs.svg?branch=master)](https://travis-ci.org/flowck/role-based-auth-nodejs)

An implementation of role based authentication using ```express.js``` and ```jsonwebtoken```.

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

