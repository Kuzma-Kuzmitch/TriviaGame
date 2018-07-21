$(document).ready(function() {




  // Variable declaration

  var question1 = {
    question: "From what clan is Thrall?",
    answers: ["Frostwolf", "Warsong", "Shadowmoon", "Blackfoot"],
    correct: 0,
    correctText: "lok'tar ogar! Thrall approves",
    correctImage: ["https://78.media.tumblr.com/90f38252d3071f940908424432641c7c/tumblr_mwqsx6lcen1s96gdmo1_500.gif"],
    wrongImage: ["http://0.media.dorkly.cvcdn.com/15/15/31942aa55d5ba74c4a98fef3cafbf428.gif"],
  }

  var question2 = {
    question: "Who mentored Arthas?",
    answers: ["Tirion Fordring", "Uther the Lightbringer", "Bolvar Fordragon", "Anduin Lothar"],
    correct: 1,
    correctText: "May the light bless you.",
    correctImage: ["https://static.comicvine.com/uploads/original/14/142946/5035290-43.gif"],
    wrongImage: ["http://n.sinaimg.cn/games/20160810/nmt8-fxutfpk5109891.gif"],
  }

  var question3 = {
    question: "Sylvanas comes from which Elven family?",
    answers: ["Whisperwind", "Stormrage", "Sunstrider", "Windrunner"],
    correct: 3,
    correctText: "A clever one, aren't you?",
    correctImage: ["https://steamusercontent-a.akamaihd.net/ugc/268346916416091683/C406232B9EA198D45E445E555380B769FFD75D9C/"],
    wrongImage: ["https://i.pinimg.com/originals/6a/f0/39/6af039298958594eb1859ecb39edb919.gif"],
  }

  var question4 = {
    question: "Ironforge is home to which Race?",
    answers: ["Gnomes", "Dwarves", "Humans", "Orcs"],
    correct: 1,
    correctText: "Strength, honor. I see them in you.",
    correctImage: ["https://media.giphy.com/media/l41YjZPrmVZ1JJ5Vm/giphy.gif"],
    wrongImage: ["https://i.kym-cdn.com/photos/images/original/000/691/069/48d.gif"],
  }

  var question5 = {
    question: "Outland is the remnants of what planet?",
    answers: ["Hoth", "Arrakis", "Draenor", "Dagobah"],
    correct: 2,
    correctText: "Apparently you are prepared.",
    correctImage: ["https://i.pinimg.com/originals/6d/b8/6f/6db86f23a39eee01bd393e05998cc9ba.gif"],
    wrongImage: ["https://media0.giphy.com/media/9rlxnqv2LLMtYos7SH/source.gif"],
  }

  var question6 = {
    question: "The Frozen Throne is located on which continent?",
    answers: ["Kalimdor", "The Maelstorm", "Northrend", "Eastern Kingdoms"],
    correct: 2,
    correctText: "I will show you the justice of the grave.",
    correctImage: ["https://media0.giphy.com/media/piTF2qfkyjpG4EB5Kk/source.gif"],
    wrongImage: ["https://thumbs.gfycat.com/WhirlwindAcrobaticAsiaticlesserfreshwaterclam-size_restricted.gif"],
  }

  var question7 = {
    question: "What did Victor Quinn main in WoW?",
    answers: ["Not a Balance Druid", "A Balance Druid", "Not a Balance Druid", "Not a Balance Druid"],
    correct: 1,
    correctText: "Had to google that one didn't you?",
    correctImage: ["https://pbs.twimg.com/profile_images/458798938456215552/QvUoJDEi_400x400.jpeg"],
    wrongImage: ["https://media1.tenor.com/images/5b013bbf6800ebc29198b8d4d806d3f3/tenor.gif?itemid=5481137"],
  }

  var questionArray = [question1, question2, question3, question4, question5, question6, question7]
  var currentQuestionNumber = 0
  var currentQuestion = questionArray[currentQuestionNumber]
  var secondCount = 15
  var holdInterval
  var numberRight = 0








// Functions

  function loadQuestion() {
    currentQuestion = questionArray[currentQuestionNumber]
    if (currentQuestionNumber === questionArray.length) {
      youWin()
    }
    else {
      $("#questionOverlay").removeClass("makeDark")
      $("#answerOverlay").removeClass("d-block").addClass("d-none")
      $("#answerButtons").empty()
      $("#answerImage").empty()
      $("#answerDisplay").empty()
      $("#answerText").empty()
      $(".question").text(currentQuestion.question)
      for (var i = 0; i < currentQuestion.answers.length; i++) {
        var a = $("<button>");
        a.addClass("btn btn-link btn-lg btn-block text-dark answer");
        a.attr("value", i);
        a.text(currentQuestion.answers[i]);
        $("#answerButtons").append(a);
    }
    resetCount()
    holdInterval = setInterval(decrement, 1000)
    $(".answer").on("click", checkAnswer)
    console.log(currentQuestion.correct)
  }
}

  function checkAnswer() {
    if ($(this).attr("value") === "" + currentQuestion.correct + "") {
    correctAnswer()
    setTimeout(loadQuestion, 3000)
  }
  else {
    wrongAnswer()
    setTimeout(loadQuestion, 3000)
  }
}

 function correctAnswer() {
   $("#answerOverlay").removeClass("d-none").addClass("d-block")
   $("#questionOverlay").addClass("makeDark")
   $("#answerImage").html("<img src=" + currentQuestion.correctImage[0] + " width='400px'>")
   $("#answerDisplay").text("Correct!")
   $("#answerText").text(currentQuestion.correctText)
   currentQuestionNumber+= 1
   currentQuestion = questionArray[currentQuestionNumber]
   console.log(currentQuestionNumber)
   console.log(currentQuestion)
   numberRight+= 1
 }

 function wrongAnswer() {
   $("#answerOverlay").removeClass("d-none").addClass("d-block")
   $("#questionOverlay").addClass("makeDark")
   $("#answerImage").html("<img src=" + currentQuestion.wrongImage[0] + " width='400px'>")
   $("#answerDisplay").text("Wrong!")
   currentQuestionNumber+= 1
   currentQuestion = questionArray[currentQuestionNumber]
   console.log(currentQuestionNumber)
   console.log(currentQuestion)
 }

 function youWin() {
   alert("You win!")
   clearInterval(holdInterval)
   $("#questionOverlay").addClass("makeDark")
   $("#answerOverlay").removeClass("d-block").addClass("d-none")
   $("#endScreen").removeClass("makeDark")
   var totalQuestions = questionArray.length
   var average = Math.floor((numberRight/totalQuestions) * 100)
   $("#correctChoices").text(numberRight)
   $("#numberQuestions").text(totalQuestions)
   $("#percentRight").text(average)
 }

 function decrement() {
   secondCount-= 1
   $("#seconds").text(secondCount)
   if (secondCount == 0) {
     wrongAnswer()
     setTimeout(loadQuestion, 3000)
   }
 }

 function resetCount() {
   secondCount = 15
   clearInterval(holdInterval)
  $("#seconds").text(secondCount)
 }

 loadQuestion()

});
