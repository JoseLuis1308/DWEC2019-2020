---
title: Generar ulos numeros de la bonoloto.
author: Jose Luis Lafuente Pericacho
lang: es-ES
---

# Ejercicio 6
## Generar ulos numeros de la bonoloto.

Para esto hay que utilizar el método .random() del objeto Math.
Se necesita obtener un número entre 1 y 50, pero el método random solo propocina un numero aleatorio float entre 
0 y 1, para poder obtener un numero mayor, hay que multiplicar al metodo por el numero máximo 
que necesitamos mas 1, ya que el máximo lo excluye. Y para el número menor hay que sumarle la cantidad que queremos de número
menor. Por último habrá que utilizar el método round para que se eliminen los decimales, ya que únicamente queremos el entero.
```
**var** numero=Math.round(Math.random()*maximo+minimo);
```
Los numeros reultantes se van introduciendo en un array mediante un bucle, y se va comprobando que no se haya generado un número
duplicado. 
por ultimo se muestran los numeros ganadores de la bonoloto mediante una cadena.