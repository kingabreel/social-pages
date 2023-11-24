const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const users = [];

app.get('/register', (req, res) => {
    try {
        if (users.length > 0) {
            res.status(200).json(users);
        } else {
            res.status(404).send("Nenhum usuário registrado ainda.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro no servidor");
    }
});


app.post('/register', async(req, res) => {
    try {
        const { username, mail, password, app } = req.body;

        const hashedPass = await bcrypt.hash(password, 10);

        users.push({ username, mail, password: hashedPass, app});

        res.status(201).send("Usuário registrado!");
        console.log(users);
    } catch (error){
        console.error(error);
        res.status(500).send("Erro no servidor");
    }
});

app.post('/login', async(req, res) => {
    try {
        const { usernameOrEmail, password } = req.body;

        console.log('Received login request:', { usernameOrEmail, password });

        const user = users.find(u => u.username === usernameOrEmail || u.mail === usernameOrEmail);

        if (!user) {
            return res.status(401).send("Usuário não registrado");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch){
            return res.status(401).send("Senha inválida");
        }

        res.status(200).send("Login sucedido!");

    } catch (error) {
        console.error(error);

        res.status(500).send("Erro no servidor");
    }
});


app.listen(PORT, () => {
    console.log("Servidor rodando.")
})