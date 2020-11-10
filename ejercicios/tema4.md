# Ejercicios Tema 4 - Desarrollo basado en pruebas

## Ejercicio #2
### Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga (vamos, lo que viene siendo TDD).

En la aplicación que estoy realizando, [LaLigaStats](https://github.com/juancpineda97/LaLigaStats), he creado la siguiente biblioteca de aserciones:

![screenshot_T4_E2_1.png](capturas/screenshot_T4_E2_1.png)

Para probar que funcionan correctamente, se ha creado, por ejemplo, el siguiente test que usa varias de las funciones de la biblioteca:

![screenshot_T4_E2_2.png](capturas/screenshot_T4_E2_2.png)

Y, como se puede ver en la siguiente captura, la biblioteca de aserciones funciona correctamente:

![screenshot_T4_E2_3.png](capturas/screenshot_T4_E2_3.png)

Ahora, voy a añadir nuevos tests para una nueva funcionalidad de mi aplicación, la de mostrar al usuario los jugadores de un equipo:

![screenshot_T4_E2_4.png](capturas/screenshot_T4_E2_4.png)

Se crea el siguiente método para cumplir esta funcionalidad:

![screenshot_T4_E2_5.png](capturas/screenshot_T4_E2_5.png)

Y se ejecutan los tests con el siguiente resultado:

![screenshot_T4_E2_6.png](capturas/screenshot_T4_E2_6.png)

Como se puede ver, hay un tests que ha resultado fallido, el de mostrar jugadores de un equipo vacío, y como se puede ver, la salida no es la adecuada para un equipo sin jugadores, por lo que voy a cambiar el método creado de la siguiente forma para corregir el error:

![screenshot_T4_E2_7.png](capturas/screenshot_T4_E2_7.png)

Y, como se puede observar, ahora la aplicación pasa todos los tests correctamente:

![screenshot_T4_E2_8.png](capturas/screenshot_T4_E2_8.png)