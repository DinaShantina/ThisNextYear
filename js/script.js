var input = document.querySelectorAll('input[type="submit"]');
var inpuText = document.querySelectorAll('input[type="text"]');
var myName = document.getElementById('myName');
$('#result').empty();
var fname;

myName.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('secondDiv').style.display = 'block';
    document.getElementById('firstDiv').style.display = 'none';
})
function enableMyName(event) {
    fname = document.getElementById('enterYourName').value;
    if (isNaN(fname)) {
        $('#result').html(`Hello ${fname} &#128522;`)
        $('#result').css('color', 'black');
        myName.disabled = false;
        myName.style.backgroundColor = "#4AC1BD";
        myName.style.backgroundPosition = "left bottom";
        myName.style.color = "white";
    } else if (fname === "") {
        $('#result').html('Please enter your name');
        $('#result').css('color', '#B94F74');
        myName.disabled = true;
    } else {
        $('#result').html('Please enter only letters');
        $('#result').css('color', '#B94F74');
        myName.disabled = true;
    }
}

inpuText[0].addEventListener('keyup', enableMyName);

// Kopcheto od prviot button da se aktivira
function enable() {
    let textAreaAB = document.getElementById('curentyProffesion').value
    let textAreaActivites = document.getElementById('curentyActivities').value
    if (textAreaAB.length === 0) {
        document.getElementById('name').disabled = true;
    } else {
        document.getElementById("name").disabled = false;
    }
    if (textAreaActivites.length === 0) {
        document.getElementById('nameActivities').disabled = true;
    } else {
        document.getElementById('nameActivities').disabled = false;
    }
    document.getElementById("name").style.backgroundColor = "#9370DB";
    document.getElementById("name").style.backgroundPosition = "left bottom";
    document.getElementById("name").style.color = "white";
    document.getElementById("nameActivities").style.backgroundColor = "#9370DB";
    document.getElementById("nameActivities").style.backgroundPosition = "left bottom";
    document.getElementById("nameActivities").style.color = "white";
}
document.getElementById('curentyProffesion').addEventListener('keyup', enable);
document.getElementById('curentyActivities').addEventListener('keyup', enable);

// Third div - Role ( first row buttons)

function enableA() {
    if (($('#btn7').is(':checked') || $('#btn8').is(':checked') || $('#btn9').is(':checked') || $('#btn10').is(':checked') || $('#btn10a').is(':checked')) && ($('#btn11').is(':checked') || $('#btn12').is(':checked') || $('#btn13').is(':checked') || $('#btn14').is(':checked') || $('#btn15').is(':checked'))) {
        document.getElementById("nameA").disabled = false;
        document.getElementById("nameA").style.backgroundPosition = "left bottom";
        document.getElementById("nameA").style.color = "white";
        document.getElementById("nameA").style.backgroundColor = "#4AC1BD";

    } else {
        document.getElementById("nameA").disabled = true;
    }
}

$(".first-checkbox:checkbox").click(function () {
    if ($(".first-checkbox:checked").length > 2) {
        $('#result2').html('You can only select 2 choices below');
        $('#result2').css('color', '#B94F74');
        return false;
    } else if ($(".first-checkbox:checked").length === 0) {
        $('#result2').html("");
    }
});
$(".single-checkbox:checkbox").click(function () {
    $('#result2').empty();
    if ($(".single-checkbox:checked").length > 2) {
        $('#result2').html('You can only select 2 choices below');
        $('#result2').css('color', '#B94F74');
        return false;
    } else if ($(".single-checkbox:checked").length === 0) {
        $('#result2').html("");
    }
});
$(".third-checkbox:checkbox").click(function () {
    $('#result2').empty();
    if ($(".third-checkbox:checked").length > 1) {
        $('#result2').html('You can only select 1 choice below');
        $('#result2').css('color', '#B94F74');
        return false;
    } else if ($(".third-checkbox:checked").length === 0) {
        $('#result2').html("");
    }
});
$(".interest-checkbox:checkbox").click(function () {
    if ($(".interest-checkbox:checked").length > 3) {
        $('#result3').html('You can only select 3 choices below');
        $('#result3').css('color', '#B94F74');
        return false;
    } else if ($(".interest-checkbox:checked").length === 0) {
        $('#result3').html("");
    }
});
$(".rela-checkbox:checkbox").click(function () {
    if ($(".rela-checkbox:checked").length > 1) {
        $('#result4').html('You can only select 1 choice below');
        $('#result4').css('color', '#B94F74');
        return false;
    } else if ($(".rela-checkbox:checked").length === 0) {
        $('#result4').html("");
    }
});
$(".health-checkbox:checkbox").click(function () {
    if ($(".health-checkbox:checked").length > 1) {
        $('#result5').html('You can only select 1 choice below');
        $('#result5').css('color', '#B94F74');
        return false;
    } else if ($(".health-checkbox:checked").length === 0) {
        $('#result5').html("");
    }
});

