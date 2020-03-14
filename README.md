# Burger Logger

## Description
This is an application that allows users to input the names of the burgers they would like to eat. Whenever an user submits a burger's name, they can decide whether they want to eat it or if they have already eaten it. Depending on what they pick, the burger would go to a different column on the page. Users can then decide to eat the burger, eat it again, or delete the burger from the list. The Burger Logger is created with MySQL, Node, Express, Express-Handlebars, and a homemade ORM.

## Technologies Used

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): used for structuring and creating elements on the DOM
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): used to style html elements on the page
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): high level programming language
* [jQuery](https://jquery.com/t): Javascript library to simplify HTML DOM traversal
* [Node.js](https://developer.mozilla.org/en-US/docs/Web/API/Node): JavaScript runtime, allows users to run JavaScript on the server
* [Express](https://expressjs.com/): Web framwork for Node.js
* [MySQL](https://www.mysql.com/): Open-source relational database management system
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars): Templating engine for web applications

## Demo
* [Visit Live Site](https://burger-logger-ry.herokuapp.com/)

OR

1. Navigate into burger file in terminal
2. run 'npm install' to install dependencies (express, express-handlebars, mysql) needed for this application
3. Run 'npm start' and the message "Server listening on: http://localhost:8080 connected as id __" will appear. This means the application is running on your server.
4. Type in 'localhost:8080' in your browser, and the site will appear

![gif](/public/assets/img/siteDemo.gif)

## Code Snippet

```
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err) {throw err};
            
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ") ";
        console.log(queryString)

        connection.query(queryString, vals, function(err, result){
            if (err) {throw err};
            cb(result)
        });
    },
    updateOne: function (table, objColVals, devoured, cb) {
        var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + devoured;
        console.log(queryString)

        connection.query(queryString, function(err, result){
            if (err) {throw err};
            cb(result)
        });
    },
    delete: function(table, devoured, cb) {
        var queryString = "DELETE FROM " + table + " WHERE " + devoured;
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
};

```
This portion of the script file displays the ORM created, a library that allows us to make MySQL queries in Javascript instead of SQL. The first function, 'selectAll', allows us to make a query to select and display all of the information in the table. 'insertOne' allows us to insert a new row into the table when users create a new burger, 'updateOne' allows the user to move the burger from the 'eat later' column to the 'devoured' column and vise versa by making a query to update the table in MySQL. The last function, 'delete' deletes the burger row from the table by making the MySQL query 'DELETE FROM'.

## Authors

**Rachel Yeung**
* [Portfolio](https://rachelyeung.herokuapp.com/)
* [Github](https://github.com/xrachhel)
* [LinkedIn](https://www.linkedin.com/in/rachel-yeung-814986159/)

