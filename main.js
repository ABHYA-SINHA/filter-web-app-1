noseX=5;
noseY=5;
function preload(){
    moustache_nose=loadImage('https://media2.giphy.com/media/PoG4xhTgbPejy9jZQB/source.gif');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-10;
        noseY=results[0].pose.nose.y-10;
        console.log("nose X= "+noseX);
        console.log("nose Y= "+noseY);
    }
}
function draw(){
    image(video,5,5,300,300);
    image(moustache_nose,noseX,noseY,60,60);
}
function take_snapshot(){
    save('myFilterImage.png');
}