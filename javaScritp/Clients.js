let clientes = [
    {id: 1, nome: "Luis Santos Silveira", idade: 18},
    {id: 2, nome: "Ricardo Lopes Alves", idade: 30},
    {id: 3, nome: "Gustavo Silva Junior", idade: 26}
];

function name(str) {
    var firstName = str.split(" ")[0];
    var lastName = str.split(" ")[2];
    return lastName.concat(" ") + firstName
}

console.log(clientes.map(it => name(it.nome)))