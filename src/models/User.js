// chama a conexão com o banco de dados
const mongoose = require("../database");
const bcriptjs = require("bcryptjs");

// Schema é um objeto que define as regras para a criação de dados
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

UserSchema.pre("save", async function(next) {
    const hash = await bcriptjs.hash(this.password, 10);
    this.password = hash;
})

const User = mongoose.model("User", UserSchema);

module.exports = User;