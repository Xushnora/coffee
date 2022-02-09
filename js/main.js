let elMenuBtn = document.getElementById('menuBtn');
let elModal= document.getElementById('navModal');
let elClose= document.getElementById('closeBtn');

elMenuBtn.addEventListener('click', function(){
  elModal.classList.add('show');
})
elClose.addEventListener('click', function(){
  elModal.classList.remove('show');
})