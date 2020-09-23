# Learn-Docker---from-the-beginning

- each part in separate git branch \*

## Commands

### creates an image

<!-- needed every Dockerfile change -->

- `docker build -t chrisnoring/node:latest .`

### list images

- `docker images`

### Creating a container

- `docker run chrisnoring/node`
- `docker run -p 8000:3000 chrisnoring/node`
<!-- in background -->
- `docker run -d -p 8000:3000 chrisnoring/node`
<!--  with name -->
- `docker run -p 8000:5000 --name mtzNode chrisnoring/node`

### List all running containers

- `docker ps`

### start containers

- `docker start id-of-container`

### exec bash

- `docker exec -it id-of-container bash`

### Remove container

- `docker rm id-of-container`

### Stop running containers

<!-- docker stop will try to stop it gracefully (will ask politely :P) -->

- `docker stop id-of-container`

### Remove kill

<!-- docker kill will stop the main entrypoint process/program abruptly -->

- `docker kill id-of-container`

## docker-compose

<!-- Build image -->

- `docker-compose build`
<!-- up -->
- `docker-compose up`
<!-- stop -->
- `docker-compose stop`
<!-- down (docker stop [id] and docker rm [id] )-->
- `docker-compose down`
