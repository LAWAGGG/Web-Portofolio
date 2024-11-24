document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  });

let lightBtn = document.getElementById('lightBtn');
let Nama = document.getElementById('Nama');
let Skill = document.getElementById('Skills');
let project = document.getElementById('Projects');
let contact = document.getElementById('contacts');

lightBtn.addEventListener('click',()=>{
    Nama.classList.toggle('Light')
    Skill.classList.toggle('Light')
    project.classList.toggle('Light')
    contact.classList.toggle('Light')
})