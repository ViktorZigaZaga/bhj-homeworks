const chatWidget = document.querySelector(".chat-widget");
const chatInput = document.getElementById("chat-widget__input");
const chatMessages = document.getElementById("chat-widget__messages");
const timeOut = null;

let hh = String(new Date().getHours()).padStart(2, "0");
let mm = String(new Date().getMinutes()).padStart(2, "0");

chatWidget.addEventListener("click", () => {
    chatWidget.classList.add("chat-widget_active");

    timeOut = setTimeout(() => {
        chatMessages.innerHTML += 
            `<div class="message">
                <div class="message__time">${hh}:${mm}</div>
                <div class="message__text">
                    Чего? Алфавит забыл?
                </div>
            </div>`;
    }, 30000);
});

chatInput.addEventListener("keydown", function(e) {
    if (e.key == "Enter" && chatInput.value.trim()) {
        chatMessages.innerHTML += 
            `<div class="message message_client">
                <div class="message__time">${hh}:${mm}</div>
                <div class="message__text">
                    ${chatInput.value}
                </div>
            </div>`;
        chatInput.value="";
        scrollDown();
        chatMessages.innerHTML += 
            `<div class="message">
                <div class="message__time">${hh}:${mm}</div>
                <div class="message__text">
                    ${getBotResponse()}
                </div>
            </div>`;
        scrollDown();
    }
    clearInterval(timeOut);
});

function getBotResponse() {
    const botMessagesArray = [
        "Клиент - это диагноз",
        "Бот летом не работает, а зимою холодно",
        "Обратитесь к Нам вчера!",
        "Все боты заняты, подождите 30 секунд",
        "Оно Вам надо?!",
        "Вы случаем не Джигурда?"
    ]
    return botMessagesArray[Math.floor(Math.random() * botMessagesArray.length)];
}

function scrollDown() {
    chatMessages.scrollIntoView({block: "end", behavior: "smooth"});
}