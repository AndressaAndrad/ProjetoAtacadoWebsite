$(document).ready( function(){ 
    CarregarCategorias();
});

function CarregarCategorias() {
var urlServico = 'https://localhost:7246/api/Categoria';
$.get(urlServico, function (retorno, status) {
    if (retorno.lenght == 0) {
        alert("Erro ao obter os dados.");
    }
    else {
        //console.log(retorno);
       
        for (var i = 0; i <retorno.length; i++) {
            var categoria = retorno[i];
            var codigo = categoria.codigo;
            var descricao = categoria.descricao;
            var situacao = categoria.situacao;

            var linhaINI = "<tr>";
            var colunaCODIGO = "<td>"+ codigo +"</td>";
            var colunaDESCRICAO = "<td>"+ descricao +"</td>";
            var colunaSITUACAO = "<td>"+ situacao +"</td>";
            var linhaFIM = "</tr>";

            var linha = linhaINI + colunaCODIGO + colunaDESCRICAO+ colunaSITUACAO +linhaFIM;

            $("#tblCategoria tbody").append(linha);
        }
    }
});
}
