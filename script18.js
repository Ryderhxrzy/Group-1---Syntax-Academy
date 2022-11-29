// quiz
var questionBank= [
    {
        question : 'When related classes have the same ____, they can be used interchangeably in a program.',
        option : ['value','definition','interface','hierarchy'],
        answer : 'interface'
    },
    {
        question : 'If more than one class implements an interface, its methods are ____.',
        option : ['aggregated','public','dependent','polymorphic'],
        answer : 'polymorphic'
    },
    {
        question : 'When the element type of an array is a(n) ____ or interface, objects of those types or any subtype can be directly inserted into the array.',
        option : ['primitive','concrete','abstract','reference'],
        answer : 'reference'
    },
    {
        question : 'Methods in a subclass can be related to methods in a superclass in all of the following ways EXCEPT ____.',
        option : ['implementation of a concrete method.','extension','overriding','finality'],
        answer : 'implementation of a concrete method.'
    },
    {
        question : 'The relationship that allows an object of one class to send a message to an object of another class is called ____.',
        option : ['inheritance','superclass','dependency','aggregation'],
        answer : 'dependency'
    },
    {
        question : 'The ____ process uses the clone message to obtain copies.',
        option : ['duplication','deep copying','aliasing','overriding'],
        answer : 'deep copying'
    },
    {
        question : 'A(n) ____________________ method cannot be overridden by a subclass.',
        option : ['final','private','public','static'],
        answer : 'final'
    },
    {
        question : 'When the subclass method is intended as a replacement of the superclass method.',
        option : ['Overriding','Dependency','Extension','Aggregation'],
        answer : 'Overriding'
    },
    {
        question : 'When the subclass method does not exist in the superclass.',
        option : ['Aggregation','Overriding','Dependency','Extension'],
        answer : 'Extension'
    },
    {
        question : 'When an object of one class contains objects of another class as structural components.',
        option : ['Aggregation','Extension','Overriding','Inheritance'],
        answer : 'Aggregation'
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
    question.innerHTML= 'Qestion.'+(i+1)+' '+questionBank[i].question;
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