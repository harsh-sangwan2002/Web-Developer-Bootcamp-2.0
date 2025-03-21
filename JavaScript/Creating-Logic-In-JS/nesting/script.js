const password = prompt("Please enter a new password");

if (password.length >= 6) {
    console.log("Long enough password")

    if (password.indexOf(' ') === -1)
        console.log("Good job! No space in password")

    else
        console.log("Password cannot contain spaces")
}

else {
    console.log("Password too short! Must be at least 6 characters")
}