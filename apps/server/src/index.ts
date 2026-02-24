import express from "express";
import cors from "cors";
import helmet from "helmet";

// Import route modules
import userRoutes from "./api/routes/users";
import questionRoutes from "./api/routes/questions";
import answerRoutes from "./api/routes/answers";
import commentRoutes from "./api/routes/comments";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Mount routes
app.use("/users", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answers", answerRoutes);
app.use("/comments", commentRoutes);

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
