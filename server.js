/**
 * Created by dandreini16 on 10/27/17.
 */
const express = require("express");
const PythonShell = require("python-shell");
const NBA = require("nba");


const app = express();

const options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: '',
    args: []
};

PythonShell.run('script.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
});



app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});