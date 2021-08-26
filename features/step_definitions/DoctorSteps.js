const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { doto } = require("./../../app");

/** GIVEN */

Given('um Doctor de nome {string}', function (string) {
    doto.nome = string;
});

Given('{int} refeição apenas no inicio da viagem', function (int) {
    doto.food = int;
});

Given('saudável no inicio da viagem afinal de contas ele e medico.', function () {
    doto.isHealthy = true;
});

/** WHEN */

When('caçar {int} vez', function (int) {
    for(let contador = 0; contador < int; contador++) {
        doto.hunt();
    }
});

When('comer {int} vez', function (int) {
    for(let contador = 0; contador < int; contador++) {
        doto.eat();
    }
});

/** THEN */

Then('deve ter {int} refeições.', function (int) {
    assert.strictEqual(doto.food, int);
});


Then('terá {int} refeições.', function (int) {
    assert.strictEqual(doto.food, int);
});