import express  from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});