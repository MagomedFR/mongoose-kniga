const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());
app.use(require("./routes/Authors.route"));
app.use(require("./routes/Books.route"));
app.use(require("./routes/Genres.route"))
app.use(require("./routes/Reviews.route"))

mongoose.connect("mongodb+srv://into:5678aKLM@cluster0.u3moagz.mongodb.net/bookstore", function(){
    console.log("Подключено к монго")
}
    
)

app.listen(port, () => {
    console.log("сервер запущен")
})