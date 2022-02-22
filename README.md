# Skato

- Run a script inside docker
  docker-compose run server /bin/sh -c "run command"
- Access postgres shell :-
  (for postgres docker image)
  run docker exec -it my_database_server psql -U root -W my_database

my_database_server : Container name
-U : User
-W : database
