// quiz
var questionBank= [
    {
        question : 'What is the process of defining a method in a subclass having same name & type signature as a method in its superclass?',
        option : ['Method overloading','Method overriding','Method hiding','None of the mentioned'],
        answer : 'Method overriding'
    },
    {
        question : 'If a variable is declared as private , then it can be used in _______.',
        option : ['Any class of any package.','Any class of same package.','Only in the same class.','Only subclass in that package.'],
        answer : 'Only in the same class.'
    },
    {
        question : 'What do we call the creation of methods that all have the same name but different implementations?',
        option : ['overloading','inheritance','polymorphism','parameters'],
        answer : 'overloading'
    },
    {
        question : 'What is the signature (the information do we actually care about for overloading purposes) of this method? public int sum(int a, int b)',
        option : ['public int sum(int a, int b)','int sum(int a, int b)','sum(int a, int b)','sum(int, int)'],
        answer : 'sum(int, int)'
    },
    {
        question : 'First line of a method which defines its name, return-type and list of parameters is known as ______________.',
        option : ['Function Prototype','Function Signature','Function Declaration','None of theseFunction Prototype'],
        answer : 'Function Prototype'
    },
    {
        question : 'Numbers and types of arguments used to define a method forms __________________.',
        option : ['Function Signature','Function Prototype','Actual Parameter','None of these'],
        answer : 'Function Signature'
    },
    {
        question : 'A Unicycle class requires a Tire class. In other words:',
        option : ['Tire HAS-A Unicycle','Unicycle HAS-A Tire','None of the above','All of the above'],
        answer : 'Unicycle HAS-A Tire'
    },
    {
        question : 'Method Overriding is the example of',
        option : ['Overloading','Run-Time Polymorphism','Compile-time Polymorphism','None of the above'],
        answer : 'Run-Time Polymorphism'
    },
    {
        question : 'What differentiates a constructor and a method?',
        option : ['methods have no access modifier','constructors have no return type','methods have no return type','constructors have no access modifier'],
        answer : 'constructors have no return type'
    },
    {
        question : 'Apart from instantiation what are constructors used for?',
        option : ['initialising object lifecycle','set object behaviour','set object scope','initialising object state'],
        answer : 'initialising object state'
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