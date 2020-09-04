var regexEmail = /^[a-zA-Z0-9._@]+$/
var regextwo = /@/
var regexrating = /^[1-5]/
var usercomment = {
    email :"",
    comment:"",
    rating:"",
    date:Date()

};

function Addrow(){
    var table =document.getElementsByTagName("table")[0];
    var trow = table.insertRow(1);
    var cel0 = trow.insertCell(0);
    var cel1 = trow.insertCell(1);
    var cel2 = trow.insertCell(2);
    var cel3 = trow.insertCell(3);
    var cel4 = trow.insertCell(4);
    var n  = parseInt(document.getElementById("curri").innerHTML);
    cel0.innerHTML =n+1;
    cel1.innerHTML = usercomment.email;
    cel2.innerHTML = usercomment.comment;
    cel3.innerHTML=usercomment.date.getDate()+"/"+usercomment.date.getMonth()+"/"+usercomment.date.getFullYear() + "  "+ usercomment.date.getHours() +":"+usercomment.date.getMinutes();
    cel4.innerHTML=usercomment.rating;
    return table;
}
function Valideete(){
    var x = document.forms["mainform"]["email"].value;
    var y = document.forms["mainform"]["comment"].value;
    var z = document.forms["mainform"]["level"].value;
    if(!(regexEmail.test(x) && regextwo.test(x))){
        document.getElementById("erremail").innerHTML ="Fill the e mail areaлибо проверьте правильность ввода ";
        return false;
    }else{
        document.getElementById("erremail").innerHTML ="";
    }
    if(y.length<=3 || y.length>100){
        document.getElementById("errtext").innerHTML = "Write the comment comment must be at least 3 chars and maximum 100";
        return false;
    }else{
        document.getElementById("errtext").innerHTML = "";
    }
    if(!(regexrating.test(z))){
        document.getElementById("errradio").innerHTML="Choose the comment Level!";
        return false;
    }else{
        document.getElementById("errradio").innerHTML="";
    }
    usercomment.email = x;
    usercomment.comment=y;
    usercomment.rating = z;
    usercomment.date=new Date();
    /*var table =document.getElementsByTagName("table")[0];
    var trow = table.insertRow(1);
    var cel0 = trow.insertCell(0);
    var cel1 = trow.insertCell(1);
    var cel2 = trow.insertCell(2);
    var cel3 = trow.insertCell(2);
    var cel4 = trow.insertCell(4);
    cel0.innerHTML =document.getElementById("curri")+1;
    cel1.innerHTML = usercomment.email;
    cel2.innerHTML = usercomment.comment;
    cel3.innerHTML=usercomment.date;
    cel4.innerHTML=usercomment.rating;*/
    document.forms["mainform"]["email"].value ="";
    document.forms["mainform"]["comment"].value ="";
    document.forms["mainform"]["level"].value="";
    return Addrow();
}

