function toCase(text) {
  
	let result=" ";
	if(text[i]===text[i].toUpperCase()){
	result+=text[i].toLowerCase();
} else{
	result+=text[i].toUpperCase(); 
}
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
