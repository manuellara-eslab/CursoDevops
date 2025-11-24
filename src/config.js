const obtenerConfiguracion = () => {
    return {
        // Ruta donde guardaremos las tareas (simulada por ahora)
        rutaTareas: './data/tasks.json', 
        // Formato de fecha estándar
        formatoFecha: 'YYYY-MM-DD HH:mm:ss',
        // Flag para activar/desactivar logs
        loggingEnabled: true 
    };
};

module.exports = { obtenerConfiguracion };