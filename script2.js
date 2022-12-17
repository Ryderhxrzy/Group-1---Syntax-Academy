// quiz
var questionBank= [
    {
        question : 'What is the valid identifiers in Java?',
        option : ['123syntax','syntaxAcademy','?syntax_','syntax234??'],
        answer : 'syntaxAcademy'
    },
    {
        question : 'Which is correct to declare variable?',
        option : ['int count;','int – count.','Int count =;','int "count"'],
        answer : 'int count;'
    },
    {
        question : 'Name the data type: "true"',
        option : ['boolean','char','double','String'],
        answer : 'String'
    },
    {
        question : 'Name the data type: 1.0',
        option : ['double','int','char','boolean'],
        answer : 'double'
    },
    {
        question : 'Name the data type: 3',
        option : ['int','char','String','float'],
        answer : 'int'
    },
    {
        question : 'Name the data type: false',
        option : ['String','boolean','int','float'],
        answer : 'boolean'
    },
    {
        question : 'What data type would you use for storing the number of students in a class?',
        option : ['boolean','String','double','int'],
        answer : 'int'
    },
    {
        question : 'How would you declare a variable storing a persons name?',
        option : ['string name = "Jeff";','name String = "Jeff";','String name = Jeff;','String name = "Jeff";'],
        answer : 'String name = "Jeff";'
    },
    {
        question : 'How would you declare a variable storing the tax rate?',
        option : ['int taxRate = 5.1','taxRate = "5.1";','double taxRate = 5.1;','double taxRate = "5.1";'],
        answer : 'double taxRate = 5.1;'
    },
    {
        question : 'How would you declare a variable that tells you that someone passed a class?',
        option : ['boolean passed = [true]; ','boolean passed = true;','passed = true;','String passed = "true";'],
        answer : 'boolean passed = true;'
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

function previousQuestion() {
  if (i > 0) {
    i = i - 1;
    displayQuestion();
  }
}

    var previous = document.querySelector('.previous');
    previous.addEventListener('click', previousQuestion);
