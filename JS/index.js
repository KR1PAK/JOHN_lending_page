// let burger = document.querySelector('.burger')
// burger.addEventListener('click',()=>{
//     burger.classList.toggle('active')
// })
document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.header__container').classList.toggle('active');
})
