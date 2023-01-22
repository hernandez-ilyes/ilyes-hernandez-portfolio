window.addEventListener("mousemove", parralax);


/**
 *
 * @param {MouseEvent} e
 */
function parralax(e) {
  document.querySelectorAll(".layer").forEach((element) => {
    const speed = element.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 150;
    const y = (window.innerHeight - e.pageY * speed) / 150;

    document.querySelector("#header-model").style.transform =
      "translateX(55%) translateY(25%)";
    if (element.hasAttribute("data-text")) {
      element.style.transform = `translateX(${x}px) translateY(${y}px)`
    }
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
  });
}
