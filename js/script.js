//ciclo for
for (let i = 1; i <= 100; i++) {
    //valori disibili per 3 e 5
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");  //salva valore come fizzbuzz
    }
    //valori divisibili per 3
    else if (i % 3 == 0) {
      console.log("Fizz");  //salva valore come fizz
    }
    //valori divisibili per 5
    else if (i % 5 == 0) {
      console.log("Buzz");  //salva valore come buzz
    }
    //salva valore
    else {
      console.log(i);
    }
  }