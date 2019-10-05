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

## Docker
Build the containers:
```
$ git clone https://github.com/lechatthecat/laravel-coreuivue-integration
$ cd laravel-coreuivue-integration
$ docker-compose up -d -build
```
Change some settings and install modules after building:
```
$ docker-compose exec laravel ash
# cd laravel-coreui/src
# npm install
# composer install
# php artisan key:generate
# chown -R www-data:www-data laravel-coreui
# chmod 777 storage
```
Then the app should be running on: http://localhost:10080
