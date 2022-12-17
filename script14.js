// quiz
var questionBank= [
    {
        question : 'What is the job of a Java class fields?',
        option : ['Used for communication with an object of this class type','Used for calculations when an object is constructed','Allows for import statements in this class','Store the state of an object of this class type'],
        answer : 'Store the state of an object of this class type'
    },
    {
        question : 'What of the following is the default value of an instance variable?',
        option : ['null','0','Depends upon the type of variable','Not assigned'],
        answer : 'Depends upon the type of variable'
    },
    {
        question : 'Can we have multiple classes in same java file?',
        option : ['True','False','May be','None of the above'],
        answer : 'True'
    },
    {
        question : 'What is the return type of Constructors?',
        option : ['int','float','void','none of the mentioned'],
        answer : 'none of the mentioned'
    },
    {
        question : 'Which of this statement is incorrect?',
        option : ['All object of a class are allotted memory for the all the variables defined in the class','If a function is defined public it can be accessed by object of other class by inheritance.','main() method must be made public','All object of a class are allotted memory for the methods defined in the class'],
        answer : 'All object of a class are allotted memory for the methods defined in the class'
    },
    {
        question : 'Write method header to Return a sales commission, given the sales amount and the commission rate',
        option : ['public static double getCommission(double salesAmount)','public static double getCommission(double salesAmount, double commissionRate)','double getCommission(double salesAmount, double commissionRate)','public static double(double salesAmount, double commissionRate)'],
        answer : 'public static double getCommission(double salesAmount, double commissionRate)'
    },
    {
        question : 'Write method header to Return a square root of a number',
        option : ['public static void double sqrt(value)','public static void double sqrt(double value)','public static double sqrt(value)','public static double sqrt(double value)'],
        answer : 'public static double sqrt(double value)'
    },
    {
        question : 'The body of a method definition is contained within a set of ______________.',
        option : ['parentheses','rectangle brackets','curly braces','angle brackets'],
        answer : 'curly braces'
    },
    {
        question : 'What would be the behaviour if this() and super() used in a method?',
        option : ['Runs sucessfully','Throws exceptions','Runtime error','Compile time error'],
        answer : 'Compile time error'
    },
    {
        question : 'Abstract class cannot have a constructor. It is true or false.',
        option : ['True','False','May be','None of the above'],
        answer : 'False'
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
