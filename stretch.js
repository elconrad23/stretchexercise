let earnings = 0;
let tax = 0;

export function taxcalculator(earnings){
    if(earnings<12000){
        tax = 0;}
    else if(earnings>12000 && earnings<36000){
        tax = 0.2*earnings;}
    else{
        tax = 0.4*earnings;
    }
    return tax;
}
console.log(`Earnings: ${earnings}, Tax: ${tax}`);
