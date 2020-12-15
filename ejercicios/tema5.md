# Ejercicios Tema 5 - Serverless

## Ejercicio #1
### Darse de alta en Vercel y Firebase, y descargarse los SDKs para poder trabajar con ellos localmente.

En Vercel, me he dado de alta en su página web (vercel.com), usando mi cuenta de github, con lo que además en unos sencillos pasos he podido añadir a vercel mi repositorio del proyecto de la asignatura, como se ve en la siguiente imagen:

![screenshot_T5_E1_1](capturas/screenshot_T5_E1_1.png)

Además, me he descargado e instalado el el sdk de éste con el comando:
~~~
npm install -g vercel
~~~

Y, como se puede ver en la siguiente imagen, lo he configurado para poder usarlo en local:

![screenshot_T5_E1_2](capturas/screenshot_T5_E1_2.png)

En **Firebase** no haría falta darse de alta, ya que es posible usarlo con mi propia cuenta de Google.


## Ejercicio #2
### Tomar alguna de las funciones de prueba de Vercel, y hacer despliegues de prueba con el mismo.

Para realizar este ejercicio he utilizado la siguiente función de prueba de Vercel:

![screenshot_T5_E2_1](capturas/screenshot_T5_E2_1.png)

La cuál guardaré en el archivo *api/hello.js* de mi proyecto, por lo que al hacer el despliegue en Vercel, accediendo a la URL https://la-liga-stats.vercel.app/api/hello.js se puede ver cómo se ejecuta la función:

![screenshot_T5_E2_2](capturas/screenshot_T5_E2_2.png)