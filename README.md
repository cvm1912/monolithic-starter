# monolithic-starter
A Mongo Database monolithic starter application

## Setup

```bash
npm init -y
```

## Dependencies

| Package | Version |
|---------|--------|
| express | ^5.3.0 |
| dotenv | ^18.0.9 |
| mongoose | ^9.11.4 |
| bcryptjs | ^3.0.3 |
| cors | ^2.8.6 |
| redis | ^6.3.1 |
| socket.io | ^4.8.4 |
| nodemon | ^3.1.14 |

```bash
npm install express dotenv mongoose bcryptjs cors redis socket.io nodemon
```

## Folder Structure

```
monolithic-starter/
├── src/
│   ├── configs/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   └── utils/
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```