document.getElementById('btn7').addEventListener('click', enableA);
document.getElementById('btn8').addEventListener('click', enableA);
document.getElementById('btn9').addEventListener('click', enableA);
document.getElementById('btn10').addEventListener('click', enableA);
document.getElementById('btn10a').addEventListener('click', enableA);
document.getElementById('btn11').addEventListener('click', enableA);
document.getElementById('btn12').addEventListener('click', enableA);
document.getElementById('btn13').addEventListener('click', enableA);
document.getElementById('btn14').addEventListener('click', enableA);
document.getElementById('btn15').addEventListener('click', enableA);

function enableE() {
    if ($('#btn31').is(':checked') || $('#btn32').is(':checked') || $('#btn33').is(':checked') || $('#btn34').is(':checked') || $('#btn35').is(':checked') || $('#btn36').is(':checked') || $('#btn37').is(':checked') || $('#btn38').is(':checked') || $('#btn39').is(':checked')) {
        document.getElementById("nameE").disabled = false;
        document.getElementById("nameE").style.backgroundPosition = "left bottom";
        document.getElementById("nameE").style.color = "white";
        document.getElementById("nameE").style.backgroundColor = "#4AC1BD";
    } else {
        document.getElementById("nameE").disabled = true;
    }
}
document.getElementById('btn31').addEventListener('click', enableE);
document.getElementById('btn32').addEventListener('click', enableE);
document.getElementById('btn33').addEventListener('click', enableE);
document.getElementById('btn34').addEventListener('click', enableE);
document.getElementById('btn35').addEventListener('click', enableE);
document.getElementById('btn36').addEventListener('click', enableE);
document.getElementById('btn37').addEventListener('click', enableE);
document.getElementById('btn38').addEventListener('click', enableE);
document.getElementById('btn39').addEventListener('click', enableE);

function enableW() {
    if ($('#btn40').is(':checked') || $('#btn41').is(':checked') || $('#btn42').is(':checked') || $('#btn43').is(':checked') || $('#btn44').is(':checked')) {
        document.getElementById("myName9").disabled = false;
        document.getElementById("myName9").style.backgroundPosition = "left bottom";
        document.getElementById("myName9").style.color = "white";
        document.getElementById("myName9").style.backgroundColor = "#4AC1BD";
    } else {
        document.getElementById("myName9").disabled = true;
    }
}
console.log(document.getElementById("btn40"));
document.getElementById("btn40").addEventListener('click', enableW);
document.getElementById('btn41').addEventListener('click', enableW);
document.getElementById('btn42').addEventListener('click', enableW);
document.getElementById('btn43').addEventListener('click', enableW);
document.getElementById('btn44').addEventListener('click', enableW);

