const admin = require('firebase-admin');

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Acceso denegado. No se proporcionó un token válido.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    
    req.user = decodedToken;

    next();
  } catch (error) {
    console.error('Error al verificar el token de Firebase:', error);
    return res.status(401).json({ error: 'Token inválido o expirado.' });
  }
};