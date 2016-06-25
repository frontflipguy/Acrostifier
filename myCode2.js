

function main(){

		var nice =	["awesome","brilliant","cool","dashing","excellent","funny","great","hilarious","intelligent","jovial","kind","lovely","marvelous","nice","old-fashioned","pretty","quiet","respected","sweet","true","useful","valiant","wonderful","xehanort","youthful","zesty"];	
		var mean = ["asshole","brutish","crappy","douchey","effed-up","fugly","grimy","hidious","juvenile","knuckle-dragging","luddite","moronic","nimcompoop","ornery","poop","quagmire","rotund","slimy","troglodyte","ugly","vapid","wrong","xenophobic","yucky","zoo-animal-lover"]	
		var durp = ["asdfghjkl","bimbo","crazy","dayum","extra-crispy","fart","giddy","high","illogical","jury-duty","klingon","lollercopter","misanthropic","noodley","office clown","panic!","quandary","ridiculous","silly","tart","underwhelming","vilified","weird","xenomorph","yelling","zazzy"];
	
	
	var a = prompt("Please enter your name and something magickal will happen!");
	var c = prompt("Nice or Mean or Durp?");

	a = a.toUpperCase();
	c = c.toUpperCase();
	
	var type = [];	

	if(c === "NICE"){type = nice;}
	else if(c === "MEAN"){type = mean;}
	else if(c === "DURP"){type = durp;}
	else{console.log("You didn't pick nice or mean."); return;}


	var b = [];

	b = a.split("");
	
	for(var k = 0; k < type.length; k++){
	type[k] = type[k].charAt(0).toUpperCase() + type[k].substring(1); //
	}

	for (var i = 0; i < a.length; i++){
		
		for(var j = 0; j < type.length; j++){

			if(type[j].charAt(0) === b[i]){

			console.log(type[j]);

			}
		}
	}
}

