$(document).ready(function () {

    var Questions = [{
        //Question One:
        question: "How can you tell the age of a shark?",
        answerList: ["Rings on vertebre", "Size", "Blood test", "Size of fins"],
        answer: 0,
        image: "./assets/images/open.gif"
    }, {
        //Question Two:
        question: "What is the fastest shark?",
        answerList: ["Great White", "Mako", "Nurse", "Tiger"],
        answer: 1,
        image: "./assets/images/mako.gif"
    }, {
        //Question Three:
        question: "Which shark does not need salt water to survive?",
        answerList: ["Whale & Bull", "Reef & Tiger", "Tiger & River", "Bull & River"],
        answer: 3,
        image: "./assets/images/bull.gif"
    }, {
        //Question Four:
        question: "Which kind of shark is most likely to be found in a large group?",
        answerList: ["Great White", "Hammerhead", "Reef", "River"],
        answer: 1,
        image: "./assets/images/hammerhead.gif"
    }, {
        //Question Five:
        question: "What is the biggest shark?",
        answerList: ["Whale", "Great White", "Tiger", "Frilled"],
        answer: 0,
        image: "./assets/images/whaleshark.gif"
    }, {
        //Question Six: 
        question: "How many species of sharks are known?",
        answerList: ["300", "1050", "440", "560"],
        answer: 2,
        image: "./assets/images/nurse.gif"
    }, {
        //Question Seven: 
        question: "How old is the oldest shark fossile to be found?",
        answerList: ["234 million", "55 million", "765 million", "409 million"],
        answer: 3,
        image: "./assets/images/fossil.jpg"
    }, {
        //Question Eight: 
        question: "Which shark has been found in the deepest water?",
        answerList: ["Portuguese", "Bull", "Cookie Cutter", "Great White"],
        answer: 0,
        image: "./assets/images/potuguese.jpg"
    }, {
        //Question Nine: 
        question: "Other than sight, smell, taste, touch and hearing, what can sharks also sense?",
        answerList: ["Proprioception", "Heat", "Electricity", "Sonar"],
        answer: 2,
        image: "./assets/images/senses.gif"
    }, {
        //Question Ten: 
        question: "What cleaning compound can be found in shark teeth?",
        answerList: ["Fluoride", "Pine", "Beach", "Borax"],
        answer: 0,
        image: "./assets/images/sharktooth.jpg"
    }, {
        //Question Eleven: 
        question: "What do sharks have as structure instead of bones?",
        answerList: ["Silk", "Cartilage", "Epithelial", "Cuboidal"],
        answer: 1,
        image: "./assets/images/tissue.gif"
    }, {
        //Question Twelve: 
        question: "What kind of scales do sharks have?",
        answerList: ["Cosmoid", "Cycloid", "Ganoid", "Placoid"],
        answer: 3,
        image: "./assets/images/scales.gif"
    }, {
        //Question Thirteen: 
        question: "What shark was the largest predator ever lived?",
        answerList: ["Great White", "Megalodon", "Whale", "Bull"],
        answer: 1,
        image: "./assets/images/megalodon.gif"
    }, {
        //Question Fourteen: 
        question: "Closest relatives to sharks?",
        answerList: ["Dolphins", "Jelly Fish", "Whales", "Skates & Rays"],
        answer: 3,
        image: "./assets/images/ray.gif"
    }, {
        //Question Fifteen: 
        question: "What is this sharks name?",
        answerList: ["Cookie Cutter", "Black tip", "Frilled", "Tiger"],
        answer: 0,
        image: "./assets/images/cookiecutter.jpg"
    }, {
        //Question Sixteen: 
        question: "How many rows of teeth do Great Whites usually have?",
        answerList: ["3-4", "1-2", "4-5", "2-3"],
        answer: 3,
        image: "./assets/images/rows.jpg"
    }, {
        //Question Seventeen: 
        question: "What is it called when a shark jumps out of the water?",
        answerList: ["Diving", "Jumping", "Breaching", "Sailing"],
        answer: 2,
        image: "./assets/images/breaching.gif"
    }]

    
    var correctChoices = 0;
    var wrongChoices = 0;

    var currentQuestion = 0;

    var unanswered = 0;
    var answered = 0;
    var userSelect = 0;

    var sec = 0;
    var time = 0;

    var messages = {
        correct: "Correct!",
        incorrect: "Incorrect!",
        endTime: "Time Is Up!",
        finished: "Game Over",
    }

    function startGame() {
        $('#finalMessage').empty();
        $('#correctAnswers').empty();
        $('#wrongAnswers').empty();
        $('#unanswered').empty();
    
        currentQuestion = 0;
        correctChoices = 0;
        wrongChoices = 0;
        unanswered = 0;
       
        newQuestion()
    }

    
    function countDown() {
        sec = 10;
        $('#timer').html('<h3> Time Left: ' + sec + '</h3>');
        answered = true;
        time = setInterval(showCountdDown, 1000);
    }

    function showCountdDown() {
        sec--;
        $('#timer').html('<h3>Time Left: ' + sec + '</h3>');
        if (sec < 1) {
            clearInterval(time);
            answered = false;
            answerPage()
        }
    }


    function newQuestion() {
        $('#message').empty();
        $('#correctedAnswer').empty();
        answered = true;
        var img = $('<img id="sharkimg">');
        $("img").hide();
        img.attr("src", Questions[currentQuestion].image);
        img.appendTo("#image");


        $('#currentQuestion').html('Question #' + (currentQuestion + 1) + '/' + Questions.length);
        $('.question').html('<h2>' + Questions[currentQuestion].question + '</h2>');
        for (var i = 0; i < 4; i++) {
            var choices = $('<div>');
            choices.text(Questions[currentQuestion].answerList[i]);
            choices.attr({ 'data-index': i });
            choices.addClass('thisChoice');
            $('.answerList').append(choices);
        }

        countDown();


        $('.thisChoice').on('click', function () {
            userSelect = $(this).data('index');
            clearInterval(time);
            answerPage()
        });
    }

    
    function answerPage() {
        $('#currentQuestion').empty();
        $('.thisChoice').empty();
        $('.question').empty();

        var rightAnswerText = Questions[currentQuestion].answerList[Questions[currentQuestion].answer];
        var rightAnswerIndex = Questions[currentQuestion].answer;

        if ((userSelect == rightAnswerIndex) && (answered == true)) {
            correctChoices++;
            $('#message').html(messages.correct);
            
        } else if ((userSelect != rightAnswerIndex) && (answered == true)) {
            wrongChoices++;
            $('#message').html(messages.incorrect);
            $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
        } else {
            unanswered++;
            $('#message').html(messages.endTime);
            $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
            answered = true;
        }
        
        if (currentQuestion == (Questions.length - 1)) {
            setTimeout(scoreBoard, 1000)
        } else {
            currentQuestion++;
            setTimeout(newQuestion, 2000);
        }
    }

    function scoreBoard() { 
        $('#timer').empty();
        $('#message').empty();
        $('#correctedAnswer').empty();

        $('#finalMessage').html(messages.finished);

        $('#correctAnswers').html("Correct Answers: " + correctChoices);
        $('#wrongAnswers').html("Wrong Answers: " + wrongChoices);
        $('#unanswered').html("Unanswered: " + unanswered);
         
        $('#startAgainBtn').addClass('reset');
        $('#startAgainBtn').show();
        $('#startAgainBtn').html('Start Over?');
    }


    $('#startBtn').on('click', function () {
        $(this).hide();
        startGame();
    });

    $('#startAgainBtn').on('click', function () {
        $(this).hide();
        startGame();
    });

});


