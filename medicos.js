const tablaMedico=document.getElementById("tabla-medicos");
const elementosTabla=tablaMedico.querySelector("tbody");

const medicosCookies=JSON.parse(obtenerCookies("medicos"))
for(let i=0;i<medicosCookies.length;i++){
    let medicos=medicosCookies[i];
    let fila =elementosTabla.insertRow();
    let nombreMedico=fila.insertCell();
    let apellidoMedico=fila.insertCell();
    let numeroCedula=fila.insertCell();
    let especialidad=fila.insertCell();
    let consultorioMedico=fila.insertCell();
    let correoMedico=fila.insertCell();

    nombreMedico.textContent=medicos.nombreMedico;
    apellidoMedico.textContent=medicos.apellidoMedico;
    numeroCedula.textContent=medicos.numeroCedula;
    especialidad.textContent=medicos.especialidad;
    consultorioMedico.textContent=medicos.consultorioMedico;
    correoMedico.textContent=medicos.correoMedico;

}function obtenerCookies(nombre){
    const cookies=document.cookie.split(";")
    for(let i= 0;i< cookies.length;i++){
        const cookie =cookies[i].split("=");
        if(cookie[0]===nombre){
            return decodeURIComponent(cookie[1]);
        }
return "";    }
}