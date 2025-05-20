# Short Polling Implementation

This project demonstrates the implementation of **short polling** using Node.js and Express. The application allows users to send input data to the server, which is then processed and returned as a response. The server also supports updating data dynamically.

## Features
- Accepts user input via a web interface.
- Sends the input data to the server using a `POST` request.
- Displays the server's response on the web page.
- Implements short polling to periodically fetch updates from the server.

## How It Works
1. The client sends input data to the server using the `/getdata` API.
2. The server processes the input and responds with a message containing the input data.
3. The client periodically polls the server every 5 seconds to fetch updates.

## Project Structure
indes.html # Frontend for user interaction
index.js # Backened server implementation

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>

2. Install dependencies:
    npm install express

3.Start the server:
    node index.js
4. Open your browser and navigate to 
    http://localhost:3000

API Endpoints
POST /getdata
Description: Accepts input data from the client and responds with a message.
Request Body:
    {
  "input": "Your input data"
}
Response:
{
  "data": "Message: Your input data"
}
GET /update
Description: Updates the server-side data and responds with the updated value.
Response:
{
  "data": "Updated data"
}

Example Usage
Enter a value in the input field on the web page.
it will send the input to the server.
The server will log the input and respond with a message.
The client will display the server's response on the page.
Technologies Used
Node.js: Backend runtime environment.
Express.js: Web framework for building APIs.
HTML: Frontend for user interaction.
Notes
Ensure that the server is running before accessing the web page.
The polling interval is set to 5 seconds in the client-side script.
License
This project is licensed under the MIT License.