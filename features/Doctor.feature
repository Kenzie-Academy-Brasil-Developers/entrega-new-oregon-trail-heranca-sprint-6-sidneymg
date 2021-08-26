#language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo curar os passageiros
    Para que eles possam seguir a viagem saudável

    Contexto: 
        Dado um Doctor de nome "Doutor Van Tramonte"
        E ele sempre começa a viagem com 1 refeição
        E ele sempre começa a viagem saudável
    
    Cenário: Tentou curar um viajante doente
        Dado um viajante chamado "Ana"
        E o viajante está doente
        Quando o Doctor tentar curar
        Então o viajante estará saudável

    Cenário: Tentou curar um viajante saudável
        Dado um viajante chamado "João"
        E o viajante está saudável
        Quando o Doctor tentar curar
        Então o viajante estará saudável