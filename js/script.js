// DICHIARAZIONE
// stampo numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    // individuo divisibili per 3 e 5 
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`FizzBuzz`)
    
    // individuo divisibili per 3 
    } else if (i % 3 === 0) {
        console.log(`Fizz`);

    // individuo divisibili per 5
    } else if (i % 5 === 0) {
        console.log(`Buzz`);

    // restanti numeri
    } else {
        console.log(i)
    }
}