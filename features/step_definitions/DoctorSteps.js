const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { viajante, doutor } = require("./../../app");

Given('um Doctor de nome {string}', function (string) {
    doutor.name = string;
});

Given('ele sempre começa a viagem saudável', function () {
    doutor.isHealthy = true;
});

Given('um viajante chamado {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    viajante.name = string
  });

Given('o viajante está doente', function () {
    viajante.isHealthy = false
});

Given('o viajante está saudável', function () {
    viajante.isHealthy = true
  });

When('o Doctor tentar curar', function () {
    doutor.heal(viajante)
  });

Then('o viajante estará saudável', function () {
    assert.strictEqual(viajante.isHealthy, true)
});