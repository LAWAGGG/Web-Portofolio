document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  });

//tema terang dan gelap
let lightBtn = document.getElementById('lightBtn');
let Nama = document.getElementById('Nama');
let Skill = document.getElementById('Skills');
let project = document.getElementById('Projects');
let contact = document.getElementById('contacts');
let navBar = document.querySelector('.navBar')
lightBtn.addEventListener('click',()=>{
    Nama.classList.toggle('Light')
    Skill.classList.toggle('Light')
    project.classList.toggle('Light')
    contact.classList.toggle('Light')
    navBar.classList.toggle('Light')
    lightBtn.classList.toggle('bi-sun')
})

// modal detail
let modal = document.getElementById('modalDetail')
let openModal = document.getElementById('openDetail')
let closeModal = document.getElementById('closeDetail')
let modalContent = document.getElementById('modalContent')
openModal.addEventListener('click', () => {
  modal.style.display = 'flex';
  modal.classList.remove('hide'); // Pastikan kelas animasi keluar dihapus
  modalContent.classList.remove('hide');
});

closeModal.addEventListener('click', () => {
closeWithAnimation()
});

window.addEventListener('click', (event) => {
  if(event.target == modal){
   closeWithAnimation()
  }
})

function closeWithAnimation() {
  modal.classList.add('hide'); // Tambahkan animasi keluar ke modal
  modalContent.classList.add('hide');

  // Tunggu hingga animasi selesai sebelum mengubah display
  setTimeout(() => {
    modal.style.display = 'none';
    modal.classList.remove('hide');
    modalContent.classList.remove('hide');
  }, 500); // Durasi ini harus sesuai dengan durasi animasi CSS
}

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