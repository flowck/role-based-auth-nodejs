// Set NODE_ENV to development
process.env.NODE_ENV = "test";

// Dependencies
const { auth } = require("../../src/services/auth.service");
const chai = require("chai");
const { AUTH_INVALID_DATA, AUTH_USER_NOT_FOUND} = require("../../src/configs/apiMessages");

// Chai
const should = chai.should();

describe("Auth service", () => {
  /**
   * Should authenticate user
  */
  it ("Should authenticate user", async () => {
    try {
      const authData = {
        email: "lionel.messi@gmail.com",
        password: "barcelona"
      };
  
      // Call auth service
      const response = await auth(authData.email, authData.password);
  
      response.should.have.property("token");
      response.token.should.be.a("string");
      response.should.have.property("user");
      
      return Promise.resolve();
    } catch(error) {
      return Promise.reject(error);
    }
  });

  /**
   * Should not authenticate user without an email
  */
  it ("Should not authenticate user without an email", async () => {
    try {
      const authData = {
        email: null,
        password: "barcelona"
      };

      const response = await auth(authData.email, authData.password);

      response.should.have.property("code");
      response.should.have.property("name");
      response.code.should.equal(AUTH_INVALID_DATA.code);
      response.name.should.equal(AUTH_INVALID_DATA.name);

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  });

  /**
   * Should not authenticate user without an password
  */
  it ("Should not authenticate user without a password", async () => {
    try {
      const authData = {
        email: "lionel.messi@gmail.com",
        password: null
      };

      const response = await auth(authData.email, authData.password);

      response.should.have.property("code");
      response.should.have.property("name");
      response.code.should.equal(AUTH_INVALID_DATA.code);
      response.name.should.equal(AUTH_INVALID_DATA.name);

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  });

   /**
   * Should not authenticate user without an password
  */
 it ("Should not authenticate user without a password", async () => {
  try {
    const authData = {
      email: "lionel.messi@gmail.com",
      password: null
    };

    const response = await auth(authData.email, authData.password);

    response.should.have.property("code");
    response.should.have.property("name");
    response.code.should.equal(AUTH_INVALID_DATA.code);
    response.name.should.equal(AUTH_INVALID_DATA.name);

    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
});

  /**
  * Should not authenticate user without auth data
  */
  it ("Should not authenticate user without auth data", async () => {
    try {
      const authData = {
        email: null,
        password: null
      };

      const response = await auth(authData.email, authData.password);

      response.should.have.property("code");
      response.should.have.property("name");
      response.code.should.equal(AUTH_INVALID_DATA.code);
      response.name.should.equal(AUTH_INVALID_DATA.name);

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  });

  /**
  * Should not authenticate unexistent user
  */
  it ("Should not authenticate unexistent user", async () => {
    try {
      const authData = {
        email: "firmino.changani@gmail.com",
        password: "123SuperSecure"
      };

      const response = await auth(authData.email, authData.password);

      response.should.have.property("code");
      response.should.have.property("name");
      response.code.should.equal(AUTH_USER_NOT_FOUND.code);
      response.name.should.equal(AUTH_USER_NOT_FOUND.name);

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  });

});