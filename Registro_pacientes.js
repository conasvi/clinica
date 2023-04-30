const formularioPaciente=document.getElementById("registro_pacientes")
formularioPaciente.addEventListener('submit',(event)=>{
    event.preventDefault();



const datosPaciente={

nombrePaciente:document.getElementById("nombre").value,
apellidoPaciente:document.getElementById("apellido").value,
numeroCedula:document.getElementById("cedula").value,
especialidad:document.getElementById("especialidad").value,
edadPaciente:document.getElementById("edad").value,
telefonoPaciente:document.getElementById("telefono").value,




}
guardarCookies(datosPaciente)
const confirmacion=confirm("¿desea ver los datos ?")
    if (confirmacion==true) {
        window.location.href="pacientes.html";
    }else{
        formularioPaciente.reset ();
    }
})
function guardarCookies(paciente){
    let datos =obtenerCookie("pacientes");
    if(datos===""){
        datos="[]";
    }const pacienteobjetos=JSON.parse(datos);
    pacienteobjetos.push(paciente);
    const jsonDatos=JSON.stringify(pacienteobjetos);
    cambiarCookies("pacientes", jsonDatos);

}

    function obtenerCookie(nombre){
        const cookies=document.cookie.split(";")
        for(let i=0;i<cookies.length;i++){
            const cookie=cookies[i].split("=");
            if(cookie[0]===nombre){
            return decodeURIComponent(cookie[1])
            }
        }
    return"";
    }
    function cambiarCookies(nombre,valor){
        document.cookie =`${nombre}=${encodeURIComponent(valor)}`
    }


