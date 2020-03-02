//Ejercicio del horóscopo con prompt y switch


var signo = prompt("¿Cuál es tu signo?");

switch (signo) {
    case 'Acuario':
    case 'acuario':
        console.log("El signo introducido es acuario")
        break;
    case 'Piscis':
    case 'piscis':
        console.log("El signo introducido es piscis")
        break;
    case 'Cancer':
    case 'Cáncer':
    case 'cancer':
    case 'cáncer':
        console.log("El signo introducido es cancer")
        break;
    case 'Libra':
    case 'libra':
        console.log("El signo introducido es libra")
        break;
    case 'Escorpio':
    case 'escorpio':
        console.log("El signo introducido es escorpio")
        break;
    case 'Sagitario':
    case 'sagitario':
        console.log("El signo introducido es sagitario")
        break;
    case 'Capricornio':
    case 'capricornio':
        console.log("El signo introducido es capricornio")
        break;
    case 'Géminis':
    case 'Geminis':
    case 'geminis':
    case 'géminis':
        console.log("El signo introducido es géminis")
        break;

    default:
        console.log("No se ha encontrado el signo introducido o no a introducido ningún signo")
        break;
}