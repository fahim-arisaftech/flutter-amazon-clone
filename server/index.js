const express = require("express");

// INIT
const PORT = 3000;
const app = express();



app.listen(PORT, () => {
    console.log(`connected at port ${PORT}`);
});