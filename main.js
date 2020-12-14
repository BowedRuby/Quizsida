function check();{

    let quest1 = document.quest1.value;
     let quest2 = document.quest2.value;
         let quest3 = document.quest3.value;
         let correct = 0;


         if (quest1 == "stad2"){
        correct++;
         }
                  if (quest2 == "win1"){
        correct++;
         }
                  if (quest3 == "quiz1"){
        correct++;
         }

    document.getElementById("after").style.visibility = "visible";
    document.getElementById("correct"). innerHTML = "You got " + correct + "correct";
}