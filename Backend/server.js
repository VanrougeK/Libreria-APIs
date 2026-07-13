const express = require('express');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');

const app = express();
app.use(cors());
app.use(express.json());

const CLIENT_ID = '662300337306-tkhfkqatcogg9kloo177l1vemnbui3lr.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

app.post('/api/auth/google', async (req, res) => {
    const { token } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });

        const payload = ticket.getPayload();
        console.log("Usuario autenticado:", payload.email);

        res.status(200).json({ 
            message: 'Autenticación exitosa', 
            user: { 
                name: payload.name, 
                email: payload.email,
                picture: payload.picture
            } 
        });
    } catch (error) {
        console.error("Error verificando token:", error);
        res.status(401).json({ error: 'Token inválido' });
    }
});

app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

app.listen(3000, () => {
    console.log('API corriendo en http://localhost:3000');
});