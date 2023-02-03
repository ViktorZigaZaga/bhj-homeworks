const loader = document.getElementById("loader");
const items = document.getElementById("items");

let storedExchangeRates = JSON.parse(localStorage.getItem("storedExchangeRates"));
if (storedExchangeRates && new Date() < new Date(storedExchangeRates.Date)) {
    items.insertAdjacentHTML("afterbegin", Array.from(Object.values(storedExchangeRates.Valute)).map(storedExchangeRate => 
        `<div class="item">
            <div class="item__code">
                ${storedExchangeRate.CharCode}
            </div>
            <div class="item__value">
                ${storedExchangeRate.Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>`).join(""));
} else {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
    xhr.send();
    xhr.responseType = "json";
    xhr.addEventListener("loadstart", () => loader.classList.add("loader_active"));
    xhr.addEventListener("loadend", () => {
        loader.classList.remove("loader_active");
        if(xhr.status === 200) {
            let responseValute = xhr.response.response;
            items.insertAdjacentHTML("afterbegin", Array.from(Object.values(responseValute.Valute)).map(storedExchangeRate => 
                `<div class="item">
                    <div class="item__code">
                        ${storedExchangeRate.CharCode}
                    </div>
                    <div class="item__value">
                        ${storedExchangeRate.Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>`).join(""));
            localStorage.setItem("storedExchangeRates", JSON.stringify(responseValute));
        } 
    });
}
