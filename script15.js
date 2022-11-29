// quiz
var questionBank= [
    {
        question : 'What is the stored in the object obj in following lines of Java code? box obj;',
        option : ['Memory address of allocated memory of object','NULL','Any arbitrary pointer','Garbage'],
        answer : 'NULL'
    },
    {
        question : 'Which of these keywords is used to make a class?',
        option : ['class','struct','int','none of the mentioned'],
        answer : 'class'
    },
    {
        question : 'Which of the following is a valid declaration of an object of class Box?',
        option : ['Box obj = new Box();','Box obj = new Box;','obj = new Box();','new Box obj;'],
        answer : 'Box obj = new Box();'
    },
    {
        question : 'Which of these operators is used to allocate memory for an object?',
        option : ['malloc','alloc','new','give'],
        answer : 'new'
    },
    {
        question : 'Which of these statement is incorrect?',
        option : ['Every class must contain a main() method','Applets do not require a main() method at allc','There can be only one main() method in a programc','main() method must be made public'],
        answer : 'Every class must contain a main() method'
    },
    {
        question : 'Which of the following statements is correct?',
        option : ['Public method is accessible to all other classes in the hierarchy','Public method is accessible only to subclasses of its parent class','Public method can only be called by object of its class','Public method can be accessed by calling object of the public class'],
        answer : 'Public method is accessible to all other classes in the hierarchy'
    },
    {
        question : 'What is the return type of a method that does not return any value?',
        option : ['int','float','void','double'],
        answer : 'void'
    },
    {
        question : 'What is the process of defining more than one method in a class differentiated by method signature?',
        option : ['Function overriding','Function overloading','Function doubling','None of the mentioned'],
        answer : 'Function overloading'
    },
    {
        question : 'Which of the following is a method having same name as that of it’s class?',
        option : ['finalize','delete','class','constructor'],
        answer : 'constructor'
    },
    {
        question : ' Which method can be defined only once in a program?',
        option : ['main method','finalize method','static method','private method'],
        answer : 'main method'
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