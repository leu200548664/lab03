Basic Node.js Web Server for Mathematical Operations

Overview

This project is a simple web server built using Node.js and the Connect module. It performs basic mathematical operations (addition, subtraction, multiplication, and division) based on parameters passed in the URL.

Features

Supports four mathematical operations: add, subtract, multiply, divide.

Parses URL query parameters to retrieve values.

Returns a formatted response with the calculation result.

Handles invalid methods and division by zero.

Installation

Prerequisites

Node.js installed on your machine.

Steps

Clone the repository:

git clone <repository_url>

Navigate to the project directory:

cd LAB03

Initialize npm and install dependencies:

npm init -y
npm install connect

Run the server:

node server.js

Usage

Once the server is running, you can access the endpoints via a web browser or an API testing tool (like Postman).

Example Requests

Addition: http://localhost:3000/lab3?method=add&x=16&y=4 → Response: 16 + 4 = 20

Subtraction: http://localhost:3000/lab3?method=subtract&x=16&y=4 → Response: 16 - 4 = 12

Multiplication: http://localhost:3000/lab3?method=multiply&x=16&y=4 → Response: 16 * 4 = 64

Division: http://localhost:3000/lab3?method=divide&x=16&y=4 → Response: 16 / 4 = 4

Invalid Method: http://localhost:3000/lab3?method=unknown&x=16&y=4 → Response: Invalid method. Please use add, subtract, multiply, or divide.

Error Handling

If x or y is missing or not a number, an error message is returned.

If division by zero is attempted, an error message is returned.

If an unsupported method is provided, an error message is returned.

Authors

Leonardo Mendonça

Werner Hansen

License

This project is licensed under the MIT License.


