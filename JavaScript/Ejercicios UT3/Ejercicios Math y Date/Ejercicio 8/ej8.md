---
title: Calcular el maximo, el mínimo, la media y la moda de unca cantidad de numeros aleatorios definidos
author: Jose Luis Lafuente Pericacho
lang: es-ES
---

# Ejercicio 8
## Calcular el maximo, el mínimo, la media y la moda de unca cantidad de numeros aleatorios definidos

Primero es generar los números, para ello se le pide al usuario que elija la cantida de números que se quieren generar.

con eso se genera un array con los números aleatorios.

para calcular el numero maximo se utiliza el método max del ojeto Math, y para el mínimo el método min.

Se le puede pasar directamente el array de los números aleatorios, pero es necesario 3 puntos delante para que los considere números sonseutivos separados por comas.

```
Math.max(...arrNumeros);
Math.min(...arrNumeros);
```

Para calcular la media se hace una suma de todos los números del array y se divide entre la cantidad de números total.

Para calcular la moda hay que ver cuantas veces se3 repite un número en un array, pero hay que verlo con todos los números. El número que mas se repita será la moda. Si varios números se repiten el mismo número de veces amos serán la moda.
Si no se repite ningún número puede decirse o que no hay moda o que todos son la moda.

Esto lo realizo mediante el método repeticiones, que cuenta cuantas veces se repite un número.

Despues mira si es el que mas se repite. Si se repite mas ma moda se vuelve él, si se repite la misma cantidad de números que otro, se añade al array junto con el otro.

al final se muestran todos los datos por la consola


