# Sequelize with NodeJS Simple Application

## Prerequisites
- JavaScript, ES6
- SQL

## How to get started
- Run `npm install` or `yarn install`
- Ensure your MYSQL is running. Run `mysql.server start` if on mac terminal
- Run `npm run dev` or `yarn dev`. Navigate to `localhost:5000` on your browser

### The application
- The application allows the user to search, add, view programmer gigs. This app uses `Sequelize` to run the queries for you in NodeJS. 


#### Good to knows
- Usually you do not want to push your `/config/database.js` to github. This is for sample dev purposes. Your config should not be public!