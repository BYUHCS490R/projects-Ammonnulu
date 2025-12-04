document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('contactForm').reset();
    document.getElementById('successMessage').style.display = 'block';

    alert("Form Submitted");

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const favoritedish = document.getElementById('dish').value;
    const recipesuggestions = document.getElementById('suggestion').value;
    const rating = document.getElementById('rating').value;

    // if (!name || !email) {
    //     alert("You need a name and email.");
    //     return;
    // }
    
    const formData = {
        name: name,
        email: email,
        favoritedish: favoritedish,
        recipesuggestions: recipesuggestions,
        rating: rating,
    };
    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form submitted successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);

            document.getElementById('contactForm').innerHTML = '';
            // document.getElementById('message').innerText = response.message;

        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            alert("Error submitting form.");
        }
    };
    xhr.send(JSON.stringify(formData));

});