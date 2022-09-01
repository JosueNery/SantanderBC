interface Pessoas {
    nome: string,
    idade: number,
    profissao: Profissoes
}

enum Profissoes {
    Atriz,
    Padeiro
}

const pessoa1: Pessoas = {
    nome: "maria",
    idade: 29,
    profissao: Profissoes.Atriz
};

const pessoa2: Pessoas = {
    nome: "roberto",
    idade: 19,
    profissao: Profissoes.Padeiro
};

const pessoa3: Pessoas = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz
};

const pessoa4: Pessoas = {
    nome: "carlos",
    idade: 19,
    profissao: Profissoes.Padeiro
};
