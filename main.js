document.getElementById('formBottom').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
  
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      // Optionally, you can add more specific error handling, styling, or other actions here
    } else {
      // Passwords match, proceed with form submission
      this.submit(); // Submits the form
    }
  });
  
  //So I got all of this from Chat GPT - I was just trying to see if it'd work and had no luck but wanted to give it a shot.