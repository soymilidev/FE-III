
# Pedidos
Vamos a utilizar los conceptos del ciclo de vida de un componente para hacer una pequeña aplicación en la que veremos cómo funciona el Hook useState.

### Pasos a seguir
**1.** Supongamos que queremos mostrar la pantalla de una aplicación donde solicitamos un pedido de pizza.  
**2.** Queremos que el pedido se cargue solo 2 segundos después de montar el componente. Para ello, deberemos analizar cómo utilizar el método **setTimeout()** dentro de **useEffect()** utilizando props.  
**3.** Queremos que, cuando se actualice el componente, se imprima en la consola que el componente fue realmente actualizado.  
**4.** Por último, necesitaremos un botón que, al ser presionado, genere una "alerta" informando que el pedido fue cancelado, antes de desmontar el componente.


![Preview](https://github.com/soymilidev/FE-III/blob/main/C13/C13-Mesa/pedidoPizza/src/assets/preview.png)





