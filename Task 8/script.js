/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
  this.a = Number;
  this.b = Number;

  this.sum = () => {
    return a + b;
  };
  this.subtraction = () => {
    return a - b;
  };
  this.multiplication = () => {
    return a * b;
  };
  this.division = () => {
    return a / b;
  };
}

const calculateNumbers = new Calculator(10, 2);
console.log(calculateNumbers.sum());
console.log(calculateNumbers.subtraction());
console.log(calculateNumbers.multiplication());
console.log(calculateNumbers.division());
