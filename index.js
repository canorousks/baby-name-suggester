import express from "express"
import cors from 'cors'
import path from "path"
import { fileURLToPath } from 'url';


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express()

var corsOption = {
    origin: "*"
};

app.use(cors(corsOption));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/temp.html");
});

const PORT = 4000

app.listen(process.env.PORT || PORT, () => {
    console.log(__dirname)
    console.log(`Server is running on port ${PORT}.`);
});