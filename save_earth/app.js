function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        //show question
        var element= document.getElementById("questionn");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show option
        var choices = quiz.getQuestionIndex().choices;
        for(var i=0;i < choices.length;i++){
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            //to detact user click correct answer or not
            guess("btn"+i,choices[i]);
        }
        showProgress();
    }
}

function showProgress()
{
    //show status of footer............
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question "+currentQuestionNumber + " of " +quiz.questions.length + ".";
};

function guess(id,guess)
{
    var button = document.getElementById(id);
    //onclick goto next question
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};
//to show score and create somme html function through javascript directly...

function showScores(){
    var gameoverHtml ="<h1>Result</h1>";
        gameoverHtml += "<h2 id='score'> Your scores: " +quiz.score + "/" +quiz.questions.length +"</h2>";
        if(quiz.score==quiz.questions.length){
            gameoverHtml += "<br><br><h3 id='top'><i>CONGRATULATIONS </i><br>You Score FullOn Marks.</h3>";
        }
        if(quiz.score==0){
            gameoverHtml += "<br><br><h3 id='top'><i>Sorry! </i><br>Read GK & Try Again Next Time!</h3>";
        }
        
    var element = document.getElementById("quiz");
    
    element.innerHTML = gameoverHtml;

};

//with helf of constructor from question.js create array of question..........

//create question

var questions = [
    new Question("Which is largest EverGreen forest in the world?",["Amazon","African Savana","Austrilian Forest","Russian Tundra"],"Amazon"),
    new Question("Which is largest river in the world?",["Ganga","Amazone","Neil","Thames"],"Neil"),
    new Question("Which is non-biodegradable product among the following ?",["Banana peil","Cowdunk","Plastic Carrybag","Leaves"],"Plastic Carrybag"),
    new Question("Largest Forest In india is located in which of it's states?",["Maharashtra","Gujarath","Uttar-pradesh","Kashmir"],"Uttar-pradesh")
];

//create quiz and its object

var quiz = new Quiz(questions);

//display quiz

populate();

