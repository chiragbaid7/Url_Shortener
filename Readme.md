## URL SHORTENER

A URL shortener service creates a short url/aliases/tiny url against a long url.When a user click on the tiny url, he/she gets redirected to original url.

## Project Directory Structure

```

│
├── src
|   ├── api
|   |   ├── private
|   |   |   └── url.js
|   |   └── public
|   |       ├── url.js
|   |       └── user.js
|   ├── auth
|   |   └── auth.js
│   ├── config
│   │   └── index.js
│   ├── ErrorHandeler
│   │   ├── ApiErrorHandeler.js
│   │   ├── BaseError.js
│   │   └── httpStatusCode.js
|   ├── database
|   |   └── models
|   |       ├── url.js
│   │       └── users.js
│   ├── data-access
|   |   ├── user.js
│   │   └── url.js
│   ├── helpers
|   |   ├── rate-limit.js
|   |   ├── schema-validator.js
│   │   └── validator.js
│   ├── service
|   |   ├── user.js
│   │   └── url.js
├── app.js
├── package.json
├── Readme.md
├── package-lock.json

```

## System Design

### System APIs Examples

- createURL(long_url,alias=None,user_id)
  - Response Body:201
  ```json
  {
    "message": "success",
    "data": {
      "shorturl": "http://localhost:8080/FwcE4IV",
      "longurl": "https://www.educative.io/courses/grokking-the-system-design-interview/m2ygV4E81AR",
      "clickcount": 0,
      "createdby": "613903e4fc682fd9c47186f9",
      "_id": "6139182b59b234b4ea0d20f0"
    }
  }
  ```
- getURL(short_url):301(Redirect)

- listURLs(user_id)
  - Response Body:200
  ```json
  {
    "data": [
      {
        "_id": "613903f8fc682fd9c47186fc",
        "shorturl": "http://localhost:8080/0WKmRFT",
        "longurl": "https://www.youtube.com/watch?v=ZE5zXLOyEOQ",
        "clickcount": 1
      },
      {
        "_id": "6139182b59b234b4ea0d20f0",
        "shorturl": "http://localhost:8080/FwcE4IV",
        "longurl": "https://stackoverflow.com/questions/14597241/setting-expiry-time-for-a-collection-in-mongodb-using-mongoose",
        "clickcount": 0
      }
    ]
  }
  ```

### Database Design

| URL                |
| ------------------ |
| \_id:ObjectId      |
| shorturl:string    |
| longurl:string     |
| clickcount:Number  |
| createdby:ObjectId |

| USERS           |
| --------------- |
| \_id:ObjectId   |
| name:String     |
| email:String    |
| password:String |


### High Level Design

<img src="https://i.ibb.co/5s13Tb8/Url-Shortener.jpg" alt="Url-Shortener" >

### Assumptions

- Base 62 is chosen as the Base encoding scheme
- 7 character is the length of generated short URL
- `62^7=3.5` trillion unique URLs can be generated

### Technique

1. Short URLs from base conversion of random numbers (_In use_)

   - 7 char Random Id is generated as short URL
   - The collision probability increases if the size of the random Id is decreased
   - After generating, the service makes a findURL call to the database to check for duplicates which is an overhead

2. Short URLs from base conversion of COUNTER (_Implemented but not in use_)
   - A COUNTER variable is mainted and is passed to a custom function that returns a unique 7 char string by converting COUNTER to its BASE_62 representation
     and COUNTER is incremented
   - Every generated string is unique so there is no need to check for duplicates
   - Adding a large number might lead to INTEGER_OVERFLOW

### Features

- Alias - Users can provide thier custom URLs
- Clickcount - Users can check no of clicks on thier shortURLs

### Future enhancements

- Cache layer can be introduced to cache URLs that are frequently accessed which can reduces load on the server.
