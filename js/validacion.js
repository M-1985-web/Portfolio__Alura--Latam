//Asignamos el boton de contacto a una variable
var boton = document.querySelector(".contacto__boton");


//Asignamos las listas a variables para imprimir errores
var errornombre = document.querySelector("#errores-nombre");
var erroremail = document.querySelector("#errores-email");
var errorasunto = document.querySelector("#errores-asunto");
var errormensaje = document.querySelector("#errores-mensaje");

//Variable para informar que los datos han sido enviados correctamente
var mensajeenviado = document.querySelector(".contacto__Info__datos");


//Creamos un evento al presionar el boton de contacto
boton.addEventListener("click",function(){

    var formulario = document.querySelector(".contacto__contenedor");
    var cliente = capturarDatos(formulario);

    //Determinamos si existen errores en el formulario
    errores = validarformulario(cliente);

    //Si se detectan errores, el evento para en este if
    if(errores){

        //Ocultamos el mensaje de los datos enviados en caso de errores
        mensajeenviado.classList.remove("mostrar");
        return;
    }
    
    //Reseteamos los datos
    formulario.reset();

    //Mostramos el mensaje de los datos enviados
    mensajeenviado.classList.add("mostrar");

})

//Funcion para capturar datos del formulario
function capturarDatos(datos){

    var cliente = {
        nombre: datos.nombreapellido.value,
        email: datos.email.value,
        asunto: datos.Asunto.value,
        mensaje: datos.mensaje.value,
    }

    return cliente;

}

//Funcion para validar el formulario
function validarformulario(datos){

    errores = false;

    //Errores del input nombre
    if(datos.nombre.length == 0){
        errores = imprimirerrores(errornombre,"El nombre no puede estar vacio");
    }
    else{

        if(datos.nombre.length > 50){
            errores = imprimirerrores(errornombre,"El nombre debe tener máximo 50 caracteres");    
        }
        else{
            errornombre.innerHTML = "";
        }
    }


    //Errores del input email
    if(datos.email.length == 0){
        errores = imprimirerrores(erroremail,"El email no puede estar vacio");
    }
    else{   
        if(!datos.email.includes("@") || !datos.email.includes(".") ){
            errores = imprimirerrores(erroremail,"Por favor ingrese un email válido");
        }
        else{
            erroremail.innerHTML = "";
        }    
    }

    //Errores del input asunto
    if(datos.asunto.length == 0){
        errores = imprimirerrores(errorasunto,"El asunto no puede estar vacio");
    }
    else{

        if(datos.asunto.length > 50){
            errores = imprimirerrores(errorasunto,"El asunto debe tener máximo 50 caracteres");    
        }
        else{
            errorasunto.innerHTML = "";
        }
    }

    //Errores del input mensaje
    if(datos.mensaje.length == 0){
        errores = imprimirerrores(errormensaje,"El mensaje no puede estar vacio");
    }
    else{

        if(datos.mensaje.length > 300){
            errores = imprimirerrores(errormensaje,"El mensaje debe tener máximo 300 caracteres");    
        }
        else{
            errormensaje.innerHTML = "";
        }
    }


    return errores;
}


//Funcion para imprimir errores
function imprimirerrores(ul,mensaje){
    ul.innerHTML = "";
    var error = document.createElement("li");
    error.textContent = mensaje;
    ul.appendChild(error);
    errores = true;

    return errores;
}
