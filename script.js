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
      window.location.href = 'entrar/entrar.html';
    });

 }

 function adicionarFilmes(){
  var div = document.createElement('div');
  div.classList.add('videos-filmes-series');

  var titulos = [
    'Manifest',
    'The Walking Dead',
    'Black Mirror',
    'Vis a Vis',
    'Continência do amor',
    // 'Os suspeitos',
    // 'Meu porto seguro'
  ];
  var imagens = [
    'img/manifest/manifest.jpeg',
    'img/the walking dead/walking-dead-logo.jpg',
    'img/black mirror/black-mirror-logo.jpeg',
    'img/vis a vis/vis-a-vis-logo.jpeg',
    'img/continencia do amor/continencia-do-amor-logo.jpg',
    // 'img/os suspeitos/os-suspeitos-logo.jpeg',
    // 'img/meu porto seguro/meu-porto-seguro.jpeg'
  ];
  var links = [
    'series.filme/manifest/manifest.html',
    'series.filme/the walking dead/walking.html',
    'series.filme/black mirror/mirror.html',
    'series.filme/vis a vis/vis.html',
    'series.filme/continencia do amor/continencia.html'
  ];
    
  for(var i = 0; i < titulos.length; i++){
    var filmeContainer = document.createElement('div');
    filmeContainer.classList.add('video-container');

    const imagem = document.createElement('img');
    imagem.src = imagens[i];
    imagem.alt = titulos[i];
    const link = document.createElement('a');
    link.href = links[i];
    const titulo = document.createElement('legend');
    titulo.textContent = titulos[i];

    link.appendChild(imagem);
    link.appendChild(titulo);
    filmeContainer.appendChild(link);
    div.appendChild(filmeContainer);
  }
  var secaoLancamentos = document.querySelector('.lancamentos-filmes-series');
  secaoLancamentos.appendChild(div);
 }
  document.addEventListener('DOMContentLoaded', function(){
    botaoAssinar();
    botaoEntrar();
    adicionarFilmes();
    pesquisarFilmesSeries();
  });
