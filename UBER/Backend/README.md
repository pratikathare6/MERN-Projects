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
