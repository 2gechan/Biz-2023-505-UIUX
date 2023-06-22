function checkOnlyOne(element) {
  const checkboxes = document.getElementsByName("check");

  checkboxes.forEach((cb) => {
    cb.checked = false;
  });

  element.checked = true;
}
