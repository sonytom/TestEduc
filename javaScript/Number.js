let numero = "5(1)9-876-543-21";

function parsedNumberInFormat(number) {
    number = number.replace(/\D/g, ""); // apenas numeros
    number = number.replace(/^(\d{2})(\d)/g, "($1) $2"); //paretes
    number = number.replace(/(\d)(\d{4})$/, "$1-$2"); //os hifens
    return number;
}

console.log(parsedNumberInFormat(numero))