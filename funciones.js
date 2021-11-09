window.sr = ScrollReveal();
  sr.reveal('#txt', {
       duration:10000,
       origin: 'rigth',
       distance:'100px'
  });


function Subir(){


document.getElementById("calor").src='frio.jpg';

}

function Bajar(){

    document.getElementById("calor").src='calor.jpg';
    
    }
  
    function Cambiarazul(){

 document.getElementById("fondo").style.backgroundColor="blue";
 

    }

    function Cambiablanco(){

        document.getElementById("fondo").style.backgroundColor="white";
        
    }


function agregar(){
    
    var lista = document.getElementById("lista");
    var dato =  document.getElementById("dato").value;
    var li = document.createElement("li");
    li.textContent=dato;
    lista.appendChild(li);
    document.getElementById("dato").value="";
}

function eliminar(){

 var lista = document.getElementById("lista");
 lista.removeChild(lista.lastElementChild);

}
