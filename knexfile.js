"use strict";
require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/blog'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL+ '?ssl=true'
  }

};
