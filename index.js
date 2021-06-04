import express from 'express';
import mongoose from 'mongoose';
const CONNECTION_URL = "mongodb+srv://team_03:<Team03**>@team03.tqhf8.mongodb.net/MyGarage?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);
