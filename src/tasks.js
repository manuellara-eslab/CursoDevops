const storage = require('./src/storage');
const tasks = require('./src/tasks');

// 1. Iniciar almacenamiento
storage.inicializar();

try {
    // 2. Crear tareas
    console.log("--- Creando Tarea 1 ---");
    const t1 = tasks.agregarTarea("Aprender Node.js", "alta");
    console.log("Tarea creada:", t1);

    console.log("\n--- Creando Tarea 2 ---");
    const t2 = tasks.agregarTarea("Configurar Git"); // Prioridad por defecto
    
    // 3. Ver todas las tareas
    console.log("\n--- Lista de Tareas en Memoria ---");
    console.log(storage.obtenerTareas());

} catch (error) {
    console.error("Error:", error.message);
}