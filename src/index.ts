// Tipos
interface Livro { // criação de uma interface para um livro, que é o molde, que define como o objeto deve ser
    id: number;
    titulo: string;
    autorId: number;
    paginas: number;
    generos: GeneroDeLivro[]; 
    avaliacoes: Avaliacoes[];
    copiasDisponiveis: number;
    anoPublicacao: number;
}


interface Avaliacoes { //criação de uma interface para o valor "Avaliacoes[]"
    usuarioId: number;
    nota: number;
}

type GeneroDeLivro = string //Cria um apelido (alias) chamado GeneroDeLivro para o tipo primitivo string.

// Resolução dos exercícios

export const exercicio01 = (livros: Livro[], anoLimite: number): string[] => livros
.filter(livro => livro.anoPublicacao < anoLimite ) 
.filter(livro => {
    const totalNotas = livro.avaliacoes.reduce((soma, avaliacao) => soma + avaliacao.nota, 0)
    const media =  totalNotas / livro.avaliacoes.length
    return media >= 4.0
})
.map(livro => livro.titulo) //retorna  apenas os titulos do objeto livro


export const exercicio02 = (livros: Livro[], copiasDisponiveis: Livro['copiasDisponiveis'], genero: GeneroDeLivro ): Omit<Livro, 'avaliacoes'>[] => livros
      .filter(livro => livro.copiasDisponiveis === copiasDisponiveis) //filtrando os livros com base no número de cópias
      .map(livro => {
        const { avaliacoes, ...livroSemAvaliacoes } = livro; //uso da desestruturação para separar o campo `avaliacoes` (que vai ser descartado) e Guardar o restante do livro em `livroSemAvaliacoes`
  
        return { //retorna um novo objeto que contém:
          ...livroSemAvaliacoes, //todos os campos de LivroSemAvaliacoes
          generos: [...livro.generos, genero] // substitui o campo `generos` do objeto LivroSemAvaliacoes por todos os generos que o objeto LivroSemAvaliacoes já tinha mais um novo gênero passado como parâmetro 
        };

        // ou fazer assim para remover duplicatas de gênero
        // return {
        //     ...livroSemAvaliacoes,
        //     generos: Array.from(new Set([...livro.generos, genero]))
        //   };
    
      });

//parei aqui :)

// export const exercicio03 = (livros: Livro[], autores: Autor[]): Record<string, string> => autores

// export const exercicio04 = (livros: Livro[], leitores: Leitor[], idLeitor: Leitor['id']): Livro[] => livros

// export const exercicio05 = (livros: Livro[], generoDeLivro?: GeneroDeLivro): Record<string, string[]> => livros
