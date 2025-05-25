import { createRequestHandler } from "@remix-run/netlify";

export default createRequestHandler({
  build: require("./build"),
  mode: process.env.NODE_ENV,
});
