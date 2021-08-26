#language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo caçar alimentos
    Para que eu possa distribuir aos viajantes

    Contexto:
        Dado um Hunter de nome "Gaston"
        E o Hunter sempre começa a viagem com 2 refeições
        E o Hunter sempre começa a viagem saudável

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 2 vezes
        Então a quantidade de refeições do Hunter deve ser igual a 12

    Cenário: Passou 4 refeições para um viajante
        Dado o Hunter com 10 refeição
        E ele entrega 5 refeições para o viajante
        Então o Hunter estará com 5 refeições

    Cenário: Tentou dar refeição sem ter a quantidade esperada
        Dado o Hunter com 3 refeição
        E o viajante estiver com 2 refeições
        Quando ele entrega 4 refeições para o viajante
        Então o Hunter continua com 3 refeições
        E o viajante continua com 2 refeições

    Cenário: Tentou comer com refeições insuficientes
        Dado o Hunter com 1 refeição
        Quando Hunter tentar comer 1 vez
        Então a quantidade de refeições do Hunter deve ser igual a 1
        E o Hunter ficará doente

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Hunter sair para caçar 2 vezes
        E o Hunter parar para comer 2 vezes
        Então a quantidade de refeições do Hunter deve ser igual a 8
        E o Hunter não ficará doente