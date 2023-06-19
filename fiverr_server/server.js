import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors';
import userRoute from './routes/user.route.js';
import conversationRoute from './routes/conversation.route.js';
import gigRoute from './routes/gig.route.js';
import messageRoute from './routes/message.route.js';
import orderRoute from './routes/order.route.js';
import reviewRoute from './routes/review.route.js';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({origin:"http://localhost:5173", credentials: true}));
app.use(cookieParser());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MOngoDb");
  } catch (error) {
    handleError(error);
  }
}

app.use("/api/users", userRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/message", messageRoute);
app.use("/api/order", orderRoute);
app.use("/api/review", reviewRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';

  return res.status(errorStatus).send(errorMessage);
})

app.listen(5000, ()=> {
  connect();
    console.log("Server Running");
})