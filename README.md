# Dockerised Simple Stocks API

## :bulb: Known prerequisites

- Install [Docker](https://docs.docker.com/get-docker/)

## :wrench: Local setup

1.1 Clone repo

```bash
git clone https://github.com/dmusev/stocks-prices-api.git  && cd ./stocks-prices-api
```

1.2 Create .env file similar to .env.example

```bash
cp .env.example .env
```

1.3 Provide the required environment variables.

- Populate them directly in the .env file

```bash
NODE_ENV=development
NODE_HOST=0.0.0.0
NODE_PORT=3000
CMC_API_KEY=bc317757-32d5-4735-919e-823bb96374c7
PROJECT_SHORT_NAME=stocks
```

NB! This API key is for test purposes and has limited restrictions on 300 requests per day. You may register one at: [CMC PRO](https://pro.coinmarketcap.com/account)

1.4 Verify all variables are populated in the docker-compose file:  

```bash
docker-compose config
```

1.5 Build the container  
```bash
docker-compose build --no-cache server
```

1.6 Run the container

```bash
docker-compose up server
```

NB! Make sure you've set a free port within .env file

1.7 You should see a successful message

```bash
stocks-server | [nodemon] starting `babel-node ./server.js`
stocks-server | 🚀  Server ready at port 3000
```

## :arrow_forward: Usage

2.1 Fetch currencies and information about them

```bash
curl --location --request GET 'localhost:3000/stocks/cryptocurrencies'
```

2.2 Fetch specific currency information

```bash
curl --location --request GET 'localhost:3000/stocks/cryptocurrencies/1027'
```
