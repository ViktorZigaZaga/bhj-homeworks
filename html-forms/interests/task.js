const interestCheck = Array.from(document.getElementsByClassName("interest__check"));

interestCheck.forEach((element) => {
  element.addEventListener("change", (event) => {
    isChecked = event.target.checked;
    checkedChildren(element, isChecked);
    checkIndeterminate(element);
  });
});

function checkedChildren(element, isChecked) {
  const li = element.closest("li");
  const checkedBox = Array.from(li.getElementsByClassName("interest__check"));
  checkedBox.forEach(e => e.checked = isChecked);
}

function checkIndeterminate(element) {
  let li = element.closest("li");
  let ul = null;

  while(li) {
    ul = li.querySelector("ul");
    if (ul) {
      const checkedStatus = Array.from(ul.getElementsByClassName("interest__check"));
      const parent = li.firstElementChild.querySelector(".interest__check");
      const some = checkedStatus.some(box => box.checked);
      const every = checkedStatus.every(box => box.checked);

      parent.checked = every;
      parent.indeterminate = !every && some;
    }
    li = li.parentElement.closest("li");
  }
}
