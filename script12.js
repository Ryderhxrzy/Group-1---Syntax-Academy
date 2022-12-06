// quiz
var questionBank= [
    {
        question : 'How many types of access modifiers are in Java?',
        option : ['1','2','3','4'],
        answer : '4'
    },
    {
        question : 'If no keyword is given, the variable will be considered as:',
        option : ['Protected','Default','Private','Public'],
        answer : 'Default'
    },
    {
        question : 'Which access modifier is accessible both in the same package non-sub class, and in the different package non-sub class.',
        option : ['Private','Public','Default','Protected'],
        answer : 'Public'
    },
    {
        question : '"this" keyword can be used for referring to an instance variable of the current class.',
        option : ['True','False','May be','none of the above'],
        answer : 'True'
    },
    {
        question : 'Which of this access specifies can be used for a class so that its members can be accessed by a different class in the same package?',
        option : ['Public','Protected','No Modifier','All of the mentioned'],
        answer : 'All of the mentioned'
    },
    {
        question : 'Which of these access specifiers can be used for a class so that its members can be accessed by a different class in the different package?',
        option : ['Public','Protected','Private','No Modifier'],
        answer : 'Public'
    },
    {
        question : 'Which of the following is an incorrect statement about packages?',
        option : ['Package defines a namespace in which classes are stored','A package can contain other package within it','Java uses file system directories to store packages','A package can be renamed without renaming the directory in which the classes are stored'],
        answer : 'A package can be renamed without renaming the directory in which the classes are stored'
    },
    {
        question : 'For which purpose packages are used in Java?',
        option : ['Categorizes data','Organizing java classes into namespaces','faster compilation','None of These'],
        answer : 'Organizing java classes into namespaces'
    },
    {
        question : 'A package is a collection of',
        option : ['classes','interfaces','editing tools','classes and interfaces'],
        answer : 'classes and interfaces'
    },
    {
        question : 'If a variable is declared as private , then it can be used in _______.',
        option : ['Any class of any package.','Any class of same package.','Only in the same class.','Only subclass in that package.'],
        answer : 'Only in the same class.'
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