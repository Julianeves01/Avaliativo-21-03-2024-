Organizarnumeros = [12, 3, 2, 1, 10, 7, 5, 15, 14, 6];
let impar = [];
let par = [];

for (let i = 0; i < Organizarnumeros.length; i++) {
    if (Organizarnumeros[i] % 2 == 0) {
        par.push(Organizarnumeros[i]);
    } else {
        impar.push(Organizarnumeros[i]);
    }
}

let imparCrescente = impar.sort((a, b) => a - b);
let parDecrescente = par.sort((a, b) => b - a);

console.log(`Os números par são: ` + parDecrescente.join(", "))

console.log(`Os números par são: ` + imparCrescente.join(", "))
