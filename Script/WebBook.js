var degrees = 0;
var flag=1;
var totalpages = 0;
var pbflag = 1;
var pcflag = 0;
var menuitems = document.getElementsByClassName("menuitem");
var pages = document.getElementsByClassName("page");

window.onload=function(){

var menuTarget = document.getElementById("menu");
var time;
var pagebreak = document.getElementById("break");
var pagecontinous = document.getElementById("continous");
var pagehelp = document.getElementById("help");
var pageabout = document.getElementById("about");
var ibreak = document.getElementById("imgbreak");
var icontinous = document.getElementById("imgcontinous");
var ihelp = document.getElementById("imghelp");
var iabout = document.getElementById("imgabout");
var mibgcolor = pagebreak.style.backgroundColor;
var no = 0;var k;
var canvasone = document.getElementById("canvas1");
var canvastwo = document.getElementById("canvas2");
var myDialog = document.getElementById('dialog');
var closeDialog = document.getElementById('close-dialog');
totalpages = document.getElementById("container").childElementCount-1;

for(var i=0; i<menuitems.length; i++){
menuitems[i].classList.add('gone');}

menuTarget.addEventListener('mouseover', function(event) {
this.classList.add('not');
for(var i=0; i<menuitems.length; i++){
menuitems[i].classList.remove('gone');}
}, false);
menuTarget.addEventListener('mouseout', function(event) {
menuTarget.classList.remove('not');
for(var i=0; i<menuitems.length; i++){
menuitems[i].classList.add('gone');}
}, false);

if(pbflag){
pagebreak.style.height="12%";
pagebreak.style.width="50%";
pagebreak.style.backgroundColor="#000000";
pagebreak.style.borderWidth="2px";
pagebreak.style.borderColor="blue";
pagebreak.style.marginLeft="24%";
pagebreak.style.marginTop="36.68%";
ibreak.style.marginLeft="10%";
ibreak.style.marginTop="8.5%";
}

pagebreak.addEventListener('mouseover', function(event) {
this.style.height="12%";
this.style.width="50%";
this.style.backgroundColor="#000000";
this.style.borderSize="2px";
this.style.borderColor="blue";
this.style.marginLeft="24%";
this.style.marginTop="36.68%";
ibreak.style.marginLeft="10%";
ibreak.style.marginTop="8.5%";
}, false);
pagebreak.addEventListener('mouseout', function(event) {
if(!pbflag){
this.style.height="11%";
this.style.width="48%";
this.style.backgroundColor=mibgcolor;
this.style.borderSize="2px";
this.style.borderColor="black";
this.style.marginLeft="25%";
this.style.marginTop="40%";
ibreak.style.marginLeft="9.3%";
ibreak.style.marginTop="7.5%";
}
}, false);
pagecontinous.addEventListener('mouseover', function(event) {
this.style.height="12%";
this.style.width="50%";
this.style.backgroundColor="#000000";
this.style.borderSize="2px";
this.style.borderColor="blue";
this.style.marginLeft="24%";
this.style.marginTop="26.66%";
icontinous.style.marginLeft="10%";
icontinous.style.marginTop="8.5%";
}, false);
pagecontinous.addEventListener('mouseout', function(event) {
if(!pcflag){
this.style.height="11%";
this.style.width="48%";
this.style.backgroundColor=mibgcolor;
this.style.borderSize="2px";
this.style.borderColor="black";
this.style.marginLeft="25%";
this.style.marginTop="30%";
icontinous.style.marginLeft="9.3%";
icontinous.style.marginTop="7.5%";
}
}, false);
pagehelp.addEventListener('mouseover', function(event) {
this.style.height="12%";
this.style.width="50%";
this.style.backgroundColor="#000000";
this.style.borderSize="2px";
this.style.borderColor="blue";
this.style.marginLeft="24%";
this.style.marginTop="26.66%";
ihelp.style.marginLeft="10%";
ihelp.style.marginTop="8.5%";
}, false);
pagehelp.addEventListener('mouseout', function(event) {
this.style.height="11%";
this.style.width="48%";
this.style.backgroundColor=mibgcolor;
this.style.borderSize="2px";
this.style.borderColor="black";
this.style.marginLeft="25%";
this.style.marginTop="30%";
ihelp.style.marginLeft="9.3%";
ihelp.style.marginTop="7.5%";
}, false);
pageabout.addEventListener('mouseover', function(event) {
this.style.height="12%";
this.style.width="50%";
this.style.backgroundColor="#000000";
this.style.borderSize="2px";
this.style.borderColor="blue";
this.style.marginLeft="24%";
this.style.marginTop="26.66%";
iabout.style.marginLeft="10%";
iabout.style.marginTop="8.5%";
}, false);
pageabout.addEventListener('mouseout', function(event) {
this.style.height="11%";
this.style.width="48%";
this.style.backgroundColor=mibgcolor;
this.style.borderSize="2px";
this.style.borderColor="black";
this.style.marginLeft="25%";
this.style.marginTop="30%";
iabout.style.marginLeft="9.3%";
iabout.style.marginTop="7.5%";
}, false);

pagebreak.addEventListener('click', function(event) {
for(var i=0; i<pages.length; i++){
pages[i].classList.remove('continous');}
canvasone.style.marginLeft="0%";
canvastwo.style.marginLeft="35%";
if((!pbflag) && (pcflag)){
this.style.height="12%";
this.style.width="50%";
this.style.backgroundColor="#000000";
this.style.borderSize="2px";
this.style.borderColor="blue";
this.style.marginLeft="24%";
this.style.marginTop="36.68%";
ibreak.style.marginLeft="10%";
ibreak.style.marginTop="8.5%";

pagecontinous.style.height="11%";
pagecontinous.style.width="48%";
pagecontinous.style.backgroundColor=mibgcolor;
pagecontinous.style.borderSize="2px";
pagecontinous.style.borderColor="black";
pagecontinous.style.marginLeft="25%";
pagecontinous.style.marginTop="30%";
icontinous.style.marginLeft="9.3%";
icontinous.style.marginTop="7.5%";

pbflag=1;
pcflag=0;

redraw();
}
}, false);
pagecontinous.addEventListener('click', function(event) {
for(var i=0; i<pages.length; i++){
pages[i].classList.add('continous');}
canvasone.style.marginLeft="10%";
canvastwo.style.marginLeft="35%";
if((pbflag) && (!pcflag)){
this.style.height="12%";
this.style.width="50%";
this.style.backgroundColor="#000000";
this.style.borderSize="2px";
this.style.borderColor="blue";
this.style.marginLeft="24%";
this.style.marginTop="26.66%";
icontinous.style.marginLeft="10%";
icontinous.style.marginTop="8.5%";

pagebreak.style.height="11%";
pagebreak.style.width="48%";
pagebreak.style.backgroundColor=mibgcolor;
pagebreak.style.borderSize="2px";
pagebreak.style.borderColor="black";
pagebreak.style.marginLeft="25%";
pagebreak.style.marginTop="40%";
ibreak.style.marginLeft="9.3%";
ibreak.style.marginTop="7.5%";

pbflag=0;
pcflag=1;

redraw();
}
}, false);

pageabout.addEventListener('click', function(event) {
myDialog.showModal();
}, false);
closeDialog.addEventListener('click', function(event) {
myDialog.close();
}, false);

for(k=0;k<pages.length;k++){
pages[k].style.height=(window.innerHeight*1.874) + "px";
}

setInterval(handleTime,17);

if(window.innerWidth > 650){document.getElementById("pagecount").style.fontSize = (window.innerWidth*(1.46/100)) + "px";}
else {document.getElementById("pagecount").style.fontSize = "10px";}
document.getElementById("pagecount").innerText = "0 / " + totalpages;
document.body.onscroll=scroll;
scroll();
window.addEventListener('resize', function(event) {
if(window.innerWidth > 650){document.getElementById("pagecount").style.fontSize = (window.innerWidth*(1.46/100)) + "px";}
else {document.getElementById("pagecount").style.fontSize = "10px";}
for(k=0;k<pages.length;k++){
pages[k].style.height=(window.innerHeight*1.874) + "px";
}
redraw();
scroll();
}, false);

redraw();
}

