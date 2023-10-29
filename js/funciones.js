
var precioentrada = 1000;
var subtotal
student=document.getElementById("estudiante");
student.addEventListener('click',tipo1);

trainer=document.getElementById("traine");
trainer.addEventListener('click',tipo2);

juniors=document.getElementById("junior");
juniors.addEventListener('click',tipo3);

calcular=document.getElementById("calcular");
calcular.addEventListener('click', resumen)


function tipo1()
{ 
        descuento = precioentrada * 0.8;
        subtotal = precioentrada - descuento ;
        document.getElementById("eventListener").innerHTML="VALOR DE TICKET $"+subtotal;
        reload()
        }

function tipo2()
{
        descuento = precioentrada * 0.5;
        subtotal = precioentrada - descuento ;
        document.getElementById("eventListener").innerHTML="VALOR DE TICKET $"+subtotal;
        reload()        
        }
    
function tipo3()
{
        descuento = precioentrada * 0.15;
        subtotal = precioentrada - descuento ;
        document.getElementById("eventListener").innerHTML="VALOR DE TICKET $"+subtotal;
        reload()     
    }

(function clicbotonestudiante() {
        var button = document.getElementById('estudiante');
        var inputstate = document.getElementById('inputState');        
        button.addEventListener('click', function clicbotonestudiante () {
        inputState.value = 1;
    });
    })();

    (function clicbotontraine() {
        var button = document.getElementById('traine');
        var inputState = document.getElementById('inputState');
        
        button.addEventListener('click', function clicbotontraine () {
        inputState.value = 2;
        });
    })();

    (function clicbotonjunior() {
        var button = document.getElementById('junior');
        var inputState = document.getElementById('inputState');
        
        button.addEventListener('click', function clicbotonjunior () {
        inputState.value = 3;
        });
    })();

    function cambiavalorconselect() {
        d = document.getElementById("inputState").value;
        if(d==1)
        {
            descuento = precioentrada * 0.8;
            subtotal = precioentrada - descuento ;
            document.getElementById("eventListener").innerHTML="VALOR DE TICKET $"+subtotal;
        }
        if(d==2)
        {
            descuento = precioentrada * 0.5;
            subtotal = precioentrada - descuento ;
            document.getElementById("eventListener").innerHTML="VALOR DE TICKET $"+subtotal;
        }
        if(d==3)
        {
            descuento = precioentrada * 0.15;
            subtotal = precioentrada - descuento ;
            document.getElementById("eventListener").innerHTML="VALOR DE TICKET $"+subtotal;
        }    

    }

    function resumen()
    { 
        nombre=document.getElementById("inputNombre").value
        apellido=document.getElementById("inputApellido").value
        correo=document.getElementById("inputCorreo").value
        cantidad=document.getElementById("inputCity").value
        categoria=document.getElementById("inputState").value

        
        if (nombre == "") {
            alert("Debes ingresar un nombre");
        } else if (apellido == "") {
            alert("Debes ingresar un apellido");
            } else if (correo == "") {
                alert("Debes ingresar un correo");
                } else if (cantidad == "") {
                    alert("Debes ingresar la cantidad ");
                    } else if (cantidad == 0) {
                        alert("La cantidad debe ser mayor o igual a 1");
                        } else if (categoria == 0) {
                            alert("Debe ingresar una categoría");
                            } else {
                                total=cantidad*subtotal;
                                document.getElementById("totalapagar").innerHTML="Total a pagar: $"+total;
                                document.getElementById("inputNombre").value="";
                                document.getElementById("inputApellido").value="";
                                document.getElementById("inputCorreo").value="";
                                document.getElementById("inputCity").value="";
                                document.getElementById("inputState").value=0;
                            }
        
    }      

    
    

