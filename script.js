overallscore = 50
questions = ['What is your first name?', 'What is your phone number? (no spaces)', 'How old are you?', "How many presents do you want to get this Father's Day?"]
question = 0
function askQuestion(q) {
    var qBox = document.getElementById('question')
    qBox.innerHTML = q
}
function submitClicked() {
    var value1 = document.getElementById('input').value

    console.log(typeof value1)
    console.log(value1)
    if (question == 0) {
        if (value1 == 'simon') {
            alert('Correct answer! Your Dad Approval Rating increased!')
            overallscore += 10
        } else {
            alert("You are a very bad liar, Simon. (Your Dad Approval rating decreased.)")
            overallscore -= 15
        }
        question += 1
        askQuestion(questions[question])
    } else if (question == 1) {
        if ((value1) == '0432620195') {
            alert('Thanks! Now I can call you during work! Your Dad Approval Rating increased!')
            overallscore += 10
        } else {
            alert("Nice try, bucko! I know who you are. I know your phone number. Nothing is secret from me. (Your Dad Approval rating decreased.)")
            overallscore -= 15
        }
        question += 1
        askQuestion(questions[question])
    } else if (question == 2) {
        if (value1 == '41') {
            alert('Nice one! Your Dad Approval Rating increased!')
            overallscore += 10
        } else {
            alert('Wait for it...')
            alert("You're OLD. (Your Dad Approval rating decreased.)")
            overallscore -= 15
        }
        question += 1
        askQuestion(questions[question])
    } else if (question == 3) {
        if (value1 < 1) {
            alert("Thanks! Now I don't have to buy you anything! Your Dad Approval Rating increased!")
            overallscore += 20
        } else if (value1 < 10) {
            alert("You are quite greedy! (Your Dad Approval rating decreased.)")
            overallscore -= 2*value1
        } else {
            alert("You are exceedingly greedy! (Your Dad Approval Rating decreased a lot.")
            overallscore -= 20
        }
        question += 1
        completeQuiz()

    }
}
function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}
function completeQuiz() {
    document.getElementById('score').innerHTML = `Your Dad Approval Rating is ${overallscore}%!`
    
    document.getElementById('prize').innerHTML = 'You won...'
    
    document.getElementById('prize').innerHTML = 'You won... a HUG!'
    
    document.getElementById('thanks').innerHTML = 'Thanks for playing!'
}
askQuestion(questions[question])