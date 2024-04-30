// Función para analizar una URL
function analizarURL(url) {
    const resultado = {};
    
    // Analizar la URL usando una expresión regular
    const urlRegex = /^(https?:\/\/)?([^\/?#]+)(\/[^?#]*)?(\?[^#]*)?(#.*)?/;
    const partes = url.match(urlRegex);
    
    if (partes) {
        resultado.protocolo = partes[1] ? partes[1].replace("://", "") : "http"; // Protocolo (http, https)
        resultado.dominio = partes[2]; // Dominio (www.ejemplo.com)
        resultado.ruta = partes[3] ? partes[3] : "/"; // Ruta (/ruta/ejemplo)
        
        // Parámetros de la URL (nombre=valor)
        resultado.parametros = {};
        if (partes[4]) {
            const parametros = partes[4].substring(1).split("&");
            parametros.forEach(param => {
                const [nombre, valor] = param.split("=");
                resultado.parametros[nombre] = valor;
            });
        }
    }
    
    return resultado;
}

// Exportar la función para que pueda ser utilizada fuera del módulo
module.exports = analizarURL;
