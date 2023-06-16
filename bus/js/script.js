document.addEventListener("DOMContentLoaded", () => {
  const select1 = document.getElementById("select1");
  const select2 = document.getElementById("select2");

  const selval_default = select2.options[0].value;

  const mainviewForm = document.getElementById("mainview");

  const stopAni_str = document.getElementById("stop-image-str");
  const stopAni_end = document.getElementById("stop-image-end");
  const moveAni = document.getElementById("moving-image");

  const stopAniDefault = document.getElementById("stop-image-str").animation;
  const moveAniDefault = document.getElementById("stop-image-str").animation;
  const moveBus = () => {
    if (select1.value === "str0006" && select2.value === "end0001") {
      mainviewForm.style.display = "flex";

      stopAni_str.style.animationPlayState = "running";
      stopAni_end.style.animationPlayState = "running";
      moveAni.style.animationPlayState = "running";
    } else {
      mainviewForm.style.display = "none";
    }
  };
  function handleChange() {
    if (select1.value === "str_default") {
      alert("첫 번째 선택지를 먼저 선택해주세요.");
      // select2.value = "";
      select2.value = selval_default;

      // imageview.style.display = "none";
      mainviewForm.style.display = "none";

      return false;
    }
  }

  select1.addEventListener("change", moveBus);
  select2.addEventListener("change", moveBus);

  select1.addEventListener("change", handleChange);
  select2.addEventListener("change", handleChange);
});
