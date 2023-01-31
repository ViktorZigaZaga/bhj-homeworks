const editor = document.getElementById("editor");
const btn = document.querySelector("button");
const storedEditor = localStorage.getItem("storedEditor");

if (storedEditor) {
    editor.value = JSON.parse(storedEditor);
}

editor.addEventListener("input", () => {
    localStorage.setItem("storedEditor", JSON.stringify(editor.value));
});

btn.addEventListener("click", () => {
    localStorage.removeItem("storedEditor");
    editor.value = "";
});
