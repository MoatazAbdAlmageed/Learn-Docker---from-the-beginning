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

## volume

- `docker volume create [name of volume]`
- `docker volume ls`
- `docker volume prune`
- `docker volume rm [name of volume]`
- `docker inspect [name of volume]`

## shorthand

- navigate to inventory-service
<!--
docker stop inventory-service && docker rm inventory-service && docker build -t chrisnoring/node . && docker run -d -p 8000:3000 --name inventory-service chrisnoring/node

docker build -t chrisnoring/node . && docker run -d -p 8000:3000 --name inventory-service chrisnoring/node

docker volume create logs

docker run -d -p 8000:3000 --name inventory-service --volume \${PWD}:/home/app chrisnoring/node
docker run -d -p 8000:3000 --name inventory-service --volume %cd%:/home/app chrisnoring/node
docker run -d -p 8000:3000 --name inventory-service --volume `pwd -W`:/home/app chrisnoring/node
docker run -d -p 8000:3000 --name inventory-service chrisnoring/node
docker kill inventory-service && docker rm inventory-service

docker build -t chrisnoring/node
docker kill inventory-service && docker rm inventory-service && docker run -d -p 8000:3000 --name inventory-service --volume `pwd -W`:/home/app chrisnoring/node && docker exec -it inventory-service bash

-->
