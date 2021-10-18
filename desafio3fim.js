window.onload = function( ){
    const filling = document.querySelector("#filling");
    const txt = document.querySelector(".txt");
    const dadosCep = async function(cepUrl){
        var url =`https://viacep.com.br/ws/${cepUrl}/json/`;
        var consultaCep = await fetch(url); 
        var dadosCep = await consultaCep.json();
            for(var campos in dadosCep){
                console.log(dadosCep);
                if(document.querySelector("#"+campos)){
                   document.querySelector("#"+campos).value= dadosCep[campos]
                }
            }
    }
    filling.addEventListener("click", () => {
        let cep = txt.value;         
        dadosCep(cep);
    })
}    
