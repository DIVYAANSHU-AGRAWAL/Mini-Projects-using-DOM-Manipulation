const myb = document.querySelectorAll('.button')
const body = document.querySelectorAll("body")

myb.forEach(function(element){
    console.log(element)
    element.addEventListener('click',(e)=>{
        console.log(e)       
        console.log(e.target)      //event.target returns the entire html element that triggers the event
        if(e.target.id==='grey'){
            document.body.style='background-color:grey';
        }
        if(e.target.id==='white'){
            document.body.style='background-color:white';
        }
        if(e.target.id==='blue'){
            document.body.style='background-color:blue';
        }
        if(e.target.id==='yellow'){
            document.body.style='background-color:yellow';
        }
    })
})