// Event za izbiracki kopcinja za HEALTH !!!!!!!!!!!!
function enableHealth(event) {
    if ($('#btn50').is(':checked') || $('#btn51').is(':checked') || $('#btn52').is(':checked') || $('#btn53').is(':checked') || $('#btn54').is(':checked')) {
        document.getElementById("nameHealth").disabled = false;
        document.getElementById("nameHealth").style.backgroundPosition = "left bottom";
        document.getElementById("nameHealth").style.color = "white";
        document.getElementById("nameHealth").style.backgroundColor = "#4AC1BD";
    } else {
        document.getElementById("nameHealth").disabled = true;
    }
}
document.getElementById('btn50').addEventListener('click', enableHealth);
document.getElementById('btn51').addEventListener('click', enableHealth);
document.getElementById('btn52').addEventListener('click', enableHealth);
document.getElementById('btn53').addEventListener('click', enableHealth);
document.getElementById('btn54').addEventListener('click', enableHealth);
function enableB() {
    let textAreaA = document.getElementById('enterYourProffesion').value
    if (textAreaA.length === 0) {
        document.getElementById('nameB').disabled = true;
    } else {
        document.getElementById("nameB").disabled = false;
    }
    document.getElementById("nameB").style.backgroundPosition = "left bottom";
    document.getElementById("nameB").style.color = "white";
}
document.getElementById('enterYourProffesion').addEventListener('input', enableB);

function enableC() {
    var textArea = document.getElementById('comment').value;
    if (textArea.length < 15) {
        $('.please').html('Please write more then 15 letters');
        document.getElementById('nameC').disabled = true;
    } else {
        $('.please').html("");
        document.getElementById("nameC").disabled = false;
        document.getElementById("nameC").style.backgroundPosition = "left bottom";
        document.getElementById("nameC").style.color = "white";
        document.getElementById("nameC").style.backgroundColor = "#4AC1BD";
    }

}
document.getElementById('comment').addEventListener('input', enableC);

function enableR() {
    var textArea = document.getElementById('comment22').value
    if (textArea.length < 15) {
        $('.please5').html('Please write more then 15 letters');
        document.getElementById('myName10').disabled = true;
    } else {
        $('.please5').html("");
        document.getElementById("myName10").disabled = false;
        document.getElementById("myName10").style.backgroundPosition = "left bottom";
        document.getElementById("myName10").style.color = "white";
        document.getElementById("myName10").style.backgroundColor = "#4AC1BD";
    }
}
document.getElementById('comment22').addEventListener('input', enableR);

// Funkcija za da go pokaze vtoriot div koj e sokrien vo I am curently a...

function showDiv() {
    document.getElementById('welcomeDiv').style.display = "block";
}
document.getElementById('btn1').addEventListener('click', showDiv);
document.getElementById('btn2').addEventListener('click', showDiv);
document.getElementById('btn3').addEventListener('click', showDiv);
document.getElementById('btn4').addEventListener('click', showDiv);
document.getElementById('btn5').addEventListener('click', showDiv);
document.getElementById('btn6').addEventListener('click', showDiv);
document.getElementById('btn6a').addEventListener('click', showDiv);

// ---------->

var myName2 = document.getElementById('myName2');
myName2.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('thirdDiv').style.display = 'block';
    document.getElementById('secondDiv').style.display = 'none';
})

var nameA = document.getElementById('nameA');
nameA.addEventListener('click', function (e) {
    e.preventDefault();
    $('#result2').html('');
    document.getElementById('fourthDiv').style.display = 'block';
    document.getElementById('thirdDiv').style.display = 'none';
})

var nameC = document.getElementById('nameC');
nameC.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('fifthDiv').style.display = 'block';
    document.getElementById('fourthDiv').style.display = 'none';
})

var nameD = document.getElementById('nameD');
nameD.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('sixthDiv').style.display = 'block';
    document.getElementById('fifthDiv').style.display = 'none';
})

var nameE = document.getElementById('nameE');
nameE.addEventListener('click', function (e) {
    e.preventDefault();
    $('#result3').html('');
    document.getElementById('seventhDiv').style.display = 'block';
    document.getElementById('sixthDiv').style.display = 'none';
})

