# app-lista-animes
Sobre o Projeto
O aplicativo consome a Jikan API (uma API pública e gratuita baseada na base de dados do MyAnimeList) para listar os animes mais populares do momento. A interface foi construída seguindo uma estrutura limpa e direta, priorizando a performance e a fidelidade aos conceitos solicitados pelo professor.

Tecnologias e Recursos Utilizados
React Native / Expo: Estrutura base do projeto mobile.

Hooks (useState e useEffect): Utilizados para gerenciar o estado dos dados e controlar o ciclo de vida da requisição assíncrona.

Fetch API: Utilizado para realizar a chamada assíncrona para o endpoint da API externa.

Componentes Nativos:

FlatList: Para renderização eficiente da lista de animes.

Image: Para carregamento dinâmico das imagens de capa enviadas pela API.

View, Text e StyleSheet: Para estruturação e estilização do layout.

API Consumida
Endpoint: https://api.jikan.moe/v4/top/anime?limit=15

Formato de resposta: JSON (Dados mapeados a partir da propriedade .data do retorno da API).
