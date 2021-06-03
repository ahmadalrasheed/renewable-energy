var feedback =prompt("what do you think about my website ? answer with good or bad ?")

if (feedback=="good"){

  alert("thank you ! i appreciate your feedback!")
}
else if(feedback=="bad") {
alert("i will try to make it good ! thank you for your feedback!")

}
else {
  alert("please answer only with good or bad !")
}

confirm("Press a button!");


var bestcolor= prompt("what do you prefer green color or red color?")

if (bestcolor=="green"){
  document.write('<p style="color:green">This is a welcoming sentence with ' + bestcolor + ' color as you like!</p>')
  
} else if(bestcolor=="red"){
   document.write('<p style="color:red">This is a welcoming sentence with ' + bestcolor + ' color as you like!</p>')


} else{
  alert("please choose green or red color ")
}






var username= prompt("what is your name?")

document.write("<h2>Welcome "+ username +" to my website</h2>")

var username= prompt("do you prefer using solar energy or electrical energy ?")

if (username=="solar energy"){
  document.write('<img src="https://tse3.mm.bing.net/th?id=OIP.9asGhLf4LLdXWtrgikSUtQHaEK&pid=Api&P=0&w=279&h=158" title="solar energy" />')
  
} else if(username=="electrical energy"){
    document.write('<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPDGar37PY_RolPaLuTlic0wGBqTAqMLs-w&usqp=CAU  title="electrical energy" />')


} else{
  alert("please choose solar energy or electrical energy!!")
}



