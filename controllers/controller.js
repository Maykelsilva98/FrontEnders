class CadastroController{
    criaEndereco(){
        const cadastrModel = new CadastroModel()
        const cadastroView = new CadastroView()
        document.querySelector("#cep").addEventListener("input", ()=>{
            const cep = document.querySelector("#cep").value
            const url = `https://viacep.com.br/ws/${cep}/json/`
            const requisicao = new XMLHttpRequest()
            requisicao.open("GET", url)     
            requisicao.onload = () =>{
                if (requisicao.status == 200){
                    let resposta = JSON.parse(requisicao.response)
                    cadastrModel.setEndereco(resposta)
                    cadastroView.renderizaEndereco(cadastrModel.getEnderoco())
                }else{
                    console.log(requisicao)
                }
            }  
            requisicao.send()
        })
    }

    mandaCadastro(){
        document.querySelector("#btn").addEventListener("click", (event)=>{
            event.preventDefault()
            document.querySelector("#cadastro").remove()
            const mensagemConfirmacao = document.createElement("h2")
            mensagemConfirmacao.innerText = "Cadastro realizado com sucesso"
            document.getElementsByTagName("main")[0].appendChild(mensagemConfirmacao)
        })
    }
}


const cadastro = new CadastroController()
cadastro.criaEndereco()
cadastro.mandaCadastro()