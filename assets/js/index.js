let div= document.getElementById("div")
let intervalo;
let puntos = 0;
let movimientos = 0;
function mover() {
    if (puntos <=10) {
        intervalo = setInterval(()=>{
        movimientos++
        const contenedorWidth = window.innerWidth - div.clientWidth;
        const contenedorHeight = window.innerHeight - div.clientHeight;
        const left=Math.random() * contenedorWidth;
        const top= Math.random() * contenedorHeight;
      setInterval(intervalo);
        div.style.left = `${left}px`
        div.style.top = `${top}px`
     },200)
    }
    
    
}
function punto() {
    if(puntos >= 10){
        clearInterval(intervalo);
        let h1= document.getElementById("puntos");
        h1.textContent=`${puntos} / ${movimientos}`
        div.style.backgroundImage="url('/assets/img/OIP(1).jpeg')";
    }else{
        puntos++
        div.style.backgroundImage="url('/assets/img/OIP(1).jpeg')";
        div.style.transform = "scale(0.98)";
        clearInterval(intervalo);
        setTimeout(()=>{
        div.style.backgroundImage="url('/assets/img/OIP.jpeg')";
        div.style.transform = "scale(1)";
        mover();
        }, 80)
    }
}