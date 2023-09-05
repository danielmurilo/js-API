//import fetch from "node-fetch";

function getAddressByCEP(cep){

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(data => {
            if(!data.ok) {
                throw Error(data.status)
            }
            return data.json()
        }).then(json => {
            document.getElementById("result").innerHTML = json.logradouro + ' - ' + json.bairro + ' - ' + json.localidade + ' - ' + json.uf;
           //console.log(json)
        })

}

