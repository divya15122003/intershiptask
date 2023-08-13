// Dummy user data (for demonstration purposes)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ];
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = event.target.username.value;
    const password = event.target.password.value;
  
    // Check if the user exists and the password is correct
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      showSuccessMessage('Login successful!');
      // Redirect to the secured page or perform any action you want
    } else {
      showErrorMessage('Invalid username or password. Please try again.');
    }
  });
  
  function showSuccessMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = '#008000';
  }
  
  function showErrorMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = '#ff0000';
  }
  