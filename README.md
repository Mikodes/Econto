# Content Management System
E-commerce content management system created using NestJS framework. Credentials are provided only by developers. It allows you to manage products such as shoes, jackets and bags. Data is stored using PostreSQL. Repository contains only the server side of the project.

## Technologies used
* Typescript
* NestJS
* PostgreSQL
* Docker

## Running on docker
```
git clone https://github.com/PiotrBlachnio/Econto.git
```

```
cd Econto/
```

```
docker-compose build
```

```
docker-compose up
```
## Running on localhost
****
**_Make sure you createad .env file with the corresponding variables from .env.example_**

****

```
git clone https://github.com/PiotrBlachnio/Econto.git
```

```
cd Econto/
```

```
npm install
```

```
npm run start:dev:db
```

```
npm run start:dev
```

## Contributing
1. Fork it (https://github.com/PiotrBlachnio/Econto/fork)
1. Create your feature branch (git checkout -b feature/fooBar)
1. Commit your changes (git commit -am 'Add some fooBar')
1. Push to the branch (git push origin feature/fooBar)
1. Create a new Pull Request

## Check it by yourself
[Heroku](https://cms-server-host.herokuapp.com/) - There might be some latency due to Heroku hosting
