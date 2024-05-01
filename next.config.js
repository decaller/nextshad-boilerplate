/** @type {import('next').NextConfig} */
module.exports = {
    experimental: {
      serverActions: {
        allowedOrigins: [
            'localhost:3000',
            'ominous-funicular-vw6pxrrp5gcw4rv-3000.app.github.dev'
            
        ],
      },
    },
  }