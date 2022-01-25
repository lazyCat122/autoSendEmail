'use strict';
let transporter = require('mail')

function getvoi(city) {
	let res = uniCloud.httpclient.request("https://tianqiapi.com/api?version=v6&appid=37746529&appsecret=xQtCF6IA &city=" + city)
	return new Promise(function(resolve) {
		res.then(ress => {
			let arrayBuffer = ress.res.data
			let unit8Arr = new Uint8Array(arrayBuffer)
			let encodedString = String.fromCharCode.apply(null, unit8Arr)
			let decodedString = decodeURIComponent(escape(encodedString))
			let data = JSON.parse(decodedString)
			resolve(data)
		})
	})
}

exports.main = async (event, context) => {
	let datas = await getvoi("义乌")
	var message = {
		from: "58317503@qq.com",
		to: "1465428543@qq.com",
		subject: "哈喽",
		// text: "你是猪"
		html: `<html>
			<head>
				<meta charset="utf-8">
				<title></title>
			</head>
			<body>
				<div style="width: 500px;height: 800px;background-image: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2916614428,3435446859&fm=26&gp=0.jpg');">
					<center>
						<h1>今日份天气-${datas.week}</h1>
					</center>
					<div style="float: left;position: relative;left: 50px;">
						<h2>当前温度</h2>
						<p>${datas.tem}</p>
						<h2>最高温度</h2>
						<p>${datas.tem1}</p>
						<h2>最低温度</h2>
						<p>${datas.tem2}</p>
					</div>
					<div style="width: 200px;float: right;position: relative;right: 50px;">
						<h2>出行建议</h2>
						<p style="width: 200px;height: 200px;border: 1px solid; black">${datas.air_tips}</p>
					</div>
				</div>
			</body>
		</html>`
	}
	// transporter.sendMail(message)
	//返回数据给客户端
	return transporter.sendMail(message)
};
