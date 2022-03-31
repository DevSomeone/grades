var tests = [
    "學期平時成績",
    "複習考",
    "第一次期中考",
    "第二次期中考",
    "期末考"
];
var now = "第一次期中考";

document.getElementById("grade").addEventListener("change", event => {
    var j = tests;
    var doc = document.getElementById("grade");
    if (doc.value !== 1) j.splice(1, 1);
    var f = "";
    var h = "";

    for (var i = 0; i < j.length; i++) {
        if (j[i] === now) h = "selected";
        f += `<option label="${j[i]}" ${h}>${i}</option>`;
    }
});