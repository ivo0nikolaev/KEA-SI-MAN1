const express = require("express");
const app = express();
const db = require("better-sqlite3")("../NemID_ESB/nem_id_database.sqlite");

const port = 8090;

const addUserToDB = (nemID) => {
  let sql = `SELECT NemID, Password, id
        FROM user
        WHERE NemID=${nemID}`;

  return db.prepare(sql).get();
};

const addNewCodeToDB = (id, code) => {
  let sql = `INSERT INTO auth_log (UserId, Code, Timestamp) VALUES(${id},${code},${Date.now()})`
  db.prepare(sql).run()
}

app.use(express.json());

app.post("/nemid-auth", (req, res) => {
  try {
    nemIdUser = addUserToDB(req.body.nemId);
    console.log(nemIdUser)
    if (nemIdUser.Password !== req.body.nemIdCode) {
      return res.status(400).send();
    }
    const generatedCode = 100000 + Math.floor(Math.random() * 900000);

    addNewCodeToDB(nemIdUser.Id, generatedCode)
    res.send({
      generatedCode,
    });
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
});

app.listen(port, () => {
  console.log(`CodeGenerator is running on http://localhost:${port}`);
});
