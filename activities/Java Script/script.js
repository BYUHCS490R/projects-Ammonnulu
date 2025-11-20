document.getElementById('myForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pass').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const state = document.getElementById('state').value;
    const comment = document.getElementById('comments').value.trim();
    if (!fullname || !email || !password) {
        alert("Please fill in name, email, and password.");
        return;
    }

    if (isNaN(age) || age < 18 || age > 100) {
        alert("Age must be a number between 18 and 100.");
        return;
    }

    const formData = {
        fullname,
        email,
        password,
        age,
        state,
        comment
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert ("Form Submitted Successfully!")
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById("message").innerText = response.message;

            document.getElementById("myForm").innerHTML='';
            document.getElementById("myForm").style.opacity = "0.5";
        }
    };
    xhr.send(JSON.stringify(formData));
});