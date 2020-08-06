## Readme

This is the project BauExperts which is developed by greatest team on World!

### Database

To use database, first you should have MySQL 8. After that you should create a database. 
Then you should config database connection options in `.env` file;

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=bauexperts

DB_READ_HOST=127.0.0.1
DB_READ_PORT=3306
DB_READ_USER=root
DB_READ_PASSWORD=
DB_READ_DATABASE=bauexperts
```

> If you have a read replica on your local system, your should change `DB_READ_*` options in your `.env` file. Our models are supporting read replicas. To get for information, you may checkout the [issue](https://gitlab.com/bauexperts-bxp/api/issues/34).

After that you are ready to execute migrations;

```bash
$ cd api
$ yarn
$ adonis migration:run
```

### BackEnd

In the backend, we use [AdonisJs](https://adonisjs.com). The backend application is located under `api` folder.

To run backend application, first of all you should create a new `.env` file like `.env.example` file. 

> Please don't change `.env.example`. Just copy it. `.env.example` is just an example to create real `.env` file.

```
HOST=0.0.0.0
PORT=80
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}
APP_KEY=your-secret-app-token
HASH_DRIVER=bcrypt
CACHE_VIEWS=false

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=bauexperts

DB_READ_HOST=127.0.0.1
DB_READ_PORT=3306
DB_READ_USER=root
DB_READ_PASSWORD=
DB_READ_DATABASE=bauexperts

MAIL_CONNECTION=smtp
SMTP_HOST=
SMTP_POST=
MAIL_USERNAME=
MAIL_PASSWORD=

FILE_UPLOAD_SYSTEM=local
S3_UPLOAD_BUCKET_NAME=bauexpert-files
S3_UPLOAD_BUCKET_REGION=eu-central-1
S3_UPLOAD_BUCKET_ACCESS_KEY=
S3_UPLOAD_BUCKET_SECRET_KEY=

LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=
LINKEDIN_REDIRECT_URI=http://localhost/api/auth/linkedin/handle

XING_CONSUMER_KEY=
XING_SIGNATURE_SALT=
XING_REDIRECT_URI=http://localhost/api/auth/xing/handle
```

After you got `.env` file, you may execute the application with following commands;

```bash
$ yarn
$ yarn global add eslint eslint-watch
$ yarn run serve
```

### Frontend

We are usigin VueJS in frontend. In order to run frontend application, I suggest that you should instlal VueJS CLI.

```bash
$ yarn global add @vue/cli
$ vue --version
```

> Detailed documentation is in [here](https://cli.vuejs.org/guide/installation.html)

To run frontend application, you should execute serve command in `app` directory. 

```bash
$ yarn
$ yarn run serve
```

After that command, you may see the application on [localhost:8080](http://localhost:8080)

> Whenever you change a file in `app/src`, vue cli applies it on browser automatically. You don't have to execute again `yarn run serve` command or even refresh the browser. 

### Documentation

We are using ApiDoc for documentation. In order to want to see documentation, you should install http-server via npm.

```bash
$ npm i http-server -g
$ yarn
$ yarn run doc
```

Now, you can see api documentation on [localhost:3000](http://localhost:3000) in your browser.