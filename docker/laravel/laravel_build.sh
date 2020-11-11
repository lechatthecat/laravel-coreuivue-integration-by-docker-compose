#!/bin/ash
cd /laravel-coreui/src
chown -R www-data:www-data ../../laravel-coreui/src
chmod 777 storage
npm install
npm run dev 
composer update
composer self-update
composer install
php artisan key:generate
