const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");
const main = document.querySelector("main");
let votesSum = 0;


let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.addEventListener("load", () => {
  const response = JSON.parse(xhr.response); 
  if (xhr.status === 200) {
    const { title, answers } = response.data;
    pollTitle.textContent = title;
    pollAnswers.insertAdjacentHTML("beforeend", answers.map(element => `<button class="poll__answer">
                                                              ${element}                
                                                            </button>`).join(""));       
  }
  let pollAnswer = document.querySelectorAll(".poll__answer");
  pollAnswer.forEach(button => {
    button.addEventListener("click", (e) => {
      main.insertAdjacentHTML("beforeend", `<div class="modal">
                                              <div class="modal__overlay"></div>
                                              <div class="modal__content">
                                                <div class="modal__body">Спасибо, ваш голос засчитан!</div>
                                                <div class="modal__bottom">
                                                  <button class="modal__btn">Закрыть</button>
                                                </div>
                                              </div>
                                            </div>`);
      const modal = document.querySelector(".modal");
      const modalCloseBtn = document.querySelector(".modal__btn");
      modal.classList.add("modal--active");
      modalCloseBtn.addEventListener("click", () => {
        modal.classList.remove("modal--active");
      });


      const index = Array.from(pollAnswer).indexOf(e.target);                    
      const id = response.id; 
      const vote = "vote=" + encodeURIComponent(id) + "&answer=" + encodeURIComponent(index);
      xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      xhr.addEventListener("load", () => {
          const responseVotes = JSON.parse(xhr.response);
          let sumVotes = responseVotes.stat.reduce((votes, element) => (votes += element.votes),0);      
          pollAnswers.innerHTML = responseVotes.stat.map(element => `<div">
                                                                <strong>${element.answer}: ${(element.votes / (sumVotes/ 100)).toFixed(2)}%<strong>
                                                              </div><br>`).join("");   
      });
      xhr.send(vote);         
    });
  }); 
});
xhr.send();