

const config = {
    // name of each box div class
    divName = "chachabox",
    // id of main container
    containerName = "chachacontainer",
    // updates on window resize
    rescaling:true,
    // boxes fill height
    largeBoxes:true,
    // multiple boxes per screen? setting this to false overrides the sizes given 
    multi:true,
    // an arrow to show that u can scroll
    arrow: true,
    // click when scrolling
    snapBoxes: true,
    // allow boxes to go off page
    overFlowBoxes:false,

}

window.onload = (event) => {
    let boxes = document.getElementsByClassName(divName);
    let boxContainer = document.getElementById(containerName);


    console.log(boxes);
    let totalSize = 0;
    for (var item of boxes){
        console.log(item);
        // temporary, fix this later
        if (item.getAttribute("size") == null){item.setAttribute("size","100")}
        totalSize+=item.getAttribute(size);
        
    }
    let importStyle = `
    .${divName}{
        width:100%;
        height:100%;
    }
    #${containerName}{
        display: grid;
        flex-direction: row;
        width:100%;
        height:100%;
        grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
        grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
    }
    body{
        width:100%;
        height:100%;
        margin:0px !important;
        
    }
    head{
        width:100%;
        height:100%;
        margin:0px !important;
    }
    html{
        width:100%;
        height:100%;

    }
    `
    // this has to be the last line on both onEvents
    boxStyles = "<style id='boxStyleSheet'>"+ importStyle +" </style>";
    $("head").append(boxStyles);
    

};


  