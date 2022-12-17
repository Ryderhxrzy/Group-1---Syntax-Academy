// quiz
var questionBank= [
    {
        question : 'An object is an instance of a:',
        option : ['parameter','method','class','application'],
        answer : 'class'
    },
    {
        question : 'As a blueprint is a design for a house, a class is a design for a:',
        option : ['object','variable','constant','statement'],
        answer : 'object'
    },
    {
        question : 'A _____________ is a group of classes.',
        option : ['bundle','container','panel','packet'],
        answer : 'bundle'
    },
    {
        question : 'The Utilities package contains the ____________ class(es).',
        option : ['Scanner and Random','Point','String and Math','API'],
        answer : 'Scanner and Random'
    },
    {
        question : 'The Lang class contains the ________ class(es).',
        option : ['Scanner and Random','String and Math','javax.swing','Point'],
        answer : 'String and Math'
    },
    {
        question : 'The Scanner class contains a method called  ___________ that reads user input that is a integer.',
        option : ['Println','pow','Length()','NextInt'],
        answer : 'NextInt'
    },
    {
        question : 'The Scanner class is not static class and therefore does require a ____ operator to create an object.',
        option : ['","','+','new','-'],
        answer : 'new'
    },
    {
        question : 'The ________ class does not require the use of the new operator because methods are invoked through the class name.',
        option : ['Scanner','Math','Randon','None of these'],
        answer : 'Math'
    },
    {
        question : 'The classes of the _______ package are already available and therefore do not require an import declaration.',
        option : ['java.util.Scanner','java.util.*','java.lang','java.util.Random'],
        answer : 'java.lang'
    },
    {
        question : 'The "." operator invokes a ______________.',
        option : ['String object','parameter','object','method'],
        answer : 'method'
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
