document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("loginModal");
    var modal2 = document.getElementById("mapModal");
    var modal3 = document.getElementById("mailModal");
    var loginLink = document.getElementById("loginLink");
    var span = document.getElementsByClassName("close")[0];
    var span2 = document.getElementsByClassName("close")[1];
    var span3 = document.getElementsByClassName("close")[2];
    var map = document.getElementById("map");
    var mail = document.getElementById("mailLink");
    loginLink.onclick = function(event) {
        event.preventDefault(); 
        modal.style.display = "block";
    }
    
    map.onclick = function(event) {
      event.preventDefault();
      modal2.style.display = "block";
    }

    mail.onclick = function(event) {
      event.preventDefault();
      modal3.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    span2.onclick = function() {
      modal2.style.display = "none";
    }

    span3.onclick = function() {
      modal3.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal || event.target == modal2 || event.target == modal3) {
            modal.style.display = "none";
            modal2.style.display = "none";
            modal3.style.display = "none";
        }
    }
const form=document.getElementById('loginForm')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const formData = new URLSearchParams();
    formData.append('username', this.username.value);
    formData.append('password', this.password.value);

    fetch(`http://localhost/api/`, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.code !== 200) {
          return;
        }
      })
      .catch((error) => {
        console.error(error);
      });
})
const form2=document.getElementById('mailForm')
form2.addEventListener('submit',function(e){
    e.preventDefault()
    const formData = new URLSearchParams();
    formData.append('username', this.username.value);
    formData.append('email', this.email.value);
    formData.append('message', this.message.value);

    fetch(`http://localhost/apidata/`, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.code !== 200) {
          return;
        }
      })
      .catch((error) => {
        console.error(error);
      });
})
});