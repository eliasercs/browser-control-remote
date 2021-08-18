# REST API de productos

> Este es un intento de implementación de REST API para un CRUD básico de productos con base de datos.

### Base de datos utilizada
MySQL [Descarga la base de datos aquí](./docs/ecommerce-app.sql)

### Comandos importantes

* Para instalar los módulos y dependencias utilizados en este proyecto:
~~~
$ npm install
~~~

* Para ejecutar este proyecto:
~~~
$ npm start
~~~

* Para ejecutar este proyecto como desarrollo (nodemon):
~~~
$ npm run dev
~~~

### Rutas de la aplicación

| Ruta              | Método | Descripción                                 |
|-------------------|--------|---------------------------------------------|
| /api/products/    | GET    | Obtiene una lista con todos los productos.  |
| /api/products/:id | GET    | Obtiene un producto en específico.          |
| /api/products/    | POST   | Almacena un nuevo producto.                 |
| /api/products/:id | DELETE | Elimina un producto en específico.          |
| /api/products/:id | PUT    | Actualiza un producto en específico.        |