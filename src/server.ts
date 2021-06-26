import "reflect-metadata";

import { server } from "./http";
import "./websocket/ChatService";

server.listen(3333, () => {
  console.log("Server run in port, 3333");
});
