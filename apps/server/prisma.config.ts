import {config} from "dotenv";
import { defineConfig, env } from "prisma/config";

config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL || env("DATABASE_URL"),
  },
});