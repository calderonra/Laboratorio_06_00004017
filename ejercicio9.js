x=6;
function random(x){
    rr=Math.floor(Math.random() * 101); 
    while(rr!=x){
        console.log("Sigue intentando");
    }
    if (x==rr){
        console.log("LO LOGRASTE AMIGO GENIAL!");
    }
}
