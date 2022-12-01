import express, { Application } from "express";
import setEnvironment from "./env";
setEnvironment();
import router from "./routes/index";
import cors from "cors";
import nconf from "nconf";
import mongoose from "mongoose";
// import Auth from "./middleware/authMiddleware";
// import morganMiddleware from './middleware/morganMiddleware' ; 

const app: Application = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
// app.use(morganMiddleware)


app.use("/liveproject", router);


//console.log("Auth Middleware Connecting to the DB: ", nconf.get('db'))

mongoose.connect(
  nconf.get("webunideapi"),
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("website template theme Connected to edneed DB");
  }
);

var server=app.listen(nconf.get('port'), () => {
  console.log("api is running on port", nconf.get("port"));
});

server.timeout = 1000000;
// app.listen(nconf.get("port"), () => {
//   console.log("website template theme api is running on port", nconf.get("port"));  
// });
