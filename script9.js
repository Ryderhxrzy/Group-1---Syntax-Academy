// quiz
var questionBank= [
    {
        question : 'When you know exactly how many times the loop needs to repeat you should use a',
        option : ['repeat loop','for loop','while loop','try case loop'],
        answer : 'for loop'
    },
    {
        question : 'What is the minimum number of times that ANY for loop will repeat?',
        option : ['0','1','2','10'],
        answer : '0'
    },
    {
        question : 'The best loop to use when working with an array is',
        option : ['for','for-each','while','do while'],
        answer : 'for-each'
    },
    {
        question : 'A for-each loop is initialized with',
        option : ['a counter, a comparison and an increment value','an array','a set of conditions','None of the above'],
        answer : 'an array'
    },
    {
        question : 'What does the following code do? for (int i = 0; i < 50; i++) { System.out.println(i); }',
        option : ['Print out the numbers from 1 - 50','Print out the numbers from 0 - 49','Print out 1 and 50','Print out 0 and 49'],
        answer : 'Print out the numbers from 0 - 49'
    },
    {
        question : 'How many times will this loop repeat? for (int i = 0; i <= 10; i = i + 2) { System.out.println(i); }',
        option : ['0','10','5','6'],
        answer : '6'
    },
    {
        question : 'The structure of a for loop is for (statement 1, statement 2, statement 3) { } The purpose of Statement 1 is to:',
        option : ['Define a variable to be used as a counter - usually an integer, but can be a double','Define a variable to be used as a counter - can only be an integer','Check the value of the counter in the loop to see if the loop must end','Increase the value of the counter in the loop'],
        answer : 'Define a variable to be used as a counter - usually an integer, but can be a double'
    },
    {
        question : 'The structure of a for loop is for (statement 1, statement 2, statement 3) { } The purpose of Statement 2 is to:',
        option : ['Define a variable to be used as a counter - usually an integer, but can be a double','Define a variable to be used as a counter - can only be an integer','Check the value of the counter in the loop to see if the loop must end','Increase the value of the counter in the loop'],
        answer : 'Check the value of the counter in the loop to see if the loop must end'
    },
    {
        question : 'The structure of a for loop is for (statement 1, statement 2, statement 3) { } The purpose of Statement 3 is to:',
        option : ['Define a variable to be used as a counter - usually an integer, but can be a double','Define a variable to be used as a counter - can only be an integer','Check the value of the counter in the loop to see if the loop must end','Increase the value of the counter in the loop'],
        answer : 'Increase the value of the counter in the loop'
    },
    {
        question : 'What happens if the code in the loop does not change one of the variables used in the condition of a while loop?',
        option : ['the loop can never end','the loop can never start','nothing, there is no problem','None of the above'],
        answer : 'the loop can never end'
    },

]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Qestion '+(i+1)+'. '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//function to display previous question


//click events to next button
next.addEventListener('click',nextQuestion);

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}

displayQuestion();

function previousQuestion() {
  if (i > 0) {
    i = i - 1;
    displayQuestion();
  }
}

    var previous = document.querySelector('.previous');
    previous.addEventListener('click', previousQuestion);
