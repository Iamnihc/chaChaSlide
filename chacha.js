const divName = "chachabox";
const containerName = "chachacontainer"
// paste css here!
var config = {
    // updates on window resize
    rescaling:true,
    // boxes fill height
    largeBoxes:true,
    // multiple boxes per screen? setting this to false overrides the sizes given 
    multi:true,
    //
    arrow: true,
    snapBoxes: true,
    overflowBoxes:false,

}

window.onload = (event) => {
    let boxes = document.getElementsByClassName(divName);
    let boxContainer = document.getElementById(containerName);
    importStyle = `
    .${divName}{
        width:100%;
        height:100%;
    }
    #${containerName}{
        display: flex;
        flex-direction: row;
        width:100%;
        height:100%;
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
    boxStyles = "<style id='boxStyleSheet'>"+ importStyle +" </style>";
    console.log(boxes)
    for (var item of boxes){
        console.log(item);
        // temporary, fix this later
        if (item.getAttribute("size") == null){item.setAttribute("size","100")}

    }
    console.log(0)
    $("head").append(boxStyles);
    

};


  