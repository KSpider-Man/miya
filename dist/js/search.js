let oTxt = document.getElementById("txt");
let oList = document.getElementById("list");
let oBtn = document.getElementById("btn");
let src11 = "";

oTxt.oninput = () => {
	oList.style.display = "block";
	let val = oTxt.value;
	var oScript = document.createElement("script");
	oScript.src = "https://suggest.taobao.com/sug?code=utf-8&q=" + val + "&callback=jsonp&area=c2c";
	document.body.appendChild(oScript);
}

function jsonp(data) {
	data1 = data.result;
	data2 = data.magic;
	let str = "";
	for (let i = 0; i < data1.length; i++) {
		str += "<li><a href='https://s.taobao.com/search?q=" + data1[i][0] + "'>" + data1[i][0] + "</a></li>";
	}
	oList.innerHTML = str;
	console.log(str)
	if (data2) {
		for (var j = 0; j < data2.length; j++) {
			var oUl = document.createElement("ul");
			oUl.className = "ul2";
			oList.children[data2[j].index - 1].appendChild(oUl);
			oList.children[data2[j].index - 1].children[0].innerHTML += ">";

			for (var m = 0; m < data2[j].data.length; m++) {
				for (var k = 0; k < data2[j].data[m].length; k++) {
					let oLi = document.createElement("li");
					oLi.className = "li2";
					oUl.appendChild(oLi);
					let oA = document.createElement("a");
					oLi.appendChild(oA);
					oA.href = "https://s.taobao.com/search?q=" + data2[j].data[m][k].title;
					oA.innerHTML = data2[j].data[m][k].title;
					if (data2[j].data[m][k].type) {
						oA.className = "hover";
					}
				}
				oUl.innerHTML += "<br/><br/>"
			}
		}
	}
}
oBtn.onclick = function() {
	location.href = "https://s.taobao.com/search?q=" + oTxt.value;
}
