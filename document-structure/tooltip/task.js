const tooltipArray = Array.from(document.getElementsByClassName("has-tooltip"));
let toolTip = null;

tooltipArray.forEach((el) => {
	el.addEventListener("click", (event)=> {
        const tooltipDelete = document.querySelector(".tooltip");
        event.preventDefault();

        if (tooltipDelete) {
            tooltipDelete.remove();
            return;
        } else {
            toolTip = document.createElement("div");
            document.body.append(toolTip);
            toolTip.classList.add("tooltip");
            toolTip.classList.add("tooltip_active");
            toolTip.textContent = el.getAttribute("title");

            const locationElement = el.getBoundingClientRect();
            let position = el.getAttribute("data-position");

            switch(position) {
                case "left":
                    toolTip.style.top = locationElement.top + "px";
                    toolTip.style.left = locationElement.left - toolTip.offsetWidth + "px";
                    break;
                case "right":
                    toolTip.style.top = locationElement.top + "px";
                    toolTip.style.left = locationElement.right  + "px";
                    break;
                case "top":
                    toolTip.style.top = locationElement.top - toolTip.offsetHeight + "px";
                    toolTip.style.left = locationElement.left + "px";
                    break;
                case "bottom":
                    toolTip.style.top = locationElement.bottom + "px";
                    toolTip.style.left = locationElement.left + "px";
                    break;
                default:
                    toolTip.style.top = locationElement.bottom + "px";
                    toolTip.style.left = locationElement.left + "px";
            }
        }
    });
});

