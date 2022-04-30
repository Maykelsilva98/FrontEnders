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
}


const cadastro = new CadastroController()
cadastro.criaEndereco()