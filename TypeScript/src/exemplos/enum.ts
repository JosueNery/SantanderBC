const sarah = {
    name: 'Sarah',
    idade: 26,
    casado: true,
    trabalho: 'Engenheira'
}

const maria = {
    name: 'Maria',
    idade: 23,
    casado: false,
    trabalho: 'engenheira'
}

enum Profissao {
    Professor,
    Engenheiro,
    Pintor,
    Porteiro,
    Desenvolvedora
}

interface Pessoa {
    name: string,
    idade: number,
    casado: boolean,
    trabalho?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[];
}

const gabriel: Pessoa = {
    name: 'Gabriel',
    idade: 26,
    casado: false,
    trabalho: Profissao.Engenheiro
}

const mario: Pessoa = {
    name: 'Mario',
    idade: 26,
    casado: false,
}

const jessica: Estudante = {
    name: 'Jessica',
    idade: 28,
    casado: false,
    trabalho: Profissao.Desenvolvedora,
    materias: ['Matematica discreta', 'Programacao']
}