/*********************************** wishlist button ******************************/
function wish1(){
    document.getElementById('marked1').textContent = 'Added to wishlist'
  }
  function wish2(){
    document.getElementById('marked2').textContent = 'Added to wishlist'
  }
  function wish3(){
    document.getElementById('marked3').textContent = 'Added to wishlist'
  }
  function wish4(){
    document.getElementById('marked4').textContent = 'Added to wishlist'
  }
  function wish5(){
    document.getElementById('marked5').textContent = 'Added to wishlist'
  }
  function wish6(){
    document.getElementById('marked6').textContent = 'Added to wishlist'
  }

  /******************************************** my account page *****************************/

  function returnvalue(){
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

    $(document).ready(function(){
      $("#account-input").hide()
    })
}
//                                              J QUERY
  $(document).ready(function(){
      $("#another").click(function(){
          $("#account-input").slideToggle()
      })
  })