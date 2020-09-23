# Learn-Docker---from-the-beginning

## Commands

### creates an image

<!-- needed every Dockerfile change -->

- `docker build -t chrisnoring/node:latest .`

### list images

- `docker images`

### Creating a container

- `docker run chrisnoring/node`
- `docker run -p 8000:3000 chrisnoring/node`
- `docker run -d -p 8000:3000 chrisnoring/node`

### List all running containers

- `docker ps`

### Stop running containers

- `docker stop f40`

### start containers

- `docker start f40`

### exec bash

- `docker exec -it 268 bash`

### Remove container

- `docker rm id-of-container`
