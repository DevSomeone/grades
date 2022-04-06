# 成績查詢

## 登入 <a onclick="event.preventDefault();window.open('http:\/\/shinher.hlhs.hlc.edu.tw\/online\/');">http://shinher.hlhs.hlc.edu.tw/online/</a>

***記住: 要在同一瀏覽器上瀏覽***

## 填寫資料

年分 <input id="year" type="number" onkeyup="if(this.value.length > 3) {event.preventDefault();alert('是三位數的，除非中華民國超過千年w');}" value="110">

學期 <select id="semester">
    <option label="上">1</option>
    <option label="下" selected>2</option>
</select>

年級 <select id="grade">
    <option label="一">1</option>
    <option label="二">2</option>
    <option label="三">3</option>
</select>

第幾次考試 <select id="time"></select>

## 查詢

> ___[成績網址查詢原始碼位址](https://gist.github.com/DevSomeone/2bab209ad2aaea6a7139bcf22c76c3f0)___

> ___礙於現階段成績ID的驗證資料不足，因此非一年級(現階段)的成績可能無法查詢___  
> ___如果有人可以[提供](mailto:imh948794@gmail.com)非一年級的帳號，我將可以做成績ID的分析___  

<button id="submit" onclick="async function a(){try{window.goPage=window.goPage;}catch(e){window.goPage=()=>{}};if(typeof goPage==='undefined'){var f=await fetch('PageGo.js');var t=await f.text();eval(t);}goPage();};a();">查詢</button>

<script src="page.js"></script>
