const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "https://localhost:40433",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
