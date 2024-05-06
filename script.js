/*|Header Parallax|*/
document.addEventListener('DOMContentLoaded', function() {
  let header = document.getElementById('hd');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        header.style.background = 'rgba(71, 73, 152, 0.8)';
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
},5000)

function nextImage(){
  count++
  if(count>3){
    count = 1;
  }
  document.getElementById("radio"+count).checked =true;
}
/*--|Carroussel Hero|--*/


/*--|Input CPF|--*/
function formatarCPF(campo) {
  let input = campo.value.replace(/\D/g, ''); // Remove caracteres não numéricos
  input = input.substring(0, 11); // Limita a 11 caracteres para o formato do CPF

  if (input.length > 9) {
    input = input.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Formata o CPF
  } else if (input.length > 6) {
    input = input.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3'); // Formata parcialmente o CPF
  } else if (input.length > 3) {
    input = input.replace(/(\d{3})(\d{3})/, '$1.$2'); // Formata parcialmente o CPF
  }
  
  campo.value = input;
}
/*--|Input CPF|--*/

/*--|Input Moeda Real|--*/
function formatarMoeda(campo) {
  let input = campo.value.replace(/\D/g, ''); // Remove caracteres não numéricos
  input = (input / 100).toFixed(2); // Divide por 100 e formata com 2 casas decimais
  input = "R$ " + input.replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.'); // Formata como moeda brasileira
  
  campo.value = input;
}
/*--|Input Moeda Real|--*/