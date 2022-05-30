class GETSUM {
    
    int getSum(int a, int b){
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
}
