const everexport = require('./everexport/everexportjs-opt')
const token = "S=s1:U=93aa5:E=167af159bc9:C=16057646f00:P=1cd:A=en-devtoken:V=2:H=62d4673ee2568acef054ff56e5c1e41d"
const sandbox = true
const ex = new everexport.EvernoteExporter(token, sandbox)

// Gets notebooks from account and lists the titles on the main page
ex.listNotebooks().then((notebooks) => {
  const ul = document.createElement("ul")
  notebooks.forEach(notebook => {
    const li = document.createElement("li")
    const text = document.createTextNode(notebook.name)
    li.appendChild(text)
    ul.appendChild(li)
  });
  
  const div = document.getElementById("notebooks")
  div.appendChild(ul)
})
