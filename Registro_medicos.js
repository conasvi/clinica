const formulariosmedicos=document.getElementById("registro_medicos")
formulariosmedicos.addEventListener('submit',(event)=>{
 event.preventDefault();

 const datosMedicos={

 nombreMedico:document.getElementById("nombre").value,
 apellidoMedico:document.getElementById("apellido").value,
 numeroCedula:document.getElementById("cedula").value,
 especialidad:document.getElementById("especialidad").value,
 consultorioMedico:document.getElementById("consultorio").value,
 correoMedico:document.getElementById("correo").value,


 }

 guardarCookies(datosMedicos);

 const confirmacion=confirm("desea ver los datos")
 if(confirmacion===true){
    window.location.href="medicos.html"
 }else{
    formulariosmedicos.reset ();
 }

})
function guardarCookies(medico){
    let datos =obtenerCookies("medicos");
    if(datos===""){
        datos="[]";
    }const medicosobjeto=JSON.parse(datos)
    medicosobjeto.push(medico);
    const jsonDatos=JSON.stringify(medicosobjeto)
    cambiarCookies("medicos",jsonDatos);
}
    function obtenerCookies(nombre){
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
