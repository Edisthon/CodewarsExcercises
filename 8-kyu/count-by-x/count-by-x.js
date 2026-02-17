function countBy(x, n) {
  let z = [];
  let i = 1 
  while (i <= n){
    z.push( i * x);
    i +=1
  }
  return z;
}