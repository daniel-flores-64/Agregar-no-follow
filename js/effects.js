function findNReplaceTag(){
    let indexa = /https:\/\/indexa.mx\//;//Expresión regular para evaluar si la dirección proviene de indexa
    let links = document.getElementsByTagName("link");//Genera un arreglo que contiene todas las etiquetas link y su contenido
    let relPrev = "";
    for(let i=0;i<links.length;i++){
		relPrev = "";
        if(links[i].getAttribute("rel") != "follow" && indexa.test(links[i].getAttribute("href"))){//Si no encuentra la etiqueta follow e identifica la dirección raíz de indexa agrega el valor follow a la etiqueta rel que ya contenía
            relPrev = links[i].getAttribute("rel");
            links[i].setAttribute("rel", relPrev+" follow");
		}else if(links[i].getAttribute("rel") != "nofollow" && !indexa.test(links[i].getAttribute("href"))){//Si no encuentra la etiqueta nofollow e identifica que no contiene la dirección raíz de indexa agrega el valor nofollow a la etiqueta rel que ya contenía
			relPrev = links[i].getAttribute("rel");
			links[i].setAttribute("rel", relPrev+" nofollow");
		}
    }
}