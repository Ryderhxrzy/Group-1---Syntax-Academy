// quiz
var questionBank= [
    {
        question : 'What class is used to get user input?',
        option : ['Scanner','System.out.println();','scan','input'],
        answer : 'Scanner'
    },
    {
        question : 'Which Scanner class method is used to read integer value from the user?',
        option : ['next()','nextInteger()','nextInt()','readInt()'],
        answer : 'nextInt()'
    },
    {
        question : 'Which Scanner class method is used to read string value from the user?',
        option : ['nextInt()','nextString()','nextLine()','Both B and C'],
        answer : 'Both B and C'
    },
    {
        question : 'Which is the correct syntax to declare Scanner class object?',
        option : ['Scanner objectName= Scanner();','Scanner objectName= new Scanner();','Scanner objectName= Scanner(System.in);','Scanner objectName= new Scanner(System.in);'],
        answer : 'Scanner objectName= new Scanner(System.in);'
    },
    {
        question : 'The user can input a number if the method used is nextString().',
        option : ['True','False','May be','None of the above'],
        answer : 'True'
    },
    {
        question : 'What value is stored in num if int num = 13 - 3 * 6 / 4 % 3;',
        option : ['0','2','12','7'],
        answer : '12'
    },
    {
        question : 'Which operator is used to add two operands?',
        option : ['+','-','*','/'],
        answer : '+'
    },
    {
        question : 'Which operator is used to subtract two operands?',
        option : ['*','/','-','+'],
        answer : '-'
    },
    {
        question : 'Which operator is used to multiply two operands?',
        option : ['/','-','+','*'],
        answer : '*'
    },
    {
        question : 'Which operator is used to divide two operands?',
        option : ['/','*','+','-'],
        answer : '/'
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