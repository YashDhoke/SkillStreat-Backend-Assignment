1) Retrieve All Todos
Description: Get a list of all your todos.
Method: GET
Endpoint: /todos
Request Body: None

Response:   [
  {
    "id": "unique_id",
    "title": "Todo Title",
    "description": "Todo Description",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
]

Status Codes:
200 OK: All good
500 Internal Server Error: Oops, something went wrong

2) Retrieve a Todo by ID
Description: Get details for a specific todo.
Method: GET
Endpoint: /todos/:id
Request Body: None

Response: {
  "id": "unique_id",
  "title": "Todo Title",
  "description": "Todo Description",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}

Status Codes:
200 OK: All good
404 Not Found: Oops, todo not found
500 Internal Server Error: Oops, something went wrong

3) Create a New Todo
Description: Add a new todo to your list.
Method: POST
Endpoint: /todo

Request Body: {
  "title": "New Todo Title",
  "description": "New Todo Description"
}

Response:{
  "id": "unique_id",
  "title": "New Todo Title",
  "description": "New Todo Description",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}

Status Codes:
201 Created: Todo added successfully
400 Bad Request: Oops, invalid request
500 Internal Server Error: Oops, something went wrong . 

4) Update a Todo by ID
Description: Modify details of a specific todo.
Method: PUT
Endpoint: /todos/:id

Request Body:{
  "title": "Updated Todo Title",
  "description": "Updated Todo Description"
}

Response:
{
  "id": "unique_id",
  "title": "Updated Todo Title",
  "description": "Updated Todo Description",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}

Status Codes:
200 OK: Todo updated successfully
404 Not Found: Oops, todo not found
500 Internal Server Error: Oops, something went wrong. 

5) Delete a Todo by ID
Description: Remove a specific todo from your list.
Method: DELETE
Endpoint: /todos/:id
Request Body: None

Response:{
  "id": "unique_id",
  "title": "Deleted Todo Title",
  "description": "Deleted Todo Description",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}

Status Codes:
200 OK: Todo deleted successfully
404 Not Found: Oops, todo not found
500 Internal Server Error: Oops, something went wrong


