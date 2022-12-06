// quiz
var questionBank= [
    {
        question : 'Which of the following is the correct syntax for writing a method with parameters?',
        option : ['public static void example(x: int, y: int) {}','public static void example(x, y) {}','public static void example(int x, int y) {}','public static void example(int x,y) {}'],
        answer : 'public static void example(int x, int y) {}'
    },
    {
        question : 'Why do we use methods in Java programming?',
        option : ['Break down our program into smaller parts','Avoid repeating code','Make our program more readable','All of the above'],
        answer : 'All of the above'
    },
    {
        question : 'What are parameters?',
        option : ['The value that a method returns.','The values that a method prints to the screen.','The type that is given to a variable.','The formal names given to the data/variables that are passed into a method.'],
        answer : 'The formal names given to the data/variables that are passed into a method.'
    },
    {
        question : 'What is the output of the code below? public class ExampleVoid { public static void main(String[] args) { methodRankPoints(255.7); }',
        option : ['Rank:A1','Rank:A2','Rank:A3','Rank:A4'],
        answer : 'Rank:A1'
    },
    {
        question : 'Java method (function/module) definitions can contain which of the following parts in their headers?',
        option : ['An access modifier such as public or private','An optional access specifier called static','a return type or void','all of the above'],
        answer : 'all of the above'
    },
    {
        question : 'Java method definitions require which of the following parts in their headers?',
        option : ['A method name','a set of variable','a comma-separated parameter list','all of the above'],
        answer : 'A method name'
    },
    {
        question : 'The body of a method definition is contained within a set of ______________.',
        option : ['parentheses','rectangle brackets','curly braces','angle brackets'],
        answer : 'curly braces'
    },
    {
        question : 'A method must be called from an object unless the method definition contains the keyword ___________ in its header.',
        option : ['public','void','static','int'],
        answer : 'static'
    },
    {
        question : 'Methods are called (instantiated/invoked) by referencing the __________ of the method and any optional _____________ list.',
        option : ['data type, parameter','method name, argument','public keyword, parameter','static keyword, argument'],
        answer : 'method name, argument'
    },
    {
        question : 'Methods that contain the _______ keyword in the data type position do not return any data, so they can simply be called without being part of a larger statement.',
        option : ['void','static','public','boolean'],
        answer : 'void'
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