/* on click of low, set color-blocks to transparent
  *on high, make the color-blocks visible*/
function colorOn(colorId){
    var colorBlock = document.getElementById(colorId);
    colorBlock.style.opacity = 100;
};
function colorOff(colorId){
    var colorBlock = document.getElementById(colorId);
    colorBlock.style.opacity = 0;
};