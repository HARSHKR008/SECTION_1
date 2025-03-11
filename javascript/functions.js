function addnums(a,b) {
    c=a+b;
    console.log(c);
}
 addnums(14,72);

 //console.log(c);
  const getavg= function(m1, m2, m3){
    let avg=(m1+m2+m3)/3;
    return avg;
  }
  const result = getavg(10,20,30)
  console.log(result);

const factorial = (n) => {
  let f=1;
  for(let i=2; i<=n; i++){
    f*=i;
  }
  return f;
}
const fact = factorial(5);

console.log(fact);
