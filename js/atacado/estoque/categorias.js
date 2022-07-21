$(document).ready( function(){ 
    CarregarCategorias();

    $('#btnINCLUSAO').click(function (){
        localStorage.setItem('opercat','1');
        window.location = 'admincategorias.html'
    });
    
});


function CarregarCategorias(){
    var urlServico = 'https://localhost:7246/api/Categoria';
    $.get(urlServico, function (retorno, status) {
        if (retorno.lenght == 0) {
            alert("Erro ao obter os dados.");
        }
        else {
            //console.log(retorno);
        
            for (var i = 0; i <retorno.length; i++) {
                var categoria = retorno[i];

                var linha = '';
                linha += "<tr>";
                linha += "<td>"+ categoria.codigo +"</td>";
                linha += "<td>"+ categoria.descricao +"</td>";
                linha += "<td>"+ categoria.situacao +"</td>";
                linha += '<td><button id="btnALTERAR" onclick="AcionarAlteracao(' + categoria.codigo + ');">Alterar</button></td>';
                linha += '<td><button id="btnEXCLUIR" onclick="AcionarExclusao(' + categoria.codigo + ');">Excluir</button></td>';
                linha += "</tr>";

                $("#tblCategoria tbody").append(linha);
            }
        }
    });
}

function AcionarAlteracao(id){
    localStorage.setItem('opercat','2');
    localStorage.setItem('opercatid',id);
        window.location = 'admincategorias.html'
}

function AcionarExclusao(id){
    localStorage.setItem('opercat','3');
    localStorage.setItem('opercatid',id);
        window.location = 'admincategorias.html'
}

