// quiz
var questionBank= [
    {
        question : 'Which of the following is NOT the Selection Control Structure?',
        option : ['if','if else','for','switch'],
        answer : 'for'
    },
    {
        question : 'The java does not include_____________',
        option : ['variables','operators','methods','global variable'],
        answer : 'global variable'
    },
    {
        question : 'Which is not operator?',
        option : ['Pointer','arithmetic','special','bitwise'],
        answer : 'Pointer'
    },
    {
        question : 'What will be printed as the output of the following program? public class testincr { public static void main(String args[]) { int i = 0;',
        option : ['i = 0','i = 1','i = 2','Error'],
        answer : 'i = 1'
    },
    {
        question : 'Which is one of the relational operators?',
        option : ['<','>','==','All of the above'],
        answer : 'All of the above'
    },
    {
        question : 'Boolean values are:',
        option : ['True / False','Right / Wrong','Yes / No','None of the above'],
        answer : 'True / False'
    },
    {
        question : 'What is if - else statement?',
        option : ['a loop that iterates, or repeats, until a condition is met','a loop that iterates, or repeats, for a set number of times','makes a decision based on input','creates spaces in memory that holds elements all of the same'],
        answer : 'makes a decision based on input'
    },
    {
        question : 'Java supports six relational operators that are used to make comparisons: =, <, >, <=, >=, =!',
        option : ['True','False','May be','None of the above'],
        answer : 'False'
    },
    {
        question : 'Is this code segment is correct? if(quizScore == 10) System.out.println("Perfect score");',
        option : ['Yes','No','May be','None of the above'],
        answer : 'Yes'
    },
    {
        question : 'Of the following if statements, which one correctly executes three instructions if the condition is true?',
        option : ['if (x < 0) a = b * 2; y = x; z = a – y;','{ if (x <0) a = b*2; y=x; z=a-y; }','if { (x < 0) a = b * 2; y = x; z = a – y; }','if (x < 0) { a = b * 2; y = x; z = a - y; }'],
        answer : 'if (x < 0) { a = b * 2; y = x; z = a - y; }'
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