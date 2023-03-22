
# e-commerce de bebidas.🍹

Utilizaremos React Router para implementar la navegación entre diferentes URL, implementando rutas dinámicas, anidadas e incluso haciendo uso de la history API. ¡Comencemos!

### Objetivo
En esta actividad trabajaremos en la implementación del routing a nuestra aplicación de React con React Router.

### Instrucciones y requisitos de entrega
-	Primero, clonamos el proyecto e instalamos las dependencias.
- Deberemos envolver con **BrowserRouter** nuestra App y definir las siguientes rutas:
○ /home: donde se deberá mostrar una grilla con todas las bebidas disponibles que devuelve la API.  
○ /contacto: donde se mostrará la información de contacto de la empresa.  
○ /beer/:id: donde se mostrará en detalle la información de una cerveza específica, buscada por su ID.  
- Para la implementación de los Links deberemos crear un componente navbar y renderizarlo únicamente en una ruta padre. Anidar las demás rutas para preservar este componente ante el cambio de URL.
- src > Beer.jsx
○ Agregar un botón de “volver atrás” que implemente el Hook useNavigate() ynos devuelva a la página anterior en la que estábamos posicionados.

### Resolución
![preview](https://github.com/soymilidev/FE-III/blob/main/C16/C16-Mesa/e-commerce_bebidas/src/assets/PunkApi-1.png)

![preview](https://github.com/soymilidev/FE-III/blob/main/C16/C16-Mesa/e-commerce_bebidas/src/assets/PunkApi-2.png)

![preview](https://github.com/soymilidev/FE-III/blob/main/C16/C16-Mesa/e-commerce_bebidas/src/assets/PunkApi-3.png)
