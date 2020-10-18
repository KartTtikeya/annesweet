let commentForm = document.querySelector('.form');
let commentField = document.querySelector('.message');
let submitButton = document.querySelector('.form-button');

commentField.oninput = function () {
  if (commentField.value.length > 150 || commentField.value.length < 10) {
    commentField.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentField.classList.remove('warning');
    submitButton.disabled = false;
  }
};
