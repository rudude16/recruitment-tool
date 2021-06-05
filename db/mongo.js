const moongose = require("mongoose");
const DB = process.env.DATABASE;
moongose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected Successfully!");
  })
  .catch((err) => console.log(err));
