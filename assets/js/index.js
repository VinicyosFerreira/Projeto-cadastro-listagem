var peopleRaw = localStorage.getItem('people'); // Pegar o item people a local storage 
    if (peopleRaw != null) { 
       var people = JSON.parse(peopleRaw);
    } else {
          var people = [];
    } 
function desenhaTabela() {

      currentLines = [...document.querySelectorAll('table.lista .dynamic-content')];

      currentLines.forEach(element => {
        element.remove();
      });
      
        
    for (let i = 0 ; i < people.length ; i++){
        document.querySelector('table.lista tbody').innerHTML += 
        `<tr class="dynamic-content" style="background-color: ${i % 2 == 0 ? '#fff' : '#ddd'}">
            <td>${people[i].name}</td>
            <td>${people[i].tel}</td>
            <td>${(people[i].xp ?'<strong style="color :green">Sim</strong>' : '<strong style="color :red">Não</strong>')}</td>
            <td>
            <button onclick="deleteUser(${i})">Excluir</button>
            <a class="edit" href="form.html?index=${i}">Editar</a>
            </td>
        </tr>`
    }
} 

function deleteUser(p){
    people.splice(p , 1); 
    desenhaTabela(); 
    localStorage.setItem('people' , JSON.stringify(people));
}
desenhaTabela();

/*
// Objeto dentro de um array;
 var people = [
        {
        name : 'Fernando Henrique Caversan Santos Duro',
        tel :'(14) 99999-9999' ,
        xp : true
        } , 
    
        {
            name : 'Anderson Arcenio Matos',
            tel :'(14) 99999-9999' ,
            xp : true ,
        } ,
    
        {
            name : 'Karina Amaral',
            tel :'(14) 99999-9999' ,
            xp : false
        } , 
    
        {
            name : 'Cauê Sanchez Padula',
            tel :'(14) 99999-9999' ,
            xp : true
        }];
    
*/