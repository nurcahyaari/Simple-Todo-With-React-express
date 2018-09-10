'use strict'
let Todo = require('../model').todo;
let db = require('../../config/database');

module.exports = {
    postTodo : async function(req, res, next){
        // describe controller
        console.log(req.body);
        let todoInsert = await db.query(`
                                        INSERT INTO 
                                            Todos
                                                (value_todo)
                                            VALUES 
                                        ("${req.body.todo}")
                                        `); 
        res.send("Success");
    },
    getTodo : async function(req, res, next){
        let todoQuery = await db.query('SELECT * FROM Todos');
        res.json(todoQuery);
    },

    removeTodo : async function(req, res, next){
        console.log(req.body)
        res.send("Oke")
        let removeTodo = await db.query(`DELETE FROM Todos where id = '${req.body.id}'`)
    }
}