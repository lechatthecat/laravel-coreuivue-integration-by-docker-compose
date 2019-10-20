# laravel-coreuivue-integration
Integration of [laravel](https://github.com/laravel/laravel) and [coreui/vue](https://github.com/coreui/coreui-vue).

# How to use
## Vagrant
You can use the vagrantfile to try this project:
```
$ git clone https://github.com/lechatthecat/laravel-coreuivue-integration
$ cd laravel-coreuivue-integration
$ vagrant up --provision-with fixsync
$ vagrant reload --provision-with modules,laravel
```
And the app should be working on: http://192.168.33.10  
(To install npm packages, always use --save option. like `$ npm install vue --save` )

## Docker
Build the containers:
```
$ git clone https://github.com/lechatthecat/laravel-coreuivue-integration
$ cd laravel-coreuivue-integration
$ docker-compose up -d --build
```

Then get inside after building and run the following:
```
$ docker-compose exec laravel ash
# ash /docker.sh
```
Then the app should be running on: http://localhost:10080

Logs are:
```
$ docker logs --tail 50 --follow --timestamps 
```
