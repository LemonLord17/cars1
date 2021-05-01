canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


var background = "prefect.jpg";
var top_car = "travel-car-top_view_monsterbrain_remix.png";
top_car_width=100;
top_car_height=90;
top_car_x=10;
top_car_y=10;

var bottom_car = "unnamed.png";
bottom_car_width=70;
bottom_car_height=90;
bottom_car_x=10;
bottom_car_y=100;

function add() {
    background_img=new Image();
    background_img.onload=uploadbackground;
    background_img.src=background;

    bottom_car_img=new Image();
    bottom_car_img.onload=uploadbottom_car;
    bottom_car_img.src=bottom_car;

    top_car_img=new Image();
    top_car_img.onload=uploadtop_car;
    top_car_img.src=top_car;
}
function uploadbackground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
function uploadbottom_car(){
    ctx.drawImage(top_car_img,top_car_x,top_car_y,top_car_width,top_car_height);
}
function uploadtop_car(){
    ctx.drawImage(bottom_car_img,bottom_car_x,bottom_car_y,bottom_car_width,bottom_car_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){

    var keypressed2 = e.keyCode;

    if(keypressed2 == '87'){
    //  up();
        console.log("w_up_key");
    }
    if(keypressed2 == '65'){
      //  down();
        console.log("a_right_key");
    }
    if(keypressed2 == '68'){
     //  left();
        console.log("d_right_key");
    }
    if(keypressed2 == '83'){
      //  right();
        console.log("s_down_key");
    }




    var keypressed1 = e.keyCode;

    if(keypressed1 == '38'){
     //   up();
        console.log("up_arrow");
    }
    if(keypressed1 == '40'){
     //   down();
        console.log("down_arrow");
    }
    if(keypressed1 == '37'){
     //   left();
        console.log("left_arrow");
    }
    if(keypressed1 == '39'){
     //   right();
        console.log("right_arrow");
    }}