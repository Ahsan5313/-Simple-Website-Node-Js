const http = require("http")

const fs = require("fs")

const PORT = 3000



const server = http.createServer((req,res) =>{

      if(req.url == '/'){
          fs.readFile("./views/home.html",  (err, data) =>{

            if(err){

                console.log(err)
            }else{

                res.writeHead(200, {"Content-Type":"text/html"})
                res.write(data)
                res.end()
            }

          })

        
      }else if(req.url == "/about"){

          fs.readFile("./views/about.html", (err, data) =>{

            if(err){

                console.log(err)
            }else{

                res.writeHead(200, {"Content-Type":"text/html"})
                res.write(data)
                res.end
            }
          })
      }else if(req.url == "/contact"){

        fs.readFile("./views/contact.html", (err, data) =>{

            if(err){

                console.log(err)
            }else{

                res.writeHead(200, {"Content-Type":"text/html"})
                res.write(data)
                res.end()
            }
        })

      }else if(req.url == "/terms"){

        fs.readFile("./views/terms.html", (err, data) =>{

            if(err){

                console.log(err)
            }else{

                res.writeHead(200, {"Content-Type":"text/html"})
                res.write(data)
                res.end()
            }
        })

      }else{

        fs.readFile("./views/error.html", (err, data) =>{

            if(err){

                console.log(err)
            }else{

                res.writeHead(200, {"Content-Type":"text/html"})
                res.write(data)
                res.end()
            }
        })
        
      }
})

server.listen(PORT, (req, res) =>{

    console.log(`Server is running successfully at http://localhost:${PORT}`)
    
})