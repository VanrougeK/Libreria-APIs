const { db } = require("../firebase/admin");
const path = require("path");

const pdfsDataPath = path.join(__dirname, "../data/pdfs.json");
const pdfs = require(pdfsDataPath);

async function importData() {
  try {
    for (const pdf of pdfs) {
      await db.collection("pdfs").doc(String(pdf.id)).set(pdf);
      console.log(`✅ Importado: ${pdf.title}`);
    }

    console.log("🎉 Importación completada.");
    process.exit(0);

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

importData();