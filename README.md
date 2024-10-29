# Obbiettivi
* stampare numeri da 1 a 100
* per multipli di 3 stampare "Fizz"
* per multipli di 5 stampare "Buzz"

# Ragionamento
* far calcolare tutti i numeri da 1 a 100
* far analizzare se i numeri sono divisibili per 3
* far stampare "Fizz" al posto del numero
* far analizzare se i numeri sono divisibili per 5
* far stampare "Buzz" al posto del numero
* far analizzare se i numeri sono divisibili sia per 3 che per 5
* far stampare "FizzBuzz" al posto del numero

# Espressione
`for ()` per numeri da 1 a 100
`if ()` per individuare divisibili per 3
`else if` per individuare divisibili per 5
`else if` per individuare divisibili per 3 e 5
`else` numeri non divisibili nè per 3 nè per 5

```
FOR (numeri da 1 a 100)
    SE numero è divisibile per 3
        stampo "Fizz"
    ALTRIMENTI SE numero è divisibile per 5
        stampo "Buzz"
    ALTRIMENTI SE numero è divisibile per 3 && 5
        stampo "FizzBuzz"
    ALTRIMENTI
        stampo numero
```