const { db } = require("../firebase/admin");
const pdfs = require("../data/pdfs.json");

async function importData() {
  try {
    for (const pdf of pdfs) {
      await db.collection("pdfs").doc(String(pdf.id)).set(pdf);
      console.log(`✅ Importado: ${pdf.title}`);
    }

    console.log("🎉 Importación completada.");
    process.exit();

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

importData();