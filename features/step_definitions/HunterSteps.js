const { Given, When, Then } = require("@cucumber/cucumber");
const { strict, equal } = require("assert");
const assert = require("assert");

const { cacador, viajante } = require("./../../app");

Given('o Hunter sempre começa a viagem com {int} refeições', function (int) {
    cacador.food = int
});

Given('o Hunter sempre começa a viagem saudável', function () {
    cacador.isHealthy = true;
});

Given('um Hunter de nome {string}', function (string) {
    cacador.name = string;
  });

Given('ele sempre começa a viagem com {int} refeições', function (int) {
    cacador.food = int
});

Given('o viajante estiver com {int} refeições', function (int) {
    viajante.food = int
});

Given('o Hunter com {int} refeição', function (int) {
    cacador.food = int
    });

When('o Hunter sair para caçar {int} vezes', function (int) {
    for(let x = 0; x < int; x++){
        cacador.hunt();
    }
});

When('Hunter tentar comer {int} vez', function (int) {
    for(let x = 0; x < int; x++){
        cacador.eat();
    }
});

When('o Hunter parar para comer {int} vezes', function (int) {
    for(let x = 0; x < int; x++){
        cacador.eat();
    }

});

When('ele entrega {int} refeições para o viajante', function (int) {
    cacador.giveFood(viajante, int)
});

Then('a quantidade de refeições do Hunter deve ser igual a {int}', function (int) {
    assert.strictEqual(cacador.food, int);
});

Then('o Hunter estará com {int} refeições', function (int) {
    assert.strictEqual(cacador.food, int)
});

Then('o Hunter não ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, true)
});

Then('o Hunter ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, false)
});

Then('o viajante continua com {int} refeições', function (int) {
    assert.strictEqual(viajante.food, int)
});

Then('o Hunter continua com {int} refeições', function (int) {
    assert.strictEqual(cacador.food, int)
    });