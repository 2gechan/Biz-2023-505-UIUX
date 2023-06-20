const imgArr = document.querySelectorAll("div#area img");

const selectOption = (value) => {
  //   console.log(value);
  for (let i = 0; i < imgArr.length; i++) {
    imgArr[i].style.display = "none";
  }
  imgArr[value - 2].style.display = "flex";
};
