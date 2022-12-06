// quiz
var questionBank= [
    {
        question : 'When a piece of code runs unintentionally forever it is known as______',
        option : ['An infinite loop','A long loop','A broken loop','A for loop'],
        answer : 'An infinite loop'
    },
    {
        question : 'A condition is______',
        option : ['a statement that is either True or False','a string','an integer','a list'],
        answer : 'a statement that is either True or False'
    },
    {
        question : 'What does the code output? int p = 0; while (p < 3) { p++; system.out.println(p); }',
        option : ['0 1 2 3','1 2 3','0 1 2','0 2 1 3'],
        answer : '1 2 3'
    },
    {
        question : 'A while loop runs code as long as the condition(s) is/are:',
        option : ['False','Positive','True','Negative'],
        answer : 'True'
    },
    {
        question : 'What does the code output? int p = 0; while (p < 0) { System.out.print(“hi”); }',
        option : ['hi','it won’t output anything','it will output an error!','it will output “hi” infinitely'],
        answer : 'it won’t output anything'
    },
    {
        question : 'The do/while loop breaks when the boolean test condition is FALSE.',
        option : ['True','False','May be','None of the above'],
        answer : 'False'
    },
    {
        question : 'The do/while loop is a post-test loop.',
        option : ['True','False','May be','None of the above'],
        answer : 'True'
    },
    {
        question : 'The while loop is known as a post-test loop.',
        option : ['True','False','May be','None of the above'],
        answer : 'False'
    },
    {
        question : 'The while loop will always execute at least once. (A one-trip loop.)',
        option : ['True','False','May be','None of the above'],
        answer : 'False'
    },
    {
        question : 'The do/while loop will always execute at least once. (A one-trip loop.)',
        option : ['False','May be','True','None of the above'],
        answer : 'True'
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