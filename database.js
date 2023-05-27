const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ orders: [] }).write();
db.set("orders", []).write();

db.get("orders")
  .push({
    id: 1,
    cost: 24.2,
    discountCode: "APEN23",
    items: ["books", "food", "clothing"],
  })
  .write();

db.get("orders")
  .push({
    id: 2,
    cost: 475.2,
    discountCode: "QTZPE3",
    items: ["TV"],
  })
  .write();

db.get("orders")
  .push({
    id: 3,
    cost: 4899.2,
    discountCode: "LMSOW1",
    items: ["car"],
  })
  .write();
