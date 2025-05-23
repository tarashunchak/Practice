document.querySelectorAll('.card .btn').forEach(function(button) {
  button.addEventListener('click', function () {
    const card = button.closest('.card');
    const statusText = card.querySelector('.card-text');
    const currentStatus = button.textContent.trim();

    if (currentStatus === 'On') {
      statusText.innerHTML = statusText.innerHTML.replace('On', 'Off');
      button.textContent = 'Off';
      card.classList.remove('border-success');
      card.classList.add('border-danger');
    } else {
      statusText.innerHTML = statusText.innerHTML.replace('Off', 'On');
      button.textContent = 'On';
      card.classList.remove('border-danger');
      card.classList.add('border-success');
    }
  });
});

