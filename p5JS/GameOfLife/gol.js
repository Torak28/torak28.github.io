var width = 10;
var high = 10;
var canvasSize = 500;
var howMany = canvasSize / width;
var minVal = 0;
var maxVal = 10;
var plansza = [];
var planszaNowa = [];
var xd = 0;
var start = false;
var Maps = [];
 
function setup() {
       createCanvas(canvasSize+1, canvasSize+1);
       background(0);
       noStroke();
       //Stworzenie planszy
       for (var i = 0; i < howMany; i++) {
             plansza[i] = [];
             planszaNowa[i] = [];
             for (var j = 0; j < howMany; j++) {
                    plansza[i][j] = new Komorka(i,j);
                    planszaNowa[i][j] = new Komorka(i,j);
                    if(
                           (i==1&&j==0) ||
                           (i==2&&j==1) ||
                           (i==0&&j==2) ||
                           (i==1&&j==2) ||
                           (i==2&&j==2)
                    ){
                           plansza[i][j].live();
                    }
             }
       }
       Maps[0] = plansza;
       noLoop();
}
 
function draw() {  
       drawBoard();
       if(start){
             nextStep();
             swap();
       }
}
 
function startOn(){
       start = true;
       loop();
}
 
function stopNow() {
       start = false;
       noLoop();
}
 
function drawBoard(){
       for (var i = 0; i < howMany; i++) {
             for (var j = 0; j < howMany; j++) {
                    plansza[i][j].show();
             }
       }
}
 
function howManyNeighbours(x,y){
       var counter = 0;
       if(x==0){
             //kolumna 0
             if(y==0){
                    if(plansza[x+1][y].isLive()) counter++;
                    if(plansza[x][y+1].isLive()) counter++;
                    if(plansza[x+1][y+1].isLive()) counter++;
             }else if(y==(howMany-1)){
                    if(plansza[x+1][y].isLive()) counter++;
                    if(plansza[x][y-1].isLive()) counter++;
                    if(plansza[x+1][y-1].isLive()) counter++;
             }else{
                    if(plansza[x+1][y].isLive()) counter++;
                    if(plansza[x][y+1].isLive()) counter++;
                    if(plansza[x+1][y+1].isLive()) counter++;
                    if(plansza[x+1][y-1].isLive()) counter++;
                    if(plansza[x][y-1].isLive()) counter++;
             }
       }else if(x==(howMany-1)){
             //kolumna 9
             if(y==(howMany-1)){
                    if(plansza[x-1][y].isLive()) counter++;
                    if(plansza[x][y-1].isLive()) counter++;
                    if(plansza[x-1][y-1].isLive()) counter++;
             }else if(y==0){
                    if(plansza[x-1][y].isLive()) counter++;
                    if(plansza[x][y+1].isLive()) counter++;
                    if(plansza[x-1][y+1].isLive()) counter++;
             }else{
                    if(plansza[x-1][y].isLive()) counter++;
                    if(plansza[x][y-1].isLive()) counter++;
                    if(plansza[x-1][y-1].isLive()) counter++;
                    if(plansza[x-1][y+1].isLive()) counter++;
                    if(plansza[x][y+1].isLive()) counter++;
             }
       }else if(y==0){
             if(x>0 && x<(howMany-1)){
                    if(plansza[x-1][y].isLive()) counter++;
                    if(plansza[x-1][y+1].isLive()) counter++;
                    if(plansza[x][y+1].isLive()) counter++;
                    if(plansza[x+1][y].isLive()) counter++;
                    if(plansza[x+1][y+1].isLive()) counter++;
             }
       }else if(y==(howMany-1)){
             if(x>0 && x<(howMany-1)){
                    if(plansza[x-1][y].isLive()) counter++;
                    if(plansza[x-1][y-1].isLive()) counter++;
                    if(plansza[x][y-1].isLive()) counter++;
                    if(plansza[x+1][y-1].isLive()) counter++;
                    if(plansza[x+1][y].isLive()) counter++;
             }
       }else{
             if(plansza[x-1][y].isLive()) counter++;
             if(plansza[x-1][y-1].isLive()) counter++;
             if(plansza[x][y-1].isLive()) counter++;
             if(plansza[x+1][y-1].isLive()) counter++;
             if(plansza[x+1][y].isLive()) counter++;
             if(plansza[x-1][y+1].isLive()) counter++;
             if(plansza[x][y+1].isLive()) counter++;
             if(plansza[x+1][y+1].isLive()) counter++;
       }
       return counter;
}
 
function nextStep(){
       for (var i = 0; i < howMany; i++) {
             for (var j = 0; j < howMany; j++) {
                    var neighboursCount = howManyNeighbours(i,j);
                    if(plansza[i][j].isLive()){
                           if(neighboursCount < 2){
                                  planszaNowa[i][j].dead();
                           }else if (neighboursCount > 3){
                                  planszaNowa[i][j].dead();
                           }else{
                                  planszaNowa[i][j].live();
                           }
                    }else if(!plansza[i][j].isLive()){
                           if(neighboursCount == 3){
                                  planszaNowa[i][j].live();
                           }else{
                                  planszaNowa[i][j].dead();
                           }
                    }
             }
       }
}
 
function swap(){
       var temp = planszaNowa;
       planszaNowa = plansza;
       plansza = temp;
}
 
function Komorka(posX, posY) {
       this.x = posX * 10;
       this.y = posY * 10;
       this.w = 10;
       this.h = 10;
       this.life = false;
      
       this.show = function(){
             var grayL = color(100,100,100);
             var whiteL = color(255,255,255);
             var grayD = color(32,32,32);
             var whiteD = color(255,200,200);
             if(start){
                    if(this.life){
                           fill(grayL);
                    }else{
                           fill(whiteL);
                    }
             }else{
                    if(this.life){
                           fill(grayD);
                    }else{
                           fill(whiteD);
                    }
             }
            
             stroke('red');
             rect(this.x, this.y, this.w, this.h);
       }
      
       this.live = function(){
             this.life = true;
       }
      
       this.dead = function(){
             this.life = false;
       }
      
       this.isLive = function(){
             return this.life;
       }
}
 
function mousePressed(){
       var x = floor(mouseX/10);
       var y = floor(mouseY/10);
       if(plansza[x][y].isLive()){
             plansza[x][y].dead();
             fill('red');
             rect(x*10,y*10,10,10);
       }else{
             plansza[x][y].live();
             fill('green');
             rect(x*10,y*10,10,10);
       }
}