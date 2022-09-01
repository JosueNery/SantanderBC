const employee = {
    code: 10,
    name: 'John'
}

const employee2: { code: number, name: string } = {
    code: 10,
    name: 'John'
}

interface Employees {
    code: number,
    name: string
}

const object = {} as Employees;
object.code = 10;
object.name = 'John';

const object2: Employees = {
    code: 10,
    name: 'John'
}