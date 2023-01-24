
/*Tarjeta de Información Personal - 
recibe un texto y actualiza el elemento con ID informacion*/ 
function cambia_texto(texto){
    document.getElementById('informacion').innerHTML = texto;
}
/*Formulario de Sugerencias y Comentarios -
depemdiendo de los datos enviados en el formulario muestra el panel de ok o error */ 
document.getElementById('enviar').addEventListener('click', function(){
    let n1=document.getElementById('nombre').value;
    let n2=document.getElementById('email').value;
    let n3=document.getElementById('mensaje').value;
    if(n1===''||n2===''||n3===''){
        document.getElementById('estado1').style.display='none';
        document.getElementById('estado2').style.display='none';
        document.getElementById('estado3').style.display='block'
    }else{
        document.getElementById('nombre_usuario').innerHTML=n1;
        document.getElementById('estado3').style.display='none'
        document.getElementById('estado1').style.display='none';
        document.getElementById('estado2').style.display='block'
        document.getElementById('nombre').value='';
        document.getElementById('email').value='';
        document.getElementById('mensaje').value='';
    }
});