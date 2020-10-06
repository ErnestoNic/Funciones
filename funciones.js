// aca se definen las funciones que se aplicaran al Index.html

const sumar = (a = 0, b = 0) => {
    const resultado = parseInt(a) + parseInt(b);
    console.log(`resultado= ${resultado}`);
    return resultado;
};

const restar = (a = 0, b = 0) => {
    const resultado = parseInt(a) - parseInt(b);
    console.log(`resultado= ${resultado}`);
    return resultado;
};

const empleados = [{
    nombre: "Juan",
    apellido: "Perez",
    edad: 45,
    email: "er@er.com",
    DNI: 123456,
    puesto: "Gerente"
}, {
    nombre: "Maria",
    apellido: "Soto",
    edad: 41,
    email: "er@er.com",
    DNI: 456123,
    puesto: "empleado"
}, {
    nombre: "Pedro",
    apellido: "Luquez",
    edad: 25,
    email: "er@er.com",
    DNI: 78456,
    puesto: "empleado"
}, {
    nombre: "Esteban",
    apellido: "Quito",
    edad: 44,
    email: "er@er.com",
    DNI: 78456,
    puesto: "empleado"
}, {
    nombre: "Lucas",
    apellido: "Aro",
    edad: 60,
    email: "er@er.com",
    DNI: 888796,
    puesto: "Gerente"
}, ];

const Mayores40 = (empleados, edad, puesto = "empleado") => {
    return empleados.filter((empleado) => empleado.edad > edad && empleado.puesto.toLowerCase() === puesto);
};


function filtrarCargos(empleados, puesto = "gerente") {
    return empleados.filter((empleado) => empleado.puesto.toLowerCase() === puesto);


}