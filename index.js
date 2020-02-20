var name = 'Ramiro',
    lsname = 'Guzmán C.',
    age = 21;

var upName = name.toUpperCase();
var lwLsname = lsname.toLowerCase();
var fullName = `${name} ${lsname}`;
var str = name.substr(1, 3);

console.log('Bienvenido de nuevo, ' + fullName);
console.log('Sé que tienes ' + age + ' años');
console.log('Y que estás aprendiendo a programarme');
console.log('--------------------');
console.log('La última letra de tu nombre es: ' + name.charAt(name.length - 1));


alert('Oye, mira tu consola 🤭');

var precio = 200.3;
var total = precio * 100 * 3 / 100;