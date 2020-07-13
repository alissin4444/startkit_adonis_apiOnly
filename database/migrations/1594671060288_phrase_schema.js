"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PhraseSchema extends Schema {
  up() {
    this.create("phrases", (table) => {
      table.increments();
      table.string("author");
      table.string("phrase");
      table.timestamps();
    });
  }

  down() {
    this.drop("phrases");
  }
}

module.exports = PhraseSchema;
