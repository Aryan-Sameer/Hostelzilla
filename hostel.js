/******************************************** global values ******************************/

let inputs = $("#account-input input")

let Luser = localStorage.getItem("userName")
let Ldesig = localStorage.getItem("designation")
let Lemail = localStorage.getItem("email")
let Lphone = localStorage.getItem("phone")
let Lcity = localStorage.getItem("city")
let Lpass = localStorage.getItem("password")

const buttons = document.querySelectorAll('.mark')

/************************************************ Admin ***********************************/

if (Luser == "Aryan Sameer" && Lpass == "Hostel12" && Lemail == "sameeraryan2005@gmail.com" && Lphone == "8247303503" && Lcity == "Hyderabad") {
  $("#addHostels").html("Add Hostels")
  Ldesig = Ldesig + " (Admin) "
  buttons.forEach(e => {
    e.toggleAttribute("disabled")
  })
}

/******************************************** my account page *****************************/
//logging in
$(document).ready(function () {
  $("#login").click(function () {
    $("#account-input").slideToggle()
    inputs.each(function () {
      $(this).val("")
    });
    $("#password").show()
    if (localStorage.length != 0 && !(Luser == "Aryan Sameer" && Lpass == "Hostel12" && Lemail == "sameeraryan2005@gmail.com" && Lphone == "8247303503" && Lcity == "Hyderabad")) {
      document.getElementById("edit").toggleAttribute("disabled")
    }
  })
})

/******************************************** on submit **********************************/

$("#submit-button").click(function () {
  let allFilled = true

  inputs.each(function () {
    if ($(this).val() === "") {
      allFilled = false
    }
  });

  if (allFilled) {
    //recieving data from input fields
    let name = $('#iuser').val().trim()
    let desig = $('#idesig').val()
    let email = $('#iemail').val().trim()
    let phone = $('#iphn').val().trim()
    let city = $('#icity').val().trim()
    let pass = $('#ipass').val()

    //pushing data into local storage
    localStorage.setItem("userName", name)
    localStorage.setItem("designation", desig)
    localStorage.setItem("email", email)
    localStorage.setItem("phone", phone)
    localStorage.setItem("city", city)
    localStorage.setItem("password", pass)

    if (pass.length < 4) {
      alert("Password should contain minimum 4 characters")
    } else if (pass.length > 8) {
      alert("Password should contain maximum 8 characters")
    } else if (phone.length < 10 || phone.length > 10) {
      alert("Enter valid phone number")
    } else if (!email.includes("@")) {
      alert("Enter a valid email")
    } else {
      localStorage.setItem("userName", name)
      localStorage.setItem("designation", desig)
      localStorage.setItem("email", email)
      localStorage.setItem("phone", phone)
      localStorage.setItem("city", city)
      localStorage.setItem("password", pass)

      $("#account-input").hide()
      location.reload()
    }
  } else {
    alert("Please fill in all the fields before submitting.")
  }

})

//edit details
$("#edit").click(function () {
  if ((localStorage.length != 0) && !(Luser == "Aryan Sameer" && Lpass == "Hostel12" && Lemail == "sameeraryan2005@gmail.com" && Lphone == "8247303503" && Lcity == "Hyderabad")) {
    $("#account-input").slideToggle()

    $('#iuser').val(Luser)
    $('#idesig').val(Ldesig)
    $('#iemail').val(Lemail)
    $('#iphn').val(Lphone)
    $('#icity').val(Lcity)
    $('#ipass').val(Lpass)

    $("#password").hide()
    document.getElementById("login").toggleAttribute("disabled")
  }
});

//loging out
$("#logout").click(function () {
  if (localStorage.length != 0) {
    let logout = confirm("Do you really want to logout?")
    if (logout) {
      localStorage.clear()
      location.reload()
    }
  }
})

//display the data
if (localStorage.length != 0) {
  $('#name').html(Luser)
  $('#designation').html(Ldesig)
  $('#email').html(Lemail)
  $('#phn').html(Lphone)
  $('#city').html(Lcity)
  $('.acc-name').html(Luser)
}

/************************************************** side bar ******************************************/

if (localStorage.length != 0) {
  $(".loginout").html("<a>Logout</a>")
}
else {
  $(".loginout").html("<a>Login</a>")
}

$(".loginout").click(function () {
  if (localStorage.length != 0) {
    let loginout = confirm("Do you really want to logout?")
    if (loginout) {
      localStorage.clear()
      alert("You have Logged out")
      location.reload()
    }
  }
  else {
    window.location.href = "./myacc.html"
  }
})

/************************************************ footer date *******************************************/
let d = new Date()
let year = d.getFullYear()
$(".year").html(year)


/************************************************ wishlists *********************************************/

// wishlist button

buttons.forEach(button => {
  button.addEventListener('click', function () {
    if (localStorage.length != 0) {

      let card = this.closest('.hstl')
      let cardId = card.getAttribute('data-id')
      let cardContent = card.innerHTML

      let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
      bookmarks.push({ id: cardId, content: cardContent })
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks))

      button.innerHTML = "Wishlisted"

    }
    else {
      alert("Login to your account")
    }

  })
})
const container = document.getElementById('wishlisted-cards')
const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []

bookmarks.forEach(bookmark => {
  const card = document.createElement('div')
  card.classList.add('hstl')
  card.innerHTML = bookmark.content
  container.appendChild(card)
  card.setAttribute("data-id", localStorage.bookmarks.id)
  card.children[1].children[8].innerHTML = "Remove"
})

if (bookmarks.length === 0) {
  $("#wishlisted-cards").html(`
    <h2 style="font-weight: bold; color: #B3B3B3; padding: 40px;" >You'r wishlist is empty</h2>
  `)
}

let sample = document.querySelectorAll(".hstl .mark")
sample.forEach((e, index) => {
  e.addEventListener("click", () => {
    let cardId = bookmarks[index].id
    let updatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== cardId)
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
    e.remove()
    location.reload()
  })
})
