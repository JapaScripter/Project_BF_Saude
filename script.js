/*|Header Parallax|*/
var header = document.getElementById('hd');

window.addEventListener ('scroll', function() 
{
  if (window.scrollY > 0) {
    header.style.background = '#474998';
  }
  else {
    header.style.background = 'none';
  }
})
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