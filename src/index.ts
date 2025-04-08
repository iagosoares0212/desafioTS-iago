// Tipos
interface Livro {
    id: number;
    titulo: string;
    autorId: number;
    paginas: number;
    generos: string[];
    avaliacoes: Avalicoes[];
    copiasDisponiveis: number;
    anoPublicacao: number;
}


interface Avalicoes {
    usuarioId: number;
    nota: number;
}

type GeneroDeLivro = string




// Resolução dos exercícios

export const exercicio01 = (livros: Livro[], anoLimite: number): string[] => livros
.filter(livro => livro.anoPublicacao < anoLimite )
.filter(livro => {
    const totalNotas = livro.avaliacoes.reduce((soma, avaliacao) => soma + avaliacao.nota, 0)
    const media =  totalNotas / livro.avaliacoes.length
    return media >= 4.0
})
.map(livro => livro.titulo)


// export const exercicio02 = (livros: Livro[], copiasDisponiveis: Livro['copiasDisponiveis'], genero: GeneroDeLivro): Omit<Livro, 'avaliacoes'>[] => livros.

// export const exercicio03 = (livros: Livro[], autores: Autor[]): Record<string, string> => autores

// export const exercicio04 = (livros: Livro[], leitores: Leitor[], idLeitor: Leitor['id']): Livro[] => livros

// export const exercicio05 = (livros: Livro[], generoDeLivro?: GeneroDeLivro): Record<string, string[]> => livros
