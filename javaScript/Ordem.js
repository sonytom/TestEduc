//Ordem é c,d,a
async function a() {
    b();
    // não é passado valor deixando o await em espera
    await c();
    await d();
    alertUser('a')
}

a();


function b() { // retorno no metodo acima do alert, fazendo o alertUser nao ser usado.
    return;
    alertUser('b')
}

function c() {
    return new Promise((resolve) => {
        resolve(a);
        alertUser('c')
    })
}

function d() {
    return new Promise((resolve) => {
        resolve();
        alertUser('d')
    })
}

function alertUser(mess) {
    console.log('A função é:' + mess)
}