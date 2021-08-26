const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { cacador } = require("./../../app");

/** GIVEN */

Given('um Hunter de nome {string}', function (string) {
    cacador.name = string;
});

Given('{int} refeições no inicio da viagem', function (int) {
    cacador.food = int;
});

Given('saudável no inicio da viagem.', function () {
    cacador.isHealthy = true;
});

/** WHEN */

When('Hunter caçar {int} vez', function (int) {
    for(let contador = 0; contador < int; contador++) {
        cacador.hunt();
    }
});

When('o Hunter comer {int} vezes', function (int) {
    for(let contador = 0; contador < int; contador++) {
        cacador.eat();
    }
});

When('o Hunter caçar {int} vezes', function (int) {
    for(let contador = 0; contador < int; contador++) {
        cacador.hunt();
    }
});

When('Hunter caçar {int} vezes', function (int) {
    for(let contador = 0; contador < int; contador++) {
        cacador.hunt();
    }
});

When('Hunter comer {int} vezes', function (int) {
    for(let contador = 0; contador < int; contador++) {
        cacador.eat();
    }
});

When('Hunter parar e comer {int} vezes', function (int) {
    for(let contador = 0; contador < int; contador++) {
        cacador.eat();
    }
});

/** THEN */

Then('{int} deve ser seu número de refeições', function (int) {
    assert.strictEqual(cacador.food, int);
});


Then('{int} deve ser a quantidade de refeições', function (int) {
    assert.strictEqual(cacador.food, int);
});

Then('Hunter deverá continuar saudável', function () {
    assert.strictEqual(cacador.isHealthy, true);
});

Then('o Hunter deverá ficar doente', function () {
    assert.strictEqual(cacador.isHealthy, false);
});


Then('{int} deve ser sua quantidade de refeições', function (int) {
    assert.strictEqual(cacador.food, int);
});

Then('o Hunter deverá ficar saudável', function () {
    assert.strictEqual(cacador.isHealthy, true);
});


Then('{int} deverá ser sua quantidade de refeições', function (int) {
    assert.strictEqual(cacador.food, int);
});


Then('{int} deverá ser seu número de refeições', function (int) {
    assert.strictEqual(cacador.food, int);
});


Then('o Hunter com certeza ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, false);
});