var garden;
var cat, mouse, cat_image1, cat_image2, cat_image3, mouse_image1, mouse_image2, mouse_image3;

function preload() {
    garden = loadImage('garden.png');
    cat_image1 = loadImage('cat1.png');
    mouse_image1 = loadImage('mouse1.png');
    cat_image2 = loadAnimation('cat2.png', 'cat3.png');
    mouse_image2 = loadAnimation('mouse2.png', 'mouse3.png');
    cat_image3 = loadImage('cat4.png');
    mouse_image3 = loadImage('mouse4.png');
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(900, 600, 100, 100);
    cat.addImage('cat_img', cat_image1);
    cat.addAnimation('cat_img2', cat_image2);
    cat.addImage('cat_img3', cat_image3);
    cat.scale = 0.2;
    mouse = createSprite(100, 600, 20, 50);
    mouse.addImage('mouse_img1', mouse_image1);
    mouse.scale = 0.1;
    mouse.addAnimation('mouse_img2', mouse_image2);
    mouse.addImage('mouse_img3', mouse_image3);
    //mouse.debug = true;
    //cat.debug = true;
    mouse.setCollider('circle', 45, 45, 520);
    cat.setCollider('circle', 45, 45, 650);
}

function draw() {
    background(garden);
    if(isTouching(cat, mouse)) {
        cat.changeAnimation('cat_img3', cat_image3);
        mouse.changeAnimation('mouse_img3', mouse_image3);
        cat.velocityX = 0;
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){
    if(keyDown('enter')) {
        mouse.changeAnimation('mouse_img2', mouse_image2);
        cat.changeAnimation('cat_img2', cat_image2);
        cat.velocityX = -5;
    }
}
function isTouching() {
    if(cat.x - mouse.x < cat.width/2 - mouse.width/2) {
        return true;
    }
    else{
        return false;
    }
}