function scroll(){
no = Math.ceil(pageYOffset/(parseInt(pages[0].style.height.split(".")[0])*1.024));
if(!no){no=1;}
if(window.innerWidth > 650){document.getElementById("pagecount").style.fontSize = (window.innerWidth*(1.46/100)) + "px";}
else {document.getElementById("pagecount").style.fontSize = "10px";}
document.getElementById("pagecount").innerText = (no-1) + " / " + totalpages;
}

function handleTime(){
if(flag==1){degrees++;}
else{degrees--;}
if(degrees==1){flag=1;}
if(degrees==360){flag=0;}
var canvas = document.getElementById("canvas1");
var context = canvas.getContext("2d");
canvas.width = window.innerWidth*(36.6/100);
canvas.height = parseInt(pages[0].style.height.split(".")[0])*(20/100);
fillBackgroundColor(canvas, context);
context.save();
context.translate((window.innerWidth*(14.64/100)), parseInt(pages[0].style.height.split(".")[0])*(10/100));
context.fillStyle = "rgba(50, 50, 50, .5)";
for (var i = 0; i < 360/degrees; i++) {
if(window.innerHeight>600){
context.fillRect(0, 0, (window.innerWidth*(5.86/100)), (window.innerWidth*(5.86/100)));}
else{context.fillRect(0, 0, (window.innerWidth*(4/100)), (window.innerWidth*(4/100)));}
context.rotate(degreesToRadians(degrees));
}
context.restore();
drawText();
}

