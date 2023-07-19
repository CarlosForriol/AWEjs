let listaTareas = [
    {text:"Preparar prácticas AW", tags:["universidad","awt"]}
    ,{text: "Mirar fechas congreso", done: true, tags:[]}
    ,{text: "Ir al supermercado", tags: ["personal", "básico"]}
    ,{text: "Jugar al fútbol", done: false, tags:["personal", "deportes"]} 
    ,{text: "Hablar con profesor", done: false, tags:["universidad", "tp2"]}
    ];

function getToDoTasks(listaTareas){
    let unfinalished = listaTareas.filter(m => m.done !== true)
    return unfinalished.map(m => m.text)
}
console.log(getToDoTasks(listaTareas));

function findByTag(listaTareas, tag){
    return listaTareas.filter(m => m.tags.includes(tag))
}
console.log(findByTag(listaTareas, "personal"));

function findByTags(listaTareas, tags){
    return listaTareas.filter(m => tags.some(m2=> m.tags.includes(m2)))
}
console.log(findByTags(listaTareas, [ "personal", "practica"]))

function countDone(listaTareas){
    const newArray = listaTareas.filter(m => m.done === true)
    return newArray.length
}
console.log(countDone(listaTareas));

function createTask(texto){
    
}
