const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://timmbach:nirvana@codingtest2.npzxdkx.mongodb.net/codingtest2?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB successfully :)");
  })
  .catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
  });

// To prevent deprectation warnings (from MongoDB native driver)
// mongoose.set("useCreateIndex", true);
// mongoose.set("useFindAndModify", false);

module.exports = {
  mongoose,
};
