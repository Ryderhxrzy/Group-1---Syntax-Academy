// quiz
var questionBank= [
    {
        question : 'Which among the following best describes encapsulation?',
        option : ['It is a way of combining various data members into a single unit','It is a way of combining various member functions into a single unit','It is a way of combining various data members and member functions into a single unit which can operate on any data','It is a way of combining various data members and member functions that operate on those data members into a single unit'],
        answer : 'It is a way of combining various data members and member functions that operate on those data members into a single unit'
    },
    {
        question : 'If data members are private, what can we do to access them from the class object?',
        option : ['Create public member functions to access those data members','Create private member functions to access those data members','Create protected member functions to access those data members','Private data members can never be accessed from outside the class'],
        answer : 'Create public member functions to access those data members'
    },
    {
        question : 'Which feature can be implemented using encapsulation?',
        option : ['Inheritance','Abstraction','Polymorphism','Overloading'],
        answer : 'Abstraction'
    },
    {
        question : 'Which inheritance in java programming is not supported',
        option : ['Multiple inheritance','hierarchal inheritance','Multilevel inheritance','Single inheritance'],
        answer : 'Multiple inheritance'
    },
    {
        question : 'What is subclass in java?',
        option : ['A subclass is a class that extends another class','A subclass is a class declared inside a class','Both above.','None of the above.'],
        answer : 'A subclass is a class that extends another class'
    },
    {
        question : 'If class B is subclassed from class A then which is the correct syntax',
        option : ['class B:A{}','class B extends A{}','class B extends class A{}','class B implements A{}'],
        answer : 'class B extends A{}'
    },
    {
        question : 'Find which of the following uses encapsulation?',
        option : ['void main(){ int a; void fun() { int a=10; System.out.println(a); fun(); }','class student{ int a; public int b; };','class student { int a; public void disp(){ System.out.println(a); } }','static topper() { char name[10]; public int marks; }'],
        answer : 'class student { int a; public void disp(){ System.out.println(a); } }'
    },
    {
        question : 'Which of this keyword must be used to inherit a class?',
        option : ['super','this','extent','extends'],
        answer : 'extends'
    },
    {
        question : 'Which among the following best defines abstraction?',
        option : ['Hiding the implementation','Showing the important data','Hiding the important data','Hiding the implementation and showing only the features'],
        answer : 'Hiding the implementation and showing only the features'
    },
    {
        question : 'If two classes combine some private data members and provides public member functions to access and manipulate those data members. Where is abstraction used?',
        option : ['Using private access specifier for data members','Using class concept with both data members and member functions','Using public member functions to access and manipulate the data members','Data is not sufficient to decide what is being used'],
        answer : 'Using public member functions to access and manipulate the data members'
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
