const http=require('http');
const fs=require('fs');
const path=require('path');
const port=3000;
const mime={'.html':'text/html','.js':'application/javascript','.json':'application/json','.png':'image/png','.css':'text/css'};
http.createServer((req,res)=>{
  let fp=path.join(__dirname,req.url==='/'?'index.html':req.url);
  const ext=path.extname(fp);
  fs.readFile(fp,(err,data)=>{
    if(err){res.writeHead(404);res.end('Not found');return}
    res.writeHead(200,{'Content-Type':mime[ext]||'application/octet-stream'});
    res.end(data);
  });
}).listen(port,()=>console.log('Open http://localhost:'+port));
