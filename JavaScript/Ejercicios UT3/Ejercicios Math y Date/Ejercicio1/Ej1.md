---
title: Calcular los 1 de enero que son domingo desde 2014 a 2015
author: Jose Luis Lafuente Pericacho
lang: es-ES
---

# Ejercicio 1
## Calcular los 1 de enero que sean domingo desde el año 2014 al 2050.

Esto se consigue mediante el método .getDay(), que deuelve un int que va de 0 a 6, donde 0 es domingo y 6 es sábado.

Se crea una variable dentro de un bucle, cuyo año sea la variable que se va incrementando en el búcle, empezará en 2014 y acabará cuando sea mayor o igual a 2050. Si en el búcle se hace un if en el que se compruebe que el .getDay() de la fecha sea igual a 0.
Esto incrementará un contador y concatena una cadena para postrarla mediante un console.log().