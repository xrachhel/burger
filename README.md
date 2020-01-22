# Burger Logger

## Description
This is an application that allows users to input the names of the burgers they would like to eat. Whenever an user submits a burger's name, they can decide whether they want to eat it or if they have already eaten it. Depending on what they pick, the burger would go to a different column on the page. Users can then decide to eat the burger, eat it again, or delete the burger from the list. The Burger Logger is created with MySQL, Node, Express, Express-Handlebars, and a homemade ORM.


## Technologies Used

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): used for structuring and creating elements on the DOM
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): used to style html elements on the page
* [Javscript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): high level programming language
* [Node.js](https://developer.mozilla.org/en-US/docs/Web/API/Node): Javascript runtime, allows users to run Javascript on the server
* [Express](https://expressjs.com/): Web framwork for Node.js
* [MySQL](https://www.mysql.com/): Open-source relational database management system
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars): Templating engine for web applications



## Demo
1. Navigate into noteTaker file in terminal
2. run 'npm install' to install dependencies (express) needed for this application
3. Run 'npm start' in terminal, a message saying 'APP listening on PORT 3000' will be displayed. This means the application is running on your server.
4. Type in 'localhost:3000' in your browser

![gif](public/assets/siteDemo.gif)


## Code Snippet

```
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/notes", function(req, res){
    var newNote = req.body
    fs.readFile('db/db.json', 'utf8', function(err,data){
        if(err) throw err
        var note = JSON.parse(data)
        note.push(newNote)
        note.forEach((item, i) => item.id = i + 1)
           fs.writeFile('db/db.json', JSON.stringify(note), 'utf8', function(err){
           if(err) throw err
           console.log('Posted note!')
       } )

    })
    res.json(newNote)
})

```
This portion of the script file displays the API route for posting a new note using express. 'app.post' is used to handle POST requests (a 'body parser' is needed to handle POST requests- lines 1-2). The variable 'newNote' is given the value of 'req.body', which is an object containing text from the parsed request body. 'db.json', which is a json file containing all the notes, is read and this data is parsed in order for it to become a Javascript object. 'newNote' is then pushed into the JSON data array, and each post is given an ID so a note with a specific ID can then be deleted later on. 

## Authors

**Rachel Yeung**
* [Portfolio](https://xrachhel.github.io/updatedPortfolio/)
* [Github](https://github.com/xrachhel)
* [LinkedIn](https://www.linkedin.com/in/rachel-yeung-814986159/)

