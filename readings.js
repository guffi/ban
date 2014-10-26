function randomStringToInput(clicked_element)
	{
	    var self = $(clicked_element);
	    var random_string = generateRandomString(10);
	    $('input[name=emp]').val(random_string);
	    console.log("er eitthvað að hverfa?")
	    self.remove();
	};

function generateRandomString(string_length)
	{
	    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	    var string = '';
	    for(var i = 0; i <= string_length; i++)
	    {
	        var rand = Math.round(Math.random() * (characters.length - 1));
	        var character = characters.substr(rand, 1);
	        string = string + character;
	    }
	    console.log("party")
	    return string;
	};
	
function vinir() {
	var friends = {};

	friends.bill = {
	  firstName: "Bill",
	  lastName: "Gates",
	  number: "(206) 555-5555",
	  address: ['One Microsoft Way','Redmond','WA','98052']
	};

	friends.steve = {
	  firstName: "Steve",
	  lastName: "Jobs",
	  number: "(408) 555-5555",
	  address: ['1 Infinite Loop','Cupertino','CA','95014']
	};

	var list = function(obj) {
	  for(var prop in obj) {
	    console.log(prop);
	  }
	};

	var search = function(name) {
	  for(var prop in friends) {
	    if(friends[prop].firstName === name) {
	      console.log(friends[prop]);
	      return friends[prop];
	    }
	  }
	};

	list(friends);
	search("Steve");
	console.log("party")
	var text = "(" + friends.textContent + ")";
};

   
function showText() 
	{
		var div = document.getElementById("textDiv");
	   var nestedDiv = document.getElementById("nested");
	    nestedDiv.textContent = "nested";

	    var text = "[" + div.textContent + "]";
	};


function printArray()
{
	var myObj = new Object();
	myObj.name = "Fred";
	myObj.age = 42;

	myObj.getAge = 
	    function () {
	        return this.age;
	    };

	console.log(myObj)
	
	document.getElementById("results").innerHTML = (myObj.name);
	document.getElementById("results").innerHTML += ("<br/>");
	document.getElementById("results").innerHTML += (myObj.age);
};
