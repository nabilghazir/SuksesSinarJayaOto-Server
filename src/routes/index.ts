import express from "express";
import authRoute from "./route/authRouter"
import katalogRoute from "./route/katalogRouter"
import galeriRoute from "./route/galeriRouter"
import tentangRoute from "./route/tentangRouter"

const app = express();

app.use("/auth",authRoute);
app.use("/katalog",katalogRoute);
app.use("/galeri",galeriRoute);
app.use("/tentang",tentangRoute);

export const api = app