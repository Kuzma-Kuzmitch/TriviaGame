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

  var questionArray = [question1, question2, question3, question4, question5]
  var currentQuestionNumber = 0
  var currentQuestion = questionArray[currentQuestionNumber]








// Functions

  function loadQuestion() {
    currentQuestion = questionArray[currentQuestionNumber]
    $("#answerButtons").empty()
    $("#answerImage").empty()
    $(".question").text(currentQuestion.question)
    for (var i = 0; i < currentQuestion.answers.length; i++) {
      var a = $("<button>");
      a.addClass("btn btn-primary btn-lg btn-block answer");
      a.attr("value", i);
      a.text(currentQuestion.answers[i]);
      $("#answerButtons").append(a);
      $(".answer").on("click", checkAnswer)
  }
}

  function checkAnswer() {
    if ($(this).attr("value") == currentQuestion.correct) {
    $("#answerImage").html("<img src=" + currentQuestion.correctImage[0] + " width='400px'>")
    currentQuestionNumber++
    setTimeout(loadQuestion(), 1000)
  }
  else {
    $("#answerImage").html("<img src=" + currentQuestion.wrongImage[0] + " width='400px'>")
    currentQuestionNumber++
    setTimeout(loadQuestion, 3000)
  }
}

  loadQuestion()




























  // var queAndAns = {
  //   "From what Clan is Thrall?": ["Frostwolf", "Warsong", "Shadowmoon", "Blackfoot"],
  //   "Who mentored Arthas?": ["Tirion Fordring", "Uther the Lightbringer", "Bolvar Fordragon", "Anduin Lothar"],
  //   "Sylvanas comes from which Elven family?": ["Windrunner", "Stormrage", "Sunstrider", "Whisperwind"],
  //   "Ironforge is home to which Race?": ["Dwarves", "Gnomes", "Humans", "Orcs"],
  //   "Outland is the remnants of what planet?": ["Draenor", "Arrakis", "Hoth", "Dagobah"],
  //
  // }
  //
  // var queNumber = Math.floor(Math.random() * (Object.keys(queAndAns).length))
  //
  // console.log(queNumber)
  //
  //
  // console.log(Object.values(queAndAns)[queNumber])
  //
  // $(".question").text(Object.keys(queAndAns)[queNumber])
  //
  // for (var i = 0; i < (Object.values(queAndAns)[queNumber]).length; i++) {
  //   var a = $("<button>");
  //   a.addClass("btn btn-primary btn-lg btn-block answer");
  //   a.attr("value", i);
  //   a.text(Object.values(queAndAns)[queNumber][i]);
  //   $("#answerButtons").append(a);
  // }















































  // var numberCount = 30
  // var holdInterval
  //
  // $(".countDown").text(numberCount)
  // $(".startCount").on("click", start)
  // $(".stopCount").on("click", stop)
  // $(".resetCount").on("click", reset)
  //
  // function decrement() {
  //
  //   numberCount--
  //
  //   $(".countDown").text(numberCount)
  //
  // }
  //
  // function start() {
  //   clearInterval(holdInterval)
  //   holdInterval = setInterval(decrement, 1000)
  // }
  //
  // function stop() {
  //   clearInterval(holdInterval)
  // }
  //
  // function reset() {
  //   clearInterval(holdInterval)
  //   numberCount = 30
  //   $(".countDown").text(numberCount)
  // }




















});
