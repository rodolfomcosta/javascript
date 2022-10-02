// for
// break - interrompe a execução do loop
// continue - ignora o resto da execução

for (let i = 0; i < 10; i++){
    console.log(i)
}

for (let j = 10; j >= 0; j--){
    console.log(j)
}

for (let k = 0; k < 5; k++){
    if (k === 3) {
        continue
    }
    console.log(k)
}