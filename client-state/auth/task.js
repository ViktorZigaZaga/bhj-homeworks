const form = document.getElementById("signin__form");
const signin = document.getElementById("signin");
const userId = document.getElementById("user_id");
const inputControls = Array.from(document.getElementsByClassName("control"));
const btnLogout = document.getElementById("logout__btn");
const welcome = document.getElementById("welcome");
const storedUser = localStorage.getItem("user");

if (storedUser) {
    signin.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
    userId.textContent = storedUser;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    let data = new FormData(form);
    xhr.send(data);
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === xhr.DONE) {
            const json = JSON.parse(xhr.response);
            if (json.success) {
                storedUser = localStorage.setItem("user", JSON.stringify(json.user_id));
                userId.textContent = json.user_id;
                signin.classList.remove("signin_active");
                welcome.classList.add("welcome_active");       
            } else {
                alert("Неверный логин/пароль");
            }
        } 
        inputControls.forEach(el => el.value = "");
    });
});

btnLogout.addEventListener("click", () => {
    localStorage.removeItem("user");
    location.reload();
});