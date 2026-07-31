let age=20;
let result= age>18 ? "yes" : "No";
console.log (result);

let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);
// Template Literal
console.log(`What is the SLA time ? - ${sla}`);