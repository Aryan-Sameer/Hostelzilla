/*********************************** wishlist button ******************************/

let mark = document.querySelectorAll(".mark")
mark.forEach((e) => {
  e.addEventListener("click", () => {
    e.innerHTML = 'Added to wishlist'
  })
})

/******************************************** my account page *****************************/

function returnvalue() {
  var name = document.getElementById('iname').value;
  document.getElementById('name').textContent = name;

  var name = document.getElementById('idesig').value;
  document.getElementById('designation').textContent = name;

  var name = document.getElementById('iemail').value;
  document.getElementById('email').textContent = name;

  var name = document.getElementById('iphn').value;
  document.getElementById('phn').textContent = name;

  var name = document.getElementById('ilang').value;
  document.getElementById('lang').textContent = name;

  var name = document.getElementById('icity').value;
  document.getElementById('city').textContent = name;

  $(document).ready(function () {
    $("#account-input").hide()
  })
}

$(document).ready(function () {
  $("#another").click(function () {
    $("#account-input").slideToggle()
  })
})
