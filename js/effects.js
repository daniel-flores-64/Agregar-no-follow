function findNReplaceTag(){
    let indexa = /indexa.mx\//g;
    let element = document.getElementsByTagName("link");
    /*for(let i=0;i<links.length;i++){
        if(element[i].getAttribute("rel") != "no-follow" && indexa.test(element.getAttribute("href")))
            element[i].setAttribute("rel", "no-follow");
    }*///Agregar esta función para cambiar los atributos de las etiquetas
    for(let i=0;i<element.length;i++){
        var gotElem = element[i].outerHTML;
        console.log(gotElem)
    }
    console.log(element);
  }