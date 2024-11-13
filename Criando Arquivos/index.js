const http = require('http');
const fs = require('fs');


const hostname = "127.0.0.1";
const port = 3000;
/*
//Criar novo arquivo
fs.writeFile('danki.txt','teste danki code',function(err){
    if(err) throw err;
    console.log('o arquivo foi criado com sucesso');
})*/
//Cria novo arquivo ou adiciona no final do arquivo existente
fs.appendFile('danki.txt','\nOutro conteúdo',(err)=>{
    if(err) throw err;
    console.log('Salvo no arquivo!');
});

const server = http.createServer((req,res)=>{

    if(req.url == '/danki'){
        
        fs.appendFile('danki.txt','\nOutro conteúdo',(err)=>{
            if(err) throw err;
            console.log('Salvo no arquivo!');
        });
        

        fs.readFile('index.html',function(err,data){
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            return res.end();
        });
    }else{
        return res.end();
    }
});


server.listen(port,hostname,()=>{
    console.log("Servidor está rodando!");
});

/*//===========================================================================
parte 2: Lendo arquivos
const fs = require('fs');

fs.readFile('danki.txt',(err,data)=>{
    if(err) throw err;
    let str = data.toString();

    //let newStr = str.split('/');

    let newStr = str.substr(0, 9);

    console.log(newStr);
})*/

/*PARTE 03 = DELETANDO E RENOMEANDO ARQUIVO
/*fs.unlink('danki.txt',(err)=>{
    if(err) throw err;
    console.log('Arquivo deletado com sucesso!')
});/
fs.rename('danki.txt','dankicode.txt',(err)=>{
    console.log('Arquivo renomeado com sucesso!');
});*/

/*==============================================================================
Aula Ler Input da linha de comando
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Qual o seu nome?',function(name){
    console.log('O nome do usuario é :'+name);
    rl.question('Qual sua idade?',function(idade){
        console.log('A idade do '+name+' é '+idade);
    })
});

rl.on('close',function(){
    console.log('adeus!');
    process.exit(0);
}); 
================================================================================*/
