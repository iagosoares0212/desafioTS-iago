import * as funcoes from '../src/index';
import livros from '../src/livros.json';
import usuarios from '../src/usuarios.json';

const autores = usuarios.filter(usuario => usuario.tipo === 'autor');
const leitores = usuarios.filter(usuario => usuario.tipo === 'leitor');

describe('exercicio01', () => {

    //
    // Recebe a lista de livros e um ano limite
    // Deve retornar os títulos dos livros publicados antes desse determinado
    // ano e que possuam nota média de avaliações maior ou igual a 4.0
    //

    it('Com ano 1900, deve retornar os livros publicados antes de 1900 que possuem nota média maior ou igual a 4.0', () => {

        const esperado = [
            'Orgulho e Preconceito',
            'O Cortiço',
            'Dicta impedit',
            'Harum illum fugiat',
            'Dolor beatae',
            'Expedita eius sed',
            'Veritatis'
        ];

        const resultado = funcoes.exercicio01(livros, 1900);

        expect(resultado).toEqual(esperado);
    });

    it('Com ano 1700, não deve retornar nenhum livro', () => {
        const esperado = []

        const resultado = funcoes.exercicio01(livros, 1700);

        expect(resultado).toEqual(esperado);
    });
});

describe('exercicio02', () => {

    //
    // Recebe a lista de livros, a quantidade de cópias disponíveis e um gênero
    // Deve retornar uma lista com os livros que possuem exatamente a quantidade de cópias informada
    // O objeto de retorno deve ter as mesmas informações do livro original, porém sem as avaliações.
    // E a lista de genêros do objeto de retorno deve conter todos os genêros do livro original e mais o gênero informado.
    // 

    it('Recebendo quantidade 0 e gênero best-seller, ', () => {
        const esperado = [
            {
                id: 101,
                titulo: "Dom Casmurro",
                autorId: 1,
                paginas: 376,
                copiasDisponiveis: 0,
                anoPublicacao: 1980,
                generos: [
                    "biografia",
                    "fantasia",
                    "best-seller",
                ],
            },
            {
                id: 107,
                titulo: "Harry Potter",
                autorId: 15,
                paginas: 492,
                copiasDisponiveis: 0,
                anoPublicacao: 1992,
                generos: [
                    "produtividade",
                    "best-seller",
                ],
            },
            {
                id: 114,
                titulo: "Capitães da Areia",
                autorId: 3,
                paginas: 203,
                copiasDisponiveis: 0,
                anoPublicacao: 1982,
                generos: [
                    "mistério",
                    "best-seller",
                ],
            },
            {
                id: 115,
                titulo: "A Menina que Roubava Livros",
                autorId: 22,
                paginas: 675,
                copiasDisponiveis: 0,
                anoPublicacao: 1906,
                generos: [
                    "engenharia de software",
                    "best-seller",
                ],
            },
            {
                id: 117,
                titulo: "Orgulho e Preconceito",
                autorId: 24,
                paginas: 630,
                copiasDisponiveis: 0,
                anoPublicacao: 1854,
                generos: [
                    "romance",
                    "ficção científica",
                    "best-seller",
                ],
            },
        ];

        const resultado = funcoes.exercicio02(livros, 0, 'best-seller');

        expect(resultado).toStrictEqual(esperado);
    });
});

