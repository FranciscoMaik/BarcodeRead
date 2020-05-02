# BarcodeRead

Aplicação para leitura de códigos de barras com React Native.

Pré-requisitos para a execução do programa:

- Possuir o **react-native-cli** instalado;
- Possuir o **JDK** instalado; ( Aplicação em Android ).
- Possuir o **Android Studio** instalado. ( Aplicação em Android ).

Para deixar o tudo pronto para a execução utilize o seguinte comando para instalar as depedências:

> yarn

Após isso poderá utilizar um emulador ou o aparelho para ver a apliação, para isso deve-se rodar os seguintes comandos:

- Primeiro para instalar a aplicação:


    > yarn android

    ou

    > react-native run-android

- Segundo para carregar as informações:


    > yarn start

    ou

    > react-native start

Observações

`Caso rode o comando de instalação (yarn android ou react-native run-android) e já tiver o aplicativo instalado pode dar conflito, desinstale o aplicativo e rode novamente o comando.`

`Caso rode o comando de carregamento (yarn start ou react-native start) e o aplicativo não carregue as informações na tela, feche o aplicativo e abra novamente se persisti dê um reload apertando R no terminal onde está executando a aplicação.`

`Caso possa vir a ter problema em outro trabalho com animação do react-native-barcode-mask, por exemplo o warning de useNativeDriver leia a documentação no final do README.`

Exemplo de funcionamento:

<p align="center">
<img src = "https://user-images.githubusercontent.com/20601076/80893035-3aab0380-8ca5-11ea-9df9-5389428feef0.gif" width = "250" height = "500">
</p>

Link da documentação do **react-native-barcode-mask**:

[Documentação Mask](https://www.npmjs.com/package/react-native-barcode-mask/v/1.2.1)

Link da discussão sobre o warning do useNativeDriver:

[Discussão sobre o Warning useNativeDriver](https://github.com/shahnawaz/react-native-barcode-mask/issues/21)
