document.addEventListener("DOMContentLoaded", () => {
  /*
  dept_main 에서 입력하는 요소 중에서
  거래처 코드, 거래처 명, 대표전화, 담당자명, 담당자 연락처는
  반드시 입력해야 하는 요소이다.

  각 요소를 입력하지 않고 저장을 할 경우
  alert 경고를 띄우고, 값을 입력하도록 하는 
  front validation(유효성 검사)를 실행하시오
  */
  const d_code = document.querySelector("input#d_code");
  const d_name = document.querySelector("input#d_name");
  const d_tel = document.querySelector("input#d_tel");
  const d_manager = document.querySelector("input#d_manager");
  const d_man_tel = document.querySelector("input#d_man_tel");
  const button = document.querySelector("button#save_button");

  button.addEventListener("click", () => {
    const dCodeText = d_code.value;
    const dNameText = d_name.value;
    const dTelText = d_tel.value;
    const dManagerText = d_manager.value;
    const dManTelText = d_man_tel.value;
    if (!dCodeText) {
      alert("거래처 코드는 필수 입력이 필요합니다.");
      d_code.focus();
      return false;
    }
    if (!dNameText) {
      alert("거래처명은 필수 입력이 필요합니다.");
      d_name.focus();
      return false;
    }
    if (!dTelText) {
      alert("대표전화는 필수 입력이 필요합니다.");
      d_tel.focus();
      return false;
    }
    if (!dManagerText) {
      alert("담당자명은 필수 입력이 필요합니다.");
      d_manager.focus();
      return false;
    }
    if (!dManTelText) {
      alert("담당자 연락처는 필수 입력이 필요합니다.");
      d_man_tel.focus();
      return false;
    }
    button.submit();
  });
});
