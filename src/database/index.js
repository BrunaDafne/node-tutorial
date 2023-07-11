const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://brunadafne:usermasterpass@quitanda-api-mongo.blrh8iy.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Conexão com mongodb estável")
}).catch((err) => {
    console.log("Falha ao autenticar com o mongodb");
    console.log("error: ", err)
})

mongoose.Promise = global.Promise;

module.exports = mongoose;