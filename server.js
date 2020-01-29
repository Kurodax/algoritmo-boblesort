//algoritmo ordenação - boblesort

const arraynumber = [8, 6, 3, 5, 4, 2, 7];

for (let i = 0; i < arraynumber.length; i+=1) {
  for (let j = 0; j < arraynumber.length; j+=1) {
    let aux = 0;
    if (arraynumber[i] < arraynumber[j]) {
      aux = arraynumber[i];
      arraynumber[i] = arraynumber[j];
      arraynumber[j] = aux;
    }
  }
}
console.log (arraynumber)
