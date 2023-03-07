const express = require("express");
const cors = require("cors");
const multer = require("multer");
const {
  ref,
  uploadBytes,
} = require("firebase/storage");
const storage = require("./firebase");
const app = express();
app.use(cors());
app.use(express.json());

// multer
const memoStorage = multer.memoryStorage();
const upload = multer({ memoStorage });

app.get('/', (request, response) => {
  response.json(
    {
      "message": "Basic API",
      "routes": [
        {
          "route": "/create",
          "methods": [
            "POST"
          ]
        }  
      ]
    }
  )
})

// add a picture
app.post("/create", upload.single("pic"), async (req, res) => {
    const file = req.file;
    const imageRef = ref(storage, file.originalname);
    const metatype = { contentType: file.mimetype, name: file.originalname };
    await uploadBytes(imageRef, file.buffer, metatype)
      .then((snapshot) => {
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${snapshot.ref.bucket}/o/${snapshot.ref.name}?alt=media`;
        res.send(publicUrl);
      })
      .catch((error) => console.log(error.message));
  });
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server has started on port " + PORT);
});