var nameF = document.getElementById('nameF');
nameF.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('eightDiv').style.display = 'block';
    document.getElementById('seventhDiv').style.display = 'none';
})


var myName8 = document.getElementById('myName8');
myName8.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('ninthDiv').style.display = 'block';
    document.getElementById('eightDiv').style.display = 'none';
})

var myName9 = document.getElementById('myName9');
myName9.addEventListener('click', function (e) {
    e.preventDefault();
    $('#result4').html('');
    document.getElementById('tenthDiv').style.display = 'block';
    document.getElementById('ninthDiv').style.display = 'none';
})
//<------------- Switch page tenth with eleven -------------->
var myName10 = document.getElementById('myName10');
myName10.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('eleventhDiv').style.display = 'block';
    document.getElementById('tenthDiv').style.display = 'none';
})

//<------------- Switch page eleventh with twelth -------------->
var myName11 = document.getElementById('myName11');
myName11.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('twelthDiv').style.display = 'block';
    document.getElementById('eleventhDiv').style.display = 'none';
})
//<------------- Switch page 12th with 13th -------------->
var nameHealth = document.getElementById('nameHealth');
nameHealth.addEventListener('click', function (e) {
    e.preventDefault();
    $('#result5').html('');
    document.getElementById('thirteenDiv').style.display = 'block';
    document.getElementById('twelthDiv').style.display = 'none';
})
//<------------- Switch page 13th with 14th -------------->
var namePlan = document.getElementById('namePlan');
namePlan.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('fourteenthDiv').style.display = 'block';
    document.getElementById('thirteenDiv').style.display = 'none';
})

//<------------- Switch page 15th with 16th -------------->
var bonus1 = document.getElementById('bonus1');
bonus1.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('fifteenDiv').style.display = 'block';
    document.getElementById('fourteenthDiv').style.display = 'none';
})


function enableMyNameB() {
    document.getElementById("myName3").disabled = false;
    document.getElementById("myName3").style.backgroundColor = "#4AC1BD";
    document.getElementById("myName3").style.backgroundPosition = "left bottom";
    document.getElementById("myName3").style.color = "white";
}

// Enable Textarea - health

function enablePlan() {
    let textAreaPlan = document.getElementById('comment3').value;
    if (textAreaPlan.length < 15) {
        $('.please3').html('Please write more then 15 letters');
        document.getElementById('namePlan').disabled = true;
    } else {
        $('.please3').html("");
        document.getElementById("namePlan").disabled = false;
        document.getElementById("namePlan").style.backgroundColor = "#4AC1BD";
        document.getElementById("namePlan").style.backgroundPosition = "left bottom";
        document.getElementById("namePlan").style.color = "white";
    }
}
document.getElementById('comment3').addEventListener('input', enablePlan);

// Progres Bar---->

/* Get the canvas element */
var c = document.getElementById('canvas');

/* Get the canvas' context */
var ctx = c.getContext('2d');

/* Variables used for bar fill */
var total = 100,
    hatched = 0;


window.onload = function () {
    /* Fill Rectangle*/
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 0, c.height);

}

function inc() {

    hatched += 7.2;
    /* Perc (or percentage) takes the answer from hatched/total... */
    var perc = hatched / total;
    /* ... and filled takes perc and multiplies it by canvas.width (700px in this case) */
    var filled;
    filled = perc * c.width;
    ctx.clearRect(0, 0, c.width, c.height);
    /* Fill Rectangle*/
    ctx.fillStyle = "#9370DB";
    ctx.fillRect(0, 0, filled, c.height);
    if (hatched >= total) {
        hatched = total;
    }
}

