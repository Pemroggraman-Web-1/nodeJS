console.log("Belajar NodeJS");
//import modul hello
const halo = require("./hello");
//memanggil
halo.mahasiswa();
halo.dosen();
//test mau push nihhhhh
//import module url
const url = require("url");
//import module http
const http = require("http");
//import module fs
const fs = require("fs");
//import mdule path
const path = require("path");
const server = http.createServer((req, res) => {
  // res.write('selamat morning')
  // res.end()
  if (req.url == "/") {
    res.write("selamat pagi ini halaman homepage");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write("<h2>About</h2><p>Ini Halaman About</p>");
    res.end();
  } else if (req.url == "/contact") {
    fs.readFile(path.join(__dirname, "contact.html"), (err, data) => {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(data);
      res.end;
    });
  }
});
//tentukan port
server.listen(5000, () => {
  console.log("Server running");
});
