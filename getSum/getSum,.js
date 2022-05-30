/*Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them and return it. 
If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)*/

function getSum(a, b) {
  let sum = 0;

  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  } else if (a == b) {
    sum = a;
  } else {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  }
  return sum;
}

console.log(getSum(-1, 2));

//Some Of The Best Solutions

//Sol -1 using max and min
const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

//Sol -2 basic if else
function GetSum(a, b) {
  if (a == b) return a;
  else if (a < b) return a + GetSum(a + 1, b);
  else return a + GetSum(a - 1, b);
}

//Sol -3 using arithmatic option
function GetSum(a, b) {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}

//Sol -4 using if-while
function GetSum(a, b) {
  tmp = 0;

  if (a < b) while (a <= b) tmp += a++;
  else while (a >= b) tmp += a--;

  return tmp;
}