describe('exercicio03', () => {

    // Recebe a lista de livros e a lista de autores
    // Deve retornar um objeto em que a chave é o nome do autor e o valor é uma
    // string representando o primeiro ano de publicação até o último ano de publicação
    // no formato "primeiro ano - último ano"
    // Autores que não possuem livros publicados não devem ser listados
    // As chaves do objeto devem estar ordenadas pelo nome do autor de forma crescente

    it('Deve retornar os autores com seus anos de publicação', () => {
        const esperado = {
            "Agatha Christie": "1982 - 1982",
            "Aluísio Azevedo": "1871 - 1871",
            "Antoine de Saint-Exupéry": "1911 - 1911",
            "Cecília Meireles": "1925 - 2022",
            "Clarice Lispector": "1962 - 1962",
            "Érico Veríssimo": "1968 - 1968",
            "Fiódor Dostoiévski": "1930 - 1965",
            "Frank Herbert": "1950 - 2014",
            "Franz Kafka": "1974 - 1974",
            "Gabriel García Márquez": "1851 - 1948",
            "George Orwell": "1940 - 2023",
            "Graciliano Ramos": "1910 - 2008",
            "Isaac Asimov": "1984 - 2019",
            "J.K. Rowling": "1908 - 1992",
            "J.R.R. Tolkien": "1932 - 1992",
            "Jane Austen": "1854 - 1854",
            "Jorge Amado": "1856 - 1982",
            "José Saramago": "1898 - 1996",
            "Julio Cortázar": "1943 - 1995",
            "Machado de Assis": "1980 - 1981",
            "Markus Zusak": "1906 - 1906",
            "Paulo Coelho": "1935 - 1935",
            "Rachel de Queiroz": "1865 - 1954",
            "Stephen King": "1881 - 2012",
        }

        const resultado = funcoes.exercicio03(livros, autores);

        expect(JSON.stringify(resultado)).toBe(JSON.stringify(esperado));
    });
});

