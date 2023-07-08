function botaoAssinar() {
    const btnAssinar = document.getElementById("btn-assinar");
  
    btnAssinar.addEventListener('mouseenter', function(){
      btnAssinar.classList.add('btn-assinar-hover');
    });
  
    btnAssinar.addEventListener('mouseleave', function(){
      btnAssinar.classList.remove('btn-assinar-hover');
    });
  
    btnAssinar.addEventListener('click', function(){
        alert("Em manutenção");
    });
  }
  
 function botaoEntrar(){
     const btnEntrar = document.getElementById("btn-entrar");

     btnEntrar.addEventListener('mouseenter', function(){
      btnEntrar.classList.add('btn-entrar-hover');
     });

     btnEntrar.addEventListener('mouseleave', function(){
      btnEntrar.classList.remove('btn-entrar-hover');
     });

     btnEntrar.addEventListener('click',  function(){
      window.location.href = '../../entrar/entrar.html';
    });

 }

  document.addEventListener('DOMContentLoaded', function(){
    botaoAssinar();
    botaoEntrar();
  });
