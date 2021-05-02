canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image="mars.jpg";
rover_image="rover.png";
roverx=10;
rovery=10;

function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    console.log("we are in add function");
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, roverx, rovery, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyPressed=e.keyCode;
    
    if(keyPressed=='38') {
        up();
        console.log("up");
    }

    if(keyPressed=='40') {
        down();
        console.log("down");
    }

    if(keyPressed=='37') {
        left();
        console.log("left");
    }

     
    function up() {
        if(rovery>=0) {
      
        
        
        rovery=rovery-10;
        uploadBackground();
         uploadrover();
        }
        
    }

    function down() {
        if(rovery<=500){
            rovery=rovery+10;
            uploadBackground();
            uploadrover();
        }

    }

    function left() {
        if(roverx>=0) {
            roverx=roverx-10;
            uploadBackground();
            uploadrover();
        }
    }

    function right() {
        if(roverx<=700) {
            roverx=roverx+10;
            uploadBackground();
            uploadrover();
        }
    }
