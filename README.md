# Bitlab Selection Process Challenge - 2023 - API
<br/>

## ➕ Project Overview
This project aims to analyze if a text contains words considered inappropriate and allows the addition/deletion of new words to the list of unwanted words or exceptions.

<br/>

## ⛏️ Built With

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge)
![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)


<br/>

## ⌨️ Features
- Verify if any unsuitable words are present
- Add/remove words that would not typically be deemed inappropriate
- Add/remove words that, despite being unsuitable, will not be deemed inappropriate

<br/>

## ⚙️ Instructions to run the application locally:
To run this project, you will need to install [Node.js](https://nodejs.org/en/) and [Postgres](https://www.postgresql.org/).

Clone the repository:
```bash
 git clone https://github.com/wallysom2/check-text--api.git
```
Access the project folder:
```bash
 cd check-text--api
 ```
Installation of dependencies
```bash
npm i
```
Run prisma migrate
```bash
npx prisma migrate deploy
``` 
Run prisma seeds
```bash
npx prisma db seed
``` 
Run the project
```bash
npm run dev
``` 
<br/>

## Frontend

<a href="https://github.com/wallysom2/check-text--front.git">Frontend repository</a>

<a href="https://check-text-front-orpin.vercel.app/">Frontend deploy</a>

<br/>

## 😊 Author
 Wallyson Matheus


