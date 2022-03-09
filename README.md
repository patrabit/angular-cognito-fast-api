# StudioDesk

## Applications
- backend (python, FastApi)
- web-app (Angular)

## Setup

```bash
# IMPORTANT: setup src/environments/.env first
$ cp src/environments/.env-sample src/environments/.env
# new terminal - start docker containers
$ docker-compose up

# new terminal setup backend environment and run api
$ conda create --name studio-desk python=3.9
$ conda activate studio-desk
$ (studio-desk) (cd api && pip install -r requirements.txt)
$ (studio-desk) yarn db:recreate
# starts backend, swagger url: http://localhost:8000/docs 
$ (studio-desk) yarn api:start      

# new terminal - run web app
$ yarn start

```

## Storybook
```bash
$ yarn storybook
```
