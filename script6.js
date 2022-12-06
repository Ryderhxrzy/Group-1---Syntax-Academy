// quiz
var questionBank= [
    {
        question : 'A SWITCH case statement in Java is a ___ control statement.',
        option : ['iteration','Looping','Selection','Jump'],
        answer : 'Selection'
    },
    {
        question : 'Which is the alternative to SWITCH in Java language?',
        option : ['break, continue','if-else','for, while','goto, exit'],
        answer : 'if-else'
    },
    {
        question : 'What are the keywords used to implement a SWITCH case in Java language?',
        option : ['switch, case','default','break','All of the above'],
        answer : 'All of the above'
    },
    {
        question : 'A SWITCH statement accepts ___ type of data as input.',
        option : ['byte','short','int','All of the above'],
        answer : 'All of the above'
    },
    {
        question : 'The _____ statement tells the computer to skip to the end of the switch statement.',
        option : ['break','skip','end','continue'],
        answer : 'break'
    },
    {
        question : 'Which command in a Java switch statement is the catch-all for values that dont meet the criteria?',
        option : ['return','exit','break','default'],
        answer : 'default'
    },
    {
        question : 'A switch statement in Java accepts ___ as input data.',
        option : ['enum','String','enum and String','long'],
        answer : 'enum and String'
    },
    {
        question : 'Which version of Java did start supporting String as the input data type of a SWITCH?',
        option : ['JDK 5','JDK 6','JDK 7','JDK 8'],
        answer : 'JDK 7'
    },
    {
        question : 'What is the purpose of designing a SWITCH logic with a fall-through in Java?',
        option : ['To define ranges.','To define additions','To improve switch block performance','None of the above'],
        answer : 'To define ranges.'
    },
    {
        question : 'Choose TRUE or FALSE. A SWITCH can be used to compare values for high or low.',
        option : ['False','True','Maybe','None of the above'],
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