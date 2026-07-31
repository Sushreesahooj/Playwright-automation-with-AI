let day=2;
//1 - mon, 2 - Tus
switch (day){
    case 1: 
    console.log('Monday');
    break;
    case 2:
    console.log('Tus');
    let a=10;
    let b=20;
    console.log(a+b);
    break;
    case 3:
    console.log('Wed');
    break; 
    default:
    console.log("Invalid day");

}

let score=85;
switch (true){
    case score>=90:
        console.log('a');
        break;
    case score>=80:
        console.log('b');
        break;  
        case score>=70:
        console.log('c');
        break;
        default:
        console.log('d');
}