# Analisis-Url
# Analizador URL

![GitHub](https://img.shields.io/github/license/tunombre/analizador-url)
![npm](https://img.shields.io/npm/v/analizador-url)

Un paquete para Node.js que analiza URLs y extrae información de ellas, como el protocolo, el dominio, la ruta y los parámetros.

## Instalación

Para instalar el paquete, puedes usar npm o yarn:

```bash
npm install analizador-url
o

bash
Copy code
yarn add analizador-url
Uso
Para utilizar el analizador de URL, simplemente importa la función analizarURL en tu archivo:

javascript
Copy code
const analizarURL = require('analizador-url');

const url = 'https://www.ejemplo.com/ruta/ejemplo?parametro1=valor1&parametro2=valor2';
const resultado = analizarURL(url);

console.log(resultado);
El resultado será un objeto con la información analizada de la URL:

json
Copy code
{
  "protocolo": "https",
  "dominio": "www.ejemplo.com",
  "ruta": "/ruta/ejemplo",
  "parametros": {
    "parametro1": "valor1",
    "parametro2": "valor2"
  }
}
Contribuyendo
¡Las contribuciones son bienvenidas! Si encuentras algún error o tienes alguna sugerencia de mejora, por favor abre un issue o envía un pull request.

Licencia
Este paquete está licenciado bajo la Licencia MIT.
