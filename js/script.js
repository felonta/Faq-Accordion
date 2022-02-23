function initAccordion() {
  const accordionItemList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (accordionItemList.length) {
    accordionItemList[0].classList.add(activeClass);
    accordionItemList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionItemList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
