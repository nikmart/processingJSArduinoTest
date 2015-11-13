# processing.js + Arduino
Sample code showing processing.js with Arduino using Node and Socket.io

To run this:

1) Install the Arduino code in potSense onto your Arduino and build the circuit
2) Run `mpn install` to get the required node packages
3) In `/public` run `bower install` to get proessing.js
4) Start the code using `node server.js arduinoSerialPort` where the `arduinoSerialPort` will be something like `/dev/tty.usbmodem1421`


