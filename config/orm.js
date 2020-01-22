// Import MySQL connection.
var connection = require("../config/connection.js")

// Helper function for SQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


// Object for SQL statement functions
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

module.exports = orm;