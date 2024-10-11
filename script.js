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
const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el)=> observer.observe(el));
