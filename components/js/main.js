const bastauBtn = document.querySelector('.button')
const ButtonBtn = document.querySelector('.button_btn'),
progress = document.querySelector('.container_progress'),
lesson1 = document.querySelector('.lesson1'),
lesson_img = document.querySelector('.lesson_img'),
lesson2 = document.querySelector('.lesson2')
const ButtonNumber = document.querySelector('.button_number')
const ButtonLocal = document.querySelector('.button_local')
const ProgressDot = document.querySelectorAll('.progress_dot7')
activeColor = document.querySelector('.active')
const refreshBtn = document.querySelector('.refresh')
const JalgastyrBtn = document.getElementById('jalgastyr')
ButtonLocal.innerHTML = localStorage.getItem('count') || 0;



bastauBtn.addEventListener('click', ()=>{
    progress.style.display = 'none'
    lesson1.style.display = 'flex'
})

ButtonBtn.addEventListener('click', ()=>{
    const score = parseInt( ButtonNumber.innerText);
    ButtonNumber.innerText = score + 1;
})

ButtonBtn.addEventListener('click', ()=>{
    const current = parseInt(ButtonLocal.innerText);
    ButtonLocal.innerText = current + 1;

    localStorage.setItem('count', current + 1);

    if(current == 9){
        lesson1.style.display = 'none'
        lesson_img.style.display = 'flex'

        ButtonLocal.textContent = '0'
        ButtonNumber.textContent = '0'
        localStorage.setItem('count', current + 1);     
    }

})
JalgastyrBtn.addEventListener('click', ()=>{
    lesson_img.style.display = 'none'
    lesson2.style.display = 'flex'
})
refreshBtn.addEventListener('click', ()=>{
    ButtonLocal.textContent = '0'
    ButtonNumber.textContent = '0'
    localStorage.removeItem('count') = 0
    localStorage.clear()
})


tasbixBtn.addEventListener('click', ()=>{
    const score = parseInt( numberBtn.innerText);
    numberBtn.innerText = score + 1;

    const current = parseInt(numberLocal.innerText);
    numberLocal.innerText = current + 1;

    localStorage.setItem('count', current + 1);
})