function openContent(evt, tabName) {
    // var i, x, tablinks;
    // x = document.getElementsByClassName("content-tab");
    // for (i = 0; i < x.length; i++) {
    //     x[i].style.display = "none";
    // }
    // tablinks = document.getElementsByClassName("tab");
    // for (i = 0; i < x.length; i++) {
    //     tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    // }
    var doc = document.getElementById(tabName);
    var content = null;
    for (var i = 0; i < doc.childNodes.length; i++) {
        if (doc.childNodes[i].className == "card-content") {
            content = doc.childNodes[i];
          break;
        }        
    }
    var display = content.style.display;
    if (doc.className.includes('is-active')){
        // content.style.display = 'none';
        doc.className = doc.className.replace(" is-active", "");
    }else{
        // content.style.display = 'block';
        doc.className += " is-active";
    }
    // evt.currentTarget.className += " is-active";
}

function openAndGoToContent(evt, tabName) {
    
    const yOffset = -75; 
    const element = document.getElementById(tabName);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
    openContent(evt, tabName)
}