var itens = [];

document.querySelector("input[type=submit]").addEventListener("click", () => {
  var nmProduto = document.querySelector("input[name=nomeProduto]");
  var vlProduto = document.querySelector("input[name=price]");

  itens.push({
    nome: nmProduto.value,
    valor: vlProduto.value,
  });

  let listaProduto = document.querySelector(".produtos");

  let soma = 0;

  listaProduto.innerHTML = "";
  itens.map(function (val) {
    soma += parseFloat(val.valor);

    listaProduto.innerHTML +=
      `
    <div class="produtos">
      <div class="grupoproduto">
        <div class="nomeProduto">` +
      val.nome +
      `</div>
        <div class="precoProduto">R$` +
      val.valor +
      `</div>
      </div>  
    </div>
    
    
    `;
  });

  //
  soma = soma.toFixed(2);

  //
  nmProduto.value = "";
  vlProduto.value = "";

  //O bloco de código abaixo acessa o documento e seleciona a div total h2
  // ao acessar o h2 vamos acessar o HTML com o innerHTML e deixalo automatizado atualizando os valores
  // com a funcionalidade do soma que fizemos
  let totalValor = document.querySelector(".total h2");
  totalValor.innerHTML = `Total R$` + soma;
});


//limpar tela

document.querySelector('button[name=bot]')
.addEventListener("click", () =>{
  itens = [];
  document.querySelector(".produtos").innerHTML = "";
  document.querySelector(".total h2").innerHTML = "R$0,00";

})
