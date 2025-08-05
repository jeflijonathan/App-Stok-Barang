# User API Spec

## Register User

Endpoint: POST /api/users

Request Body:

```json
{
  "name": "jeflijonathan",
  "password": "admin123ok@",
  "email": "jeflijonathan@gmail.com"
}
```

Response Body (Success):

```json
{
  "status": true,
  "status code": 201,
  "message": "User registered successfully",
  "data": {
    "username": "jefli jonathan",
    "email": "jeflijonathan@gamil.com"
  }
}
```

Response Body (Failed):

```json
{
  "status": false,
  "status code": 409,
  "message": "User arleady taken",
  "data": {
    "username": "jefli jonathan",
    "email": "jeflijonathan@gamil.com"
  }
}
```

## Login User

## Fetch User

## Update User

## Logout User
