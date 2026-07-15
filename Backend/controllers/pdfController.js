const { db } = require("../firebase/admin");

const getPdfs = async (req, res) => {
  try {
    console.log(`Petición autorizada para el usuario con email: ${req.user.email}`);

    const snapshot = await db.collection("pdfs").get();

    const pdfs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(pdfs);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = {
  getPdfs
};