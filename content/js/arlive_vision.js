$(document).ready(function () {
  const v1 = document.querySelector('#arliveV1');
  const v1Btn = document.querySelector('.toggleVoice.arlive');
  v1Btn?.addEventListener('click', () => {
    if (v1.muted) {
      v1Btn.src = './content/assets/img/voice.svg';
    } else {
      v1Btn.src = './content/assets/img/novoice.svg';
    }
    v1.muted = !v1.muted;
  });

  const v2 = document.querySelector('#visionV2');
  const v2Btn = document.querySelector('.toggleVoice.vision');
  v2Btn?.addEventListener('click', () => {
    if (v2.muted) {
      v2Btn.src = './content/assets/img/voice.svg';
    } else {
      v2Btn.src = './content/assets/img/novoice.svg';
    }
    v2.muted = !v2.muted;
  });
});
