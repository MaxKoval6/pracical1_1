"use strict";

const username = prompt("Введіть свій username");
const password = prompt("Введіть свій пароль");

const AdminUsername = "admin";
const AdminPassword = "admin_password";

if (username === AdminUsername && password === AdminPassword) {
  alert("Вітаємо Адмін!");
} else {
  alert("Невірні дані");
}
