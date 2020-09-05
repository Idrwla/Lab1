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
    let table =document.getElementsByTagName("table")[0];
    let trow = table.insertRow(1);
    let cel0 = trow.insertCell(0);
    let cel1 = trow.insertCell(1);
    let cel2 = trow.insertCell(2);
    let cel3 = trow.insertCell(3);
    let cel4 = trow.insertCell(4);
    let n  = parseInt(document.getElementById("curri").innerHTML);
    cel0.innerHTML =n+1;
    cel1.innerHTML = usercomment.email;
    cel2.innerHTML = usercomment.comment;
    cel3.innerHTML=usercomment.date.getDate()+"/"+usercomment.date.getMonth()+"/"+usercomment.date.getFullYear() + "  "+ usercomment.date.getHours() +":"+usercomment.date.getMinutes();
    cel4.innerHTML=usercomment.rating;
    return table;
}

function AddrowDOM() {
    let table = document.getElementById("table");
    let row = document.createElement("tr");
    let data1 = document.createElement("td");
    let data2 = document.createElement("td");
    let data3 = document.createElement("td");
    let data4 = document.createElement("td");
    let data5 = document.createElement("td");
    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);
    row.appendChild(data4);
    row.appendChild(data5);
    let node1 = document.createTextNode(parseInt(document.getElementById("curri").innerHTML)+1);
    let node2=document.createTextNode(usercomment.email);
    let node3 = document.createTextNode(usercomment.comment);
    let node4 = document.createTextNode(usercomment.date.getDate()+"/"+usercomment.date.getMonth()+"/"+usercomment.date.getFullYear() + "  "+ usercomment.date.getHours() +":"+usercomment.date.getMinutes());
    let node5 = document.createTextNode(usercomment.rating);
    data1.appendChild(node1);
    data2.appendChild(node2);
    data3.appendChild(node3);
    data4.appendChild(node4);
    data5.appendChild(node5);
    table.appendChild(row);




return table;

}
function Valideete(){
    let x = document.forms["mainform"]["email"].value;
    let y = document.forms["mainform"]["comment"].value;
    let z = document.forms["mainform"]["level"].value;
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
    return AddrowDOM();
}

