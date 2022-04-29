class CadastroView{
    renderizaEndereco(endereco){
        document.querySelector("#rua").value = endereco.logradouro
        document.querySelector("#bairro").value = endereco.bairro
        document.querySelector("#cidade").value = endereco.localidade
        document.querySelector("#estado").value = endereco.uf
    }
}
