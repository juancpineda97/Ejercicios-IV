# Ejercicios Tema 6 - Microservicios

## Ejercicio #1
### Instalar etcd3, averiguar qué bibliotecas funcionan bien con el lenguaje que estemos escribiendo el proyecto (u otro lenguaje), y hacer un pequeño ejemplo de almacenamiento y recuperación de una clave; hacer el almacenamiento desde la línea de órdenes (con etcdctl) y la recuperación desde el mini-programa que hagáis.

Primero, tendré que instalar etcd en mi sistema con el siguiente comando:
~~~
sudo apt install etcd
~~~

Una vez instalado en mi sistema, instalaré el cliente etcd3 en mi repositorio con el siguiente comando:

![screenshot_T6_E1_1](capturas/screenshot_T6_E1_1.png)

Una vez hecho esto, ejecuto la orden `export ETCDCTL_API=3` para que funcione correctamente el cliente de etcd3.

Se probará el funcionamiento de esta utilidad con el siguiente código, inspirado en [esta fuente](https://www.npmjs.com/package/etcd3#quickstart):

![screenshot_T6_E1_3](capturas/screenshot_T6_E1_3.png)

Y, para probar el correcto funcionamiento, se almacenará una clave desde la línea de comandos, y después se ejecutará el código antes mostrado, y, como se puede ver, se recupera tanto la clave almacenada por línea de comandos como la clave que almacena el propio código:

![screenshot_T6_E1_2](capturas/screenshot_T6_E1_2.png)