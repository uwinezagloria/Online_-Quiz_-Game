var  onlineQuizGame=[
    { question:"What is the name of the world’s smallest horse? ",
    multipleChoiceQuestion:[
        "A: Falabella",
       " B: Shetland pony",
        "C: Miniature horse*"
        ],
        correctAnswer:"A: Falabella"
    },
    { question:" What is the longest word in the English language?",
    multipleChoiceQuestion:[
        "A:Antidisestablishmentarianism*",
       " B:Hippopotomonstrosesquippedaliophobi",
        "C: Floccinaucinihilipilification"
        ],
        correctAnswer:"B:Hippopotomonstrosesquippedaliophobi"
    },
    { question:"Which country drinks the most amount of coffee per person?",
    multipleChoiceQuestion:[
        "A: Finland",
       "B: Italy",
       "C: Colombia" ],
correctAnswer:"A: Finland"
    }
    ];
let randomQuestion;
    let randomAnswerToRandomQuestion=[];
    function displayRandom(){
        //"display random question with it's multiple choice answers"
        let random=Math.floor(Math.random()*onlineQuizGame.length);
       for(let i=0;i<onlineQuizGame.length;i++){
        if(random==i){
 randomQuestion=onlineQuizGame[i].question;
 for(let c=0;c<random;c++){
for(let j=0;j<onlineQuizGame[c].multipleChoiceQuestion.length;j++){
    if(c==1){
        break;
    }
    randomAnswerToRandomQuestion.push(onlineQuizGame[i].multipleChoiceQuestion[j]);
}
        }
       }
    }
       console.log("the random question is"+randomQuestion);
       console.log("it's multiple choice answers are as follow");
       console.log(randomAnswerToRandomQuestion);
        }
        displayRandom();
        //scoring system for tracking correct and incorrect answers
        let yourAnswers;
        let correctAnswers=[];
        let score;
        let marks1=0;
        let marks2=0;
        let marks3=0;
        let correct=true;
        function scoringSystem(answer1,answer2,answer3){
           let q1=answer1;
           let q2=answer2;
           let q3=answer3;
       yourAnswers=[q1,q2,q3];
       for(let i=0;i<onlineQuizGame.length;i++){
        correctAnswers.push(onlineQuizGame[i].correctAnswer);
       }
       if(yourAnswers[0]===correctAnswers[0]){
        marks1=5;
        correct=true;
        console.log("your answer to first question is"+correct+" with "+marks1+"points");
       }
       else{
        correct=false;
        console.log("your answer to first question is"+correct+" with "+marks1+"points")
       }
       if(yourAnswers[1]===correctAnswers[1]){
        marks2=5;
        correct=true;
        console.log("your answer to second question is"+correct+" with "+marks2+"points");
       }
       else{
        correct=false;
        console.log("your answer to second question is"+correct+" with "+marks2+"points")
       }
       if(yourAnswers[2]===correctAnswers[2]){
        marks3=5;
        correct=true;
        console.log("your answer to third question is"+correct+" with "+marks3+"points");
       }
       else{
        correct=false;
        console.log("your answer to third question is"+correct+" with "+marks3+"points")
       }
       score=marks1+marks2+marks3;
    console.log("your score is "+score+" /15");
}
      scoringSystem('A: Falabella','B:Hippopotomonstrosesquippedaliophobi','B: Italy');