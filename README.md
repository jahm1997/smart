Proyecto de smart

Introduction

Se utilizó pg, pg-hstore, pg-promise, sequelize" para el backend
además de sequelice en la sincronizacion y creacion de tablas y operaciones CRUD se usó postgres

del lado del front utilicé el framework nextjs basico para armar desde cero su estructura, apoyarme en React para los componentes de inicio de sesion y login,

1 [GET] /api/user

Si todo está bien al recuperar las publicaciones de la base de datos:
responde con el código de estado HTTP 200.
devuelve el siguiente JSON: allUsers

2 [GET] /api/user/:id

Si se encuentra la publicación con lo especificado :id

devolver el código de estado HTTP 200.
devuelve el siguiente JSON: user, en respuesta al objeto obtenido en la base de datos

Si hay un error al recuperar la publicación de la base de datos:

responde con el código de estado HTTP 400.
devuelve el siguiente JSON: { message: "Usuario no encontrado" }

3 [POST] /api/user

Si al cuerpo de la solicitud le ejecutamos un metodo post

responda con el código de estado HTTP 200
devuelve el siguiente JSON: newUser, en respuesta al nuevo usuario creado en la base de datos

4 [UP] /api/user/

el :id vendrá por body

Si no se encuentra la publicación con lo especificado :id

devolver el código de estado HTTP 200(No encontrado).
devuelve el siguiente JSON: { message: "Usuario actualizado exitosamente" }

4 [!Fallos] /api/user/
Si se encuentras fallos en las ejecutaciónes anteriores se configuró de tal forma que:

devolver el código de estado HTTP 404(No encontrado).
devuelve el siguiente JSON: { message: error.message, object: error }
Este mensaje nos dará un objeto en donde la propiedad message nos dirá exactamente el error y
la propiedad object nos dará todo el objeto relacionado al error del HTTP 404.

Ayudantes de persistencia de bases de datos
el archivo user.js contiene los diferentes metodos utilizados para conocer informacion de la base de datos

findAll(): llama todas los objetos almacenadas en la tabla seleccionada
findByPk(): este método espera un idúnico argumento y devuelve una publicacion correspondiente al objeto encontrado.
update(): acepta los argumentos existentes, en base al :id proporcionado el resuelve el recuento de registros actualizados. y nos avisa que el registro se actualizó correctamente.

Esquema de los parametros introducidos en la base de datos
Un usuario en la base de datos tiene la siguiente estructura:
{
name: STRING,
email: STRING
password: STRING
}

Notas importantes
Tenga en cuenta los valores proporcionados en el archivo database.js para que lo configuré deacuerdo a su entorno de desarrollo y/o computadora
puede probar netamente el trabajo del back manualmente usando Postman o imsonia.
Puede crear archivos adicionales, pero no mueva ni cambie el nombre de archivos o carpetas existentes si no tiene conocimientos solidos del lenguaje y las tecnologias usadas.
No modifique su package.jsonarchivo excepto para instalar bibliotecas adicionales o agregar scripts adicionales. No actualice las bibliotecas existentes .
En su solución, es esencial que siga las mejores prácticas y produzca resultados limpios y profesionales, puede apoyarse de principios solid, DRY y otros.

Ejecución del programa

ejecute npm run dev para levantar el sevidor
revise en su entorno de producción 0.0.0.0:3000 o en su navegador http://localhost:3000 para visualizar el funcionamiento del programa
Si desea ver un poco más el funcionamiento del back desde postman o imsonia puede validar las rutas y ejecutar pruebas en cada una de ellas, recuerde que el back está almacenado en la carpeta api por lo que la ruta del back se valida en http://localhost:3000/api/user, se especifica user como el archivo que tiene incorporado en sí el unico service o manejador.
