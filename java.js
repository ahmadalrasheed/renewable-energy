function feedback1(){

var feedback =prompt("what do you prefer to use : electrical energy , renewable energy , thermal energy  ??"  );


while(feedback !== "electrical energy" && feedback !== "renewable energy" && feedback !== "thermal energy"){

  var feedback =prompt("you must choose one of the following :electrical energy , renewable energy , thermal energy ")

}




}

feedback1();







var userchoice1=function(){

var userchoice= prompt("How many renewable energy pictures do you want to see on this website ??"  );

var output='';

for(var i=0;i<userchoice;i++){



output= output+ "<img src='https://base.imgix.net/files/base/ebm/tdworld/image/2019/11/tdworld_20622_renewable_energy_getty_nov.png?auto=format&fit=max&w=1200' height=250px width=250px />"

}

document.write(output);


}

userchoice1();








