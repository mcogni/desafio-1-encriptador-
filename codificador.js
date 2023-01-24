//Archivo javascript
//Soporte para index1.htlm codificador de texto

function encriptar(){  //funcion para encriptar 
    
    texto=document.getElementById("ingreso_texto").value;  //ingreso del texto
    
    var filtro=true; // =true (letras minúsculas sin acentos ni caracteres especiales)
    caracteres_especiales=texto.match(/\W/g);
    ce1=Boolean(caracteres_especiales===null);//true si los caracteres son solamente alfanuméricos. Verifica acentos y caracteres especiales.
    texto_minuscula=texto.toLowerCase(texto);
    tm1=Boolean(texto===texto_minuscula);//true si el texto no contiene mayusculas
    numeros=texto.match(/[0-9]/g);
    nm1=Boolean(numeros===null);//true si el texto no contiene numeros
        if(ce1===true&&tm1===true&&nm1===true){
            filtro=true;}
        else{filtro=false;}

        if (texto!=""&&filtro===true){
            texto_codificado=texto.replaceAll("e","enter");texto=texto_codificado
            texto_codificado=texto.replaceAll("i","imes");texto=texto_codificado
            texto_codificado=texto.replaceAll("a","ai");texto=texto_codificado
            texto_codificado=texto.replaceAll("o","ober");texto=texto_codificado
            texto_codificado=texto.replaceAll("u","ufat");
            document.getElementById("ingreso_texto").value="";
            document.getElementById("ingreso_texto").focus();     
            document.getElementById("imagen1").style.display="none";
            document.getElementById("egreso_texto").style.display="block";
            document.getElementById("egreso_texto").value=texto_codificado;
        }
        else {
            document.getElementById("ingreso_texto").focus();
            document.getElementById("egreso_texto").style.display="none";
            document.getElementById("imagen1").style.display="block";
        }
    copia=texto_codificado;        
}

function desencriptar(){  //funcion para desencriptar 
    
    texto=document.getElementById("ingreso_texto").value;  //ingreso del texto
    
    var filtro=true; // =true (letras minúsculas sin acentos ni caracteres especiales)
    caracteres_especiales=texto.match(/\W/g);
    ce1=Boolean(caracteres_especiales===null);//true si los caracteres son solamente alfanuméricos. Verifica acentos y caracteres especiales.
    texto_minuscula=texto.toLowerCase(texto);
    tm1=Boolean(texto===texto_minuscula);//true si el texto no contiene mayusculas
    numeros=texto.match(/[0-9]/g);
    nm1=Boolean(numeros===null);//true si el texto no contiene numeros
        if(ce1===true&&tm1===true&&nm1===true){
            filtro=true;}
        else{filtro=false;}

        if (texto!=""&&filtro===true){
            texto_decodificado=texto.replaceAll("enter","e");texto=texto_decodificado
            texto_decodificado=texto.replaceAll("imes","i");texto=texto_decodificado
            texto_decodificado=texto.replaceAll("ai","a");texto=texto_decodificado
            texto_decodificado=texto.replaceAll("ober","o");texto=texto_decodificado
            texto_decodificado=texto.replaceAll("ufat","u");
            document.getElementById("ingreso_texto").value="";
            document.getElementById("ingreso_texto").focus();     
            document.getElementById("imagen1").style.display="none";
            document.getElementById("egreso_texto").style.display="block";
            document.getElementById("egreso_texto").value=texto_decodificado;
        }
        else {
            document.getElementById("ingreso_texto").focus();
            document.getElementById("egreso_texto").style.display="none";
            document.getElementById("imagen1").style.display="block";
        }
    copia=texto_decodificado;
}

function copiar(){   //copia el mensaje codificado o decodificado en el portapapeles
    navigator.clipboard.writeText(copia);
} 
