document.getElementById('myName').addEventListener('click', inc);
document.getElementById('myName2').addEventListener('click', inc);
document.getElementById('nameA').addEventListener('click', inc);
document.getElementById('nameC').addEventListener('click', inc);
document.getElementById('nameD').addEventListener('click', inc);
document.getElementById('nameActivities').addEventListener('click', inc);
document.getElementById('nameE').addEventListener('click', inc);
document.getElementById('nameF').addEventListener('click', inc);
document.getElementById('myName8').addEventListener('click', inc);
document.getElementById('myName9').addEventListener('click', inc);
document.getElementById('myName10').addEventListener('click', inc);
document.getElementById('myName11').addEventListener('click', inc);
document.getElementById('nameHealth').addEventListener('click', inc);
document.getElementById('namePlan').addEventListener('click', inc);
document.getElementById('bonus1').addEventListener('click', inc);




function dec() {
    hatched -= 7.2;
    /* Perc (or percentage) takes the answer from hatched/total... */
    var perc = hatched / total;
    /* ... and filled takes perc and multiplies it by canvas.width (700px in this case) */
    var filled;
    filled = perc * c.width;
    ctx.clearRect(0, 0, c.width, c.height);

    /* Fill Rectangle*/
    ctx.fillStyle = "#9370DB";
    ctx.fillRect(0, 0, filled, c.height);

    // if (hatched <= 0) {
    //     hatched = 0;
    // }
}
document.getElementById('morelink').addEventListener('click', dec);
document.getElementById('morelink2').addEventListener('click', dec);
document.getElementById('morelink3').addEventListener('click', dec);
document.getElementById('morelink4').addEventListener('click', dec);
document.getElementById('morelink5').addEventListener('click', dec);
document.getElementById('morelink6').addEventListener('click', dec);
document.getElementById('morelink7').addEventListener('click', dec);
document.getElementById('morelink8').addEventListener('click', dec);
document.getElementById('morelink9').addEventListener('click', dec);
document.getElementById('morelink10').addEventListener('click', dec);
document.getElementById('morelink11').addEventListener('click', dec);
document.getElementById('morelink12').addEventListener('click', dec);
document.getElementById('morelink13').addEventListener('click', dec);
document.getElementById('morelink14').addEventListener('click', dec);

// More modal opcija

// First Div modal
$('#answerCurently').hide()
function sayProffesion() {
    $('#answerCurently').show()
    var proffesionCurent = document.getElementById('curentyProffesion').value;
    var htmlAdd = proffesionCurent;
    document.getElementById('answerCurently').innerHTML = htmlAdd;
}
document.getElementById('name').addEventListener('click', sayProffesion);

// Second div modal
$('#answerQuestion').hide()
function curentlyAt() {
    $('#answerQuestion').show()
    var proffesion = document.getElementById('enterYourProffesion').value;
    var htmlAddPPPPP = proffesion;
    document.getElementById('answerQuestion').innerHTML = htmlAddPPPPP;
}
document.getElementById('nameB').addEventListener('click', curentlyAt);

// Third Modal Personal Interest
$('#answerCurently2').hide()
function sayActivities() {
    $('#answerCurently2').show()
    var activities = document.getElementById('curentyActivities').value;
    var htmlAddWWWWWW = activities;
    document.getElementById('answerCurently2').innerHTML = htmlAddWWWWWW;
}
document.getElementById('nameActivities').addEventListener('click', sayActivities);


function enableF() {
    var textArea = document.getElementById('comment2').value;
    if (textArea.length < 15) {
        $('.please2').html('Please write more then 15 letters');
        document.getElementById("nameF").disabled = true;
    } else {
        document.getElementById("nameF").disabled = false;
        document.getElementById("nameF").style.backgroundColor = "#4AC1BD";
        document.getElementById("nameF").style.backgroundPosition = "left bottom";
        document.getElementById("nameF").style.color = "white";
        $('.please2').html("");
    }
}
document.getElementById('comment2').addEventListener('input', enableF);

// Return button

let returnButton = document.getElementById("morelink");
returnButton.addEventListener('click', function () {
    document.getElementById('firstDiv').style.display = 'block';
    document.getElementById('secondDiv').style.display = 'none';
})

let returnButtonA = document.getElementById("morelink2");
returnButtonA.addEventListener('click', function () {
    document.getElementById('secondDiv').style.display = 'block';
    document.getElementById('thirdDiv').style.display = 'none';
})

