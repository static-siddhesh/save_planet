/*(function()
{
    const myQuestions =[{
         question : "Which is largest EverGreen forest in the world?",
         answers:{
             a:"Amazon",
             b:"African Savana",
             c:"Austrilian Forest"
         },
         correctAnswer: "a"
        },
        {
            question : "Which is largest river in the world?",
            answers :{
                a:"Ganga",
                b:"Amazon",
                c:"Niel"
            },
            correctAnswer: "c"
        },
        {
            question : "Which is non-biodegradable product among the following ?",
            answers :{
                a :"Banana peels",
                b :"Plastic bottle",
                c :"Cowdunk"
            },
            correctAnswer: "b"
        }
    ];

    function builtquiz() {
        //we'll need place to store html output
        const output =[];

        //for each question....
        myQuestions.forEach((currentQuestion,questionNumber) => {
            //we'll want to store the list of answer choices
            const answers = [];

            //and for each available answer..........
            for(letter in currentQuestion.answers){
                //....add an html radio button
                //check here
                answers.push(
                    <label id="${questionNumber}${letter}" href="#">
                        <input type="radio" name="question${questionNumber}" value="${letter}" id="${question}" />
    
                         ${letter} :
                         ${currentQuestion.answers[letter]}   
                    </label>
                );
            }

            //add this question and its answer to the output
            output.push(
                <div class="slide">
                    <div class="question">${currentQuestion.question}</div>
                    <div class="answer">${answers.join("")}</div>
                </div>
            );
        });
        //finally combine our output list into one string of HTML and put it on the page

        quizContainer.innerHTML = output.join("");
    }
    
    function showResults(){
        //gather answer container from our quiz

        const answerContainers = quizContainer.querySelectorAll(".answers");

        //keep track of user's answers

        let numCorrect =0;

        //for each question.....

        myQuestions.forEach((currentQuestion,questionNumber) => {
            //find selected answer.................

            const answerContainer = answerContainers[questionNumber];
            const selector = 'label input[name=question${questionNumber}]:checked';
            const userAnswer = (answerContainer.querySelector(selector)||{}).value;

        })
    }
        
         
});
*/
// this file will contain the score and no of question inside it....
//constructor function

function Quiz(questions) {
    this.score =0;
    this.questions= questions;
    this.questionIndex =0;
}

//1] to get the index of current question...

Quiz.prototype.getQuestionIndex = function(){
    return this.questions[this.questionIndex];
}



//2]quiz is ended or not........

Quiz.prototype.isEnded = function(){
    return this.questions.length === this.questionIndex;

}

//3]to check answer is correct or not...........

Quiz.prototype.guess = function(answer){

    if(this.getQuestionIndex().correctAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;

}

