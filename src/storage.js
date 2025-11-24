// Variable "privada" del módulo para guardar datos en memoria
let tareas = [];

// Prepara el sistema de almacenamiento
const inicializar = () => {
    tareas = []; // Limpia o inicia el array
    console.log('Almacenamiento inicializado correctamente.');
};

const guardarTarea = (tarea) => {
    tareas.push(tarea);
    console.log(`Tarea guardada en memoria: ${tarea.id}`);
};

const obtenerTareas = () => {
    return tareas;
};

module.exports = {
    inicializar,
    guardarTarea,
    obtenerTareas
};