describe('exercicio04', () => {

    // Recebe a lista de livros, lista de leitores e um id de leitor
    // Deve retornar uma lista de livros recomendados para o leitor
    // de acordo com os seus gêneros favoritos

    it('Com ID 27, deve retornar livros de aventura, produtividade, engenharia de software e história', () => {
        const esperado = [
            {
                id: 102,
                titulo: "Cem Anos de Solidão",
                autorId: 18,
                paginas: 301,
                generos: [
                    "aventura",
                ],
                avaliacoes: [
                    {
                        usuarioId: 60,
                        nota: 4.3,
                    },
                    {
                        usuarioId: 49,
                        nota: 4,
                    },
                ],
                copiasDisponiveis: 1,
                anoPublicacao: 1915,
            },
            {
                id: 103,
                titulo: "O Senhor dos Anéis",
                autorId: 12,
                paginas: 609,
                generos: [
                    "romance",
                    "terror",
                    "história",
                ],
                avaliacoes: [
                    {
                        usuarioId: 38,
                        nota: 4.4,
                    },
                    {
                        usuarioId: 68,
                        nota: 3.6,
                    },
                    {
                        usuarioId: 67,
                        nota: 4.2,
                    },
                ],
                copiasDisponiveis: 4,
                anoPublicacao: 1932,
            },
            {
                id: 105,
                titulo: "1984",
                autorId: 13,
                paginas: 242,
                generos: [
                    "romance",
                    "mistério",
                    "engenharia de software",
                ],
                avaliacoes: [
                    {
                        usuarioId: 30,
                        nota: 4.1,
                    },
                    {
                        usuarioId: 45,
                        nota: 3.6,
                    },
                ],
                copiasDisponiveis: 3,
                anoPublicacao: 1998,
            },
            {
                id: 107,
                titulo: "Harry Potter",
                autorId: 15,
                paginas: 492,
                generos: [
                    "produtividade",
                ],
                avaliacoes: [
                    {
                        usuarioId: 60,
                        nota: 4.3,
                    },
                    {
                        usuarioId: 37,
                        nota: 4,
                    },
                    {
                        usuarioId: 45,
                        nota: 4.1,
                    },
                    {
                        usuarioId: 48,
                        nota: 4.5,
                    },
                    {
                        usuarioId: 30,
                        nota: 4.7,
                    },
                ],
                copiasDisponiveis: 0,
                anoPublicacao: 1992,
            },
            {
                id: 108,
                titulo: "Duna",
                autorId: 17,
                paginas: 508,
                generos: [
                    "terror",
                    "história",
                ],
                avaliacoes: [
                    {
                        usuarioId: 45,
                        nota: 3.9,
                    },
                    {
                        usuarioId: 69,
                        nota: 4.9,
                    },
                    {
                        usuarioId: 65,
                        nota: 4.8,
                    },
                    {
                        usuarioId: 48,
                        nota: 3.6,
                    },
                    {
                        usuarioId: 69,
                        nota: 3.7,
                    },
                ],
                copiasDisponiveis: 5,
                anoPublicacao: 1950,
            },
            {
                id: 112,
                titulo: "A Revolução dos Bichos",
                autorId: 13,
                paginas: 319,
                generos: [
                    "programação",
                    "ficção científica",
                    "engenharia de software",
                ],
                avaliacoes: [
                    {
                        usuarioId: 65,
                        nota: 4.1,
                    },
                    {
                        usuarioId: 37,
                        nota: 3.8,
                    },
                    {
                        usuarioId: 66,
                        nota: 4.7,
                    },
                ],
                copiasDisponiveis: 2,
                anoPublicacao: 2023,
            },
            {
                id: 115,
                titulo: "A Menina que Roubava Livros",
                autorId: 22,
                paginas: 675,
                generos: [
                    "engenharia de software",
                ],
                avaliacoes: [
                    {
                        usuarioId: 45,
                        nota: 3.6,
                    },
                    {
                        usuarioId: 37,
                        nota: 3.9,
                    },
                ],
                copiasDisponiveis: 0,
                anoPublicacao: 1906,
            },
            {
                id: 116,
                titulo: "O Alquimista",
                autorId: 23,
                paginas: 476,
                generos: [
                    "história",
                ],
                avaliacoes: [
                    {
                        usuarioId: 49,
                        nota: 4.9,
                    },
                    {
                        usuarioId: 53,
                        nota: 3.6,
                    },
                    {
                        usuarioId: 59,
                        nota: 4.1,
                    },
                    {
                        usuarioId: 51,
                        nota: 5,
                    },
                    {
                        usuarioId: 50,
                        nota: 3.8,
                    },
                ],
                copiasDisponiveis: 5,
                anoPublicacao: 1935,
            },
            {
                id: 118,
                titulo: "O Iluminado",
                autorId: 11,
                paginas: 393,
                generos: [
                    "aventura",
                    "ficção científica",
                ],
                avaliacoes: [
                    {
                        usuarioId: 40,
                        nota: 4.8,
                    },
                    {
                        usuarioId: 62,
                        nota: 4.9,
                    },
                    {
                        usuarioId: 65,
                        nota: 4.3,
                    },
                    {
                        usuarioId: 34,
                        nota: 4.7,
                    },
                ],
                copiasDisponiveis: 1,
                anoPublicacao: 1957,
            },
            {
                id: 119,
                titulo: "O Cortiço",
                autorId: 25,
                paginas: 396,
                generos: [
                    "engenharia de software",
                    "fantasia",
                    "terror",
                ],
                avaliacoes: [
                    {
                        usuarioId: 56,
                        nota: 3.6,
                    },
                    {
                        usuarioId: 58,
                        nota: 4.4,
                    },
                    {
                        usuarioId: 28,
                        nota: 4.4,
                    },
                    {
                        usuarioId: 63,
                        nota: 3.9,
                    },
                    {
                        usuarioId: 36,
                        nota: 3.9,
                    },
                    {
                        usuarioId: 27,
                        nota: 4.4,
                    },
                ],
                copiasDisponiveis: 5,
                anoPublicacao: 1871,
            },
            {
                id: 120,
                titulo: "O Pequeno Príncipe",
                autorId: 26,
                paginas: 166,
                generos: [
                    "biografia",
                    "aventura",
                ],
                avaliacoes: [
                    {
                        usuarioId: 50,
                        nota: 3.6,
                    },
                    {
                        usuarioId: 60,
                        nota: 4.3,
                    },
                    {
                        usuarioId: 59,
                        nota: 4.3,
                    },
                    {
                        usuarioId: 51,
                        nota: 4.8,
                    },
                    {
                        usuarioId: 29,
                        nota: 4.5,
                    },
                    {
                        usuarioId: 50,
                        nota: 3.9,
                    },
                ],
                copiasDisponiveis: 2,
                anoPublicacao: 1911,
            },
            {
                id: 121,
                titulo: "At dolores",
                autorId: 8,
                paginas: 510,
                generos: [
                    "produtividade",
                    "terror",
                    "fantasia",
                ],
                avaliacoes: [
                    {
                        usuarioId: 64,
                        nota: 4.6,
                    },
                    {
                        usuarioId: 48,
                        nota: 3.7,
                    },
                ],
                copiasDisponiveis: 5,
                anoPublicacao: 1968,
            },
            {
                id: 122,
                titulo: "Atque repudiandae",
                autorId: 15,
                paginas: 473,
                generos: [
                    "mistério",
                    "engenharia de software",
                ],
                avaliacoes: [
                    {
                        usuarioId: 67,
                        nota: 3.8,
                    },
                    {
                        usuarioId: 35,
                        nota: 3.6,
                    },
                    {
                        usuarioId: 56,
                        nota: 3.6,
                    },
                    {
                        usuarioId: 39,
                        nota: 3.6,
                    },
                    {
                        usuarioId: 39,
                        nota: 4.8,
                    },
                ],
                copiasDisponiveis: 4,
                anoPublicacao: 1971,
            },
            {
                id: 123,
                titulo: "Voluptates labore",
                autorId: 18,
                paginas: 526,
                generos: [
                    "engenharia de software",
                    "história",
                ],
                avaliacoes: [
                    {
                        usuarioId: 29,
                        nota: 4.6,
                    },
                    {
                        usuarioId: 39,
                        nota: 3.9,
                    },
                    {
                        usuarioId: 30,
                        nota: 4.8,
                    },
                    {
                        usuarioId: 48,
                        nota: 3.9,
                    },
                ],
                copiasDisponiveis: 3,
                anoPublicacao: 1948,
            },
            {
                id: 127,
                titulo: "Distinctio",
                autorId: 20,
                paginas: 228,
                generos: [
                    "fantasia",
                    "mistério",
                    "produtividade",
                ],
                avaliacoes: [
                    {
                        usuarioId: 50,
                        nota: 4.1,
                    },
                    {
                        usuarioId: 63,
                        nota: 3.5,
                    },
                    {
                        usuarioId: 36,
                        nota: 4.5,
                    },
                    {
                        usuarioId: 50,
                        nota: 4.1,
                    },
                ],
                copiasDisponiveis: 3,
                anoPublicacao: 1930,
            },
            {
                id: 129,
                titulo: "Quibusdam inventore repellat",
                autorId: 5,
                paginas: 477,
                generos: [
                    "produtividade",
                    "história",
                    "aventura",
                ],
                avaliacoes: [
                    {
                        usuarioId: 34,
                        nota: 3.7,
                    },
                    {
                        usuarioId: 31,
                        nota: 4.2,
                    },
                    {
                        usuarioId: 55,
                        nota: 5,
                    },
                ],
                copiasDisponiveis: 4,
                anoPublicacao: 1988,
            },
            {
                id: 131,
                titulo: "Et",
                autorId: 9,
                paginas: 557,
                generos: [
                    "história",
                    "programação",
                    "mistério",
                ],
                avaliacoes: [
                    {
                        usuarioId: 62,
                        nota: 4.4,
                    },
                    {
                        usuarioId: 56,
                        nota: 4.7,
                    },
                    {
                        usuarioId: 62,
                        nota: 3.7,
                    },
                    {
                        usuarioId: 32,
                        nota: 3.6,
                    },
                ],
                copiasDisponiveis: 3,
                anoPublicacao: 1954,
            },
            {
                id: 133,
                titulo: "Hic perspiciatis rerum",
                autorId: 11,
                paginas: 681,
                generos: [
                    "aventura",
                    "autoajuda",
                ],
                avaliacoes: [
                    {
                        usuarioId: 46,
                        nota: 3.7,
                    },
                    {
                        usuarioId: 47,
                        nota: 4.9,
                    },
                    {
                        usuarioId: 41,
                        nota: 4,
                    },
                ],
                copiasDisponiveis: 1,
                anoPublicacao: 2012,
            },
            {
                id: 134,
                titulo: "Nisi porro natus",
                autorId: 17,
                paginas: 495,
                generos: [
                    "ficção científica",
                    "biografia",
                    "aventura",
                ],
                avaliacoes: [
                    {
                        usuarioId: 44,
                        nota: 3.7,
                    },
                    {
                        usuarioId: 46,
                        nota: 4.4,
                    },
                    {
                        usuarioId: 32,
                        nota: 4.3,
                    },
                    {
                        usuarioId: 37,
                        nota: 4.4,
                    },
                    {
                        usuarioId: 64,
                        nota: 3.7,
                    },
                    {
                        usuarioId: 69,
                        nota: 4.4,
                    },
                ],
                copiasDisponiveis: 10,
                anoPublicacao: 2014,
            },
            {
                id: 135,
                titulo: "Harum illum fugiat",
                autorId: 9,
                paginas: 565,
                generos: [
                    "programação",
                    "aventura",
                ],
                avaliacoes: [
                    {
                        usuarioId: 43,
                        nota: 4.5,
                    },
                    {
                        usuarioId: 63,
                        nota: 4.1,
                    },
                    {
                        usuarioId: 67,
                        nota: 3.5,
                    },
                    {
                        usuarioId: 67,
                        nota: 4.3,
                    },
                    {
                        usuarioId: 68,
                        nota: 4.9,
                    },
                    {
                        usuarioId: 57,
                        nota: 3.9,
                    },
                ],
                copiasDisponiveis: 5,
                anoPublicacao: 1865,
            },
            {
                id: 136,
                titulo: "Odit corrupti cupiditate",
                autorId: 1,
                paginas: 476,
                generos: [
                    "produtividade",
                    "engenharia de software",
                    "fantasia",
                ],
                avaliacoes: [
                    {
                        usuarioId: 55,
                        nota: 4.1,
                    },
                    {
                        usuarioId: 56,
                        nota: 3.8,
                    },
                    {
                        usuarioId: 65,
                        nota: 3.7,
                    },
                ],
                copiasDisponiveis: 2,
                anoPublicacao: 1981,
            },
            {
                id: 137,
                titulo: "Sapiente voluptates ex",
                autorId: 10,
                paginas: 313,
                generos: [
                    "romance",
                    "história",
                ],
                avaliacoes: [
                    {
                        usuarioId: 33,
                        nota: 4,
                    },
                    {
                        usuarioId: 56,
                        nota: 3.7,
                    },
                    {
                        usuarioId: 55,
                        nota: 3.9,
                    },
                    {
                        usuarioId: 33,
                        nota: 3.6,
                    },
                    {
                        usuarioId: 51,
                        nota: 4.8,
                    },
                    {
                        usuarioId: 53,
                        nota: 3.9,
                    },
                ],
                copiasDisponiveis: 2,
                anoPublicacao: 1898,
            },
            {
                id: 139,
                titulo: "Aperiam id",
                autorId: 19,
                paginas: 562,
                generos: [
                    "ficção científica",
                    "engenharia de software",
                ],
                avaliacoes: [
                    {
                        usuarioId: 49,
                        nota: 3.6,
                    },
                    {
                        usuarioId: 45,
                        nota: 4.2,
                    },
                    {
                        usuarioId: 68,
                        nota: 4.5,
                    },
                    {
                        usuarioId: 45,
                        nota: 4.3,
                    },
                    {
                        usuarioId: 33,
                        nota: 4.1,
                    },
                    {
                        usuarioId: 43,
                        nota: 4.6,
                    },
                ],
                copiasDisponiveis: 3,
                anoPublicacao: 1995,
            },
            {
                id: 140,
                titulo: "Quas alias",
                autorId: 19,
                paginas: 249,
                generos: [
                    "produtividade",
                    "biografia",
                ],
                avaliacoes: [
                    {
                        usuarioId: 39,
                        nota: 4,
                    },
                    {
                        usuarioId: 45,
                        nota: 3.6,
                    },
                    {
                        usuarioId: 59,
                        nota: 4.2,
                    },
                    {
                        usuarioId: 62,
                        nota: 3.9,
                    },
                    {
                        usuarioId: 66,
                        nota: 4.5,
                    },
                    {
                        usuarioId: 34,
                        nota: 3.7,
                    },
                ],
                copiasDisponiveis: 4,
                anoPublicacao: 1943,
            },
            {
                id: 142,
                titulo: "Sequi molestias cumque",
                autorId: 5,
                paginas: 456,
                generos: [
                    "ficção científica",
                    "produtividade",
                ],
                avaliacoes: [
                    {
                        usuarioId: 35,
                        nota: 4,
                    },
                    {
                        usuarioId: 66,
                        nota: 4,
                    },
                    {
                        usuarioId: 52,
                        nota: 5,
                    },
                    {
                        usuarioId: 46,
                        nota: 4.4,
                    },
                    {
                        usuarioId: 59,
                        nota: 4.7,
                    },
                    {
                        usuarioId: 61,
                        nota: 4.2,
                    },
                ],
                copiasDisponiveis: 2,
                anoPublicacao: 2022,
            },
            {
                id: 146,
                titulo: "Tenetur",
                autorId: 12,
                paginas: 420,
                generos: [
                    "programação",
                    "épico",
                    "história",
                ],
                avaliacoes: [
                    {
                        usuarioId: 60,
                        nota: 4.1,
                    },
                    {
                        usuarioId: 38,
                        nota: 4.2,
                    },
                    {
                        usuarioId: 61,
                        nota: 4,
                    },
                    {
                        usuarioId: 49,
                        nota: 4.5,
                    },
                    {
                        usuarioId: 70,
                        nota: 4.5,
                    },
                ],
                copiasDisponiveis: 2,
                anoPublicacao: 1992,
            },
            {
                id: 147,
                titulo: "Expedita eius sed",
                autorId: 11,
                paginas: 507,
                generos: [
                    "biografia",
                    "história",
                    "autoajuda",
                ],
                avaliacoes: [
                    {
                        usuarioId: 41,
                        nota: 4.9,
                    },
                    {
                        usuarioId: 46,
                        nota: 4.7,
                    },
                    {
                        usuarioId: 40,
                        nota: 4.5,
                    },
                    {
                        usuarioId: 58,
                        nota: 4,
                    },
                ],
                copiasDisponiveis: 2,
                anoPublicacao: 1881,
            },
            {
                id: 149,
                titulo: "Veritatis",
                autorId: 18,
                paginas: 488,
                generos: [
                    "programação",
                    "aventura",
                    "terror",
                ],
                avaliacoes: [
                    {
                        usuarioId: 44,
                        nota: 3.7,
                    },
                    {
                        usuarioId: 66,
                        nota: 4.6,
                    },
                    {
                        usuarioId: 42,
                        nota: 3.9,
                    },
                    {
                        usuarioId: 69,
                        nota: 4.9,
                    },
                    {
                        usuarioId: 41,
                        nota: 4.5,
                    },
                    {
                        usuarioId: 30,
                        nota: 3.7,
                    },
                ],
                copiasDisponiveis: 1,
                anoPublicacao: 1851,
            },
            {
                id: 150,
                titulo: "Rem libero",
                autorId: 13,
                paginas: 387,
                generos: [
                    "história",
                    "biografia",
                    "ficção científica",
                ],
                avaliacoes: [
                    {
                        usuarioId: 37,
                        nota: 4.1,
                    },
                    {
                        usuarioId: 57,
                        nota: 4.2,
                    },
                    {
                        usuarioId: 39,
                        nota: 4.6,
                    },
                    {
                        usuarioId: 45,
                        nota: 4,
                    },
                    {
                        usuarioId: 68,
                        nota: 3.6,
                    },
                    {
                        usuarioId: 32,
                        nota: 4.5,
                    },
                ],
                copiasDisponiveis: 1,
                anoPublicacao: 1956,
            },
        ]

        const resultado = funcoes.exercicio04(livros, leitores, 27);

        expect(resultado).toStrictEqual(esperado);
    });

    it('Com ID 32, deve retornar apenas livros de romance', () => {
        const esperado = [
            {
                id: 103,
                titulo: "O Senhor dos Anéis",
                autorId: 12,
                paginas: 609,
                generos: [
                    "romance",
                    "terror",
                    "história",
                ],
                avaliacoes: [
                    {
                        usuarioId: 38,
                        nota: 4.4,
                    },
                    {
                        usuarioId: 68,
                        nota: 3.6,
                    },
                    {
                        usuarioId: 67,
                        nota: 4.2,
                    },
                ],
                copiasDisponiveis: 4,
                anoPublicacao: 1932,
            },
            {
                id: 105,
                titulo: "1984",
                autorId: 13,
                paginas: 242,
                generos: [
                    "romance",
                    "mistério",
                    "engenharia de software",
                ],
                avaliacoes: [
                    {
                        usuarioId: 30,
                        nota: 4.1,
                    },
                    {
                        usuarioId: 45,
                        nota: 3.6,
                    },
                ],
                copiasDisponiveis: 3,
                anoPublicacao: 1998,
            },
            {
                id: 117,
                titulo: "Orgulho e Preconceito",
                autorId: 24,
                paginas: 630,
                generos: [
                    "romance",
                    "ficção científica",
                ],
                avaliacoes: [
                    {
                        usuarioId: 35,
                        nota: 3.6,
                    },
                    {
                        usuarioId: 57,
                        nota: 4.5,
                    },
                    {
                        usuarioId: 35,
                        nota: 4.6,
                    },
                ],
                copiasDisponiveis: 0,
                anoPublicacao: 1854,
            },
            {
                id: 124,
                titulo: "Nulla cumque quis",
                autorId: 5,
                paginas: 230,
                generos: [
                    "romance",
                    "fantasia",
                ],
                avaliacoes: [
                    {
                        usuarioId: 38,
                        nota: 4.2,
                    },
                    {
                        usuarioId: 58,
                        nota: 4.1,
                    },
                    {
                        usuarioId: 60,
                        nota: 3.9,
                    },
                    {
                        usuarioId: 32,
                        nota: 4.6,
                    },
                ],
                copiasDisponiveis: 4,
                anoPublicacao: 1925,
            },
            {
                id: 128,
                titulo: "Quasi pariatur",
                autorId: 17,
                paginas: 416,
                generos: [
                    "programação",
                    "épico",
                    "romance",
                ],
                avaliacoes: [
                    {
                        usuarioId: 42,
                        nota: 4.9,
                    },
                    {
                        usuarioId: 28,
                        nota: 4.6,
                    },
                    {
                        usuarioId: 58,
                        nota: 4.3,
                    },
                    {
                        usuarioId: 62,
                        nota: 3.7,
                    },
                ],
                copiasDisponiveis: 2,
                anoPublicacao: 1975,
            },
            {
                id: 137,
                titulo: "Sapiente voluptates ex",
                autorId: 10,
                paginas: 313,
                generos: [
                    "romance",
                    "história",
                ],
                avaliacoes: [
                    {
                        usuarioId: 33,
                        nota: 4,
                    },
                    {
                        usuarioId: 56,
                        nota: 3.7,
                    },
                    {
                        usuarioId: 55,
                        nota: 3.9,
                    },
                    {
                        usuarioId: 33,
                        nota: 3.6,
                    },
                    {
                        usuarioId: 51,
                        nota: 4.8,
                    },
                    {
                        usuarioId: 53,
                        nota: 3.9,
                    },
                ],
                copiasDisponiveis: 2,
                anoPublicacao: 1898,
            },
            {
                id: 143,
                titulo: "Molestias fugiat iusto",
                autorId: 15,
                paginas: 635,
                generos: [
                    "terror",
                    "romance",
                ],
                avaliacoes: [
                    {
                        usuarioId: 53,
                        nota: 4.4,
                    },
                    {
                        usuarioId: 67,
                        nota: 3.5,
                    },
                ],
                copiasDisponiveis: 4,
                anoPublicacao: 1908,
            },
        ]

        const resultado = funcoes.exercicio04(livros, leitores, 32);

        expect(resultado).toStrictEqual(esperado);
    });
});

