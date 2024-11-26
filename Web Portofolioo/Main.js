document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  });

//tema terang dan gelap
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

// modal detail
let modal = document.getElementById('modalDetail')
let openModal = document.getElementById('openDetail')
let closeModal = document.getElementById('closeDetail')
openModal.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if(event.target == modal){
    modal.style.display = 'none';
  }
})

// modal tanya
let modalTanya = document.getElementById('modalAsk')
let openModalTanya = document.getElementById('openAsk')
let closeModalTanya = document.getElementById('closeAsk')
openModalTanya.addEventListener('click', () => {
    modalTanya.style.display = 'flex';
});

closeModalTanya.addEventListener('click', () => {
    modalTanya.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if(event.target == modalTanya){
    modalTanya.style.display = 'none';
  }
})