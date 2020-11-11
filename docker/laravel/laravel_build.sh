#!/bin/ash
cd /laravel-coreui/src
composer install
php artisan key:generate
chown -R www-data:www-data ../../laravel-coreui/src
chmod 777 storage
npm install
npm run dev 
#tail -f /dev/null
