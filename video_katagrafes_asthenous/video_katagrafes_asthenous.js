let input, button, greeting;
let video1;
let video2;
let video3;
let video4;
let playing = false;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(100);
  let str = 'για να γίνει αναπαραγωγή κρατήστε πατημένο το δεξί ή το αριστερό βελάκι αντίστοιχα';
  textSize (20);
  fill (0);
  text (400,500);
  text (str,100,500,1000,20);

  video1= createVideo ('data/video1.mp4');
  //video1.loop();
  video1.position (-20,100);
  video1.size(720,360);
  video2=createVideo('data/video3.mp4');
   //video2.loop();
  video2.position (760,100);
  video2.size(720,360);
  
  input=createInput();
  input.position(100,65);
  
  inputb=createInput();
  inputb.position(800,65);
  
  button = createButton('submit');
  button.position(input.x+input.width,65);
  button.mousePressed(greet);
  
  buttonb = createButton('submit');
  buttonb.position(inputb.x+inputb.width,65);
  buttonb.mousePressed(greetb);
  
  greeting = createElement('h2', ' Άσκηση μνήμης No1: Καταχωρίστε ημερομηνία και ώρα λήψης');
  greeting.position(20, 5);
  greetingb = createElement ('h2','Άσκηση μνήμης Νο2:Καταχωρίστε ημερομηνία και ώρα λήψης');
  greetingb.position(720, 5);
}
function greet() {
  const name = input.value();
  greeting.html('Ημερομηνία και ώρα λήψης:'+name);
  input.value('');
}
function greetb(){
  const nameb = inputb.value();
  greetingb.html ('Hμερομηνία και ώρα λήψης:' + nameb);
  inputb.value('');
}
function keyPressed(){
  if (keyCode === LEFT_ARROW){
  // if (playing){
    video2.pause();
 // }else{
    video1.loop();}
  
    if (keyCode === RIGHT_ARROW){
    // if (playing) {
      video1.pause();
   // }else{
      video2.loop();
    }
  } function keyReleased (){
    video2.pause();
    video1.pause();
  }
  
  
    
  function draw(){
    
  
  playing =!playing;
  
}
  
 
