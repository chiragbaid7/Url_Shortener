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
