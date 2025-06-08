const connectDB = require('./db')
const express = require('express'); 
const path = require('path');
const cors = require('cors');

const controller = require('./controller');

const app = express();

app.use(cors());
app.use(express.json());
connectDB()


// Serve arquivos estáticos da raiz do projeto e do front-end
app.use(express.static(path.join(__dirname, '..'))); // para index.html, script.js, style.css
app.use(express.static(path.join(__dirname, '..', 'front-end'))); // para páginas do front-end
app.use(express.static(path.join(__dirname, '..', 'assets'))); // para imagens

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// (opcional) rotas específicas
app.get('/paginaBanco', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'front-end', 'paginaBanco', 'index.html'));
});

app.get('/paginaEspecie', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'front-end', 'paginaEspecie', 'paginaEspecie.html'));
});



app.get('/quimera', async (req, res) => {  
    try {
        const response = await controller.quimera(req, res);
        res.send(response);
    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

app.get('/tubarao', async (req, res) => {  
    try {
        const response = await controller.tubarao(req, res);
        res.send(response);
    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

app.get('/raia', async (req, res) => {  
    try {
        const response = await controller.raia(req, res);
        res.send(response);
    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

app.get('/listaAnimais', async (req, res) => {  
    try {
        const response = await controller.listaAnimais(req, res);
        res.send(response);
    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//
