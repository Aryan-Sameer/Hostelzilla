/*********************************** wishlist button ******************************/

let mark = document.querySelectorAll(".mark")
mark.forEach((e) => {
  e.addEventListener("click", () => {
    e.innerHTML = 'Added to wishlist'
  })
})


// global values 

let inputs = document.querySelectorAll("#account-input input")

let Luser = localStorage.getItem("userName")
let Ldesig = localStorage.getItem("designation")
let Lemail = localStorage.getItem("email")
let Lphone = localStorage.getItem("phone")
let Lcity = localStorage.getItem("city")
let Lpass = localStorage.getItem("password")


/******************************************** my account page *****************************/
//login btn
$(document).ready(function () {
  $("#login").click(function () {
    $("#account-input").slideToggle()
    inputs.forEach(e => {
      e.value = ""
    })
    document.getElementById("password").style.display = "block"
    document.getElementById("edit").toggleAttribute("disabled")
  })
})


/******************************************** on submit **********************************/

document.getElementById("submit-button").addEventListener("click", () => {

  let allFilled = true

  inputs.forEach(e => {
    if (e.value === "") {
      allFilled = false
    }
  })

  if (allFilled) {
    //recieving data from input fields
    let name = document.getElementById('iuser').value.trim()
    let desig = document.getElementById('idesig').value
    let email = document.getElementById('iemail').value.trim()
    let phone = document.getElementById('iphn').value.trim()
    let city = document.getElementById('icity').value.trim()
    let pass = document.getElementById('ipass').value

    //pushing data into local storage
    localStorage.setItem("userName", name)
    localStorage.setItem("designation", desig)
    localStorage.setItem("email", email)
    localStorage.setItem("phone", phone)
    localStorage.setItem("city", city)
    localStorage.setItem("password", pass)

    if (pass.length < 4) {
      alert("Password should contain minimum 4 characters")
    }
    else if (pass.length > 8) {
      alert("Password should contain maximum 8 characters")
    }
    else if (phone.length < 10 || phone.length > 10) {
      alert("Enter valied phone number")
    }
    else if (!email.includes("@")) {
      alert("Enter a valied email")
    }
    else {
      localStorage.setItem("userName", name)
      localStorage.setItem("designation", desig)
      localStorage.setItem("email", email)
      localStorage.setItem("phone", phone)
      localStorage.setItem("city", city)
      localStorage.setItem("password", pass)

      $("#account-input").hide()
    }
  }
  else {
    alert("Please fill in all the fields before submitting.")
  }
})

//edit details
document.getElementById("edit").addEventListener("click", () => {
  $("#account-input").slideToggle()

  document.getElementById('iuser').value = Luser
  document.getElementById('idesig').value = Ldesig
  document.getElementById('iemail').value = Lemail
  document.getElementById('iphn').value = Lphone
  document.getElementById('icity').value = Lcity
  document.getElementById('ipass').value = Lpass

  document.getElementById("password").style.display = "none"
  document.getElementById("login").toggleAttribute("disabled")
})

//loging out
document.getElementById("logout").addEventListener("click", () => {
  let logout = confirm("Logout?")
  if(logout){
    localStorage.clear()
  }
})

//display the data
if (localStorage.length != 0) {

  document.getElementById('name').innerHTML = Luser
  document.getElementById('designation').innerHTML = Ldesig
  document.getElementById('email').innerHTML = Lemail
  document.getElementById('phn').innerHTML = Lphone
  document.getElementById('city').innerHTML = Lcity
}


/************************************************ footer date *******************************************/
const d = new Date()
let year = d.getFullYear()
document.querySelector(".year").innerHTML = year
