"use strict";
exports.up = function(knex, Promise) {
return knex.schema.createTable("post",function(table){
  table.increments();
  table.text("title");
  table.text("article");
  table.integer("user_id");
  table.timestamps(true,true);
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("post")
};
