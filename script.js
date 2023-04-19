var menu = window.document.getElementById('dropdown_menu')
var lista = window.document.getElementById('dropdown_lista')

menu.addEventListener('click', mostraMenu)

function mostraMenu(){
    
    if(lista.style.display == 'block'){
        lista.style.display = 'none'
    }else{
        lista.style.display = 'block'
    }
}

var menuAccordion = document.getElementById('downlistaaccordion')
var listaAccordion = document.getElementById('submenuAccordion')

menuAccordion.addEventListener('click', mostraMenuAccordion)

function mostraMenuAccordion(){
    console.log('teste')
}
