

async function buscaEndereco(cep){

    let cep = document.getElementById('cep').valor;
    
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const consultaCEP = await fetch(url);
    const consultaCEPConvertida = await consultaCEP.json(consultaCEP);
   
    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;

}


 

   /* let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Everton";*/


    








