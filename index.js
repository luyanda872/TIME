

let dateVar = new Date();
function wc() {
    dateVar = new Date();
    let sec = dateVar.getSeconds() < 10 ? "0" + dateVar.getSeconds() : dateVar.getSeconds();
    let min = dateVar.getMinutes() < 10 ? "0" + dateVar.getMinutes() : dateVar.getMinutes();
    let hour = dateVar.getHours() < 10 ? "0" + dateVar.getHours() : dateVar.getHours();
    document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
    console.log("here");
}
let h;
let m;
let s;
let p = false;
let TimerId;
let StId;

function timer(hour, min, sec) {
    TimerId = setInterval(() => {
        document.getElementById("time").innerHTML = (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
        if (sec > 0) {
            sec = sec - 1;
        }
        else if (min > 0) {
            sec = 59;
            min = min - 1;
        }
        else if (min == 0) {
            if (hour > 0) {
                min = 59;
                sec = 59;
                hour = hour - 1;
            }
        }
        h = hour;
        s = sec;
        m = min;
        if (sec == 0 && min == 0 && hour == 0) {
            clearInterval(1);
        }

    }, 1000);

}

function StopW(hour, min, sec) {
    StId = setInterval(() => {
        sec++;
        document.getElementById("time").innerHTML = (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
        min = min + (sec - (sec % 60)) / 60;
        sec = sec % 60;
        hour = hour + (min - (min % 60)) / 60;
        min = min % 60;
    }, 1000);
}

function StopWatchTempTesting(hour, min, sec) {
    StId = setInterval(() => {
        sec++;
        document.getElementById("time").innerHTML = (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
        min = min + (sec - (sec % 60)) / 60;
        sec = sec % 60;
        hour = hour + (min - (min % 60)) / 60;
        min = min % 60;
    }, 1000);
}

if (document.getElementById("indent").innerText == "WORLD CLOCK") {
    let sec = dateVar.getSeconds() < 10 ? "0" + dateVar.getSeconds() : dateVar.getSeconds();
    let min = dateVar.getMinutes() < 10 ? "0" + dateVar.getMinutes() : dateVar.getMinutes();
    let hour = dateVar.getHours() < 10 ? "0" + dateVar.getHours() : dateVar.getHours();
    document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
    setInterval(wc, 100);
}
else if (document.getElementById("indent").innerText == "TIMER") {
    console.log(true);

    document.getElementById("start").onclick = function () {
        if (document.getElementById("hou").value == "" && document.getElementById("min").value == "" && document.getElementById("sec").value == "") {
            alert("type some input");
        }
        else {
            let hour = document.getElementById("hou").value == "" ? 0 : Number(document.getElementById("hou").value);
            let min = document.getElementById("min").value == "" ? 0 : Number(document.getElementById("min").value);
            let sec = document.getElementById("sec").value == "" ? 0 : Number(document.getElementById("sec").value);
            min = min + (sec - (sec % 60)) / 60;
            sec = sec % 60;
            hour = hour + (min - (min % 60)) / 60;
            min = min % 60;
            h = hour;
            m = min;
            s = sec;
            timer(hour, min, sec);
            document.getElementById("pouse").style.display = "flex";
            document.getElementById("start").style.display = "none";
            document.getElementById("reset").style.display = "flex";
            document.getElementById("restart").style.display = "flex";
            document.getElementById("hou").style.display = "none";
            document.getElementById("min").style.display = "none";
            document.getElementById("sec").style.display = "none";
        }
    };
    document.getElementById("pouse").onclick = function () {
        if (p == false) {
            clearInterval(TimerId);
            console.log("poursed");
            document.getElementById("pouse").innerHTML = "resume";
            p = true;
        }
        else {
            document.getElementById("pouse").innerHTML = "pouse";
            // timer(Number(document.getElementById("hou").value), Number(document.getElementById("min").value), Number(document.getElementById("sec").value) );
            timer(h, m, s);
            console.log(Number(document.getElementById("hou").value), Number(document.getElementById("min").value), Number(document.getElementById("sec").value));
            p = false;
        }
    };
    document.getElementById("restart").onclick = function () {
        clearInterval(TimerId);
        let hour = document.getElementById("hou").value == "" ? 0 : Number(document.getElementById("hou").value);
        let min = document.getElementById("min").value == "" ? 0 : Number(document.getElementById("min").value);
        let sec = document.getElementById("sec").value == "" ? 0 : Number(document.getElementById("sec").value);
        min = min + (sec - (sec % 60)) / 60;
        sec = sec % 60;
        hour = hour + (min - (min % 60)) / 60;
        min = min % 60;
        h = hour;
        m = min;
        s = sec;
        timer(h, m, s);


    };
    document.getElementById("reset").onclick = function () {
        clearInterval(TimerId);
        document.getElementById("pouse").style.display = "none";
        document.getElementById("start").style.display = "flex";
        document.getElementById("reset").style.display = "none";
        document.getElementById("restart").style.display = "none";
        document.getElementById("hou").style.display = "flex";
        document.getElementById("min").style.display = "flex";
        document.getElementById("sec").style.display = "flex";
        document.getElementById("hou").value = "";
        document.getElementById("min").value = "";
        document.getElementById("sec").value = "";
        document.getElementById("time").innerHTML = "00:00:00";


    }
    document.getElementById("pouse").style.display = "none";
    document.getElementById("reset").style.display = "none";
    document.getElementById("restart").style.display = "none";
    console.log(true);
}
else if (document.getElementById("indent").innerText == "STOP WATCH") {
    console.log(true);
    let started = false;
    let lp = false;
    document.getElementById("lap").style.display = "none";
    document.getElementById("restart").style.display = "none";
    let cArr = document.getElementById("time").innerHTML.split(":");

    document.getElementById("start/stop").onclick = function () {
        document.getElementById("lap").style.display = "flex";
        document.getElementById("restart").style.display = "flex";
        let arr = document.getElementById("time").innerHTML.split(":");
        if(!started){
            document.getElementById("start/stop").innerHTML = "stop";  
            started = true;  
            StopW(Number(arr[0]), Number(arr[1]), Number(arr[2]));
        }
        else{
            document.getElementById("start/stop").innerHTML = "resume";
            started = false;
            clearInterval(StId);
        }
    }

    document.getElementById("restart").onclick = function () {
        clearInterval(StId);
        document.getElementById("start/stop").innerHTML = "start";
        started = false;
        document.getElementById("lap").style.display = "none";
        document.getElementById("restart").style.display = "none";
        document.getElementById("time").innerHTML = "00:00:00";
        cArr = document.getElementById("time").innerHTML.split(":");
        document.getElementById("lapRecord").innerHTML = "";
        document.getElementById("lapRecord").style.display = "none";
        document.getElementById("list").style.display = "none";
    }
    document.getElementById("lapRecord").style.display = "none";
    document.getElementById("lap").onclick = function () {
        document.getElementById("list").style.display = "contents";
        document.getElementById("lapRecord").style.display = "list-item";
        let nArr = document.getElementById("time").innerHTML.split(":");
        let num2 = Number(nArr[0])*60*60 + Number(nArr[1])*60 + Number(nArr[2]);
        let num1 = Number(cArr[0])*60*60 + Number(cArr[1])*60 + Number(cArr[2]);
        num1 = num2 - num1;
        let sec = num1 %60;
        let min = (num1 - sec)/60;
        let hour = (min - (min%60))/60;
        cArr = nArr;
        console.log(hour, min, sec);
        //document.getElementById("lapRecord").append
        let List = document.getElementById("lapRecord");
        let listItem = document.createElement("li");
        listItem.textContent = document.getElementById("time").innerHTML+ ",     +"+(hour < 10 ? "0"+hour:hour)+":"+(min < 10 ? "0"+min:min) +":"+(sec < 10 ? "0"+sec:sec);
       // List.insertBefore(listItem, List.firstChild);
        if(!lp){
            List.appendChild(listItem);
            lp = true;
        }
        else{
            List.insertBefore(listItem, List.firstChild);
        }
    }

}