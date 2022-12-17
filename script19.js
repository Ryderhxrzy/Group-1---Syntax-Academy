// quiz
var questionBank= [
    {
        question : 'Polymorphism refers to a principle in biology in which an organism or species can have many different forms or stages',
        option : ['True','False','May be','None of the above'],
        answer : 'True'
    },
    {
        question : 'What is polymorphism in object-oriented programming?',
        option : ['When a class implements one or more interfaces and may also extend a superclass','The same as implementing a single interface','The same as inheritance with one or more super classes.','None of the above'],
        answer : 'When a class implements one or more interfaces and may also extend a superclass'
    },
    {
        question : 'Multiple inheritance of STATE in polymorphism refers to what situation?',
        option : ['The ability to inherit constants from multiple static classes','The ability to inherit method definitions from multiple classes','The ability to inherit fields from multiple classes','The ability to implement more than one interface'],
        answer : 'The ability to inherit constants from multiple static classes'
    },
    {
        question : 'Multiple inheritance of IMPLEMENTATION in polymorphism refers to what situation?',
        option : ['The ability to inherit constants from multiple static classes','The ability to implement more than one interface','The ability to inherit method definitions from multiple classes','The ability to inherit fields from multiple classes'],
        answer : 'The ability to inherit method definitions from multiple classes'
    },
    {
        question : 'Multiple inheritance of TYPE in polymorphism refers to what situation?',
        option : ['A class can implement more than one interface','A class can implement more than one interface AND An object can have multiple types','An object can have multiple types','None of the above'],
        answer : 'A class can implement more than one interface AND An object can have multiple types'
    },
    {
        question : 'Polymorphism in the Java programming language allows for extending multiple superclasses.',
        option : ['True','False','May be','None of the above'],
        answer : 'False'
    },
    {
        question : 'What is a methods signature?',
        option : ['The signature of a method is the name of the method the type of its return value.','The signature of a method is the name of the method and the names of its parameters.','The signature of a method is the name of the method and the data types of its parameters.','The signature of a method is the name of the method, its parameter list, and its return type.'],
        answer : 'The signature of a method is the name of the method and the data types of its parameters.'
    },
    {
        question : 'Here is a method definition: int compute( int a, double y ){ . . . .} Which of the following has a different signature?',
        option : ['int compute( int sum, double value){ . . . .}','double compute( int a, double y){ . . . .}','double compute( int sum, double y){ . . . .}','int compute( int a, int y){ . . . .}'],
        answer : 'int compute( int a, int y){ . . . .}'
    },
    {
        question : 'What must be true if a child of an abstract parent class does not override all of the parents abstract methods?',
        option : ['This is always an error.','The child class itself must be declared to be abstract.','Child classes are automatically non-abstract, so this is OK.','The parent class is in error.'],
        answer : 'The child class itself must be declared to be abstract.'
    },
    {
        question : 'What is the name of the class that is the ancestor to every other class in Java?',
        option : ['Object','Class','Root','Java'],
        answer : 'Object'
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
