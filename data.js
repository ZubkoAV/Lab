document.addEventListener("DOMContentLoaded", function() {
    var isAdmin = sessionStorage.getItem("isAdmin");

    if (isAdmin === "true") {
        displayUserData();
    } else {
        window.location.href = "index.html"; // Перенаправлення на головну сторінку, якщо користувач не адміністратор
    }
});

// Функція для відображення даних про користувачів у таблиці
function displayUserData() {
    // Отримання даних користувачів з localStorage
    var userData = JSON.parse(localStorage.getItem("users")) || [];

    // Додавання заголовків таблиці
    var tableHtml = "<table><tr><th>Ім'я</th><th>Email</th><th>Роль</th></tr>";

    // Додавання рядків таблиці з даними про користувачів
    for (var i = 0; i < userData.length; i++) {
        tableHtml += "<tr><td>" + userData[i].username + "</td><td>" + userData[i].username + "@example.com</td><td>" + userData[i].role + "</td></tr>";
    }

    tableHtml += "</table>";

    // Додавання таблиці до елементу з ідентифікатором "userTable"
    document.getElementById("userTable").innerHTML = tableHtml;
}