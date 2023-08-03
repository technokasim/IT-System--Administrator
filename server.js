const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { v4: uuidv4 } = require("uuid");
const port = 3000;

let records = [];

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/records", (req, res) => {
  res.sendFile(__dirname + "/records.html");
});


app.post("/addRecord", (req, res) => {
    const newRecord = { ...req.body, _id: uuidv4() }; 
    records.push(newRecord);
    res.status(200).json({ message: "Record added successfully!" });
  });

app.get("/getRecords", (req, res) => {
  res.status(200).json(records);
});

app.delete("/removeRecord/:id", (req, res) => {
  const recordId = req.params.id;
  records = records.filter(record => record._id !== recordId);
  res.status(200).json({ message: "Record removed successfully!" });
});


app.put("/updateRecord/:id", (req, res) => {
    const recordId = req.params.id;
    const updatedRecord = req.body;
  
    for (let i = 0; i < records.length; i++) {
      if (records[i]._id === recordId) {
        records[i] = { ...records[i], ...updatedRecord };
        break;
      }
    }
  
    res.status(200).json({ message: "Record updated successfully!" });
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
