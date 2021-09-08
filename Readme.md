## Clean Architecture

> Your architectures should tell readers about the system, not about the frameworks you used in your system  
> — Robert C. Martin

<img src="https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg">

**Clean Architecture aims to achieve separation of concerns by dividing the software into different layers thereby making the application
flexible to future inevitable changes.**

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
│   ├── core
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

### System APIs

* createURL(long_url,alias=None,user_id)
    * Response Body
    ```
    {
    "message": "success",
    "data": {
        "shorturl": "http://localhost:8080/FwcE4IV",
        "longurl": "https://www.educative.io/courses/grokking-the-system-design-interview/m2ygV4E81AR",
        "clickcount": 0,
        "createdby": "613903e4fc682fd9c47186f9",
        "_id": "6139182b59b234b4ea0d20f0",
        }
    }
    ```
* getURL(short_url)

* userURLs(user_id)