
const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.upload.addEventListener("progress", (e) => progress.value = Math.floor(e.loaded / e.total));
    const formData = new FormData(form);
    xhr.send(formData);
})

