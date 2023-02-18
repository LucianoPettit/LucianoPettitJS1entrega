//  impuestos arg (iva+impuestos a todo xD)
const tasaImpuestos = 0.76;

// precio del juego (tal cual sale en steam)
let precioBase = Number(
  prompt("Ingresa el precio base del juego en Steam (sin impuestos):")
);

// verifica si el valor que puso es valido o mayor que 0
while (isNaN(precioBase) || precioBase <= 0) {
  precioBase = Number(
    prompt("El precio base debe ser mayor que cero. Ingresa un precio válido:")
  );
}

// Calcula el impuesto es decir mutiplica el valor del juego por la tasa de impuestos
const impuesto = precioBase * tasaImpuestos;

// Calcula el precio total con impuestos es decir que suma el precio del juego mas el resultado de lo impuestos
const precioTotal = precioBase + impuesto;

// Imprime el resultado del valor del juego mas impuestos
alert(`El precio total del juego con impuestos es: ${precioTotal}`);

// Verifica si el precio total es mayor que $7000
if (precioTotal > 7000) {
  alert(
    "El precio total supera los $7000. Estas seguro que deseas gastar mas de $7000 en un juego crack ?."
  );
} else {
  alert(
    "El precio total no supera los $7000. Puedes realizar la compra sin problemas!."
  );
}
