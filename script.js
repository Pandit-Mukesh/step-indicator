const circles = document.querySelectorAll(".circle"),
progessBar = document.querySelector(".indicator"),
buttons = document.querySelectorAll("button")

let currentstep = 1

const upadtestep = (e) =>{
	currentstep = e.target.id ==="next" ? ++currentstep: --currentstep
	circles.forEach((circle,index)=>{
		circle.classList[`${index < currentstep ? "add":"remove"}`]("active")
	})
	progessBar.style.width = `${((currentstep - 1)/(circles.length - 1))*100}%`
	if(currentstep === circles.length){
		buttons[1].disabled = true
	}
	else if(currentstep === 1){
		buttons[0].disabled = true
	}
	else{
		buttons.forEach((button)=>{
			(button.disabled = false)
		})
	}
}

buttons.forEach((button)=>{
	button.addEventListener("click",upadtestep)
})
