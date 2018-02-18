# Desafio: Módulo 01

Crie uma aplicação do zero e **configure** ​ **o ESLint, EditorConfig, Reactotron, React
DevTools e Babel Module Resolver** .​ Assim que configurados, você deve ​ **reproduzir o
layout abaixo** ​ utilizando FlexBox layout:
**Regras:**

1. O layout deve ser criado utilizando apenas os componentes ​ **<View />** ​, ​ **<Text />** ​e
    **<ScrollView />** ​ do React Native;
2. A caixa branca com o título “Aprendendo React Native” deve estar separada em
    outro componente chamado ​ **Post** ​, o mesmo deve estar em outro arquivo chamado
    **Post.js** ​.
3. Os posts devem estar armazenados no estado do componente principal da sua
    aplicação contendo título, autor e descrição de cada item. Dessa forma, os mesmos
    devem ser renderizados em tela utilizando a função ​map​ para percorrê-los.



## Estilização

1. A cor de fundo da aplicação é ​ **#EE7777** ​;
2. A margem vertical entre todos componentes em tela é de ​ **20px** ​;
3. A cor de fundo do componente ​ **Post** ​ e do ​ **cabeçalho** ​ que contém o texto “GoNative
    App” é branca (​ **#FFFFFF** ​).
4. O espaçamento (padding) interno do componente de Post é de ​ **20px** ​;
5. O título do cabeçalho deve estar alinhado ​ **totalmente ao centro** ​, ​ **verticalmente** ​ e
    **horizontalmente** ​;
6. A cor do título no cabeçalho e do título do Post é ​ **#333333** ​.
7. A cor do autor do post é ​ **#999999** ​.
8. A cor do texto do post é ​ **#666666** ​.
9. Entre o texto do post e o autor deve haver uma borda de 1px com cor ​ **#EEEEEE** ​.
**Dicas**
1. Todas propriedades de estilo disponíveis para os componentes estão documentadas
no link: ​https://github.com/RocketSeat/react-native-styling-cheat-sheet
2. Para alinhar todo conteúdo de um componente ao centro basta unir as propriedades
**justifyContent: “center”** ​ e ​ **alignItems: “center”**
3. Para fazer que seja possível realizar scroll e ter uma barra de rolagem quando
haverem muitos posts em tela é necessária a utilização do componente​ ​ **<ScrollView
\>** ​ por volta da lista de posts, como por exemplo:
<ScrollView>
<Post />
<Post />
<Post />
</ScrollView>


