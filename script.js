function calcularMedia() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);

    let media = (nota1 + nota2) / 2;
    if(media < 7){
        alert("Aluno reprovado com média: " + media);
    }else{
         alert("Aluno aprovado com média: " + media);
    }


}