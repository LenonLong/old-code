  # Factorialize a Number :
  Return the factorial of the provided interger.

```javascript
function factorialize(num) {
   var total = 1;
   for(var i = 1; i <= num; i++) {
     total *= i;
   }
   return total;
}
factorialize(5);

```