function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("5555555"));
console.log(telephoneCheck("123**&!!asdf#"));
/////////////////////////////////////////////////////////
// ^ denota el comienzo de la cadena.
// (1\s?)? permite "1" o "1" si hay uno.
// \d{n}comprueba exactamente n número de dígitos, por lo que \d{3}comprueba tres dígitos.
// x|ycomprueba x OR y, por lo tanto, (\(\d{3}\)|\d{3})comprueba si hay tres dígitos rodeados de paréntesis o tres dígitos por sí mismos sin paréntesis.
// [\s\-]? busca espacios o guiones entre los grupos de dígitos.
// $denota el final de la cadena. En este caso, el principio ^y el final de la cadena $se usan en la expresión regular para evitar que coincida con una cadena más larga que pueda contener un número de teléfono válido (por ejemplo, "s 555 555 5555 3").
// Por último, usamos regex.test(str)para probar si la cadena se adhiere a la expresión regular, devuelve trueo false.