describe('exercicio05', () => {

    // Recebe uma lista de livros e, opcionalmente, um gênero de livro que poderá ser usado como filtro
    // Deve retornar um objeto em que a chave é o gênero e o valor é o título do livro
    // Caso informado um gênero, deve retornar apenas os livros desse gênero

    it('Deve retornar os livros agrupados por gênero', () => {
        const esperado = {
            biografia: [
                "Dom Casmurro",
                "O Pequeno Príncipe",
                "Dicta impedit",
                "Nisi porro natus",
                "Quas alias",
                "Expedita eius sed",
                "Rem libero",
            ],
            fantasia: [
                "Dom Casmurro",
                "A Hora da Estrela",
                "A Metamorfose",
                "O Cortiço",
                "At dolores",
                "Nulla cumque quis",
                "Corrupti ratione",
                "Distinctio",
                "Odit corrupti cupiditate",
            ],
            aventura: [
                "Cem Anos de Solidão",
                "O Iluminado",
                "O Pequeno Príncipe",
                "Quibusdam inventore repellat",
                "Hic perspiciatis rerum",
                "Nisi porro natus",
                "Harum illum fugiat",
                "Veritatis",
            ],
            romance: [
                "O Senhor dos Anéis",
                "1984",
                "Orgulho e Preconceito",
                "Nulla cumque quis",
                "Quasi pariatur",
                "Sapiente voluptates ex",
                "Molestias fugiat iusto",
            ],
            terror: [
                "O Senhor dos Anéis",
                "A Hora da Estrela",
                "Duna",
                "Fundação",
                "Vidas Secas",
                "O Cortiço",
                "At dolores",
                "Molestias fugiat iusto",
                "Dolor beatae",
                "Veritatis",
            ],
            "história": [
                "O Senhor dos Anéis",
                "Duna",
                "O Alquimista",
                "Voluptates labore",
                "Quibusdam inventore repellat",
                "Et",
                "Sapiente voluptates ex",
                "Tenetur",
                "Expedita eius sed",
                "Rem libero",
            ],
            autoajuda: [
                "Crime e Castigo",
                "Hic perspiciatis rerum",
                "Expedita eius sed",
            ],
            "mistério": [
                "1984",
                "Capitães da Areia",
                "Atque repudiandae",
                "Distinctio",
                "Et",
                "Quod unde facilis",
                "Et quod eligendi sequi",
                "Quaerat eveniet",
                "Autem architecto id",
            ],
            "engenharia de software": [
                "1984",
                "A Revolução dos Bichos",
                "A Menina que Roubava Livros",
                "O Cortiço",
                "Atque repudiandae",
                "Voluptates labore",
                "Odit corrupti cupiditate",
                "Aperiam id",
            ],
            "ficção científica": [
                "A Hora da Estrela",
                "A Revolução dos Bichos",
                "Orgulho e Preconceito",
                "O Iluminado",
                "Omnis dicta",
                "Quod unde facilis",
                "Nisi porro natus",
                "Aperiam id",
                "Sequi molestias cumque",
                "Rem libero",
            ],
            produtividade: [
                "Harry Potter",
                "At dolores",
                "Distinctio",
                "Quibusdam inventore repellat",
                "Odit corrupti cupiditate",
                "Quas alias",
                "Sequi molestias cumque",
            ],
            "épico": [
                "A Metamorfose",
                "Quasi pariatur",
                "Tenetur",
                "Provident dolore at",
            ],
            "programação": [
                "A Revolução dos Bichos",
                "Omnis dicta",
                "Quasi pariatur",
                "Et",
                "Harum illum fugiat",
                "Et quod eligendi sequi",
                "Quaerat eveniet",
                "Tenetur",
                "Veritatis",
            ],
            suspense: [
                "Ensaio sobre a Cegueira",
            ],
        }

        const resultado = funcoes.exercicio05(livros);

        expect(resultado).toStrictEqual(esperado);
    });

    it('Deve retornar os livros de suspense agrupados por gênero', () => {
        const esperado = {
            suspense: [
                "Ensaio sobre a Cegueira",
            ],
        }

        const resultado = funcoes.exercicio05(livros, 'suspense');

        expect(resultado).toStrictEqual(esperado);
    });
});