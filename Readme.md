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
|   |   └── v1
|   |       ├── url
|   |       |   └── url.js
|   |       └── users
|   |           └── users.js
|   ├── database
|   |   └── models
|   |       ├── url.js
│   │       └── users.js
│   ├── data-access
│   │   └── url.js
│   ├── core
│   │   └── BaseError.js
│   ├── service
│   │   └── url.js
│   ├── helpers
│   │   └── validator.js
│   ├── config
│   │   └── .env
├── app.js
├── package.json
├── Readme.md
├── package-lock.json

```

## System Design
