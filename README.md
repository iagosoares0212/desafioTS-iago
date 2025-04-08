# Biblioteca Virtual

## Instruções

Executar:

```sh
npm install
npm test
```

Vocês vão perceber que os testes estão quebrados.

O exercício é trabalhar os arrays de retorno nas funções do arquivo `src/index.ts` até que todos os testes passem.

## Dados

- Livros
- Usuários
  - Usuários possuem dois tipos diferentes: autor e leitor
    - Autor possui premios literários
    - Leitor possui gêneros favoritos
- Existem 14 gêneros de livros, sendo eles:
  - biografia
  - fantasia
  - aventura
  - romance
  - terror
  - história
  - autoajuda
  - mistério
  - engenharia de software
  - ficção científica
  - produtividade
  - épico
  - programação
  - suspense

## Regras

- Seguir boas práticas de funções puras, imutabilidade, legibilidade, organização.
- Não alterar o arquivo de testes.
- Não abrir as funções dos exercícios em blocos de código. Fazer com **funções encadeadas**.
  - Ex.:
  ```ts
  export const exercicio = (livros: Livro[]): string[] =>
    livros.map((livro) => livro.titulo);
  ```
- Não mudar nomes de funções ou de parâmetros. Foca do retorno em diante.
- Não reinventar a roda. Existem muitas funções prontas pra arrays e strings.
- Não usar forEach.

## Dicas

- Abrir um terminal de debug (JavaScript Debug Terminal) para executar os testes em debug
- `npm run test exercicio01` executa apenas os testes do exercicio01.
- `npm run test:watch` mantém o processo rodando e roda novamente os testes a cada alteração.
- `npm run test:watch exercicio01` junta as duas coisas.
