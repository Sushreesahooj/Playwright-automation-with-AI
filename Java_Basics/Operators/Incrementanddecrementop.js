/*let a =10;
let b = ++a;
console.log(b);  //pre-increment operator //here value of a is incremented by 1 first and then assigned to b
/*let c = 10;
let d = c++;
console.log(d); //post-increment operator //here value of c is assigned to d first and then c is incremented by 1
console.log(c); */// thats the reason c is 11 here and d is 10

let a=10;
console.log(++a + a);
console.log(a);


let a=10;
console.log(++a + a++);
console.log(a);

let b=10;
console.log(++b + b + b++);
console.log(b);

let i=1;
let j= i++ + ++i;
console.log(j,i);

let x= 10;
console.log(x++ + ++x + x++ + ++x);
console.log(x);

let y=37;
console.log(--y + y--);
console.log(y);

let z=5;
let k= z-- - --z;
console.log(k,z);

let m=1;
let n=m++>1 ? m++ : ++m;
console.log(n,m);

//NULL coalescing operator
let Amul =null;
let val= Amul ?? "nandini milk";
console.log(val);