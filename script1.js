//Login Function
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var a = document.getElementById("log");
var b = document.getElementById("reg");
var w = document.getElementById("other");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
  w.style.visibility = "hidden";
  b.style.color = "#fff";
  a.style.color = "#000";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
  w.style.visibility = "visible";
  a.style.color = "#fff";
  b.style.color = "#000";
}
  
// CheckBox Function
function goFurther(){
  if (document.getElementById("chkAgree").checked == true) {
    document.getElementById('btnSubmit').style = 'background: #0077b6;';
  }
  else{
    document.getElementById('btnSubmit').style = 'background: lightgray;';
  }
}

function google() {
  	window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
}

// For switching between navigation menus in mobile mode
var i = 2;
function switchTAB() {
  var x = document.getElementById("list-switch");
  if(i%2 == 0) {
    document.getElementById("list-switch").style= "display: grid; height: 50vh; margin-left: 5%;";
    document.getElementById("search-switch").style= "display: block; margin-left: 5%;";
  }else {
    document.getElementById("list-switch").style= "display: none;";
    document.getElementById("search-switch").style= "display: none;";
  }
  i++;
}

// quiz
var questionBank= [
    {
        question : 'Which of the following is a correct header line for main in a Java program?',
        option : ['public static void main(args)','public static void main(String args)','public static void main(args [ ])','public static void main(String [ ] args)'],
        answer : 'public static void main(String [ ] args)'
    },
    {
        question : 'Who developed Java?',
        option : ['James Gosling','Steve Jobs','Bill Gates','Mark Zuckerberg'],
        answer : 'James Gosling'
    },
    {
        question : 'When was java programming language created?',
        option : ['1995','1991','1999','2001'],
        answer : '1991'
    },
    {
        question : 'What does a comment look like in Java?',
        option : ['//comment','||comment||','==comment','||comment'],
        answer : '//comment'
    },
    {
        question : 'What is the old name for Java Programming?',
        option : ['Java 2','Java','Oak','C++'],
        answer : 'Oak'
    },
    {
        question : 'What method is used to display text on the console?',
        option : ['System.out','String','Display','println();'],
        answer : 'println();'
    },
    {
        question : 'Java is case sensitive?',
        option : ['True','False','May be','None of the above'],
        answer : 'True'
    },
    {
        question : 'What does multi comment look like in Java?',
        option : ['/*comment*/','//comment//','|*comment*|','comment'],
        answer : '/*comment*/'
    },
    {
        question : 'All statements must end with:',
        option : ['full stop (.)','comma (,)','semi colon (;)','exclamation mark (!)'],
        answer : 'semi colon (;)'
    },
    {
        question : 'Methods define the behavior of the class.',
        option : ['static void Main()','class','import java','System'],
        answer : 'static void Main()'
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

//click events to continue button
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





