$(document).ready( function(){
    CarregarCategorias();

    $('#ddlCAT').change(function() {
        //console.log( $('#ddlCAT option:selected').val());
        var subid = $('#ddlCAT option:selected').val();
        CarregarSubcategoria(subid);
    });
    $('#ddlSUB').change(function() {
        var protid = $('#ddlSUB option:selected').val();
        CarregarSubcategoria(protid);
    });
});
    
     function CarregarCategorias() {
        var urlServico = 'https://localhost:7246/api/Categoria';
        $.get(urlServico, function (retorno, status) {
            if (retorno.lenght == 0) {
                alert("Erro ao obter os dados.");
            }
            else {
               for (var i = 0; i <retorno.length; i++) {
                    var categoria = retorno[i];
                    var idCategoria = categoria.codigo;
                    var descricao = categoria.descricao;
                    var opcao = '<option value="' + idCategoria + '">'+ descricao +'</option>';
                        $('#ddlCAT').append(opcao);
                
                }
            }
        });
}

function CarregarSubcategoria(idsub) {
        var urlServico = 'https://localhost:7246/api/Subcategoria/Categoria/'+ idsub ;

        $.get(urlServico, function(retorno,status) {
            var keys = Object.keys(retorno);
            if (keys.lenght == 0) {
            alert("Erro ao obter os dados.");
            }
            else{
                for (var i = 0; i <retorno.length; i++){
                    var subcategoria = retorno[i];
                    var idSubcategoria = subcategoria.idSubcategoria;
                    var idCategoria = subcategoria.idCategoria;
                    var descricao = subcategoria.descricaoSubcategoria;
                    var situacao = subcategoria.situacao; 
                    var opcao = '<option value="' + idSubcategoria + '">'+ descricao +'</option>';
                    $('#ddlSUB').append(opcao);

                }
            }
        });
    }
    function CarregarProduto(idprot) {
        var urlServico = 'https://localhost:7246/api/Produto/Subcategoria/'+ idprot ;

        $.get(urlServico, function(retorno,status) {
            var keys = Object.keys(retorno);
            if (keys.lenght == 0) {
            alert("Erro ao obter os dados.");
            }
            else{
                for (var i = 0; i <retorno.length; i++){
                    var produto = retorno[i];
                    var produto = produto.idProduto;
                    var idSubcategoria = subcategoria.idSubcategoria;
                    var idCategoria = subcategoria.idCategoria;
                    var descricao = subcategoria.descricaoSubcategoria;
                    var situacao = subcategoria.situacao;

                    var linhaINI = "<tr>";
                    var colunaPROT =  "<td>"+ produto +"</td>";
                    var colunaIDSUB = "<td>"+ idSubcategoria +"</td>";
                    var colunaIDCAT = "<td>"+ idCategoria +"</td>";
                    var colunaDESCRICAO = "<td>"+ descricao +"</td>";
                    var colunaSITUACAO = "<td>"+ situacao +"</td>"
                    var linhaFIM = "</tr>";

                    var linha = linhaINI + colunaPROT + colunaIDCAT + colunaIDSUB + colunaDESCRICAO + colunaSITUACAO +linhaFIM;

                    $("#tblPROT tbody").append(linha);
                }
            }
        });
    }


