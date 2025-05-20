document.querySelectorAll('.on_off_btn').forEach(function(button) {
button.addEventListener('click', function() {
    const portBox = button.closest('.port-box');
    const statusText = portBox.querySelectorAll('div')[2]; // 3-й <div> — статус
    const currentStatus = statusText.textContent.trim();

    if (currentStatus === 'On') {
    statusText.textContent = 'Off';
    button.textContent = 'Off';
    portBox.classList.remove('port-up');
    portBox.classList.add('port-down');
    } else {
    statusText.textContent = 'On';
    button.textContent = 'On';
    portBox.classList.remove('port-down');
    portBox.classList.add('port-up');
    }
});
});
