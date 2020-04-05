Seguindo o principio de arquitetura limpa, deve ser possível acessar o "core" do sistema
por outros meios além do protocolo http.

Um exemplo, seria utilizar uma ferramenta de mensageria.

//ESBOÇO
criar compositor para o RabbitMQueue

compositor = {
    ...allUseCases
}

rabbitMqueue(msg => {
    // consumir mensagens baseado nos useCases
})