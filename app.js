// const NodeMediaServer = require('node-media-server');

// const config = {
//   rtmp: {
//     port: 1935,
//     chunk_size: 60000,
//     gop_cache: true,
//     ping: 30,
//     ping_timeout: 60
//   },
//   http: {
//     port: 8000,
//     allow_origin: '*'
//   }
// };

// var nms = new NodeMediaServer(config)
// nms.run();
const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935, // RTMP port
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000, // HTTP port for streaming
    allow_origin: '*',
  },
  https: {
    port: 8443, // HTTPS port (optional, if you want to use SSL)
    key: './privatekey.pem',
    cert: './certificate.pem',
  },
};

const nms = new NodeMediaServer(config);

nms.on('prePublish', (id, StreamPath, args) => {
  // Perform authentication and authorization checks here if needed
  // Return true to allow publishing or false to deny it
  return true;
});

nms.run();

console.log('NodeMediaServer is running.');
