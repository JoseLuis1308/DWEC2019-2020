---
title: Dar fromato a una fecha
author: Jose Luis Lafuente Pericacho
lang: es-ES
---

# Ejercicio 3
## Dar fromato a una fecha

Para dar dormato a una fecha, lo primero que necesitamos es saber que formato final queremos que tenga.
En función de esto, se empezará a crear el formato. Si queremos que aparezcan los dias y los meses en nuestro idioma,
se puede crear un array con todos los dias y meses y seleccionar el que sea con los métodos del objeto Date.

```
fecha.getDay(): Para obtener el número de dia de la semana.
fecha.getMonth(): Para obtener el número del mes.
```

Si queremos obtener el dia numérico o el año completo se utilizan estos métodos:

```
fecha.getDate() para el día.
fecha.getFullYear() para el año.
```

Para la hora, los minutos y los segundos se utilizan los métodos:

```
fecha.getHours() para la hora.
fecha.getMinutes() para los minutos.
fecha.getSeconds() para los segundos.
```

En caso de que queramos la hora en formato AM/PM, simplemente hay que comprobar si la hora supera las 12 de la tarde,
y si es así, a la hora que nos dé restarle 12 y concatenarle PM detrás, en caso contrario se concaternaría AM.