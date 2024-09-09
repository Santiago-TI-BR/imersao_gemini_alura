function pesquisar() {
    // 1. Obtém uma referência ao elemento HTML com o ID "resultados-pesquisa"
    //    e armazena em uma variável chamada "section". Este elemento será
    //    usado para exibir os resultados da pesquisa.
    let section = document.getElementById("resultados-pesquisa");
  
    // 2. Obtém o valor do campo de pesquisa (input) com o ID "campo-pesquisa"
    //    e armazena em uma variável chamada "campoPesquisar". Este valor
    //    será usado como critério de busca.
    let campoPesquisar = document.getElementById("campo-pesquisa").value;

    if(campoPesquisar == ""){
      section.innerHTML = "Nada encontrado. Busca vazia";
      return 
    }

    campoPesquisar = campoPesquisar.toLowerCase();
  
    // 3. Inicializa uma string vazia para armazenar os resultados da pesquisa.
    //    Cada resultado será concatenado a esta string e, posteriormente,
    //    inserido no elemento "section".
    let resultados = "";
    let titulos = "";
    let descricao = "";
    let tags = "";
  
    // 4. Inicia um loop para percorrer cada item (dado) no array "dados".
    //    Este array deve conter os dados a serem pesquisados (e.g., um array de objetos).
    for (let dado of dados) {
      titulo.dado.titulo.toLowerCase();
      descricao = dado.toLowerCase();
      tags.dados.tags.toLowerCase();
      // 5. Concatena uma nova div com a classe "item-resultado" à string "resultados".
      //    Dentro desta div, são adicionados um título (h2) e uma descrição (p).
      //    O conteúdo do título e da descrição é obtido das propriedades "titulo" e
      //    "descricao" do objeto "dado" atual.
      //    O link (<a>) dentro do título permite navegar para algum lugar (o valor
      //    do atributo href deve ser definido de acordo com a sua aplicação).
      if(dado.titulo.includes(campoPesquisar)||(dado.descricao.includes(campoPesquisar)||tags.includes(campoPesquisar))){
      resultados +=
        `<div class="item-resultado">
           <h2>
             <a href="#" target="_blank">${dado.titulo}</a>
           </h2>
           <p class="descricao-meta">${dado.descricao} </p>
           <a href = ${dado.link} target="_blank">Mais informações</a>
         </div>`;
    }
  }
  
  if(!resultados){
    resultados = "<p>Nada encontrado</p>";
  }
    // 6. Substitui o conteúdo HTML do elemento "section" pela string "resultados".
    //    Dessa forma, os resultados da pesquisa são exibidos na página.
    section.innerHTML = resultados;
  }