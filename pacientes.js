const tablaPacientes=document.getElementById("tabla-pacientes");
 const elementosTabla=document.querySelector("tbody");

 
 const pacientesCookie=JSON.parse(obtenerCookie("pacientes"))
 for(let i=0;i<pacientesCookie.length;i++){
    let pacientes=pacientesCookies[i]
    let fila= elementosTabla.insertRow();
    let nombrePaciente =fila.insertCell();
    let apellidoPaciente =fila.insertCell();
    let numeroCedula =fila.insertCell();
    let edadPaciente =fila.insertCell();
    let telefonoPaciente =fila.insertCell();
    let especialidad=fila.insertCell();

    nombrePaciente.textContent=pacientes.nombrePaciente;
    apellidoPaciente.textContent=pacientes.apellidoPaciente;
    numeroCedula.textContent=pacientes.numeroCedula;
    edadPaciente.textContent=pacientes.edadPaciente;
    telefonoPaciente.textContent=pacientes.telefonoPaciente;
    especialidad.textContent=pacientes.especialidad;
 }
 function obtenerCookies(nombre){
    const cookies =document.cookie.split(";");
    for(let i=0;i<cookies.length;i++){
        const cookie =cookies[i].split("=");
        if(cookie[0]===nombre){
            return decodeURIComponent(cookie[1])
        }
    }return "";
    
}