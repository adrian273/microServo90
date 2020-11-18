/***
 * Adrian Verdugo ( アドリアン　)
 * @github adrian273
 * @since 11/1/2020
 * 
 */
const express = require("express");
const app = express();
const port = 4000;
const { Board, Servo } = require("johnny-five");
// -----------------------------------------------------------------------------------------------------
const board = new Board({ repl: false });
const server = app.listen(`${port}`, function () {
    console.log(`Server started on port ${port}`);
});
// ------------------------------------------------------------------------------------------------------
const io = require("socket.io")(server);
// ------------------------------------------------------------------------------------------------------



io.on("connection", function (socket) {
    console.log("conectado:" + socket.id);

    board.on("ready", function () {
        socket.on('move', move => {
            const servo = new Servo(10);
            servo.to(move);
        });
    });
});

