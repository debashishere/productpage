# Skato

Frontend : Html, Css, JavaScript
Backend : NodeJs, NestJS, TypeOrm, Postgres
DevOps : Docker, Docker-Compose, Git, Github

# Setup the project locally

## Before u begain

- Install Nodejs into your system
- Install docker into you system
  ( visit:- https://docs.docker.com/get-docker/)
- Install git into your system
  Linux run : sudo dnf install git-all

Follow :

1. Create a new folder
2. Open the folder with vscode
3. Clone the github repo
   run : git clone /project/repo/url
4. Install required packages
   Goto /backend folder
   run "npm install"

5. To run the project
   run : docker-compose up --build
6. To tear down the project, open a new terminal
   run: docker-compose down
7. To Clear docker
   run:
   - docker volume prune
   - docker system prune

### Run a script inside docker

docker-compose run server /bin/sh -c "run command"

### Access postgres shell :-

(for postgres docker image)
run docker exec -it my_database_server psql -U root -W my_database

my_database_server : Container name
-U : User
-W : database
