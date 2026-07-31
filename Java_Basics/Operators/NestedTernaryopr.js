let temp = 30;
let feel = (temp>=40) ? "Hot": (temp>=30)? "warm": (temp>=20)? "Cool": "Cold";
console.log(`Temperature is ${temp}°C and it feels ${feel}`);
console.log("Temperature is" , temp, " and it feels" , feel);


let statuscode = 400;
let status = (statuscode>=200 )? "success": (statuscode>=400)? "Client Error": 
(statuscode>=500)? "Server Error": "Unknown";
console.log(`Status code is ${statuscode} and it is ${status}`);