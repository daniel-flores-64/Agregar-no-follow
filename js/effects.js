function findNReplaceTag(){
    let indexa = /indexa.mx\//g;
    let element = document.getElementsByTagName("link");
    for(let i=0;i<element.length;i++){
        var gotElem = element[i].outerHTML;
        console.log(gotElem)
    }
  }