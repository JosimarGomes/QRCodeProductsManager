## Sobre o projeto

Este é o frontend para o aplicativo web gerenciador de produtos e de QRCodes. O administrador pode adicionar novos
produtos, gerar códigos seriais e QRCodes a partir dos códigos seriais, além de visualizar todas as leituras
que o aplicativo realizou em um determinado produto.

## Informações técnicas

* O frontend foi escrito em React, utilizando-se da ferramenta creat-rect-app como ponto de partida.
* Sobre o a organização do projeto, foi usada uma estrutura simples, porém robusta, que atende ao proposto.
* Aproveitando estudos sobre *"design system"*, foi criado uma biblioteca de componentes próprias, apoiada pelo design system da aplicação.
Para esse projeto, não utilizamos nenhuma biblioteca de terceiro para componentes (Material Design, Bootstrap, etc...)
* Ainda não foi implementada a autenticação, mas o projeto já dispõe de uma biblioteca própria para validar o usuário logado.
* Foi utilizado redux para store da aplicação e sagas para os efeitos colaterais (nota pessoal: sagas é uma das melhores ferramentas para trabalhos com redux).

## Melhorias
* Tratamentos de erros
* Testes unitários