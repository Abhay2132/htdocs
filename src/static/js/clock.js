(async function () {
	while( true ) {
		let d = new Date()
		let hr = d.getHours();
		let min = d.getMinutes();
		let sec = d.getSeconds();
		sec = sec < 10 ? "0" + sec : sec;
		await new Promise(res => setTimeout(res , 500));
		document.querySelector("#time").textContent = hr + " : " + min + " : " + sec;
		document.querySelector("#ap").textContent = hr < 12 ? "AM" : "PM";
	}
})()