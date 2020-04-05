## Sobre o projeto

Este é o backend para o aplicativo web gerenciador de produtos e de QRCodes e para o aplicativo mobile que faz leituras de QRCodes.
As regras de negócio da aplicação se encontram nesse backend.
Dois grande diferenciais foram o uso de *Typescript* e de uma abordagem arquitetural chamada *Clean Architeture*.

## Informações técnicas

* O backend foi escrito em Typescript, utilizando boas práticas e princípios REST.
* As informações são persistidas em memória, seguindo uma abordagem NoSql. Com o auxlílio da abordagem clean architeture,
fazer alteração de onde os dados são persistidos não é difícil.
* O servidor http foi construído com Express, mas seguindo a abordagem clean architeture fazer a alteração não deve ser difícil.
* O software está separado em camadas distintas, onde uma alteração em uma camada não deve influenciar na camada seguinte.

## Melhorias
* Tratamentos de erros
* Testes unitários
* Adição de banco de dados mysql
* Adição de servidor construído com Happi
* Adição de arquitetura baseada em eventos
* Desenho arquitetural de componentes e camadas