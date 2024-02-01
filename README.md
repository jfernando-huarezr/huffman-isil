# Curso: Algoritmos & Estructura de Datos

## ISIL 2023-2

### Examen Final - Decodificación de un mensaje aplicando el algoritmo de Huffman

**Introducción**
El algoritmo de Huffman es un método de compresión de datos sin pérdida que puede usarse para reducir el tamaño de un texto asignando códigos binarios cortos a caracteres frecuentes y códigos más largos a caracteres menos frecuentes. Utiliza un árbol binario para asignar estos códigos y permite una reconstrucción exacta del texto original a partir de los datos codificados. Es eficiente y comúnmente usado para la compresión de datos y archivos.

Para conocimiento general, el algoritmo consta de las siguientes etapas:

- Extracción de la cantidad de veces que se repite cada caracter (frecuencias).

- Usando las frecuencias, se crea un árbol en donde los caracteres son las hojas; de modo que hojas con mayor frecuencia se encuentran más cercanas a la raíz.

- Generación de una secuencia de 1's y 0's, por cada caracter del texto original; que indican el recorrido en el árbol, partiendo desde la raíz, para llegar a la hoja correspondiente a cada caracter (0: ir hacia el nodo hijo izquierdo, 1: ir hacia el nodo hijo derecho).

**Enunciado**
**Se entrega:**
El siguiente diagrama correspondiente al árbol que se usará para la decodificación de un mensaje. Más adelante se explica cómo utilizarlo.

![tree](/img/huffman.png "tree")

- El mensaje a decodificar:

`11110010001111101001010100000010110110001101000101110011111000011001111110001100101001110100101011100101101011100001100111100001110101110111011100011100100001011101111011001101110`

**Se solicita**
**(8 puntos)** 
Utilizando la clase Tree vista en clase, representar el árbol mostrado en el diagrama, asegurándose de replicar correctamente la estructura y los valores de los nodos. Los nodos con asteriscos contienen números distintos para facilitar la creación manual del árbol mediante insersiones. Las hojas son los caracteres del mensaje decodificado.

```// Ejemplo referencial (dependiendo de la implementación de Tree que usen)
let tree = new Tree()
tree.insert("*1")
tree.insert("*1", "*2")
tree.insert("*1", "*3")
// ...etc.
```

**(12 puntos)** 
Encontrar el mensaje codificado usando el siguiente algoritmo, el cual procesará caracter por caracter la secuencia de 0's y 1's:

1. Se parte de la raíz del árbol.

2. Si el caracter leído es 0, se mueve hacia la izquierda; si es 1, se mueve hacia la derecha. Si el valor del nodo contiene un *, significa que aún se puede continuar avanzando; de lo contrario, se llegó al caracter buscado y se regresa a la raíz para buscar el siguiente caracter (repitiendo desde el paso 1 hasta recorrer todos los digitos).



>Ejemplo:

>El código 010110001 corresponde a la palabra **"lo"**; ya que, partiendo de la raíz del árbol:

>01011 es: izquierda, derecha, izquierda, derecha, derecha **➜** se llega a la hoja **"l"**

>0001 es: izquierda, izquierda, izquierda, derecha **➜**se llega a la hoja **"o"**

Para comprobar la solución instalar los modulos con `npm install`. Ejecutar `npm run build` y luego `npm run preview`, para ingresar al localhost. Un video con la solucion explicada se encuentra en este [enlace](https://youtu.be/dBEJi3_YISo)
