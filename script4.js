// quiz
var questionBank= [
    {
        question : '_________________ is a collection of elements used to store the same type of data.',
        option : ['Array','Switch','Case','Loop'],
        answer : 'Array'
    },
    {
        question : 'What are the legal indexes for the array ar, given the following declaration: int[] ar = {2, 4, 6, 8 }',
        option : ['0, 1, 2, 3','1, 2, 3, 4','2, 4, 6, 8','0, 2, 4, 6'],
        answer : '0, 1, 2, 3'
    },
    {
        question : 'What is the first index of an array?',
        option : ['1','0','2','3'],
        answer : '0'
    },
    {
        question : 'For the array: int stats[3]; What is the range of the index?',
        option : ['0 to 3','0 to 2','1 to 3','0 to 4'],
        answer : '0 to 2'
    },
    {
        question : 'int [] nums = {2, 3, 5, 8, 9, 11}; How would you access the fourth element in nums?',
        option : ['nums[4]','nums(4)','nums(3)','nums[3]'],
        answer : 'nums[3]'
    },
    {
        question : 'The first value of an array called quizzes can be accessed with which of the following statements?',
        option : ['quizzes[1] = 100;','quizzes[zero] = 100;','quizzes[0] = 100;','quizzes[one] = 100;'],
        answer : 'quizzes[0] = 100;'
    },
    {
        question : 'Which of the following statements outputs the fifth value in the quizzes array?',
        option : ['System.out.println(quizzes[5]);','quizzes[4]','quizzes[5]','System.out.println(quizzes[4]);'],
        answer : 'System.out.println(quizzes[4]);'
    },
    {
        question : 'Index values of an array range from ______________.',
        option : ['0 to length – 1','1 to length','0 to length','0 to length + 1'],
        answer : '0 to length – 1'
    },
    {
        question : 'Create an array of 12 strings called months.',
        option : ['String[] months = new String[12];','String months = new String[12];','String[] months = new String[];','String[12] months = new String[];'],
        answer : 'String[] months = new String[12];'
    },
    {
        question : 'What value is at index 1 in this array?  String[] names = {"Mack", "Dennis", "Dee", "Charlie"};',
        option : ['Mack','Dennis','Dee','Charlie'],
        answer : 'Dennis'
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