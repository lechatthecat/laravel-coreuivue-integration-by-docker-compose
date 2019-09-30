# laravel-coreuivue-integration
Integration of laravel and [coreui/vue](https://github.com/coreui/coreui-vue).

# How to use
## Vagrant
You use the vagrantfile to try this project:
```
$ git clone https://github.com/lechatthecat/laravel-coreuivue-integration
$ cd laravel-coreuivue-integration
$ vagrant up --provision
```

And you must edit the httpd.conf to allow "Require all granted":
```
<Directory "/var/www/html" />
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
```
And you must change the documentroot:
```
DocumentRoot "/var/www/html/laravel-coreui/public/"
```

Or simply use the httpd.conf included in this project.  
(Please make sure your shared folder can be referenced from the guest machine)
```
$ cp -f /vagrant/httpd.conf /etc/httpd/conf/httpd.conf
```

Then 
```
$ vagrant ssh
$ sudo systemctl restart httpd
```
And the app should be working on: http://192.168.33.10
