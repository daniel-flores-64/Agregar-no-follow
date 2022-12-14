function findNReplaceTag(){
    let indexa = /https:\/\/indexa.mx\//g;
    let links = document.getElementsByTagName("link");
    for(let i=0;i<links.length;i++){
        if(links[i].getAttribute("rel") != "nofollow" && !indexa.test(links[i].getAttribute("href")))
            links[i].setAttribute("rel", "nofollow");
        else
            links[i].setAttribute("rel", "follow");
    }
    console.log(links);
  }