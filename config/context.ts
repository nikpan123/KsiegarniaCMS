import dotenv from "dotenv";

dotenv.config();

export const contextOptions = {
  extraHTTPHeaders: {
    "X-Tests-Token": process.env.X_TEST_TOKEN!,
  },
};