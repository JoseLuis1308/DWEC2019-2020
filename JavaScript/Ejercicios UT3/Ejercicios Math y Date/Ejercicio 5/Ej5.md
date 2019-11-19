---
title: Generar una fecha mediante selects.
author: Jose Luis Lafuente Pericacho
lang: es-ES
---

# Ejercicio 5
## Generar una fecha mediante selects.

Primero hay que crear los 3 selects, se puede hacer mediante bucles siempre y cuando los valores sean aptos para
generar el objeto fecha, es decir, los dias van de 1 a 31, los meses de 0 a 11 y los años en el rango que se prefiera.
entonces lo único que hay que hacer es generar el objeto fecha mediante los valores de select.

```
Fecha= new Date(selectAño.value, selectMes.value, selectDia.value);
```

Para que la seleccion de dias cambie en funcion del mes y el año seleccionado, hay que  poner un addEventListener al select del mes para que cambien los dias en funcion del mes elegido, y otro evento al select del año para los años bisiestos. Se consigue con el evento "change".

```
selMes.addEventListener("change", fDia);
```