function drawText(){
// Get the context we will be using for drawing.
var myCanvas = document.getElementById('canvas2');
var myContext = myCanvas.getContext('2d');
myCanvas.width = window.innerWidth*(36.6/100);
myCanvas.height = parseInt(pages[0].style.height.split(".")[0])*(24/100);
var myfont;
if(window.innerHeight>600){myfont = (window.innerWidth*(7.4/100)) + "px" + " sans-serif";}
else{myfont = (window.innerWidth*(5.5/100)) + "px" + " sans-serif";}
fillBackgroundColor(myCanvas, myContext);
myContext.save();
// Add some shadow!
myContext.shadowOffsetX = 5;
myContext.shadowOffsetY = 5;
myContext.shadowBlur = 8;
myContext.shadowColor = "rgba(0, 0, 0, 0.8)";
// Draw some text!
myContext.font = myfont;
myContext.strokeStyle = '#000';
if(window.innerHight>600){
myContext.strokeText('Web', 0, parseInt(pages[0].style.height.split(".")[0])*(6.4/100));}
else{myContext.strokeText('Web', 0, parseInt(pages[0].style.height.split(".")[0])*(9/100));}
myContext.textAlign = 'center';
myContext.fillStyle = 'rgba(200, 50, 25, 0.8)';
myContext.shadowOffsetX = 8;
myContext.shadowOffsetY = 8;
myContext.shadowBlur = 4;
if(window.innerHeight>600){
myContext.fillText('Book', (window.innerWidth*(19.5/100)), parseInt(pages[0].style.height.split(".")[0])*(16/100));}
else{myContext.fillText('Book', (window.innerWidth*(19.5/100)), parseInt(pages[0].style.height.split(".")[0])*(18.6/100));}
myContext.restore();
}
function degreesToRadians(degree){return (Math.PI/180)*degree;}

function fillBackgroundColor(canvas, context) {
context.fillStyle ="#FFFFFF";
context.fillRect(0,0,canvas.width,canvas.height );
}

