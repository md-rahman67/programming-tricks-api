# Programming Tricks API

A simple REST API built with Node.js and Express.js that returns random programming tricks.

## Features

- Returns one random programming trick on every request.
- Contains tricks from different programming topics.
- Handles empty data with an error response.
- Simple and beginner-friendly API.

## Tech Stack

- Node.js
- Express.js
- JavaScript

## Project Structure

```text
programming-tricks-api/
│
├── data-json.js
├── helper.js
├── server.js
├── package.json
├── .gitignore
└── README.md
```

## API Endpoint

### Get Random Trick

**Endpoint:** `GET /tricks`

Returns one random programming trick.

**Example Response:**

```json
{
  "category": "JavaScript",
  "title": "Remove duplicate values from an array",
  "trick": "[...new Set(arr)]",
  "description": "Set automatically keeps unique values. Spread converts it back into an array."
}
```

**Error Response:**

If no tricks are available:

```json
{
  "message": "No tricks available"
}
```

## Author

Created as a beginner-friendly backend development project using Node.js and Express.js.