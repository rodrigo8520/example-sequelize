

//Calcular nuevo salario de un empleado si obtuvo un reajuste del 4,5 sobre si salario anterior
export const reajusteSalario = (salario: number, reajuste: number): number => {

    let nuevoSalario

    reajuste = salario * 0.045
    return nuevoSalario = salario + reajuste;
}

 const hora = (hora: number, tarifa: number): number => {

    let resultadoHora 
    return resultadoHora = hora * tarifa;
}

 const horaExtra = (hora: number, tarifa: number): number => {

    return hora * (tarifa + tarifa/2)
}

 const horaTrabajo = (horas: number, tarifa: number): number => {
    
    let salarios

    if (horas > 40) {
        salarios = horaExtra(horas, tarifa)
        

    } else if (horas <= 40) {
        salarios = hora(horas, tarifa)

    }
    return salarios;
}

export {
    hora,
    horaExtra,
    horaTrabajo
}