# language: pt

Funcionalidade: Hunter
Como um Hunter
Eu devo caçar meus mantimentos
Para que eu possa seguir a viagem saudável.

Contexto:
Dado um Hunter de nome "Sejesfredo"
E 2 refeições no inicio da viagem
E saudável no inicio da viagem.

Cenário: Caçou para conseguir mais refeições
Quando Hunter caçar 1 vez
Então 7 deve ser seu número de refeições

Cenário: Comeu e segui saudável
Quando o Hunter comer 1 vezes
Então 0 deve ser a quantidade de refeições
E Hunter deverá continuar saudável

Cenário: Comeu e ficou doente
Quando o Hunter comer 2 vezes
Então 0 deve ser a quantidade de refeições
E o Hunter deverá ficar doente

Cenário: Saiu para caçar, comer e seguiu saudável
Quando o Hunter caçar 2 vezes
Então 12 deve ser sua quantidade de refeições
E o Hunter deverá ficar saudável

Cenário: Saiu para caçar, comer e ficou doente
Quando Hunter caçar 1 vezes
Então 7 deverá ser seu número de refeições
Quando Hunter parar e comer 4 vezes
Então 0 deverá ser sua quantidade de refeições
E o Hunter com certeza ficará doente