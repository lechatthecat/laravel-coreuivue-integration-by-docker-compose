# laravel-coreuivue-integration
Integration of [laravel](https://github.com/laravel/laravel) and [coreui/vue](https://github.com/coreui/coreui-vue) as **SPA** in **docker containers**.

# How to use
## Docker
Build the containers:
```
$ git clone https://github.com/lechatthecat/laravel-coreuivue-integration-by-docker-compose
$ cd laravel-coreuivue-integration
$ docker-compose up -d --build
```

Enter the container and run the script:
```
$ docker-compose exec laravel ash
$ ash ./laravel_build.sh
```

Then wait until the build is finished.
Then the app should be running on: http://localhost:10080

Logs are:
```
$ docker logs --tail 50 --follow --timestamps laravel
```
