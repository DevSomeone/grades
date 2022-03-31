var tests = [
    "學期平時成績",
    "複習考",
    "第一次期中考",
    "第二次期中考",
    "期末考"
];
var now = "第一次期中考";

function g(grade) {
    var j = [...tests];
    if (grade !== 1) j.splice(1, 1);
    var f = "";
    var h = "";

    for (var i = 0; i < j.length; i++) {
        if (j[i] === now) h = "selected";
        f += `<option label="${j[i]}" ${h}>${i}</option>`;
        h = "";
    }
  
    document.getElementById("time").innerHTML = f;
    return f;
}

document.getElementById("grade").addEventListener("change", g(Number(document.getElementById("grade").value)));
document.addEventListener("ready", g(Number(document.getElementById("grade").value)));
