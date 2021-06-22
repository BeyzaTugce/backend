import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.json({ limit: "30mb", extended: true}));
app.use(cors());

// password shouldn't be here, temporary
const CONNECTION_URL = "mongodb+srv://team_03:hejYg2CEeKJ08XH9@team03.tqhf8.mongodb.net/MyGarage?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

// useNewUrlParser and useUnifiedTopology not required but prevent some warnings
mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true }) 
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
// this is also for warnings
mongoose.set('useFindAndModify', false);