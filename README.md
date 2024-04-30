# Analizador URL

![GitHub](https://img.shields.io/github/license/JuanBaquero99/Analisis-Url)
![npm](https://img.shields.io/npm/v/analizador-url-unbaq)

Un paquete para Node.js que analiza URLs y extrae información de ellas, como el protocolo, el dominio, la ruta y los parámetros.

## Instalación

Para instalar el paquete, puedes usar npm o yarn:

```bash
npm install analizador-url-unbaq

O

yarn add analizador-url-unbaq
```
## Uso
Para utilizar el analizador de URL, simplemente importa la función analizarURL-unbaq en tu archivo:
```
const analizarURL = require('analizador-url-unbaq');

const url = 'https://www.ejemplo.com/ruta/ejemplo?parametro1=valor1&parametro2=valor2';
const resultado = analizarURL(url);

console.log(resultado);
```
## El resultado será un objeto con la información analizada de la URL:
```
{
  "protocolo": "https",
  "dominio": "www.ejemplo.com",
  "ruta": "/ruta/ejemplo",
  "parametros": {
    "parametro1": "valor1",
    "parametro2": "valor2"
  }
}
```
Contribuyendo
¡Las contribuciones son bienvenidas! Si encuentras algún error o tienes alguna sugerencia de mejora, por favor abre un issue o envía un pull request.

Licencia
Este paquete está licenciado bajo la Licencia MIT.


