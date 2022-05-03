const http = require("http"),
	fs = require("fs"),
	path = require("path"),
	read = ( a ) => fs.createReadStream(a),
	mime = require("./mime"),
	exts = Object.keys(mime),
	getExt = a => a.split("/").at(-1).split("?")[0].split(".").at(-1)

http.createServer((req, res)=>{
	let { url } = req,
		sdir = path.resolve("src", "static"),
		st = Date.now();
	
	res.on("finish", () => {
		console.log(req.method, url, Date.now() - st + "ms");
	})
	
	let ext = getExt(url),
		ctype = exts.includes(ext) ? mime[ext] : false;
	
	if ( ctype ) res.writeHead(200, { "Content-Type" : ctype })
	if ( ["/", "/?"].includes(url) ) return read(path.join(sdir, "index.htm")).pipe(res)
	if ( fs.existsSync(path.join(sdir, url))) return read(path.join(sdir, url)).pipe(res);
	return res.end()
})
.listen(3000, console.log("localhost:3000 is live !"))

