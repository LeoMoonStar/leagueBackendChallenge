# League Backend Challenge

Before start the server, make sure run
`npm install`

`npm test` run through all helper functions from helper.js

The server has 5 routers

**POST /echo**

**POST /invert**

**POST /flatten**

**POST /sum**

**POST /multiply**

Once the server starts, you can send the sever with one file that has matrix.

An sample curl request look like this

`curl --location --request POST 'localhost:3000/echo' \ --header 'Content-Type: multipart/form-data' \ --form 'file=@"~/league/matrix.csv"'`
