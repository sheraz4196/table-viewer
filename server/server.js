import next from "next";
import axios from "axios";
import express from "express";
import http from "http";
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(async () => {
  const server = express();
  const httpServer = http.createServer(server);

  // Scheduler
  const runScheduler = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/services/scheduler`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    runScheduler();
  });
});
