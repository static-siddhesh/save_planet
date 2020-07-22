//constructor function

function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

//to check weather the selected option is correct or not
//as function is declear outside the constructo use prototype.

Question.prototype.correctAnswer = function(choice) 
{
    return choice === this.answer;
}