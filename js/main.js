window.onload = () => {
	console.log("Страница загружена")
	const _navListener = ()=> {
		const burger = document.getElementById('burger')
		const navigation = document.querySelector('.navigation')
		const navClose = document.getElementById('nav-close');
		burger.addEventListener('click',(e)=>{
			e.preventDefault()
			console.log(1)
			navigation.classList.toggle('active')
		})
		navClose.addEventListener('click',(e)=>{
			e.preventDefault()
			navigation.classList.remove('active')
		})
	}
	const _init = () =>{
		_navListener()
	}
	_init()
}