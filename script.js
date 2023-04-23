var div=document.createElement("div");
div.style.textAlign="center";
div.style.marginTop="150px";

var inputdate=document.createElement("input");
inputdate.setAttribute("type","date");
inputdate.id="dob";
inputdate.style.width="30%";

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-danger");
button.style.margin="10px";
button.innerHTML="Display Data";
button.addEventListener("click",displaydata);

var outputdiv=document.createElement("div");
outputdiv.style.fontSize="30px";

div.append(inputdate,button,outputdiv)
document.body.append(div);

function displaydata(){
    var input=document.getElementById("dob").value;
    console.log(typeof(input));

    var birthdate=new Date(input);
    console.log(birthdate);

    var currentdate=new Date();
    console.log(currentdate);

    var milliseconddiff=parseInt(currentdate.getTime()-parseInt(birthdate.getTime()));
    console.log(`millisecond Diff : ${milliseconddiff}`);

    var secondsdiff=Math.floor(milliseconddiff/1000);
    console.log(`seconds Diff : ${secondsdiff}`);

    var minutesdiff=Math.floor(secondsdiff/60);
    console.log(`minutes Diff : ${minutesdiff}`);

    var hourdiff=Math.floor(minutesdiff/60);
    console.log(`hour Diff : ${hourdiff}`);

    var daydiff=Math.floor(hourdiff/24);
    console.log(`day Diff :${daydiff}`);

    var yeardiff=currentdate.getFullYear()-birthdate.getFullYear();
    console.log(`Year Diff : ${yeardiff}`);

    var Monthdiff=yeardiff*12+(currentdate.getMonth()-birthdate.getMonth());
    console.log(`Month Diff : ${Monthdiff}`);

    

    outputdiv.innerHTML=`
        Given date is ${birthdate} <br>
        year is ${yeardiff} <br>
        Month is ${Monthdiff}<br>
        Day is ${daydiff}<br>
        Hour is ${hourdiff}<br>
        Minutes is ${minutesdiff}<br>
        Seconds is ${secondsdiff}<br>
        millisecond is ${milliseconddiff}<br>
        `
    

}
