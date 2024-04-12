/*|Header Parallax|*/
document.addEventListener('DOMContentLoaded', function() {
  let header = document.getElementById('hd');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        header.style.background = '#474998';
      } else {
        header.style.background = 'none';
      }
    });
  }
  else {
    console.log("Eu não achei o elemento 'hd'");
  }
});
/*|Header Parallax|*/

/*--|Mobile Menu|--*/
function toggleMenu(){
  var menuList = document.getElementById('lsm');
  if (menuList.style.display ==='none' || menuList.style.display ===''){
  menuList.style.display ='flex';}
  else {
    menuList.style.display ='none';
  }
}
function toggleoffMenu(){
  var menuList = document.getElementById('lsm');
  var close = document.getElementById('cmn');
  if (menuList.style.display ==='none' || menuList.style.display ===''){
  menuList.style.display ='flex';}
  else {
    menuList.style.display ='none';
  }
}
/*--|Mobile Menu|--*/

/*--|Carroussel Hero|--*/
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
},1000000)

function nextImage(){
  count++
  if(count>3){
    count = 1;
  }
  document.getElementById("radio"+count).checked =true;
}
/*--|Carroussel Hero|--*/
