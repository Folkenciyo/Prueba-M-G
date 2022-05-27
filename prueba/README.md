
# MicroStock Growth - Prueba

  Esto es una prueba técnica de MicroStock Growth en la que se requieren los siguientes procesos:

Prueba


1º Crear un Login simple. User, password y un botón de login.

2º Con el login de antes al pulsar el botón te redirige a otra página donde se verá un contenedor en el cual podremos arrastrar y soltar archivos dentro ( drag and drop).

3º Una vez arrastrado los archivos tendrá que salir un elemento que indique como va el proceso de carga( barra de carga, icono de cargando, etc.)

4º Al acabar se mostrará una lista previa con el nombre de los archivos y el peso que ocupan.

5º Diseño Responsive.



— Extra 

Para esta parte puedes hacerlo aparte de la anterior. O Implementar otro botón en el login que sea envioApi

Crear api que reciba un nombre de usuario y password (mediante POST). La password debe enviarse encriptada. Una vez recibida en la api, tenemos que comprobar si el nombre es “Growth”, incluyendo la G mayúscula. Si es ese nombre, devolverá el mensaje “Ok” + el password encriptado. Si no es igual, devolverá “NO”.

Dentro de la misma api, luego de hacer lo anterior, llamar a una función que reciba el usuario y el password encriptado. Tiene que comprobar si ese password encriptado es igual que la contraseña no encriptada. Puedes desencriptar el password o compararlo mediante alguna librería.

Valorable:

Usar React js para hacer la prueba

Usar Express js para la Api

Visual agradable,  UX, posicionamiento.

Uso CSS/SASS frente a librerías.




## Instrucciones de uso
**Paso 1**
Clonar el repositorio
```bash
  git clone https://github.com/Folkenciyo/MicroStock-Growth
```
**Paso 2**
```bash
  cd MicroStock-Growth
```
**Paso 3**
```bash
  cd prueba
```
**Paso 4**
```bash
  npm install
```
**Paso 5**
```bash
  npm run start
```
**Paso 6**
Abrir una terminal nueva y escribir los siguientes comandos:
```bash
  cd MicroStock-Growth
```
**Paso 7**
```bash
  node prueba/src/API/prueba.js
```


Una vez se haya abierto el navegador en el puerto3000 se abrirá la aplicación en su pantalla de inicio.

A modo extra se ha llevado acabo la creación de una API en donde a través de Postman se puede comprobar las siguientes llamadas:
Para el end point "local3000/user": 
Podremos tanto crear como obtener los usuarios registrados y sus contraseñas.
Para 

## Requerimientos
Node.js
## 📚 Github
[Este es mi Github](https://github.com/Folkenciyo)

