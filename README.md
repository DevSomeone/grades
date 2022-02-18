# 成績查詢

## 登入 <a onclick="event.preventDefault();window.open('http:\/\/shinher.hlhs.hlc.edu.tw\/online\/');">http://shinher.hlhs.hlc.edu.tw/online/</a>

***記住: 要在同一瀏覽器上瀏覽***

## 填寫資料

年分 <input id="year" type="number" onkeyup="if(this.value.length > 3) {event.preventDefault();alert('是三位數的，除非中華民國超過千年w');}" value="110">

學期 <select id="semester">
    <option label="上" selected>1</option>
    <option label="下">2</option>
</select>

年級 <select id="grade">
    <option label="一">1</option>
    <option label="二">2</option>
    <option label="三">3</option>
</select>

第幾次考試 <select id="time">
    <option label="學期平時成績">0</option>
    <option label="複習考">1</option>
    <option label="第一次期中考">2</option>
    <option label="第二次期中考">3</option>
    <option label="期末考" selected>4</option>
</select>

## 查詢

<button id="submit" onclick="async function a(){try{window.goPage=window.goPage;}catch(e){window.goPage=()=>{}};if(typeof goPage==='undefined'){var f=await fetch('PageGo.js');var t=await f.text();eval(t);}goPage();};a();">查詢</button>
