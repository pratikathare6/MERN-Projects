# UBER Backend API Documentation

## `POST /users/register`

Register a new user with the application.

### Description

This endpoint creates a new user account by accepting the user's name, email, and password. It validates the input, hashes the password, saves the user to the database, and returns a JWT token along with the created user object.

### Request URL

`POST /users/register`

### Request Headers

- `Content-Type: application/json`

### Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Field Requirements

- `fullname.firstname` - required, minimum 3 characters
- `fullname.lastname` - optional, minimum 3 characters if provided
- `email` - required, must be a valid email address
- `password` - required, minimum 6 characters

### Success Response

- Status: `200 OK`
- Content-Type: `application/json`

Example response:

```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

### Error Responses

- Status: `400 Bad Request`
  - Returned when validation fails.
  - Response includes an `errors` array with details about invalid fields.

Example response:

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Notes

- Passwords are hashed before storage.
- `socketId` is optional and may be `null` if not set.

## `POST /users/login`

Authenticate a user with email and password.

### Description

This endpoint verifies the user's credentials. If valid, it returns a JWT token and the user object.

### Request URL

`POST /users/login`

### Request Headers

- `Content-Type: application/json`

### Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Field Requirements

- `email` - required, must be a valid email address
- `password` - required, minimum 6 characters

### Success Response

- Status: `200 OK`
- Content-Type: `application/json`

Example response:

```json
{
  "token": "<jwt_token>",
  "isUser": {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

### Error Responses

- Status: `401 Unauthorized`
  - Returned when email or password is invalid.

Example response:

```json
{
  "message": "Invalid email or Password"
}
```

### Notes

- Password is compared using bcrypt.
- Token is generated using JWT.

## API Endpoints

### `/users/profile`
- **GET /api/users/profile**: Retrieves the authenticated user's profile information. Requires a valid JWT token.

**Example Request:**
`GET /api/users/profile`
**Example Response (Success):**
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com"
}
```

### `/users/logout`
- **GET /api/users/logout**: Logs the user out by clearing the session token. Requires a valid JWT token.

**Example Request:**
`GET /api/users/logout`
**Example Response (Success):**
```json
{
  "message": "Logged Out Successfully"
}
```

## Captain API Endpoints

### `/captains/register`
- **POST /api/captains/register**: Registers a new captain with the application. It validates the input, hashes the password, saves the captain to the database, and returns a JWT token along with the created captain object.

**Example Request:**
`POST /api/captains/register`
**Example Request Body:**
```json
{
  "fullName": {
    "firstName": "Alice",
    "lastName": "Smith"
  },
  "email": "alice@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC1234",
    "capacity": 2,
    "vehicleType": "car"
  }
}
```

**Example Success Response:**
```json
{
  "token": "<jwt_token>",
  "captain": {
    "_id": "<captain_id>",
    "fullName": {
      "firstName": "Alice",
      "lastName": "Smith"
    },
    "email": "alice@example.com",
    "socketId": null
  }
}
```

### `/captains/login`
- **POST /api/captains/login**: Authenticates a captain with email and password. If valid, it returns a JWT token and the captain user object.

**Example Request:**
`POST /api/captains/login`
**Example Request Body:**
```json
{
  "email": "alice@example.com",
  "password": "password123"
}
```

**Example Success Response:**
```json
{
  "token": "<jwt_token>",
  "isUser": {
    "_id": "<captain_id>",
    "fullName": {
      "firstName": "Alice",
      "LastName": "Smith"
    },
    "email": "alice@example.com",
    "socketId": null
  }
}
```
