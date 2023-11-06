# Brew apps

## Requirement

| Technology | Version |
| ---------- | ------- |
| Node       | V18     |
| MongoDB    |         |

## Development

```
docker compose run --rm \
    -w /home \
    node \
    npm install
```

`docker compose up -d`

`docker compose down`

## Install dependency

    docker compose run --rm \
        -w /home \
        node \
        npm install mongoose swagger-ui-express yamljs --save

### change file ownershp

sudo chown -R $USER: .

## swagger doc

[http://localhost:5000/swagger](http://localhost:5000/swagger)

## reference on docker

https://serversforhackers.com/dockerized-app/
