// quiz
var questionBank= [
    {
        question : 'Which type of loop is best known for its boolean condition that controls entry to the loop?',
        option : ['do-while loop','for (traditional)','for-each','while'],
        answer : 'while'
    },
    {
        question : 'Which type of loop is best known for using an index or counter?',
        option : ['do-while loop','for (traditional)','for-each','while'],
        answer : 'for (traditional)'
    },
    {
        question : 'What keyword is used to end the current loop iteration and proceed execution with the next iteration of that loop?',
        option : ['break','continue','end','skip'],
        answer : 'continue'
    },
    {
        question : 'What is the output? int i = 0; for(i = 0 ; i < 5; i++){ } System.out.println(i);',
        option : ['5','0','4','Compliation Error'],
        answer : '5'
    },
    {
        question : 'What is the output? int i = 0; for(i = 0; i < 10; i++){ break; } System.out.println(i); } }',
        option : ['1','0','10','9'],
        answer : '0'
    },
    {
        question : 'What is the output? int i = 0; for(i = 0; i < 10; i++){ continue; } System.out.println(i); } }',
        option : ['10','0','Compliation Error','9'],
        answer : '10'
    },
    {
        question : 'What is the output? for(int i=1; i<5; i++) { System.out.print(i +","); }',
        option : ['1,2,3,4','1,2,3,4,5','None of the above','1,2,3,4,'],
        answer : '1,2,3,4,'
    },
    {
        question : 'for is ______________ statement in java.',
        option : ['branching','iteration or looping','decision-making','all'],
        answer : 'iteration or looping'
    },
    {
        question : 'What is not a type of Java for-statement?',
        option : ['simple for-statement','for-each statement or extended for-statement','for-else statement','labeled for statement'],
        answer : 'for-else statement'
    },
    {
        question : 'An enhanced FOR loop work with only Collection type data. Examples of Collection are ___.',
        option : ['Array class type or any regular array variable','Arraylist','HashMap, HashSet','All'],
        answer : 'All'
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