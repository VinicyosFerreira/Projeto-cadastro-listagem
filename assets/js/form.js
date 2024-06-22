/*  
// Outra prevenir um formulário //
function Enviar() {
    document.querySelector('.formulario').addEventListener('submit' , (e) => {
        e.preventDefault();
        console.log('Oi');
    });
}*/


function testaFormulario(e) {
    e.preventDefault();
    console.log(e)

    /*
    if ('0123456789'.indexOf( e.target.elements['phone'].value[index]) == -1){
        alert('Apenas numeros são permitidos no campo telefone');
        return;
    }*/

    // Testando para o campo de telefone
    var phonePattern = /(^[0-9]+)/g;
    
    if (phonePattern.test(e.target.elements['phone'].value)){
            alert('Apenas numeros são permitidos no campo telefone');
            return;
    }

    if (e.target.elements['phone'].value.length < 15){
        alert('Número inválido');
        return;
    }

    // Testando para o campo de nome
    var namePattern = /([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$)/i;

    if (!namePattern.test(e.target.elements['name'].value)){
        alert('Apenas letras são permitidos no campo de nome');
        return;
    }

    if (e.target.elements['name'].value.length > 40){
        alert('Nome inválido');
        return;
    }

    var peopleRaw = localStorage.getItem('people'); // Pegar o item people a local storage 
    if (peopleRaw != null) { 
       var people = JSON.parse(peopleRaw);
    } else {
        var people = [];
    } 

    if(id !== null) {
        people[id] = {
            name : e.target.elements['name'].value ,
            tel : e.target.elements['phone'].value,
            xp : (e.target.elements['xp'].value === "true") 
        }   
    } else {
        people.push({
            name : e.target.elements['name'].value ,
            tel : e.target.elements['phone'].value,
            xp : (e.target.elements['xp'].value === "true")
    })
    }

    localStorage.setItem('people' , JSON.stringify(people));
    document.getElementById('goHome').click();

    console.log(people);
}


let urlPrincipal = new URL(window.location.href);
let id = urlPrincipal.searchParams.get("index");

if (id !== null ) {
    var peopleRaw = localStorage.getItem('people'); // Pegar o item people a local storage 
    if (peopleRaw != null) { 
       var people = JSON.parse(peopleRaw);
    } else {
          var people = [];
    } 

    console.log(people[id]);
    document.querySelector("#name").value = people[id].name ;
    document.querySelector("#phone").value = people[id].tel;

    if (people[id].xp) {
        document.querySelector("#xp-yes").checked = true;
    } else {
        document.querySelector("#xp-no").checked = true;
    }
}

function testaCampoTelefone(e){
    e.preventDefault();
    console.log(e);

    if (e.target.value.length == 0){
        e.target.value += '(';
    }
    
    if (e.target.value.length == 3){
        e.target.value += ')';
    }

    if (e.target.value.length == 10){
        e.target.value += '-';
    }

    if((/[0-9-()]/g).test(e.key) && e.target.value.length < 15){
        e.target.value += e.key; 
    }
}