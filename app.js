


var name = prompt("what is your name")
alert("welcome to my website " + name)

var player = prompt("waht is your favorite player(L.Messi ,  C.ronaldo, Robert Lewandowski)?")

while (player != "L.Messi" && car != "C.ronaldo" && car != "Robert Lewandowski"){ player = prompt("you entered wrong type car please try again") }

if (player == "L.Messi") {
  document.write('<div> <h3>"L.Messi""<img src="https://c.ndtvimg.com/2019-12/7702i8do_lionel-messi-wins-2019-ballon-dor-afp-650_625x300_03_December_19.jpg" ></div>'
  )




  var numberofpicture = prompt("how many times do you want to see a picture of the player? ")

  for (var i = 1; i <= numberofpicture; i++)
    document.write('<div> <h3>"L.Messi"<img src="https://c.ndtvimg.com/2019-12/7702i8do_lionel-messi-wins-2019-ballon-dor-afp-650_625x300_03_December_19.jpg" ></div>')
}

else if (player == "C.ronaldo") {
  document.write(' <div><h3>C.ronaldo</h3><img src="https://cdn.mos.cms.futurecdn.net/2huTXWBkkNbRPrftJ9f2Y8-1200-80.jpg"></div>')


  var numberofpicture = prompt("how many times do you want to see a picture of the player?")

  for (var i = 1; i <= numberofpicture; i++)
    document.write('<div><h3>C.ronaldo</h3><img src="https://cdn.mos.cms.futurecdn.net/2huTXWBkkNbRPrftJ9f2Y8-1200-80.jpg"></div>')
}



else if (player == "Robert Lewandowski") {
  document.write('<div>< h3 >"Robert Lewandowski"</h3><img src="https://c.ndtvimg.com/2020-12/thtgapmg_robert-lewakndowski-fifa-best-award-twitter_625x300_18_December_20.jpg?output-quality=60&output-format=webp&downsize=555:*" ></div> > ')


  var numberofpicture = prompt("how many times do you want to see a picture of the player?")

  for (var i = 1; i <= numberofpicture; i++)
    document.write('<div><h3>C.ronaldo</h3><img src="https://cdn.mos.cms.futurecdn.net/2huTXWBkkNbRPrftJ9f2Y8-1200-80.jpg"></div>')
}
