var result = 76;
if(result > 100){
    console.log("vai result ki 100 theke besi hoi?");
}
else if (result <=100 && result >= 0){

    if(result >=0 && result <33){
        console.log("f");
    }
    else if (result >32 && result<40){
            console.log("D")
    }
    else if (result >41 && result <59) {
        console.log("c")
    }
    else if (result >61 && result <69) {
        console.log("b")
    }
    else if (result >71 && result <79) {
        console.log("A")
    }
    else if (result >81 && result <100) {
        console.log("A+")
    }
}
else{ 
    console.log('vai result ki 0 theke kom paichen?');
}