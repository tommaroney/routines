# routines
Set up routines for kids to complete

## Setup
Make sure Docker Compose is installed on your system.
Change the name of the file `.example.env` in the root folder to `.env`.
Change the name of the file `.env.example` in the folder `/app` to `.env`.
Update usernames, passwords, or port to connect to the MySQL server.
Execute the command `docker compose up` in the terminal from the root of the project.
`docker compose stop` will stop all of the containers.
`docker compose down` will stop and destroy all of the containers.

## Use
Navigate to localhost:3000
Click the login button.  This is setup to simulate login right now.
From the navigation menu, select Tasks
Click the `+` to add new tasks.

From the navigation menu, select Routines
Click the `+' to add new Routines.

## DB Connection
As configured in the .example.env file, the MySQL server can be reached at 127.0.0.1:57563 using
the username and password in the .env file.
