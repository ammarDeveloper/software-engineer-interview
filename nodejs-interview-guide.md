- [Node.js Interview Guide for 5+ Years Experience](#nodejs-interview-guide-for-5--years-experience)
  * [Fundamentals](#fundamentals)
    + [What is Node.js?](#what-is-nodejs-)
    + [Node.js Architecture](#nodejs-architecture)
    + [Event Loop](#event-loop)
      - [**Execuation of above phases with queues:**](#--execuation-of-above-phases-with-queues---)
        * [**Timer Queue**](#--timer-queue--)
        * [**Poll phase or I/O Queue**](#--poll-phase-or-i-o-queue--)
        * [**Check Queue**](#--check-queue--)
        * [**Close Queue**](#--close-queue--)
    + [Single Thread vs. Concurrency](#single-thread-vs-concurrency)
    + [Asynchronous vs. Non-blocking](#asynchronous-vs-non-blocking)
    + [Callbacks, Promises, and Async/Await](#callbacks--promises--and-async-await)
  * [Core Modules and APIs](#core-modules-and-apis)
    + [Essential Built-in Modules](#essential-built-in-modules)
    + [Streams](#streams)
    + [Buffers](#buffers)
    + [File System Operations](#file-system-operations)
    + [Error Handling](#error-handling)
  * [Web Development with Node.js](#web-development-with-nodejs)
    + [HTTP Module](#http-module)
    + [Express.js](#expressjs)
    + [Middleware](#middleware)
- [RESTful APIs in Node.js: Comprehensive Guide](#restful-apis-in-nodejs--comprehensive-guide)
  * [1. REST Principles and Constraints](#1-rest-principles-and-constraints)
    + [Key Constraints](#key-constraints)
    + [Example of RESTful Thinking](#example-of-restful-thinking)
  * [2. Resource-Based Routing](#2-resource-based-routing)
    + [Good URL Design Principles](#good-url-design-principles)
    + [Example in Express.js](#example-in-expressjs)
  * [3. HTTP Methods and CRUD Operations](#3-http-methods-and-crud-operations)
    + [Example Implementation](#example-implementation)
  * [4. Status Codes Best Practices](#4-status-codes-best-practices)
    + [Common Status Codes](#common-status-codes)
    + [Example Error Handler Middleware](#example-error-handler-middleware)
  * [5. API Versioning Strategies](#5-api-versioning-strategies)
    + [Common Versioning Methods](#common-versioning-methods)
    + [Example Using Express Router for URL Path Versioning](#example-using-express-router-for-url-path-versioning)
  * [6. Authentication and Authorization](#6-authentication-and-authorization)
    + [JWT (JSON Web Tokens)](#jwt--json-web-tokens-)
    + [OAuth 2.0 Integration](#oauth-20-integration)
  * [7. Rate Limiting](#7-rate-limiting)
    + [Example Using Express Rate Limit](#example-using-express-rate-limit)
    + [Dynamic Rate Limiting with Redis](#dynamic-rate-limiting-with-redis)
  * [8. Pagination, Filtering and Sorting](#8-pagination--filtering-and-sorting)
    + [Pagination](#pagination)
    + [Filtering](#filtering)
    + [Sorting](#sorting)
    + [Combined Implementation](#combined-implementation)
  * [9. API Documentation](#9-api-documentation)
    + [OpenAPI/Swagger Integration](#openapi-swagger-integration)
  * [10. CORS (Cross-Origin Resource Sharing)](#10-cors--cross-origin-resource-sharing-)
    + [Basic CORS Setup](#basic-cors-setup)
    + [Dynamic CORS Configuration](#dynamic-cors-configuration)
  * [11. Best Practices and Common Patterns](#11-best-practices-and-common-patterns)
    + [Response Formatting](#response-formatting)
    + [Error Handling](#error-handling-1)
- [Authentication & Security in Node.js: Comprehensive Guide](#authentication---security-in-nodejs--comprehensive-guide)
  * [1. Introduction to API Security](#1-introduction-to-api-security)
  * [2. JWT (JSON Web Tokens) Implementation](#2-jwt--json-web-tokens--implementation)
    + [JWT Structure](#jwt-structure)
    + [Basic JWT Implementation](#basic-jwt-implementation)
    + [JWT Authentication Middleware](#jwt-authentication-middleware)
    + [JWT Refresh Token Pattern](#jwt-refresh-token-pattern)
  * [3. Session-Based Authentication](#3-session-based-authentication)
    + [Express-Session Implementation](#express-session-implementation)
  * [4. OAuth 2.0 Integration](#4-oauth-20-integration)
    + [OAuth 2.0 with Passport.js](#oauth-20-with-passportjs)
    + [Multiple OAuth Providers](#multiple-oauth-providers)
  * [5. Password Hashing and Management](#5-password-hashing-and-management)
    + [Password Hashing with Bcrypt](#password-hashing-with-bcrypt)
    + [Password Reset Functionality](#password-reset-functionality)
    + [Password Policy Enforcement](#password-policy-enforcement)
  * [6. CORS (Cross-Origin Resource Sharing)](#6-cors--cross-origin-resource-sharing-)
    + [Basic CORS Implementation](#basic-cors-implementation)
    + [Custom CORS Handler](#custom-cors-handler)
  * [7. Security Headers with Helmet](#7-security-headers-with-helmet)
    + [Basic Helmet Implementation](#basic-helmet-implementation)
    + [Content Security Policy (CSP)](#content-security-policy--csp-)
  * [8. SQL/NoSQL Injection Prevention](#8-sql-nosql-injection-prevention)
    + [Mongoose Schema Validation](#mongoose-schema-validation)
    + [SQL Injection Prevention with Prepared Statements](#sql-injection-prevention-with-prepared-statements)
    + [Input Sanitization](#input-sanitization)
  * [9. Content Security Policy (CSP)](#9-content-security-policy--csp-)
    + [How CSP Works](#how-csp-works)
    + [Implementation Steps](#implementation-steps)
      - [1. Using Helmet in Express.js](#1-using-helmet-in-expressjs)
      - [2. Manual Header Implementation](#2-manual-header-implementation)
      - [3. CSP in HTML (Meta Tag)](#3-csp-in-html--meta-tag-)
    + [Common CSP Directives](#common-csp-directives)
    + [Special Keywords](#special-keywords)
    + [Testing Your CSP](#testing-your-csp)
    + [Best Practices](#best-practices)
  * [10. HTTPS Implementation](#10-https-implementation)
    + [Benefits of HTTPS](#benefits-of-https)
    + [Implementation Steps](#implementation-steps-1)
      - [1. Obtain SSL/TLS Certificate](#1-obtain-ssl-tls-certificate)
      - [2. Configure Your Web Server](#2-configure-your-web-server)
      - [3. Automated Redirects from HTTP to HTTPS](#3-automated-redirects-from-http-to-https)
      - [4. Implement HSTS (HTTP Strict Transport Security)](#4-implement-hsts--http-strict-transport-security-)
      - [5. Test Your HTTPS Setup](#5-test-your-https-setup)
    + [Best Practices](#best-practices-1)
  * [Additional Security Considerations](#additional-security-considerations)
    + [Combining CSP and HTTPS](#combining-csp-and-https)
    + [Certificate Transparency Monitoring](#certificate-transparency-monitoring)
    + [Regular Security Testing](#regular-security-testing)
- [WebSockets: A Comprehensive Guide](#websockets--a-comprehensive-guide)
  * [Introduction to WebSockets](#introduction-to-websockets)
    + [Key Features of WebSockets](#key-features-of-websockets)
    + [WebSocket Protocol](#websocket-protocol)
  * [Native WebSockets vs Socket.io](#native-websockets-vs-socketio)
    + [Native WebSockets](#native-websockets)
    + [Socket.io](#socketio)
    + [When to Choose Which?](#when-to-choose-which-)
  * [Implementing WebSockets](#implementing-websockets)
    + [Server-Side Implementation](#server-side-implementation)
      - [Native WebSockets (Node.js example using 'ws' library)](#native-websockets--nodejs-example-using--ws--library-)
      - [Socket.io Server (Node.js)](#socketio-server--nodejs-)
    + [Client-Side Implementation](#client-side-implementation)
      - [Native WebSockets (Browser)](#native-websockets--browser-)
      - [Socket.io Client (Browser)](#socketio-client--browser-)
  * [Rooms and Namespaces](#rooms-and-namespaces)
    + [Namespaces in Socket.io](#namespaces-in-socketio)
    + [Rooms in Socket.io](#rooms-in-socketio)
    + [Practical Use Cases for Rooms and Namespaces](#practical-use-cases-for-rooms-and-namespaces)
  * [Scaling WebSocket Applications](#scaling-websocket-applications)
    + [Horizontal Scaling](#horizontal-scaling)
    + [Load Balancing](#load-balancing)
    + [Redis Adapter](#redis-adapter)
    + [Scaling Strategies](#scaling-strategies)
  * [Handling Reconnection](#handling-reconnection)
    + [Reconnection Strategies](#reconnection-strategies)
      - [Socket.io Reconnection](#socketio-reconnection)
      - [Native WebSockets Reconnection](#native-websockets-reconnection)
    + [State Management during Reconnection](#state-management-during-reconnection)
  * [Security Considerations](#security-considerations)
    + [Authentication](#authentication)
    + [Authorization](#authorization)



# Node.js Interview Guide for 5+ Years Experience

## Fundamentals

### What is Node.js?
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Unlike traditional JavaScript which runs in browsers, Node.js enables developers to execute JavaScript code on the server side.

**Key characteristics:**
- **JavaScript Everywhere**: Uses the same language for both client and server
- **Event-driven architecture**: Uses events and callbacks for non-blocking operations
- **Asynchronous I/O**: Handles multiple connections concurrently without threading
- **NPM ecosystem**: Access to over a million packages via npm

**Example of a basic Node.js server:**
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```

### Node.js Architecture
Node.js follows a single-threaded event loop architecture, but uses libuv under the hood for handling asynchronous I/O operations.

**Components:**
- **V8 Engine**: Google's open-source JavaScript engine that compiles JavaScript to machine code
- **libuv**: C library providing event loop, thread pool, and asynchronous I/O
- **Core JavaScript libraries**: Built-in modules like http, fs, path
- **C++ bindings**: Bridge between JavaScript and C++ features

**Execution model:**
1. JavaScript code initiates operations
2. Node.js registers events with callbacks
3. The event loop continuously checks for events
4. When events complete, related callbacks execute

### Event Loop
The event loop is the mechanism that allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded.
Whenever there is an asynchronous operation in Node.js, the call stack offloads the task to the Node.js APIs (backed by libuv for things like I/O, timers, etc.), and once the operation completes, the event loop picks up the corresponding callback from the callback queue (or other internal queues like microtask queue) and pushes it back to the call stack for execution.

**Event loop phases:**
1. **Timers**: Executes callbacks scheduled by `setTimeout()` and `setInterval()`
2. **Pending callbacks**: Executes I/O callbacks deferred from previous loop
3. **Idle, prepare**: Used internally by Node.js
4. **Poll**: Retrieves new I/O events and executes their callbacks
5. **Check**: Executes `setImmediate()` callbacks
6. **Close callbacks**: Executes close events like socket disconnections

**Event Loop Phases (with Queues):**

1. **Timers Phase**
   - **Queue:** `setTimeout()` and `setInterval()` callbacks
   - Executes after their scheduled delay.

2. **Pending Callbacks Phase**
   - **Queue:** I/O callbacks deferred from the previous cycle
   - Example: TCP errors, `DNS` callbacks, some internal operations.

3. **Idle, Prepare Phase**
   - **Queue:** Internal use by Node.js/libuv
   - You generally don’t interact with this phase.

4. **Poll Phase**
   - **Queue:** I/O-related callbacks (e.g., `fs.readFile`)
   - If the poll queue is not empty, it processes I/O.
   - If empty:
     - It may wait for I/O,
     - Or move to the Check phase if there are no timers due.

5. **Check Phase**
   - **Queue:** `setImmediate()` callbacks
   - Always executes after the poll phase.

6. **Close Callbacks Phase**
   - **Queue:** `close` events
   - Example: `socket.on('close')`, `stream.destroy()`, etc.

**Outside the Phases — But Critical:**

- **Microtask Queue**
  - Includes:
    - `process.nextTick()` ← (runs **before** any other microtask)
    - `Promise.then()`, `catch()`, `finally()`
  - These are run:
    - **After each phase**, but before the next phase begins.


#### **Execuation of above phases with queues:**

- Synchronous code takes priority over asynchronous code
- Only after the call stack is empty, the event loop comes into the picture.
- Any callbacks in the micro task queues are executed. First, tasks in the nextTick queue and only then tasks in the promise queue
##### **Timer Queue**
  - All callbacks within the **timer queue** are executed. Callback in micro task queue are executed in between timer queue.
  - If you search for chromium DOMTimer implementation in cpp at [Click here](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/frame/DOMTimer.cpp#83), you will find that setTimeout with 0 delay is actually 1 millisecond delay.
  - Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue.

##### **Poll phase or I/O Queue**
  - All callbacks within the **I/O queue** are executed. Callback in micro task queue are executed in between I/O queue.
  - When using setTimeout with 0ms delay alongside an I/O operation you cannot guarentee which will be executed first. This is because of the implementation of setTimeout (DOMTimer) in cpp, its like when you have a setTimeout with 0 delay, it is actually 1 millisecond delay. and if the cpu enter the code at 0.5 ms then the setTimeout callback is not persent in the Timer queue there fore the Pending callbacks queue execute first and if the cpu enter the code at 1 ms then the setTimeout callback is persent in the Timer queue there fore the Timer queue is excuted first.
  - I/O events are polled, and their callbacks are added to the I/O queue only after the I/O operation completes. This is why, in some cases, setImmediate (executed in the Check phase) runs before I/O callbacks (executed in the Poll phase) — especially when the I/O completes after the Poll phase has already ended in the current iteration, pushing the I/O callback to the next loop iteration.
  - Callbacks in the micro task queues if present are executed. nextTick queue followed by Promise queue.

##### **Check Queue**
- All callbacks in the **check queue** are executed. Callback in micro task queue are executed in between Check queue.
- Check queue callbacks are executed after Microtask queues callbacks, Timer queue callbacks and 1/0 queue callbacks are executed
- Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue

##### **Close Queue**
- All callbacks in the **close queue** are executed. Callback in micro task queue are executed in between Close queue.
- For one final time in the same loop, the micro task queues are executed. nextTick queue followed by promise queue.

If there are more callbacks to be processed, the loop is kept alive for one more run and the same steps are repeated
On the other hand, if all callbacks are executed and there is no more code to process, the event loop exits.

**Summery**
- We use process.next Tick() method to queue into the nextTick queue
- We resolve or reject a Promise to queue into the Promise queue
- We use setTimeout or setinterval to queue into the timer queue
- Execute an async method to queue into the 1/0 queue
- Use setimmediate function to queue into the check queue and finally
- Attach close event listeners to queue into the close queue
- The order of execution follows the same order listed here
- nextTick and Promise queues are executed in between each queue and also in between each callback execution in the timer and check queues

**Example demonstrating the event loop order:**
```javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

setImmediate(() => {
  console.log('Immediate callback');
});

process.nextTick(() => {
  console.log('NextTick callback');
});

console.log('End');

// Output:
// Start
// End
// NextTick callback
// Timeout callback
// Immediate callback
```

### Single Thread vs. Concurrency
While Node.js operates on a single main thread, it achieves concurrency through asynchronous programming.

**Concurrency approaches:**
- **Event loop**: For I/O operations (non-blocking)
- **Worker threads**: For CPU-intensive tasks (introduced in Node.js 10)
- **Child processes**: For executing external programs and distributing work
- **Cluster module**: For scaling across multiple CPU cores

**Example using worker threads for CPU-intensive tasks:**
Node.js is single-threaded by default. If you do a heavy CPU task like calculating factorial(1000000) in the main thread, it can block everything — no async callbacks, no I/O.

Worker threads solve this by letting you run heavy tasks in a separate thread without blocking the main event loop.


```javascript
// main.js
const { Worker } = require('worker_threads');

function runFactorial(number) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./factorial-worker.js', {
      workerData: { number }
    });
    
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

async function main() {
  try {
    const result = await runFactorial(20);
    console.log('Factorial result:', result);
  } catch (err) {
    console.error(err);
  }
}

main();

// factorial-worker.js
const { parentPort, workerData } = require('worker_threads');

function calculateFactorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

const result = calculateFactorial(workerData.number);
parentPort.postMessage(result);
```

### Asynchronous vs. Non-blocking
These terms are related but have distinct meanings in Node.js:

- **Asynchronous programming**: Code execution continues without waiting for an operation to complete
- **Non-blocking I/O**: I/O operations don't block the main thread while waiting for completion

**Example comparing blocking vs. non-blocking code:**
```javascript
// Blocking (synchronous)
const fs = require('fs');
const data = fs.readFileSync('/file.md');
console.log(data);
console.log('This waits until file is read');

// Non-blocking (asynchronous)
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log('This executes before file is read');
```

### Callbacks, Promises, and Async/Await

**Callbacks:**
The original pattern for handling asynchronous operations in Node.js.

```javascript
// Example with callbacks
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  
  // Process data after it's available
  console.log('File content:', data);
  
  // Callback hell example (nested callbacks)
  fs.writeFile('output.txt', data.toUpperCase(), (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    
    console.log('File written successfully');
  });
});
```

**Promises:**
Introduced to solve the callback hell problem and provide better error handling.

```javascript
// Example with promises
const fs = require('fs').promises;

fs.readFile('file.txt', 'utf8')
  .then(data => {
    console.log('File content:', data);
    return fs.writeFile('output.txt', data.toUpperCase());
  })
  .then(() => {
    console.log('File written successfully');
  })
  .catch(err => {
    console.error('Error:', err);
  });
```

**Async/await:**
Built on promises, provides a cleaner syntax that resembles synchronous code.

```javascript
// Example with async/await
const fs = require('fs').promises;

async function processFile() {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log('File content:', data);
    
    await fs.writeFile('output.txt', data.toUpperCase());
    console.log('File written successfully');
  } catch (err) {
    console.error('Error:', err);
  }
}

processFile();
```

## Core Modules and APIs

### Essential Built-in Modules

**fs (File System):**
```javascript
const fs = require('fs');

// Reading a file asynchronously
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Writing to a file
fs.writeFile('output.txt', 'Hello World', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});

// With promises API (Node.js 10+)
const fsPromises = require('fs').promises;

async function fileOps() {
  try {
    const data = await fsPromises.readFile('file.txt', 'utf8');
    await fsPromises.writeFile('output.txt', data.toUpperCase());
  } catch (err) {
    console.error(err);
  }
}
```

**http/https:**
```javascript
const http = require('http');

// Creating an HTTP server
const server = http.createServer((req, res) => {
  // Request handling
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home Page');
  } else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'API Endpoint', status: 'active' }));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Making an HTTP request
http.get('http://example.com', (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(data);
  });
}).on('error', (err) => {
  console.error(`Error: ${err.message}`);
});
```

**events:**
```javascript
const EventEmitter = require('events');

// Create a custom event emitter
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Register an event listener
myEmitter.on('event', (arg1, arg2) => {
  console.log('Event triggered with args:', arg1, arg2);
});

// Emit the event
myEmitter.emit('event', 'first arg', 'second arg');

// Error event handling
myEmitter.on('error', (err) => {
  console.error('An error occurred:', err.message);
});
```

**path:**
```javascript
const path = require('path');

// Directory name of the current module
console.log(__dirname);

// Join paths (handles cross-platform differences)
const filePath = path.join(__dirname, 'subfolder', 'file.txt');
console.log(filePath);

// Parse path components
const pathInfo = path.parse('/home/user/file.txt');
console.log(pathInfo);
// Output: { root: '/', dir: '/home/user', base: 'file.txt', ext: '.txt', name: 'file' }

// Normalize a path
console.log(path.normalize('/home/user/../file.txt')); // '/home/file.txt'
```

### Streams
Streams allow processing data piece by piece without loading the entire dataset into memory, which is crucial for handling large files or data transfers.

**Types of Streams:**
- **Readable**: Sources of data (e.g., file read streams)
- **Writable**: Destinations for data (e.g., file write streams)
- **Duplex**: Both readable and writable (e.g., network sockets)
- **Transform**: Data can be modified while being read/written (e.g., compression)

**Example: Copying a file with streams vs. without streams:**
```javascript
const fs = require('fs');

// Without streams (loads entire file into memory)
function copyFileWithoutStreams(source, destination) {
  const content = fs.readFileSync(source);
  fs.writeFileSync(destination, content);
  console.log('File copied');
}

// With streams (processes file in chunks)
function copyFileWithStreams(source, destination) {
  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(destination);
  
  // Pipe automatically handles backpressure
  readStream.pipe(writeStream);
  
  writeStream.on('finish', () => {
    console.log('File copied');
  });
  
  readStream.on('error', (err) => console.error('Read error:', err));
  writeStream.on('error', (err) => console.error('Write error:', err));
}

// Advanced example: Creating a file compression stream
function compressFile(source, destination) {
  const zlib = require('zlib');
  const gzip = zlib.createGzip();
  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(destination);
  
  readStream
    .pipe(gzip) // Transform stream for compression
    .pipe(writeStream)
    .on('finish', () => console.log('File compressed'));
}
```

**Stream events and handling:**
```javascript
const fs = require('fs');
const readStream = fs.createReadStream('largefile.txt', { highWaterMark: 64 * 1024 });

readStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data`);
});

readStream.on('end', () => {
  console.log('End of file reached');
});

readStream.on('error', (err) => {
  console.error('Stream error:', err);
});

// Handling backpressure
const writeStream = fs.createWriteStream('output.txt');

function writeData() {
  let i = 0;
  function write() {
    let ok = true;
    while (i < 1000000 && ok) {
      // Write returns false when buffer is full
      ok = writeStream.write(`${i++}\n`);
    }
    if (i < 1000000) {
      // If buffer is full, wait for 'drain' event
      writeStream.once('drain', write);
    } else {
      writeStream.end();
    }
  }
  write();
}
```

### Buffers
Buffers are used to work with binary data directly in Node.js, stored outside the V8 heap. They're especially useful for file operations and network protocols.

**Creating buffers:**
```javascript
// Create a buffer from a string
const buf1 = Buffer.from('Hello world');

// Create a buffer of specific size
const buf2 = Buffer.alloc(10); // Creates a zero-filled buffer

// Create an uninitialized buffer (faster but may contain old data)
const buf3 = Buffer.allocUnsafe(10);

// Create buffer from array
const buf4 = Buffer.from([104, 101, 108, 108, 111]); // "hello"
```

**Common buffer operations:**
```javascript
// Converting buffer to string
const buf = Buffer.from('Hello world');
console.log(buf.toString()); // "Hello world"
console.log(buf.toString('hex')); // Hexadecimal representation

// Writing to buffers
buf.write('New content');

// Copying buffers
const target = Buffer.alloc(buf.length);
buf.copy(target);

// Slicing buffers
const slice = buf.slice(0, 5); // First 5 bytes

// Checking buffer length
console.log(buf.length);

// Concatenating buffers
const combined = Buffer.concat([buf1, buf2, buf3]);
```

**Working with encodings:**
```javascript
const text = 'こんにちは'; // "Hello" in Japanese

// Default UTF-8 encoding
const buf = Buffer.from(text);
console.log(buf.length); // 15 bytes

// Converting between encodings
console.log(buf.toString('hex'));
console.log(Buffer.from(buf.toString('hex'), 'hex').toString());
```

### File System Operations
Working with files is a common task in Node.js applications.

**Basic file operations:**
```javascript
const fs = require('fs');

// Synchronous operations (blocking)
try {
  // Check if file exists
  const exists = fs.existsSync('file.txt');
  console.log('File exists:', exists);
  
  // Read file content
  const content = fs.readFileSync('file.txt', 'utf8');
  console.log('Content:', content);
  
  // Write to file (will create or overwrite)
  fs.writeFileSync('output.txt', 'New content');
  
  // Append to file
  fs.appendFileSync('output.txt', '\nAdditional content');
  
  // Rename file
  fs.renameSync('output.txt', 'renamed.txt');
  
  // Delete file
  fs.unlinkSync('renamed.txt');
} catch (err) {
  console.error('File operation error:', err);
}

// Asynchronous operations (non-blocking)
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// Promise-based operations (Node.js 10+)
const fsPromises = require('fs').promises;

async function fileOperations() {
  try {
    // Create a directory
    await fsPromises.mkdir('new-directory');
    
    // Write file in directory
    await fsPromises.writeFile('new-directory/file.txt', 'Hello from Node.js');
    
    // Read directory contents
    const files = await fsPromises.readdir('new-directory');
    console.log('Directory contents:', files);
    
    // Get file stats
    const stats = await fsPromises.stat('new-directory/file.txt');
    console.log('Is file:', stats.isFile());
    console.log('Is directory:', stats.isDirectory());
    console.log('File size:', stats.size, 'bytes');
    console.log('Last modified:', stats.mtime);
    
  } catch (err) {
    console.error('Error:', err);
  }
}
```

**File watching:**
```javascript
// Watch for changes in a file
const watcher = fs.watch('config.json', (eventType, filename) => {
  console.log(`Event: ${eventType}`);
  if (filename) {
    console.log(`File changed: ${filename}`);
    // Reload configuration
    const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
    console.log('Updated config:', config);
  }
});

// Stop watching
// watcher.close();
```

### Error Handling
Proper error handling is crucial in Node.js applications, especially for production environments.

**Error-first callback pattern:**
```javascript
// Traditional Node.js callback pattern
fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  // Process data when no error
  console.log(data);
});
```

**Try/catch with async/await:**
```javascript
async function readConfig() {
  try {
    const data = await fs.promises.readFile('config.json', 'utf8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('Config file not found');
      return defaultConfig; // Fallback to defaults
    }
    if (err instanceof SyntaxError) {
      console.error('Invalid JSON in config file');
      return defaultConfig;
    }
    // Re-throw unexpected errors
    throw err;
  }
}
```

**Custom error classes:**
```javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

function validateUser(user) {
  if (!user.email) {
    throw new ValidationError('Email is required', 'email');
  }
  if (!user.password || user.password.length < 8) {
    throw new ValidationError('Password must be at least 8 characters', 'password');
  }
}

try {
  validateUser({ email: 'user@example.com', password: '123' });
} catch (err) {
  if (err instanceof ValidationError) {
    console.error(`Validation failed for ${err.field}: ${err.message}`);
  } else {
    console.error('Unexpected error:', err);
  }
}
```

**Global error handling:**
```javascript
// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  // Perform cleanup
  // Log error details to monitoring service
  process.exit(1); // Exit with failure code
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection at:', promise, 'reason:', reason);
  // Log error details
});

// In Express applications
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});
```

## Web Development with Node.js

### HTTP Module
Node.js includes a built-in HTTP module for creating web servers and making HTTP requests.

**Creating a basic HTTP server:**
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Get request information
  const { method, url, headers } = req;
  console.log(`${method} ${url}`);
  
  // Handle different routes
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home Page</h1>');
  } else if (url === '/api/users') {
    const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    
    res.writeHead(200, { 
      'Content-Type': 'application/json',
      'X-Powered-By': 'Node.js'
    });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

**Making HTTP requests:**
```javascript
// GET request
http.get('http://api.example.com/data', (res) => {
  let data = '';
  
  // A chunk of data has been received
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  // The whole response has been received
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
    } catch (e) {
      console.error('Error parsing response:', e);
    }
  });
}).on('error', (err) => {
  console.error('Request error:', err.message);
});

// POST request
const postData = JSON.stringify({
  name: 'John Doe',
  email: 'john@example.com'
});

const options = {
  hostname: 'api.example.com',
  port: 443,
  path: '/users',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Response:', data);
  });
});

req.on('error', (e) => {
  console.error('Request error:', e.message);
});

// Write data to request body
req.write(postData);
req.end();
```

### Express.js
Express is the most popular web framework for Node.js, simplifying routing, middleware, and HTTP operations.

**Basic Express server:**
```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' directory
app.use(express.static('public'));

// Custom middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
  next(); // Pass control to the next middleware
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Express');
});

app.get('/api/users', (req, res) => {
  const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
  res.json(users);
});

// Route with parameters
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  // Find user by ID
  res.json({ id: userId, name: `User ${userId}` });
});

// POST route
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  console.log('Created user:', newUser);
  res.status(201).json({ ...newUser, id: 3 });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
```

**Route organization:**
```javascript
// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'John' }]);
});

router.get('/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'User name' });
});

router.post('/', (req, res) => {
  res.status(201).json({ created: true });
});

module.exports = router;

// app.js
const usersRouter = require('./routes/users');
app.use('/api/users', usersRouter);
```

**Template engine integration:**
```javascript
// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/profile', (req, res) => {
  const user = { name: 'John', email: 'john@example.com' };
  res.render('profile', { user, title: 'User Profile' });
});

// In ./views/profile.ejs
// <!DOCTYPE html>
// <html>
// <head>
//   <title><%= title %></title>
// </head>
// <body>
//   <h1>Welcome, <%= user.name %></h1>
//   <p>Email: <%= user.email %></p>
// </body>
// </html>
```

### Middleware
Middleware functions are a core concept in Express and similar frameworks, allowing modular functionality to be applied to requests.

**Creating custom middleware:**
```javascript
// Logger middleware
function logger(req, res, next) {
  console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
  next();
}

// Authentication middleware
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    // Verify JWT token (using jsonwebtoken package)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add user data to request
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Rate limiting middleware
function rateLimiter(maxRequests, timeWindow) {
  const requests = {};
  
  return (req, res, next) => {
    const ip = req.ip;
    
    if (!requests[ip]) {
      requests[ip] = {
        count: 1,
        startTime: Date.now()
      };
      return next();
    }
    
    const elapsed = Date.now() - requests[ip].startTime;
    
    if (elapsed > timeWindow) {
      // Reset if time window passed
      requests[ip] = {
        count: 1,
        startTime: Date.now()
      };
      return next();
    }
    
    requests[ip].count++;
    
    if (requests[ip].count > maxRequests) {
      return res.status(429).json({
        error: 'Too many requests, please try again later'
      });
    }
    
    next();
  };
}

// Using middleware
app.use(logger);
app.use('/api/protected', authenticate);
app.use('/api', rateLimiter(100, 60 * 1000)); // 100 requests per minute

// Route-specific middleware
app.get('/admin', authenticate, (req, res) => {
  res.send('Admin panel');
});
```

**Common third-party middleware:**
```javascript
const express = require('express');
const morgan = require('morgan'); // Request logger
const helmet = require('helmet'); // Security headers
const cors = require('cors'); // Cross-Origin Resource Sharing
const compression = require('compression'); // Response compression

const app = express();

// Security headers
app.use(helmet());

// CORS middleware
app.use(cors({
  origin: ['https://example.com', 'https://api.example.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Request logging
app.use(morgan('dev')); // dev, combined, common, short, tiny

// Compress responses
app.use(compression());

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

# RESTful APIs in Node.js: Comprehensive Guide

## 1. REST Principles and Constraints

REST (Representational State Transfer) is an architectural style for designing networked applications. A RESTful API adheres to specific constraints:

### Key Constraints

- **Stateless**: Each request contains all information needed to complete it
- **Client-Server**: Separation of concerns between client and server
- **Cacheable**: Responses must define themselves as cacheable or non-cacheable
- **Uniform Interface**: Resources are identified in requests, manipulated through representations
- **Layered System**: A client cannot ordinarily tell if it's connected directly to the end server
- **Code on Demand (optional)**: Servers can temporarily extend client functionality

### Example of RESTful Thinking

Instead of an endpoint like:
```
POST /api/getUserProfile
```

RESTful design would use:
```
GET /api/users/:id
```

## 2. Resource-Based Routing

In REST, everything is a resource identified by URLs. Resources are typically nouns, not verbs.

### Good URL Design Principles

- Use nouns, not verbs (e.g., `/articles` not `/getArticles`)
- Use plural nouns for consistency (`/users` not `/user`)
- Use hierarchical relationships (`/users/123/posts` for all posts by user 123)
- Keep URLs simple and readable

### Example in Express.js

```javascript
const express = require('express');
const router = express.Router();

// Collection of users
router.get('/users', getAllUsers);
router.post('/users', createUser);

// Specific user
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// User's posts (nested resource)
router.get('/users/:userId/posts', getUserPosts);
router.post('/users/:userId/posts', createUserPost);

module.exports = router;
```

## 3. HTTP Methods and CRUD Operations

RESTful APIs map HTTP methods to CRUD operations:

| HTTP Method | CRUD Operation | Description |
|-------------|----------------|-------------|
| GET | Read | Retrieve resources |
| POST | Create | Create new resources |
| PUT | Update/Replace | Update existing resource (complete replacement) |
| PATCH | Update/Modify | Partially update existing resource |
| DELETE | Delete | Remove a resource |

### Example Implementation

```javascript
// GET - Read all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST - Create a new user
app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT - Replace a user
app.put('/api/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, 
      req.body,
      { new: true, runValidators: true, overwrite: true }
    );
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PATCH - Partially update a user
app.patch('/api/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, 
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE - Remove a user
app.delete('/api/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```

## 4. Status Codes Best Practices

Proper HTTP status codes improve API usability and debugging:

### Common Status Codes

- **2xx - Success**
  - 200 OK: Request succeeded
  - 201 Created: Resource created successfully
  - 204 No Content: Successful but no response body (common for DELETE)

- **4xx - Client Errors**
  - 400 Bad Request: Invalid syntax or parameters
  - 401 Unauthorized: Authentication required
  - 403 Forbidden: Authenticated but not authorized
  - 404 Not Found: Resource doesn't exist
  - 409 Conflict: Request conflicts with current state of server
  - 429 Too Many Requests: Rate limit exceeded

- **5xx - Server Errors**
  - 500 Internal Server Error: Generic server error
  - 502 Bad Gateway: Invalid response from upstream server
  - 503 Service Unavailable: Server temporarily unavailable

### Example Error Handler Middleware

```javascript
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  // Handle different error types
  if (err.name === 'ValidationError') {
    return res.status(400).json({ 
      error: 'Validation Error', 
      details: err.message 
    });
  }
  
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ 
      error: 'Unauthorized', 
      details: 'Valid authentication token required' 
    });
  }
  
  // Default to 500 error
  res.status(500).json({ 
    error: 'Server Error',
    details: process.env.NODE_ENV === 'production' ? 'An unexpected error occurred' : err.message
  });
});
```

## 5. API Versioning Strategies

API versioning helps maintain backward compatibility when making changes.

### Common Versioning Methods

1. **URL Path Versioning**
   ```
   /api/v1/users
   /api/v2/users
   ```

2. **Query Parameter Versioning**
   ```
   /api/users?version=1
   /api/users?version=2
   ```

3. **HTTP Header Versioning**
   ```
   Accept: application/vnd.company.v1+json
   Accept: application/vnd.company.v2+json
   ```

4. **Content Negotiation**
   ```
   Accept: application/json;version=1
   Accept: application/json;version=2
   ```

### Example Using Express Router for URL Path Versioning

```javascript
const express = require('express');
const app = express();

// V1 Routes
const v1Router = express.Router();
v1Router.get('/users', v1UserController.getAll);
v1Router.post('/users', v1UserController.create);

// V2 Routes (with new features)
const v2Router = express.Router();
v2Router.get('/users', v2UserController.getAll);
v2Router.post('/users', v2UserController.create);
v2Router.get('/users/:id/detailed', v2UserController.getDetailed); // New in v2

// Mount versioned routes
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

app.listen(3000, () => console.log('Server running on port 3000'));
```

## 6. Authentication and Authorization

Securing your API is crucial for protecting resources and user data.

### JWT (JSON Web Tokens)

```javascript
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

// User login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Verify credentials
  const user = await User.findOne({ email });
  if (!user || !await user.comparePassword(password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  // Generate JWT
  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  
  res.json({ token });
});

// Authentication middleware
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// Authorization middleware
const authorize = (roles = []) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: 'Forbidden: Insufficient permissions' 
      });
    }
    next();
  };
};

// Protected route example
app.get('/api/admin/stats', 
  authenticate, 
  authorize(['admin']), 
  (req, res) => {
    res.json({ stats: 'Admin stats data' });
  }
);
```

### OAuth 2.0 Integration

```javascript
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Configure Passport
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Find or create user
    let user = await User.findOne({ googleId: profile.id });
    
    if (!user) {
      user = await User.create({
        googleId: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName
      });
    }
    
    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
}));

// Auth routes
app.get('/api/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/api/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Generate JWT token
    const token = jwt.sign(
      { userId: req.user._id, role: req.user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    
    // Redirect to frontend with token
    res.redirect(`${process.env.FRONTEND_URL}/auth-success?token=${token}`);
  }
);
```

## 7. Rate Limiting

Rate limiting protects your API from abuse and helps maintain service quality.

### Example Using Express Rate Limit

```javascript
const rateLimit = require('express-rate-limit');

// Basic rate limiter - max 100 requests per IP in 15 minutes
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    status: 429,
    message: 'Too many requests, please try again later'
  }
});

// Apply rate limiting to all API routes
app.use('/api', apiLimiter);

// More strict limiter for authentication attempts
const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 attempts per hour
  message: {
    status: 429,
    message: 'Too many login attempts, please try again later'
  }
});

app.use('/api/auth/login', authLimiter);
```

### Dynamic Rate Limiting with Redis

```javascript
const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);

// Custom rate limiter using Redis
const redisRateLimiter = async (req, res, next) => {
  try {
    // Different limits based on user type
    const maxRequests = req.user?.premium ? 1000 : 100;
    const windowMs = 15 * 60 * 1000; // 15 minutes
    
    const key = `rate-limit:${req.ip}`;
    const current = await redis.get(key);
    
    if (current && parseInt(current) >= maxRequests) {
      return res.status(429).json({
        message: 'Rate limit exceeded. Please try again later.'
      });
    }
    
    // First request, set key with expiry
    if (!current) {
      await redis.set(key, 1, 'PX', windowMs);
    } else {
      await redis.incr(key);
    }
    
    // Add rate limit info to response headers
    const remaining = maxRequests - (current ? parseInt(current) : 0);
    res.setHeader('X-RateLimit-Limit', maxRequests);
    res.setHeader('X-RateLimit-Remaining', remaining > 0 ? remaining - 1 : 0);
    
    next();
  } catch (error) {
    // If Redis fails, don't block requests
    console.error('Rate limiter error:', error);
    next();
  }
};

app.use('/api', redisRateLimiter);
```

## 8. Pagination, Filtering and Sorting

Handling large data sets effectively is crucial for API performance and usability.

### Pagination

```javascript
// GET /api/users?page=2&limit=10
app.get('/api/users', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const [users, total] = await Promise.all([
      User.find().skip(skip).limit(limit),
      User.countDocuments()
    ]);
    
    const totalPages = Math.ceil(total / limit);
    
    res.json({
      data: users,
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      },
      links: {
        self: `/api/users?page=${page}&limit=${limit}`,
        next: page < totalPages ? `/api/users?page=${page + 1}&limit=${limit}` : null,
        prev: page > 1 ? `/api/users?page=${page - 1}&limit=${limit}` : null
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```

### Filtering

```javascript
// GET /api/products?minPrice=10&maxPrice=50&category=electronics
app.get('/api/products', async (req, res) => {
  try {
    const { minPrice, maxPrice, category, search } = req.query;
    const filter = {};
    
    // Build filter object based on query parameters
    if (minPrice !== undefined || maxPrice !== undefined) {
      filter.price = {};
      if (minPrice !== undefined) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice !== undefined) filter.price.$lte = parseFloat(maxPrice);
    }
    
    if (category) {
      filter.category = category;
    }
    
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Pagination params
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const products = await Product.find(filter)
      .skip(skip)
      .limit(limit);
      
    const total = await Product.countDocuments(filter);
    
    res.json({
      data: products,
      meta: {
        total,
        page,
        limit
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```

### Sorting

```javascript
// GET /api/products?sort=price&order=desc
app.get('/api/products', async (req, res) => {
  try {
    const { sort, order } = req.query;
    let sortOptions = {};
    
    // Set sort options
    if (sort) {
      // Default to ascending order if not specified
      sortOptions[sort] = order === 'desc' ? -1 : 1;
    } else {
      // Default sort by createdAt descending
      sortOptions = { createdAt: -1 };
    }
    
    // Pagination params
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const products = await Product.find()
      .sort(sortOptions)
      .skip(skip)
      .limit(limit);
      
    const total = await Product.countDocuments();
    
    res.json({
      data: products,
      meta: {
        total,
        page,
        limit
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```

### Combined Implementation

```javascript
// GET /api/products?page=1&limit=10&minPrice=10&maxPrice=100&category=electronics&sort=price&order=asc
app.get('/api/products', async (req, res) => {
  try {
    // Extract query parameters
    const {
      page = 1,
      limit = 10,
      sort = 'createdAt',
      order = 'desc',
      minPrice,
      maxPrice,
      category,
      search
    } = req.query;
    
    // Build filter
    const filter = {};
    
    if (minPrice !== undefined || maxPrice !== undefined) {
      filter.price = {};
      if (minPrice !== undefined) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice !== undefined) filter.price.$lte = parseFloat(maxPrice);
    }
    
    if (category) {
      filter.category = category;
    }
    
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Prepare sort and pagination
    const sortOptions = { [sort]: order === 'desc' ? -1 : 1 };
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    // Execute query
    const [products, total] = await Promise.all([
      Product.find(filter)
        .sort(sortOptions)
        .skip(skip)
        .limit(parseInt(limit)),
      Product.countDocuments(filter)
    ]);
    
    // Create response with data, metadata, and HATEOAS links
    const totalPages = Math.ceil(total / parseInt(limit));
    const currentPage = parseInt(page);
    
    // Build query string for links
    const baseUrl = '/api/products';
    const createUrl = (pg) => {
      const params = new URLSearchParams();
      params.append('page', pg);
      params.append('limit', limit);
      if (sort) params.append('sort', sort);
      if (order) params.append('order', order);
      if (minPrice) params.append('minPrice', minPrice);
      if (maxPrice) params.append('maxPrice', maxPrice);
      if (category) params.append('category', category);
      if (search) params.append('search', search);
      
      return `${baseUrl}?${params.toString()}`;
    };
    
    res.json({
      data: products,
      meta: {
        total,
        page: currentPage,
        limit: parseInt(limit),
        totalPages,
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1
      },
      links: {
        self: createUrl(currentPage),
        first: createUrl(1),
        last: createUrl(totalPages),
        next: currentPage < totalPages ? createUrl(currentPage + 1) : null,
        prev: currentPage > 1 ? createUrl(currentPage - 1) : null
      }
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Server Error',
      message: error.message 
    });
  }
});
```

## 9. API Documentation

Well-documented APIs are easier to use, maintain, and debug.

### OpenAPI/Swagger Integration

```javascript
const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

// Swagger definition
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'API for managing users',
      contact: {
        name: 'API Support',
        email: 'support@example.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Development server',
      },
      {
        url: 'https://api.example.com/api',
        description: 'Production server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/*.js'], // Path to the API routes files
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Example route with Swagger documentation
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns a list of users
 *     description: Retrieve a list of users from the database
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: User ID
 *                       name:
 *                         type: string
 *                         description: User name
 *                       email:
 *                         type: string
 *                         description: User email
 *                 meta:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
app.get('/api/users', authenticate, async (req, res) => {
  // Implementation here
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

## 10. CORS (Cross-Origin Resource Sharing)

CORS is essential for allowing or restricting access to your API from different domains.

### Basic CORS Setup

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

// Simple CORS setup - allow all origins
app.use(cors());

// More specific CORS configuration
const corsOptions = {
  origin: ['https://example.com', 'https://www.example.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['X-Total-Count'],
  credentials: true,
  maxAge: 86400 // Cache preflight requests for 24 hours
};

app.use(cors(corsOptions));

// CORS for specific routes
app.get('/api/public-data', cors(), (req, res) => {
  // This route allows any origin
  res.json({ data: 'public data' });
});

app.get('/api/sensitive-data', cors(corsOptions), (req, res) => {
  // This route only allows specified origins
  res.json({ data: 'sensitive data' });
});
```

### Dynamic CORS Configuration

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

// Get allowed origins from environment or database
const getAllowedOrigins = async () => {
  // This could come from environment variables or database
  return [
    'https://example.com',
    'https://app.example.com',
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : null
  ].filter(Boolean);
};

// Dynamic CORS configuration
app.use(async (req, res, next) => {
  const allowedOrigins = await getAllowedOrigins();
  const origin = req.headers.origin;
  
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Max-Age', '86400');
  }
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  
  next();
});
```

## 11. Best Practices and Common Patterns

### Response Formatting

Implement a consistent response format for all endpoints:

```javascript
// Response formatter middleware
const formatResponse = (req, res, next) => {
  // Store the original res.json method
  const originalJson = res.json;
  
  // Override the res.json method
  res.json = function(data) {
    // Format the response based on status code
    const statusCode = res.statusCode;
    
    // Success responses
    if (statusCode >= 200 && statusCode < 400) {
      return originalJson.call(this, {
        success: true,
        data: data,
        meta: data.meta || {},
        links: data.links || {}
      });
    }
    
    // Error responses
    return originalJson.call(this, {
      success: false,
      error: {
        code: statusCode,
        message: data.message || 'An error occurred',
        details: data.details || null
      }
    });
  };
  
  next();
};

app.use(formatResponse);
```

### Error Handling

```javascript
// Custom error class
class ApiError extends Error {
  constructor(statusCode, message, details = null) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Error handler middleware
const errorHandler = (err, req, res, next) => {
  console.error(`${err.name}: ${err.message}`);
  
  // If it's our custom error, use its status code
  const statusCode = err.statusCode || 500;
  
  // In production, don't expose internal server errors
  const message = statusCode === 500 && process.env.NODE_ENV === 'production'
    ? 'Internal Server Error'
    : err.message;
  
  // Send the error response
  res.status(statusCode).json({
    message,
    details: err.details,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

// Example usage
app.get('/api/users/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      throw new ApiError(404, 'User not found');
    }
    
    res.json(user);
  } catch (error) {
    // Pass error to the error handler middleware
    next(error);
  }
});

// Register error handler as the last middleware
app.use(errorHandler);
```

# Authentication & Security in Node.js: Comprehensive Guide

## 1. Introduction to API Security

Security is a critical aspect of modern web applications and APIs. A compromised API can lead to data breaches, unauthorized access, and reputational damage. This guide covers essential authentication and security practices for Node.js applications.

## 2. JWT (JSON Web Tokens) Implementation

JSON Web Tokens (JWT) provide a compact, self-contained way to securely transmit information between parties as a JSON object.

### JWT Structure

- **Header**: Contains token type and signing algorithm
- **Payload**: Contains claims (statements about an entity)
- **Signature**: Ensures the token hasn't been altered

### Basic JWT Implementation

```javascript
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Verify password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Generate token
    const payload = {
      userId: user._id,
      email: user.email,
      role: user.role
    };
    
    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    
    // Send response
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
```

### JWT Authentication Middleware

```javascript
const jwt = require('jsonwebtoken');

// Verify JWT middleware
const authenticateJWT = (req, res, next) => {
  // Get the token from Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }
    return res.status(403).json({ message: 'Invalid token' });
  }
};

// Role-based authorization middleware
const authorize = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (roles.length && !roles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: 'Forbidden: Insufficient permissions' 
      });
    }

    next();
  };
};

// Example usage
// Protected route for all authenticated users
app.get('/api/profile', authenticateJWT, (req, res) => {
  res.json({ message: 'Protected data' });
});

// Protected route for admins only
app.get('/api/admin/dashboard', 
  authenticateJWT, 
  authorize(['admin']), 
  (req, res) => {
    res.json({ message: 'Admin dashboard data' });
  }
);
```

### JWT Refresh Token Pattern

```javascript
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Generate refresh token
const generateRefreshToken = async (userId) => {
  // Create a random token
  const refreshToken = crypto.randomBytes(40).toString('hex');
  
  // Store in database with user ID
  await RefreshToken.create({
    token: refreshToken,
    user: userId,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
  });
  
  return refreshToken;
};

// Login endpoint with refresh token
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find and validate user...
    
    // Generate access token
    const accessToken = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '15m' } // Short expiry
    );
    
    // Generate refresh token
    const refreshToken = await generateRefreshToken(user._id);
    
    res.json({
      accessToken,
      refreshToken
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Refresh token endpoint
router.post('/refresh-token', async (req, res) => {
  try {
    const { refreshToken } = req.body;
    
    if (!refreshToken) {
      return res.status(400).json({ message: 'Refresh token required' });
    }
    
    // Find the refresh token in database
    const storedToken = await RefreshToken.findOne({ 
      token: refreshToken,
      expires: { $gt: new Date() }
    });
    
    if (!storedToken) {
      return res.status(403).json({ message: 'Invalid or expired refresh token' });
    }
    
    // Get the user
    const user = await User.findById(storedToken.user);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Generate new access token
    const accessToken = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );
    
    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Logout endpoint
router.post('/logout', async (req, res) => {
  try {
    const { refreshToken } = req.body;
    
    if (refreshToken) {
      // Remove the refresh token from database
      await RefreshToken.findOneAndDelete({ token: refreshToken });
    }
    
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```

## 3. Session-Based Authentication

For some applications, traditional session-based authentication may be more appropriate than JWTs.

### Express-Session Implementation

```javascript
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const app = express();

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    httpOnly: true, // Prevent client-side JS from reading cookies
    maxAge: 1000 * 60 * 60 * 24 // 24 hours
  },
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    ttl: 14 * 24 * 60 * 60, // 14 days
    autoRemove: 'native' // Use MongoDB's TTL index
  })
}));

// Login route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user || !await user.comparePassword(password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Create session
    req.session.user = {
      id: user._id,
      email: user.email,
      role: user.role
    };
    
    res.json({ 
      message: 'Login successful',
      user: {
        id: user._id,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Session authentication middleware
const authenticateSession = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};

// Protected route
app.get('/api/profile', authenticateSession, async (req, res) => {
  try {
    const user = await User.findById(req.session.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Logout route
app.post('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to logout' });
    }
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out successfully' });
  });
});
```

## 4. OAuth 2.0 Integration

OAuth 2.0 allows users to grant limited access to their resources on one site to another site without giving them credentials.

### OAuth 2.0 with Passport.js

```javascript
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const app = express();

// Session setup (required for passport)
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Serialize/deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Configure Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if user exists in our database
    let user = await User.findOne({ googleId: profile.id });
    
    if (!user) {
      // Create new user
      user = await User.create({
        googleId: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName,
        avatar: profile.photos[0].value
      });
    }
    
    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
}));

// Routes for Google authentication
app.get('/api/auth/google',
  passport.authenticate('google', { 
    scope: ['profile', 'email'] 
  })
);

app.get('/api/auth/google/callback',
  passport.authenticate('google', { 
    failureRedirect: '/login',
    session: true
  }),
  (req, res) => {
    // Successful authentication, redirect home or handle as needed
    res.redirect('/dashboard');
  }
);

// OAuth with JWT (instead of sessions)
app.get('/api/auth/google/jwt/callback',
  passport.authenticate('google', { 
    session: false,
    failureRedirect: '/login'
  }),
  (req, res) => {
    // Generate JWT
    const token = jwt.sign(
      { userId: req.user._id, role: req.user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    
    // Redirect to frontend with token in URL parameters
    res.redirect(`${process.env.FRONTEND_URL}/auth-success?token=${token}`);
  }
);
```

### Multiple OAuth Providers

```javascript
// Add this alongside the Google strategy
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "/api/auth/facebook/callback",
  profileFields: ['id', 'emails', 'name', 'picture.type(large)']
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ facebookId: profile.id });
    
    if (!user) {
      user = await User.create({
        facebookId: profile.id,
        email: profile.emails[0].value,
        name: `${profile.name.givenName} ${profile.name.familyName}`,
        avatar: profile.photos[0].value
      });
    }
    
    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
}));

// Routes for Facebook authentication
app.get('/api/auth/facebook',
  passport.authenticate('facebook', { 
    scope: ['email'] 
  })
);

app.get('/api/auth/facebook/callback',
  passport.authenticate('facebook', { 
    failureRedirect: '/login' 
  }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);
```

## 5. Password Hashing and Management

Secure password storage is crucial to protect user accounts.

### Password Hashing with Bcrypt

```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();
  
  try {
    // Generate salt
    const salt = await bcrypt.genSalt(10);
    
    // Hash password
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
```

### Password Reset Functionality

```javascript
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Create email transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Request password reset
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      // Don't reveal whether a user exists for security
      return res.json({ message: 'If your email is registered, you will receive a password reset link' });
    }
    
    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    
    // Hash token and set to resetPasswordToken field
    user.resetPasswordToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
      
    // Set token expiry
    user.resetPasswordExpires = Date.now() + 30 * 60 * 1000; // 30 minutes
    
    await user.save();
    
    // Create reset URL
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    
    // Email message
    const message = {
      from: process.env.EMAIL_FROM,
      to: user.email,
      subject: 'Password Reset Request',
      html: `
        <h1>You requested a password reset</h1>
        <p>Please click on the following link to reset your password:</p>
        <a href="${resetUrl}" clicktracking="off">${resetUrl}</a>
        <p>This link will expire in 30 minutes.</p>
        <p>If you didn't request this, please ignore this email.</p>
      `
    };
    
    await transporter.sendMail(message);
    
    res.json({ message: 'If your email is registered, you will receive a password reset link' });
  } catch (error) {
    console.error('Password reset error:', error);
    res.status(500).json({ message: 'Error sending password reset email' });
  }
});

// Reset password
router.post('/reset-password/:token', async (req, res) => {
  try {
    const { password } = req.body;
    
    // Hash the reset token from URL
    const resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');
      
    // Find user with valid token
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpires: { $gt: Date.now() }
    });
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }
    
    // Set new password
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    
    await user.save();
    
    res.json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```

### Password Policy Enforcement

```javascript
// Password validator middleware
const validatePassword = (req, res, next) => {
  const { password } = req.body;
  
  // Password complexity requirements
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  const errors = [];
  
  if (password.length < minLength) {
    errors.push(`Password must be at least ${minLength} characters long`);
  }
  
  if (!hasUpperCase) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!hasLowerCase) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!hasNumbers) {
    errors.push('Password must contain at least one number');
  }
  
  if (!hasSpecialChar) {
    errors.push('Password must contain at least one special character');
  }
  
  if (errors.length > 0) {
    return res.status(400).json({ 
      message: 'Password does not meet requirements',
      errors 
    });
  }
  
  next();
};

// Apply to routes that handle password creation or change
app.post('/api/users', validatePassword, userController.create);
app.post('/api/reset-password/:token', validatePassword, authController.resetPassword);
```

## 6. CORS (Cross-Origin Resource Sharing)

CORS configurations protect your API from unauthorized domains.

### Basic CORS Implementation

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

// Basic CORS setup
app.use(cors());

// More restrictive CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://example.com', 'https://www.example.com'] 
    : 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['X-Total-Count'],
  credentials: true, // Allow cookies to be sent with requests
  maxAge: 86400 // How long the results of a preflight request can be cached
};

app.use(cors(corsOptions));
```

### Custom CORS Handler

```javascript
// Custom CORS middleware for more control
const customCors = (req, res, next) => {
  // Get the origin of the request
  const origin = req.headers.origin;
  const allowedOrigins = [
    'https://example.com',
    'https://api.example.com',
    'https://admin.example.com'
  ];
  
  // Check if the origin is in our allowed list
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    // Default to no CORS for other origins
    res.setHeader('Access-Control-Allow-Origin', '');
  }
  
  // Set other CORS headers
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  
  next();
};

app.use(customCors);
```

## 7. Security Headers with Helmet

Helmet helps secure Express apps by setting various HTTP headers.

### Basic Helmet Implementation

```javascript
const express = require('express');
const helmet = require('helmet');
const app = express();

// Use helmet with default settings
app.use(helmet());

// Or configure specific protections
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'],
        styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com'],
        fontSrc: ["'self'", 'fonts.gstatic.com'],
        imgSrc: ["'self'", 'data:'],
        connectSrc: ["'self'", 'api.example.com']
      }
    },
    xssFilter: true,
    noSniff: true,
    referrerPolicy: { policy: 'no-referrer' },
    hsts: {
      maxAge: 15552000, // 180 days in seconds
      includeSubDomains: true,
      preload: true
    }
  })
);
```

### Content Security Policy (CSP)

```javascript
// CSP middleware
const csp = (req, res, next) => {
  // Define CSP directives
  res.setHeader('Content-Security-Policy', `
    default-src 'self';
    script-src 'self' https://cdn.jsdelivr.net;
    style-src 'self' https://fonts.googleapis.com;
    img-src 'self' data: https://secure.example.com;
    font-src 'self' https://fonts.gstatic.com;
    object-src 'none';
    frame-ancestors 'self';
    form-action 'self';
    base-uri 'self';
    upgrade-insecure-requests;
  `.replace(/\s+/g, ' ').trim());
  
  next();
};

app.use(csp);
```

## 8. SQL/NoSQL Injection Prevention

Injection attacks are among the most common web application vulnerabilities.

### Mongoose Schema Validation

```javascript
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a product name'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide a product description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please provide a product price'],
    min: [0, 'Price must be greater than 0']
  },
  category: {
    type: String,
    required: [true, 'Please provide a product category'],
    enum: {
      values: ['electronics', 'clothing', 'books', 'homegoods', 'other'],
      message: '{VALUE} is not supported'
    }
  }
});

// Mongoose automatically escapes special characters to prevent NoSQL injection
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
```

### SQL Injection Prevention with Prepared Statements

```javascript
// Using prepared statements with mysql2
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Safe query with prepared statement
const getUserById = async (userId) => {
  try {
    // Using ? placeholders for parameterized queries
    const [rows] = await pool.execute(
      'SELECT id, name, email FROM users WHERE id = ?',
      [userId]
    );
    
    return rows[0];
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch user');
  }
};

// Search with LIKE (safely)
const searchUsers = async (searchTerm) => {
  try {
    // Safely use LIKE with prepared statements
    const [rows] = await pool.execute(
      'SELECT id, name, email FROM users WHERE name LIKE ?',
      [`%${searchTerm}%`] // searchTerm is properly escaped
    );
    
    return rows;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to search users');
  }
};
```

### Input Sanitization

```javascript
const { body, validationResult } = require('express-validator');
const xss = require('xss');

// Middleware to sanitize input
const sanitizeInput = (req, res, next) => {
  // Sanitize body
  if (req.body) {
    Object.keys(req.body).forEach(key => {
      if (typeof req.body[key] === 'string') {
        req.body[key] = xss(req.body[key]);
      }
    });
  }
  
  // Sanitize query parameters
  if (req.query) {
    Object.keys(req.query).forEach(key => {
      if (typeof req.query[key] === 'string') {
        req.query[key] = xss(req.query[key]);
      }
    });
  }
  
  next();
};

// Express validator middleware for user registration
const validateUserRegistration = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters')
    .escape(), // Convert special characters to HTML entities
  
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email')
    .normalizeEmail(), // Normalize email address
  
  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .withMessage('Password must contain uppercase, lowercase, number, and special character'),
  
  // Check validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Apply middleware
app.post('/api/users', sanitizeInput, validateUserRegistration, userController.createUser);
```

## 9. Content Security Policy (CSP)

Content Security Policy is a security standard that helps prevent cross-site scripting (XSS), clickjacking, and other code injection attacks resulting from the execution of malicious content in the trusted web page context.

### How CSP Works

CSP works by defining approved sources of content that the browser is allowed to load. These sources are specified through CSP directives in HTTP headers or meta tags.

### Implementation Steps

#### 1. Using Helmet in Express.js

For Node.js/Express applications, the `helmet` package provides an easy way to set up CSP:

```javascript
const express = require('express');
const helmet = require('helmet');
const app = express();

// Basic CSP setup
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],  // Default to only allowing content from your site
      scriptSrc: ["'self'", "'unsafe-inline'", "trusted-cdn.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "trusted-cdn.com"],
      imgSrc: ["'self'", "data:", "trusted-cdn.com"],
      connectSrc: ["'self'", "api.yourdomain.com"],
      fontSrc: ["'self'", "fonts.googleapis.com", "fonts.gstatic.com"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
      // Add other directives as needed
    },
  })
);
```

#### 2. Manual Header Implementation

If you're not using Helmet, you can set the headers manually:

```javascript
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' trusted-cdn.com; /* other directives */"
  );
  next();
});
```

#### 3. CSP in HTML (Meta Tag)

You can also implement CSP using a meta tag in your HTML:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'unsafe-inline' trusted-cdn.com; /* other directives */"
>
```

### Common CSP Directives

| Directive | Description | Example |
|-----------|-------------|---------|
| `default-src` | Default policy for loading content | `default-src 'self'` |
| `script-src` | Valid sources for JavaScript | `script-src 'self' js.example.com` |
| `style-src` | Valid sources for stylesheets | `style-src 'self' css.example.com` |
| `img-src` | Valid sources for images | `img-src 'self' img.example.com` |
| `connect-src` | Valid targets for fetch, XHR, WebSocket | `connect-src 'self' api.example.com` |
| `font-src` | Valid sources for fonts | `font-src 'self' fonts.example.com` |
| `frame-src` | Valid sources for frames | `frame-src 'self'` |
| `media-src` | Valid sources for media (audio/video) | `media-src media.example.com` |
| `object-src` | Valid sources for plugins | `object-src 'none'` |

### Special Keywords

- `'self'`: Refers to your own origin
- `'none'`: No URLs match
- `'unsafe-inline'`: Allows inline scripts/styles
- `'unsafe-eval'`: Allows `eval()` and similar methods
- `'nonce-<value>'`: Allows a specific script/style with matching nonce
- `'<hash-algorithm>-<base64-value>'`: Allows specific hashed content

### Testing Your CSP

1. Use the browser's developer console to identify CSP violations
2. Online tools like [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
3. Report-only mode:

```javascript
app.use(
  helmet.contentSecurityPolicy({
    directives: { /* your directives */ },
    reportOnly: true
  })
);
```

### Best Practices

1. Start with a strict policy (`default-src 'none'`) and gradually allow needed resources
2. Avoid `'unsafe-inline'` and `'unsafe-eval'` when possible
3. Use nonces or hashes instead of `'unsafe-inline'` for better security
4. Set up a reporting endpoint to monitor violations
5. Test thoroughly to avoid breaking functionality

## 10. HTTPS Implementation

HTTPS encrypts the data sent between browsers and your web server, preventing eavesdropping and tampering.

### Benefits of HTTPS

- Data encryption: Protects sensitive information
- Data integrity: Prevents modification of data
- Authentication: Verifies server identity
- SEO benefits: Better ranking in search results
- Required for modern features: Many browser features require HTTPS

### Implementation Steps

#### 1. Obtain SSL/TLS Certificate

**Option A: Let's Encrypt (Free)**

```bash
# Install Certbot
sudo apt-get update
sudo apt-get install certbot

# Obtain certificate (for Apache)
sudo certbot --apache -d yourdomain.com -d www.yourdomain.com

# Or for Nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Set up auto-renewal
sudo certbot renew --dry-run
```

**Option B: Commercial Certificate**
- Purchase from providers like DigiCert, Comodo, GlobalSign
- Follow their specific installation instructions

#### 2. Configure Your Web Server

**For Express.js (Node.js)**

```javascript
const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

// Your app setup and routes
// ...

// HTTPS server setup
const httpsOptions = {
  key: fs.readFileSync('/path/to/private.key'),
  cert: fs.readFileSync('/path/to/certificate.crt'),
  // If you have intermediate certificates:
  ca: fs.readFileSync('/path/to/ca_bundle.crt')
};

https.createServer(httpsOptions, app).listen(443, () => {
  console.log('HTTPS server running on port 443');
});

// Optional: Redirect HTTP to HTTPS
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
  res.end();
}).listen(80);
```

**For Nginx**

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384';
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_dhparam /path/to/dhparam.pem; # Generate with: openssl dhparam -out /path/to/dhparam.pem 2048

    # HSTS (optional but recommended)
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Other configurations like root directory, locations, etc.
    # ...
}
```

**For Apache**

```apache
<VirtualHost *:80>
    ServerName yourdomain.com
    ServerAlias www.yourdomain.com
    Redirect permanent / https://yourdomain.com/
</VirtualHost>

<VirtualHost *:443>
    ServerName yourdomain.com
    ServerAlias www.yourdomain.com
    
    SSLEngine on
    SSLCertificateFile /path/to/certificate.crt
    SSLCertificateKeyFile /path/to/private.key
    SSLCertificateChainFile /path/to/ca_bundle.crt
    
    # Modern configuration
    SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1
    SSLCipherSuite ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384
    SSLHonorCipherOrder on
    
    # HSTS (optional but recommended)
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    
    # Other configurations like DocumentRoot, etc.
    # ...
</VirtualHost>
```

#### 3. Automated Redirects from HTTP to HTTPS

This ensures users always connect via secure connections, even if they type "http://" in their browser.

#### 4. Implement HSTS (HTTP Strict Transport Security)

HSTS tells browsers to only use HTTPS for your domain:

```javascript
// In Express with Helmet
app.use(helmet.hsts({
  maxAge: 31536000, // 1 year in seconds
  includeSubDomains: true,
  preload: true
}));
```

#### 5. Test Your HTTPS Setup

Use these tools to verify your implementation:
- [SSL Labs Server Test](https://www.ssllabs.com/ssltest/)
- [Observatory by Mozilla](https://observatory.mozilla.org/)
- Chrome DevTools Security panel

### Best Practices

1. Use strong ciphers and disable outdated protocols (TLS 1.0/1.1)
2. Enable HTTP/2 for better performance
3. Set up automatic certificate renewal
4. Implement HSTS
5. Keep private keys secure and backup certificates
6. Consider using Certificate Transparency monitoring

## Additional Security Considerations

### Combining CSP and HTTPS

For maximum security, always use CSP with HTTPS. This prevents man-in-the-middle attacks from injecting malicious content.

### Certificate Transparency Monitoring

Monitor Certificate Transparency logs to detect unauthorized certificates issued for your domain:
- [Facebook Certificate Transparency Monitoring](https://developers.facebook.com/tools/ct/)
- [Cert Spotter](https://sslmate.com/certspotter/)

### Regular Security Testing

- Run regular penetration tests
- Use automated scanning tools like OWASP ZAP or Burp Suite
- Keep all security implementations up to date

# WebSockets: A Comprehensive Guide

## Introduction to WebSockets

WebSockets provide a persistent connection between a client and server, allowing for real-time, bidirectional communication. Unlike traditional HTTP requests, which are stateless and require a new connection for each request, WebSockets maintain a single, long-lived connection over which data can be sent in either direction at any time.

### Key Features of WebSockets

- **Full-duplex communication**: Data can flow in both directions simultaneously
- **Persistent connection**: One connection remains open, eliminating the overhead of establishing new connections
- **Real-time data transfer**: Low latency due to reduced overhead compared to HTTP polling
- **Protocol efficiency**: Minimal header information after the initial handshake
- **Cross-origin communication**: Can connect to servers from different origins with proper CORS configuration

### WebSocket Protocol

WebSockets operate over a TCP connection and use the WebSocket protocol (ws:// or wss:// for secure connections). The connection begins with an HTTP handshake that then upgrades to the WebSocket protocol.

```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Origin: http://example.com
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
```

Once established, the protocol provides a message-based communication channel where both text and binary data can be transmitted.

## Native WebSockets vs Socket.io

### Native WebSockets

The WebSocket API is built into modern browsers and provides a standardized way to work with WebSocket connections.

**Advantages:**
- No external dependencies
- Lightweight implementation
- Standard browser API
- Reduced overhead

**Disadvantages:**
- Limited built-in features
- No automatic reconnection
- Fewer abstractions for complex scenarios
- Needs manual fallback mechanisms for older browsers

**Example of Native WebSocket Implementation:**

```javascript
// Client-side
const socket = new WebSocket('ws://localhost:8080');

socket.onopen = function(e) {
  console.log('Connection established');
  socket.send('Hello Server!');
};

socket.onmessage = function(event) {
  console.log(`Data received from server: ${event.data}`);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    console.log(`Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    console.log('Connection died');
  }
};

socket.onerror = function(error) {
  console.error(`WebSocket error: ${error.message}`);
};
```

### Socket.io

Socket.io is a JavaScript library that provides a higher-level abstraction over raw WebSockets with additional features.

**Advantages:**
- Automatic fallback to polling if WebSockets aren't available
- Built-in reconnection support
- Support for rooms and namespaces
- Broadcasting capabilities
- Middleware support
- Cross-browser compatibility

**Disadvantages:**
- Additional overhead compared to native WebSockets
- External dependency
- May provide features you don't need

**Example of Socket.io Implementation:**

```javascript
// Client-side
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected to server");
  socket.emit("hello", "Hello from client!");
});

socket.on("welcome", (message) => {
  console.log(`Received: ${message}`);
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});
```

```javascript
// Server-side (Node.js)
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);
  
  socket.emit("welcome", "Welcome to the Socket.io server!");
  
  socket.on("hello", (message) => {
    console.log(`Received: ${message}`);
  });
  
  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

httpServer.listen(3000, () => {
  console.log("Server listening on port 3000");
});
```

### When to Choose Which?

- **Choose Native WebSockets when:**
  - You need a lightweight solution
  - Your application has simple real-time requirements
  - You want to avoid external dependencies
  - Performance is a critical factor
  - You're targeting modern browsers only

- **Choose Socket.io when:**
  - You need enhanced features like rooms and namespaces
  - Cross-browser compatibility is important
  - You want built-in reconnection handling
  - You need fallback mechanisms for environments that don't support WebSockets
  - You're building complex real-time applications

## Implementing WebSockets

### Server-Side Implementation

#### Native WebSockets (Node.js example using 'ws' library)

```javascript
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
  console.log('Client connected');
  
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    // Echo the message back
    ws.send(`Echo: ${message}`);
  });
  
  ws.on('close', () => {
    console.log('Client disconnected');
  });
  
  ws.send('Welcome to the WebSocket server!');
});
```

#### Socket.io Server (Node.js)

```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);
  
  socket.emit('welcome', 'Welcome to the chat!');
  
  socket.on('chat message', (msg) => {
    console.log(`Message: ${msg}`);
    io.emit('chat message', msg); // Broadcast to all clients
  });
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

### Client-Side Implementation

#### Native WebSockets (Browser)

```html
<!DOCTYPE html>
<html>
<head>
  <title>WebSocket Client</title>
</head>
<body>
  <div id="messages"></div>
  <input id="messageInput" type="text" placeholder="Type a message...">
  <button onclick="sendMessage()">Send</button>
  
  <script>
    const messagesDiv = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const socket = new WebSocket('ws://localhost:8080');
    
    socket.onopen = function() {
      addMessage('Connected to the server');
    };
    
    socket.onmessage = function(event) {
      addMessage(`Received: ${event.data}`);
    };
    
    socket.onclose = function() {
      addMessage('Disconnected from the server');
    };
    
    socket.onerror = function(error) {
      addMessage(`Error: ${error.message}`);
    };
    
    function sendMessage() {
      const message = messageInput.value;
      if (message) {
        socket.send(message);
        addMessage(`Sent: ${message}`);
        messageInput.value = '';
      }
    }
    
    function addMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      messagesDiv.appendChild(messageElement);
    }
  </script>
</body>
</html>
```

#### Socket.io Client (Browser)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Socket.io Client</title>
  <script src="https://cdn.socket.io/4.6.0/socket.io.min.js"></script>
</head>
<body>
  <div id="messages"></div>
  <input id="messageInput" type="text" placeholder="Type a message...">
  <button onclick="sendMessage()">Send</button>
  
  <script>
    const messagesDiv = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const socket = io('http://localhost:3000');
    
    socket.on('connect', () => {
      addMessage('Connected to the server');
    });
    
    socket.on('welcome', (msg) => {
      addMessage(`Server: ${msg}`);
    });
    
    socket.on('chat message', (msg) => {
      addMessage(`Message: ${msg}`);
    });
    
    socket.on('disconnect', () => {
      addMessage('Disconnected from the server');
    });
    
    function sendMessage() {
      const message = messageInput.value;
      if (message) {
        socket.emit('chat message', message);
        messageInput.value = '';
      }
    }
    
    function addMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      messagesDiv.appendChild(messageElement);
    }
  </script>
</body>
</html>
```

## Rooms and Namespaces

Rooms and namespaces are concepts primarily associated with Socket.io, providing a way to organize and segment WebSocket connections.

### Namespaces in Socket.io

Namespaces provide a way to separate concerns in your application by splitting the logic over a single shared connection. Each namespace has its own event handlers, rooms, and middleware.

```javascript
// Server-side
const io = require('socket.io')(server);

// Default namespace (/)
io.on('connection', (socket) => {
  console.log('Connected to default namespace');
});

// Custom namespace (/admin)
const adminNamespace = io.of('/admin');
adminNamespace.on('connection', (socket) => {
  console.log('Connected to admin namespace');
  
  // Admin-specific events
  socket.on('admin message', (data) => {
    adminNamespace.emit('notification', data);
  });
});

// Another namespace (/user)
const userNamespace = io.of('/user');
userNamespace.on('connection', (socket) => {
  console.log('Connected to user namespace');
  
  // User-specific events
  socket.on('user message', (data) => {
    userNamespace.emit('notification', data);
  });
});
```

```javascript
// Client-side
// Connect to default namespace
const socket = io();

// Connect to admin namespace
const adminSocket = io('/admin');
adminSocket.on('notification', (data) => {
  console.log('Admin notification:', data);
});

// Connect to user namespace
const userSocket = io('/user');
userSocket.on('notification', (data) => {
  console.log('User notification:', data);
});
```

### Rooms in Socket.io

Rooms are arbitrary channels that sockets can join and leave. They provide a way to broadcast events to a subset of clients.

```javascript
// Server-side
io.on('connection', (socket) => {
  // Join a room
  socket.on('join room', (room) => {
    socket.join(room);
    console.log(`Socket ${socket.id} joined room: ${room}`);
    
    // Notify room members
    io.to(room).emit('room notification', `New user joined ${room}`);
  });
  
  // Leave a room
  socket.on('leave room', (room) => {
    socket.leave(room);
    console.log(`Socket ${socket.id} left room: ${room}`);
  });
  
  // Send message to a specific room
  socket.on('room message', ({ room, message }) => {
    io.to(room).emit('room message', {
      room,
      message,
      sender: socket.id
    });
  });
});
```

```javascript
// Client-side
const socket = io();

// Join a room
function joinRoom(room) {
  socket.emit('join room', room);
}

// Leave a room
function leaveRoom(room) {
  socket.emit('leave room', room);
}

// Send message to a room
function sendRoomMessage(room, message) {
  socket.emit('room message', { room, message });
}

// Listen for room notifications
socket.on('room notification', (notification) => {
  console.log(notification);
});

// Listen for room messages
socket.on('room message', ({ room, message, sender }) => {
  console.log(`[${room}] ${sender}: ${message}`);
});
```

### Practical Use Cases for Rooms and Namespaces

- **Namespaces:**
  - Different sections of an application (e.g., admin panel vs. user dashboard)
  - Separating API versions
  - Different authentication levels

- **Rooms:**
  - Chat rooms or group conversations
  - Game lobbies
  - User-specific notifications
  - Location-based broadcasts (e.g., users in the same city)
  - Topic-based subscriptions

## Scaling WebSocket Applications

As your WebSocket application grows, you'll need strategies to handle increased load and ensure reliability.

### Horizontal Scaling

To scale a WebSocket application, you typically run multiple server instances behind a load balancer. However, this introduces challenges for WebSockets due to their stateful nature:

1. **Connection Persistence**: WebSocket connections need to persist with the same server
2. **State Sharing**: Information needs to be shared across server instances

### Load Balancing

When implementing load balancing for WebSocket applications, consider these approaches:

1. **Sticky Sessions (Session Affinity)**: Ensures that once a client establishes a connection with a server, subsequent connections from the same client are routed to the same server.

```
# Example Nginx configuration for sticky sessions
upstream websocket_servers {
    ip_hash;  # Sticky sessions based on client IP
    server ws1.example.com:8080;
    server ws2.example.com:8080;
    server ws3.example.com:8080;
}

server {
    listen 80;
    server_name example.com;

    location /ws/ {
        proxy_pass http://websocket_servers;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

2. **Layer 7 Load Balancers**: These understand WebSocket protocol and can route traffic appropriately.

### Redis Adapter

For Socket.io, the Redis adapter allows multiple Socket.io instances to communicate with each other:

```javascript
const { createAdapter } = require('@socket.io/redis-adapter');
const { createClient } = require('redis');

const io = require('socket.io')(httpServer);

// Create Redis clients
const pubClient = createClient({ url: "redis://localhost:6379" });
const subClient = pubClient.duplicate();

// Wait for Redis clients to connect
Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
  // Initialize Redis adapter
  io.adapter(createAdapter(pubClient, subClient));
  
  // Start the server
  httpServer.listen(3000);
  console.log('Server is running on port 3000');
});

io.on('connection', (socket) => {
  console.log('Client connected');
  
  socket.on('join-room', (room) => {
    socket.join(room);
    console.log(`Client joined room: ${room}`);
  });
  
  socket.on('message', ({ room, message }) => {
    // This will be broadcast to all servers through Redis
    io.to(room).emit('message', message);
  });
});
```

### Scaling Strategies

1. **Microservices Architecture**: Split your application into smaller services that communicate via message brokers.

2. **Message Queues**: Use systems like RabbitMQ, Kafka, or Redis pub/sub to distribute messages between server instances.

3. **Database for State**: Store shared state in a database (PostgreSQL, MongoDB) rather than in memory.

4. **Serverless WebSockets**: Services like AWS API Gateway with Lambda functions provide auto-scaling WebSocket endpoints.

Example AWS architecture:

```
Client → API Gateway (WebSocket API) → Lambda Functions → DynamoDB
                                     ↓
                                 Amazon SNS
                                     ↓
                           Other Lambda Functions
```

## Handling Reconnection

Handling reconnection gracefully is crucial for providing a good user experience, especially in unreliable network conditions.

### Reconnection Strategies

#### Socket.io Reconnection

Socket.io has built-in reconnection functionality:

```javascript
// Client-side
const socket = io('http://localhost:3000', {
  reconnection: true,           // Enable reconnection
  reconnectionAttempts: 5,      // Try to reconnect 5 times
  reconnectionDelay: 1000,      // Start with a 1 second delay
  reconnectionDelayMax: 5000,   // Maximum delay between reconnections
  randomizationFactor: 0.5      // Randomize delay
});

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', (reason) => {
  console.log(`Disconnected: ${reason}`);
  
  if (reason === 'io server disconnect') {
    // The server intentionally disconnected
    socket.connect();
  }
  // Else the socket will automatically try to reconnect
});

socket.on('reconnect', (attemptNumber) => {
  console.log(`Reconnected after ${attemptNumber} attempts`);
});

socket.on('reconnect_attempt', (attemptNumber) => {
  console.log(`Attempting reconnection #${attemptNumber}`);
});

socket.on('reconnect_error', (error) => {
  console.error('Reconnection error:', error);
});

socket.on('reconnect_failed', () => {
  console.error('Failed to reconnect after all attempts');
});
```

#### Native WebSockets Reconnection

For native WebSockets, you'll need to implement reconnection logic yourself:

```javascript
class ReconnectingWebSocket {
  constructor(url, options = {}) {
    this.url = url;
    this.options = {
      maxReconnectAttempts: 5,
      reconnectInterval: 1000,
      maxReconnectInterval: 30000,
      ...options
    };
    
    this.reconnectAttempts = 0;
    this.isConnected = false;
    this.listeners = {
      open: [],
      message: [],
      close: [],
      error: []
    };
    
    this.connect();
  }
  
  connect() {
    this.socket = new WebSocket(this.url);
    
    this.socket.onopen = (event) => {
      this.isConnected = true;
      this.reconnectAttempts = 0;
      this.listeners.open.forEach(listener => listener(event));
    };
    
    this.socket.onmessage = (event) => {
      this.listeners.message.forEach(listener => listener(event));
    };
    
    this.socket.onclose = (event) => {
      this.isConnected = false;
      this.listeners.close.forEach(listener => listener(event));
      
      if (!event.wasClean) {
        this.attemptReconnect();
      }
    };
    
    this.socket.onerror = (error) => {
      this.listeners.error.forEach(listener => listener(error));
    };
  }
  
  attemptReconnect() {
    if (this.reconnectAttempts >= this.options.maxReconnectAttempts) {
      console.error('Maximum reconnection attempts reached');
      return;
    }
    
    this.reconnectAttempts++;
    
    // Calculate delay with exponential backoff
    const delay = Math.min(
      this.options.reconnectInterval * Math.pow(2, this.reconnectAttempts - 1),
      this.options.maxReconnectInterval
    );
    
    console.log(`Attempting to reconnect in ${delay}ms`);
    
    setTimeout(() => {
      console.log(`Reconnecting... (attempt ${this.reconnectAttempts})`);
      this.connect();
    }, delay);
  }
  
  addEventListener(type, listener) {
    if (this.listeners[type]) {
      this.listeners[type].push(listener);
    }
  }
  
  removeEventListener(type, listener) {
    if (this.listeners[type]) {
      this.listeners[type] = this.listeners[type].filter(l => l !== listener);
    }
  }
  
  send(data) {
    if (this.isConnected) {
      this.socket.send(data);
    } else {
      console.error('Cannot send: Not connected');
    }
  }
  
  close() {
    if (this.socket) {
      this.socket.close();
    }
  }
}

// Usage
const socket = new ReconnectingWebSocket('ws://localhost:8080');

socket.addEventListener('open', (event) => {
  console.log('Connected');
  socket.send('Hello Server!');
});

socket.addEventListener('message', (event) => {
  console.log('Received:', event.data);
});

socket.addEventListener('close', (event) => {
  console.log('Connection closed');
});

socket.addEventListener('error', (error) => {
  console.error('WebSocket error:', error);
});
```

### State Management during Reconnection

Managing application state during reconnection is crucial for providing a seamless experience:

1. **Client-Side State Buffering**:
   - Queue messages during disconnection
   - Re-send them after reconnection

```javascript
class MessageBuffer {
  constructor() {
    this.buffer = [];
    this.isConnected = false;
  }
  
  setConnected(status) {
    this.isConnected = status;
    if (status) {
      this.sendBufferedMessages();
    }
  }
  
  sendMessage(socket, message) {
    if (this.isConnected) {
      socket.emit('message', message);
      return true;
    } else {
      this.buffer.push(message);
      return false;
    }
  }
  
  sendBufferedMessages(socket) {
    if (!this.isConnected) return;
    
    while (this.buffer.length > 0) {
      const message = this.buffer.shift();
      socket.emit('message', message);
    }
  }
}

// Usage
const socket = io('http://localhost:3000');
const messageBuffer = new MessageBuffer();

socket.on('connect', () => {
  console.log('Connected');
  messageBuffer.setConnected(true);
});

socket.on('disconnect', () => {
  console.log('Disconnected');
  messageBuffer.setConnected(false);
});

function sendMessage(message) {
  const sent = messageBuffer.sendMessage(socket, message);
  if (!sent) {
    console.log('Message buffered, will send after reconnection');
  }
}
```

2. **Server-Side Session Management**:
   - Store session information in a database or cache
   - Restore client state after reconnection

```javascript
// Server-side (with Redis for session storage)
const io = require('socket.io')(server);
const Redis = require('ioredis');
const redis = new Redis();

io.on('connection', async (socket) => {
  console.log('Client connected:', socket.id);
  
  // Check if we have a session for this client
  const clientId = socket.handshake.auth.clientId;
  if (clientId) {
    const sessionData = await redis.get(`session:${clientId}`);
    if (sessionData) {
      const session = JSON.parse(sessionData);
      
      // Restore client state
      socket.join(session.rooms || []);
      socket.emit('session:restore', session.data);
      
      console.log(`Restored session for client ${clientId}`);
    }
  }
  
  socket.on('session:save', async (data) => {
    const clientId = socket.handshake.auth.clientId;
    if (!clientId) return;
    
    // Get list of rooms this socket is in
    const rooms = Array.from(socket.rooms).filter(room => room !== socket.id);
    
    // Save session data
    await redis.set(`session:${clientId}`, JSON.stringify({
      rooms,
      data,
      lastSeen: Date.now()
    }));
    
    console.log(`Saved session for client ${clientId}`);
  });
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});
```

3. **Heartbeat Mechanism**:
   - Periodically send small packets to verify connection
   - Detect disconnection early

```javascript
// Client-side heartbeat
function setupHeartbeat(socket) {
  let pingInterval;
  let pingTimeout;
  
  function heartbeat() {
    clearTimeout(pingTimeout);
    
    // Set timeout to detect missed pong
    pingTimeout = setTimeout(() => {
      console.log('Server did not respond - disconnecting');
      socket.disconnect();
    }, 30000); // 30 seconds
  }
  
  socket.on('connect', () => {
    // Start sending pings
    pingInterval = setInterval(() => {
      socket.emit('ping');
    }, 25000); // 25 seconds
    
    heartbeat();
  });
  
  socket.on('pong', () => {
    heartbeat();
  });
  
  socket.on('disconnect', () => {
    clearInterval(pingInterval);
    clearTimeout(pingTimeout);
  });
}

// Server-side heartbeat handling
io.on('connection', (socket) => {
  socket.on('ping', () => {
    socket.emit('pong');
  });
});
```

## Security Considerations

WebSocket connections need proper security measures to protect both clients and servers.

### Authentication

1. **Token-Based Authentication**:

```javascript
// Client-side
const token = localStorage.getItem('auth_token');
const socket = io('http://localhost:3000', {
  auth: {
    token
  }
});

// Server-side
const jwt = require('jsonwebtoken');

io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  
  if (!token) {
    return next(new Error('Authentication error: Token not provided'));
  }
  
  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) {
      return next(new Error('Authentication error: Invalid token'));
    }
    
    // Store user information in socket for later use
    socket.user = decoded;
    next();
  });
});

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.user.username}`);
  
  // Now you can use socket.user in event handlers
  socket.on('message', (data) => {
    // Add user information to the message
    io.emit('message', {
      ...data,
      user: socket.user.username
    });
  });
});
```

2. **Cookie-Based Authentication**:

```javascript
// Client-side
// No need to do anything special if using cookies

// Server-side
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(cookieParser());

// Configure Socket.io to use cookies
io.use((socket, next) => {
  const cookies = socket.request.headers.cookie;
  if (!cookies) {
    return next(new Error('Authentication error: No cookies'));
  }
  
  // Parse cookies
  const parsedCookies = cookie.parse(cookies);
  
  // Verify session cookie
  if (!parsedCookies.sessionId) {
    return next(new Error('Authentication error: No session cookie'));
  }
  
  // Verify session (e.g., with a database lookup)
  verifySession(parsedCookies.sessionId, (err, session) => {
    if (err || !session) {
      return next(new Error('Authentication error: Invalid session'));
    }
    
    socket.session = session;
    next();
  });
});
```

### Authorization

Implement role-based access control:

```javascript
// Server-side
io.on('connection', (socket) => {
  const user = socket.user;
  
  // Check if user can join a specific room
  socket.on('join-room', (roomId) => {
    // Check if user has permission to join room
    checkRoomPermission(user, roomId, (hasPermission) => {
      if (hasPermission) {
        socket.join(roomId);
        socket.emit('room-joined', roomId);
      } else {
        socket.emit('error', {
          message: 'You do not have permission to join this room'
        });
      }
    });
  });
  
  // Check if user can send a message to a room
  socket.on('send-message', ({ roomId, message }) => {
    checkRoomPermission(user, roomId, (hasPermission) => {
      if (hasPermission) {
        io.to(roomId).emit('message', {
          user: user.username,
          text: message,
          timestamp: Date.now()
        });
      } else {
        socket.emit('error', {
          message: 'You do not have permission to send messages in this room'
        });
      }
    });
  });
});
```