export default function taxcalculator(earnings){
    let tax = 0;
    if(earnings<12000){
        tax = 0;}
    else if(earnings>12000 && earnings<36000){
        tax = 0.2*earnings;}
    else{
        tax = 0.4*earnings;
    }
    return tax;
}

