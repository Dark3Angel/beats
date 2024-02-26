function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
function sendMessage() {
    const emailInput = document.getElementById('email');
    const responseDiv = document.getElementById('response');
  
    
    const userEmail = emailInput.value;
  
    const botToken = '6886323636:AAFXNJaejwY8YN0tQVedeyRzqkv17uVMBws';
    const chatId = '1127408995';
  
    const message = `Данные клиента:  ${userEmail}`;
  
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;
  
    fetch(apiUrl, { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          responseDiv.textContent = "Сообщение успешно отправлено в Telegram!";
          responseDiv.style.color = "green";
        } else {
          responseDiv.textContent = "Ошибка при отправке сообщения.";
          responseDiv.style.color = "red";
        }
      })
      .catch(error => {
        console.error('Error:', error);
        responseDiv.textContent = "Ошибка при отправке сообщения.";
        responseDiv.style.color = "red";
      });
  }