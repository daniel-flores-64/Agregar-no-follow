function findNReplaceTag(){
    let indexa = /https:\/\/indexa.mx\//g;
    let links = document.getElementsByTagName("link");
    for(let i=0;i<links.length;i++){
        if(links[i].getAttribute("rel") != "nofollow" && !indexa.test(links[i].getAttribute("href")))
            links[i].setAttribute("rel", "nofollow");
        else if(indexa.test(links[i].getAttribute("href")))
            links[i].setAttribute("rel", "follow");
    }//Agregar esta función para cambiar los atributos de las etiquetas
    for(let i=0;i<links.length;i++){
        var gotElem = links[i].outerHTML;
        console.log(gotElem)
    }
    console.log(links);
  }