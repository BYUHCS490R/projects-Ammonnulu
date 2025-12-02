document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault(); // prevent page reload
  document.getElementById('contactForm').reset(); // reset form
  document.getElementById('successMessage').style.display = 'block'; // show success message
});