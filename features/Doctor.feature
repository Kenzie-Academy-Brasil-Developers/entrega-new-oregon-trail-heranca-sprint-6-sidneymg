# language: pt

Funcionalidade: Doctor
Como um Doctor
Eu devo curar os passageiros
Para que todos continuem saudáveis

Contexto:
Dado um Doctor de nome "Dr.Rey"
E 1 refeição apenas no inicio da viagem
E saudável no inicio da viagem afinal de contas ele e medico.


Cenário: Caçou para conseguir mais comida
Quando caçar 1 vez
Então deve ter 3 refeições.

Cenário: Comeu pois estava com fome
Quando comer 1 vez
Então terá 0 refeições.