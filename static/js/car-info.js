const digits = document.querySelectorAll('.digit');
const keys = document.querySelectorAll('.key');
const backBtn = document.querySelector('.back-btn');
let inputIndex = 0;

// 키패드 버튼 클릭 핸들러
keys.forEach((key) => {
  key.addEventListener('click', () => {
    const value = key.textContent;

    if (value === '×') {
      // 삭제 버튼
      if (inputIndex > 0) {
        inputIndex--;
        digits[inputIndex].textContent = '';
        digits[inputIndex].classList.remove('active');
      }
    } else if (value === '→') {
      // 제출 버튼 (데이터 전송 로직 추가)
      alert('번호 제출 완료!');
    } else {
      // 숫자 입력
      if (inputIndex < digits.length) {
        digits[inputIndex].textContent = value;
        digits[inputIndex].classList.add('active');
        inputIndex++;
      }
    }
  });
});

function historyBack() {
  window.history.back();
}

backBtn.addEventListener('click', historyBack);
