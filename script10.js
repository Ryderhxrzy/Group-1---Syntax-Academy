// quiz
var questionBank= [
    {
        question : 'It is possible to initialize variables and instantiate objects inside the loops parameter list',
        option : ['True','False','May be','None of the above'],
        answer : 'True'
    },
    {
        question : 'All loops can be nested?',
        option : ['True','False','May be','None of the above'],
        answer : 'True'
    },
    {
        question : 'You can nest different loop types inside each other?',
        option : ['True','False','May be','None of the above'],
        answer : 'True'
    },
    {
        question : 'A good way to stop a for loop early is',
        option : ['to change the value of the counter in your code','to use the break command','to use the continue command','to use the stop method'],
        answer : 'to use the break command'
    },
    {
        question : 'A good way to skip the rest of the code in a for loop and jump on to the next repeat of the loop is',
        option : ['to change the value of the counter in your code','to use the break command','to use the continue command','to use the stop method'],
        answer : 'to use the continue command'
    },
    {
        question : 'When working with arrays the counter of a for loop is typically used',
        option : ['as an index for the array to access and work with each element of the array sequentially','as an index for the array to access and work with each element of the array randomly','as an index for the loop to access and work with each element of the array sequentially','as an index for the loop to access and work with each element of the array randomly'],
        answer : 'as an index for the array to access and work with each element of the array sequentially'
    },
    {
        question : 'Which code segment generates all the Even numbers from 50 and 100 (include both 50 and 100)?',
        option : ['for (int no = 50; no <= 100; no += 2) { System.out.println (no); }','for {int no = 50; no < 100; no += 2);{ System.out.println (no); }','for (no = 50; no <= 100; no ++ 2);{ System.out.println (no); }','for (int no = 50; no <= 100; no += 2);{ system.out.println (no); }'],
        answer : 'for (int no = 50; no <= 100; no += 2) { System.out.println (no); }'
    },
    {
        question : 'The counter variable in a for loop has to be initialised in the loop itself.',
        option : ['True','False','May be','None of the above'],
        answer : 'False'
    },
    {
        question : 'The counter variable in a for loop has to be an integer.',
        option : ['True','False','May be','None of the above'],
        answer : 'False'
    },
    {
        question : 'Is this a valid for loop? for (double fracloop = 0.5; fracloop < 2; fracloop += 0.25) { System.out.println ("Hello"); }',
        option : ['True','False','May be','None of the above'],
        answer : 'True'
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