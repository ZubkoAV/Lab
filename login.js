document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("loginModal");
    var loginLink = document.getElementById("loginLink");
    var span = document.getElementsByClassName("close")[0];

    // Відображення модального вікна при натисканні на посилання "Авторизуватися"
    loginLink.onclick = function(event) {
        event.preventDefault(); // Запобігаємо переходу по посиланню
        modal.style.display = "block";
    }

    // Закриття модального вікна при натисканні на X
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Закриття модального вікна при натисканні за межами вікна
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Обробка форми авторизації
    var form = document.getElementById("loginForm");
    form.onsubmit = function(event) {
        event.preventDefault(); // Запобігаємо звичайній відправці форми

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Зберігання імені користувача і пароля у sessionStorage
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);

        // Перевірка адміністративного доступу
        if (username === "admin" && password === "admin_password") {
            sessionStorage.setItem("isAdmin", true);
        } else {
            sessionStorage.setItem("isAdmin", false);
        }

        // Зберігання даних користувача у localStorage
        var users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ username: username, password: password, role: username === "admin" ? "Адміністратор" : "Користувач" });
        localStorage.setItem("users", JSON.stringify(users));
        
        // Перенаправлення на сторінку data.html
        window.location.href = "data.html";
    }
});