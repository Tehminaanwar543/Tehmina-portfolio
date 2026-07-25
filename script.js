function startQuiz() {

    let name = prompt("Enter your name:");

    if (name) {
        alert(
            "Welcome " + name + " 🎉\nYour Smart Quiz is starting!"
        );
    } 
    else {
        alert(
            "Please enter your name to start the quiz."
        );
    }

}
