// quiz
var questionBank= [
    {
        question : 'What is an abstract method?',
        option : ['An abstract method is any method in an abstract class.','An abstract method is a method which cannot be inherited.','An abstract method is one without a body that is declared with the reserved word abstract.','n abstract method is a method in the child class that overrids a parent method.'],
        answer : 'An abstract method is one without a body that is declared with the reserved word abstract.'
    },
    {
        question : 'Can an abstract class define both abstract methods and non-abstract methods?',
        option : ['No—it must have all one or the other.','No—it must have all abstract methods.','Yes—but the child classes do not inherit the abstract methods.','Yes—the child classes inherit both.'],
        answer : 'Yes—the child classes inherit both.'
    },
    {
        question : 'Which of these class relies upon its subclasses for complete implementation of its methods?',
        option : ['Object class','abstract class','ArrayList class','None of the mentioned'],
        answer : 'abstract class'
    },
    {
        question : 'Which of these keywords are used to define an abstract class?',
        option : ['Abstract','abstract','abstract class','abst'],
        answer : 'abstract'
    },
    {
        question : 'Which of the following is FALSE about abstract classes in Java',
        option : ['If we derive an abstract class and do not implement all the abstract methods, then the derived class should also be marked as abstract using abstract keyword','Abstract classes can have constructors','A class can be made abstract without any abstract method','A class can inherit from multiple abstract classes.'],
        answer : 'A class can inherit from multiple abstract classes.'
    },
    {
        question : 'Which of the following classes fail to compile? abstract class X { abstract void method(); } class Y extends X { } class Z extends Y { void method() { System.out.println("Class Z"); } }',
        option : ['X, Y, Z','Y, Z','Y','Z'],
        answer : 'Y'
    },
    {
        question : 'Which concept of Java is a way of converting real world objects in terms of class?',
        option : ['Polymorphism','Encapsulation','Abstraction','Inheritance'],
        answer : 'Abstraction'
    },
    {
        question : 'Which of the following is not done by abstraction?',
        option : ['Identifies essential details','Disregards non-essential information','Breaks the problem down into smaller tasks','None of the above'],
        answer : 'Breaks the problem down into smaller tasks'
    },
    {
        question : 'When designing a building that must be accessible for wheelchairs, which of the following characteristics is non-essential',
        option : ['Number of wall paintings','Number of walls','Number of doors','None of the above'],
        answer : 'Number of wall paintings'
    },
    {
        question : 'A school database has lots of information on students, the data manager needs to use abstraction. What data should she leave out?',
        option : ['Age','Guardians phone numbers','Classes','Eye colour'],
        answer : 'Eye colour'
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