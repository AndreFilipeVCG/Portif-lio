
function funcao1(){
    document.getElementById("options3").classList.add("hidden");
    document.getElementById("options2").classList.add("hidden");
    document.getElementById("options1").classList.remove("hidden");
    document.getElementById("b1").classList.add("gradiente");
    document.getElementById("b2").classList.remove("gradiente");
    document.getElementById("b3").classList.remove("gradiente");
}

function funcao2(){
    document.getElementById("options1").classList.add("hidden");
    document.getElementById("options3").classList.add("hidden");
    document.getElementById("options2").classList.remove("hidden");
    document.getElementById("b1").classList.remove("gradiente");
    document.getElementById("b2").classList.add("gradiente");
    document.getElementById("b3").classList.remove("gradiente");
}

function funcao3(){
    document.getElementById("options2").classList.add("hidden");
    document.getElementById("options1").classList.add("hidden");
    document.getElementById("options3").classList.remove("hidden");
    document.getElementById("b1").classList.remove("gradiente");
    document.getElementById("b2").classList.remove("gradiente");
    document.getElementById("b3").classList.add("gradiente");
}

document.getElementById("b1").addEventListener("click",funcao1);
document.getElementById("b2").addEventListener("click",funcao2);
document.getElementById("b3").addEventListener("click",funcao3);


const observer =new IntersectionObserver((partes) =>{
    partes.forEach((parte) => {
         
         if(parte.isIntersecting){
            parte.target.classList.add('show');
         }
         else{
            parte.target.classList.remove('show');
            
         }

        
    });
});
   const hidden = document.querySelectorAll('.h');
hidden.forEach((el)=> observer.observe(el));

