var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var mv = require('mv');

let storageDir = "";

if (process.argv.length > 2)
{
    if (fs.existsSync(process.argv[2]))
    {
        storageDir = process.argv[2] + "\\"
    }
    else
    {
        console.warn("input dir didn't exist, defaulting...")
    }
}

console.log("Storage: '" + storageDir + "'")

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = storageDir + files.filetoupload.name;
      mv(oldpath, newpath, function (err) {
        const url = "window.location.protocol + '//' + window.location.host";
        if (!err)
        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('File uploaded and moved!');
            res.write("<script>console.log(" + url + ")</script>")
            res.write("<br><button onclick=\"window.location.href = " + url + "\">Upload another file</button>")
            res.end();
        }
        else
        {
            console.error(err)
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<script>window.location.href = " + url + "</script>")
            res.end();
        }
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(80);
