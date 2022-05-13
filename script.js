// FUNCION CONSTRUCTORA CONSULTORIO
class Consultorio {
    constructor(nombreConsultorio, paciente){
        this.nombreConsultorio = nombreConsultorio;
        this.paciente = paciente || [];
    }

    // GETTERS
    get getnombre(){
        return this.nombreConsultorio
    }
    get getpaciente(){
        return this.paciente
    }
    
    //SETTERS
    set setnombre(nuevo_nombreConsultorio){
        this.nombreConsultorio = nuevo_nombreConsultorio;
    }
    set setpaciente(paciente){
        this.paciente.push(paciente)
    }
}
    // METODO PARA BUSCAR LOS DATOS DE LOS USUARIOS POR NOMBRE
    Consultorio.prototype.buscarPacientesPorNombre = function(nombre){
    return this.paciente.find((item) => item.nombre === nombre);
    }  

    // METODO PARA MOSTRAR TODOS LOS DATOS DE LOS USUARIOS REGISTRADOS
    Consultorio.prototype.mostrarDatos = function(){
    return consultorio1.getpaciente
    } 


// FUNCION CONSTRUCTORA PACIENTE
class Paciente {
    constructor(nombre, edad, rut, diagnostico){
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
    }

    // GETTERS
    get getnombre(){
        return this.nombre
    }
    get getedad(){
        return this.edad
    }
    get getrut(){
        return this.rut
    }
    get getdiagnostico(){
        return this._diagnostico
    }

    // SETTERS
    set setnombre(nuevo_nombre){
        this.nombre = nuevo_nombre;
    }
    set setedad(nuevo_edad){
        this.edad = nuevo_edad;
    }
    set setrut(nuevo_rut){
        this.rut = nuevo_rut;
    }
    set setdiagnostico(nuevo_diagnostico){
        this.diagnostico = nuevo_diagnostico;
    }
}

    // NUEVA INSTANCIA DE CONSULTORIO
    const consultorio1 = new Consultorio("Consultorio1")    

    // NUEVAS INSTANCIAS DE PACIENTES
    const paciente1 = new Paciente("Juan", 25, "19.475.844-8", "Fractura")
    const paciente2 = new Paciente("Pedro", 32, "14.956.765-3", "Corte")
    const paciente3 = new Paciente("Diego", 15, "20.568.482-6", "Quemadura")
    const paciente4 = new Paciente("Paula", 21, "19.589.635-1", "Apendicitis")
    const paciente5 = new Paciente("Daniela", 83, "4.326.516-6", "Contusion")

    // ALMACENAMIENTO DE PACIENTES EN EL RESPECTIVO CONSULTORIO
    consultorio1.setpaciente = paciente1
    consultorio1.setpaciente = paciente2
    consultorio1.setpaciente = paciente3
    consultorio1.setpaciente = paciente4
    consultorio1.setpaciente = paciente5

    // MOSTRAR TODOS LOS DATOS DE TODOS LOS USUARIOS EN CONSOLA
    console.log(consultorio1.mostrarDatos())
    
    // MOSTRAR LOS DATOS DEL USUARIO FILTRADO POR NOMBRE
    console.log(consultorio1.buscarPacientesPorNombre("Diego"))
