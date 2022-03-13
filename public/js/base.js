const nome ="hello world";
console.log(nome);
let nome2="";

let pessoaDefault ={
   nome:"kalline",
   idade:"20",
   trabalho:"programadora",

}

//let pessoas= [];
let nomes = ["kah " ,"julia" , "maria"]
let pessoas=[
    {
        nome:"kalline",
        idade:"20",
        trabalho:"programadora",

    },
    {
        nome:"julia",
        idade:"23",
        trabalho:"cantora",
    }
]


function alterarNome(){
    nome2="maria silva";
    console.log("valor alterado:")
    console.log(nome2);
}

function recebeAlteraNome(novoNome){
    nome2=novoNome;
    console.log("valor alterado:")
    console.log(nome2);

}

function imprimirPessoa(pessoa){
    console.log(pessoa);
    console.log("nome:");
    console.log(pessoa.nome);
}

imprimirPessoa(pessoaDefault);

function adicionarPessoa(pessoa){
    pessoas.push(pessoa);


}

function imprimirPessoas(){
    pessoas.forEach((item)=>{

        console.log("nome");
        console.log(item.nome);
        console.log("idade");
        console.log(item.idade);
        console.log("trabalho");
        console.log(item.trabalho);
        


    })

}

adicionarPessoa({
    nome:"joão",
    idade:"22",
    trabalho:"porteiro",

})

imprimirPessoas();

//console.log(nomes[0])

//imprimirPessoa({
  //  nome:"maria",
    //idade:"28",
    //trabalho:"vendendora",
//});


//recebeAlteraNome("julia");
//recebeAlteraNome("maria");





//alterarNome();