let returnButtonB = document.getElementById("morelink3");
returnButtonB.addEventListener('click', function () {
    document.getElementById('thirdDiv').style.display = 'block';
    document.getElementById('fourthDiv').style.display = 'none';
})
let returnButtonC = document.getElementById("morelink4");
returnButtonC.addEventListener('click', function () {
    document.getElementById('fourthDiv').style.display = 'block';
    document.getElementById('fifthDiv').style.display = 'none';
})

let returnButtonD = document.getElementById("morelink5");
returnButtonD.addEventListener('click', function () {
    document.getElementById('fifthDiv').style.display = 'block';
    document.getElementById('sixthDiv').style.display = 'none';
})
let returnButtonF = document.getElementById("morelink6");
returnButtonF.addEventListener('click', function () {
    document.getElementById('sixthDiv').style.display = 'block';
    document.getElementById('seventhDiv').style.display = 'none';
})
let returnButtonG = document.getElementById("morelink7");
returnButtonG.addEventListener('click', function () {
    document.getElementById('seventhDiv').style.display = 'block';
    document.getElementById('eightDiv').style.display = 'none';
})
let returnButtonH = document.getElementById("morelink8");
returnButtonH.addEventListener('click', function () {
    document.getElementById('eightDiv').style.display = 'block';
    document.getElementById('ninthDiv').style.display = 'none';
})
let returnButtonQQ = document.getElementById("morelink9");
returnButtonQQ.addEventListener('click', function () {
    document.getElementById('ninthDiv').style.display = 'block';
    document.getElementById('tenthDiv').style.display = 'none';
})
let returnButtonDina = document.getElementById("morelink10");
returnButtonDina.addEventListener('click', function () {
    document.getElementById('tenthDiv').style.display = 'block';
    document.getElementById('eleventhDiv').style.display = 'none';
})
let returnButtonZZ = document.getElementById("morelink11");
returnButtonZZ.addEventListener('click', function () {
    document.getElementById('eleventhDiv').style.display = 'block';
    document.getElementById('twelthDiv').style.display = 'none';
})
let returnButtonMM = document.getElementById("morelink12");
returnButtonMM.addEventListener('click', function () {
    document.getElementById('twelthDiv').style.display = 'block';
    document.getElementById('thirteenDiv').style.display = 'none';
})
let returnButtonNenad = document.getElementById("morelink13");
returnButtonNenad.addEventListener('click', function () {
    document.getElementById('thirteenDiv').style.display = 'block';
    document.getElementById('fourteenthDiv').style.display = 'none';
})
let returnButtonMalina = document.getElementById("morelink14");
returnButtonMalina.addEventListener('click', function () {
    document.getElementById('fourteenthDiv').style.display = 'block';
    document.getElementById('fifteenDiv').style.display = 'none';
})


function enableQQQ(event) {
    var textAreaQQQ = event.srcElement.value;
    console.log(textAreaQQQ.includes('@'));
    if (textAreaQQQ.includes('@')) {
        document.getElementById('bonus2').disabled = false;
        document.getElementById("bonus2").style.backgroundPosition = "left bottom";
        document.getElementById("bonus2").style.color = "white";
        document.getElementById("bonus2").style.backgroundColor = "#4AC1BD";
    } else {
        document.getElementById("bonus2").disabled = true;
    }
}
document.getElementById('enterYourEmail2').addEventListener('input', enableQQQ);

var input = $('#enterYourEmail2');
if (input.value.length === 0) {
    $('#resultEmail').html("");
}
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
if (!input.value.match(mailformat)) {
    $('#resultEmail').html("Please enter a validate email");
}
function ValidateEmail(input) {
    if (input.value.match(mailformat)) {
        return true;
    }
}

$("#lastForm").on('submit', ValidateEmail(document.form1.email));

// $('#resultEmail').html("Please enter a validate email");
// $('#resultEmail').css('color', '#B94F74');





