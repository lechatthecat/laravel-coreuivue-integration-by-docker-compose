# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "centos/7"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # NOTE: This will enable public access to the opened port
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine and only allow access
  # via 127.0.0.1 to disable public access
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.synced_folder "./", "/vagrant", type: "virtualbox", mount_options: ['dmode=777', 'fmode=777']
  #config.vm.synced_folder "./", "/vagrant", type: "virtualbox", owner: 'vagrant', group: 'apache', mount_options: ['dmode=777', 'fmode=777']

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  # config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
  #   vb.memory = "1024"
  # end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  config.vm.provision :shell, inline: "sudo setenforce 0", run: 'always'
  config.vm.provision "fixsync", privileged: true, type: "shell" do |s|
    s.inline = "yum -y install kernel-devel kernel-headers dkms gcc gcc-c++ && yum -y update kernel"
    s.inline += "&& yum -y install httpd && systemctl start httpd.service && systemctl enable httpd.service"
  end
  config.vm.provision "modules", privileged: true, type: "shell" do |s|
    s.inline = "rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm"
    s.inline += "&& yum -y install https://centos7.iuscommunity.org/ius-release.rpm"
    s.inline += "&& yum -y install php72u php72u-mysqlnd php72u-gd php72u-mbstring php72u-opcache php72u-xml php72u-pecl-xdebug php72u-pdo php72u-devel php72u-json"
    s.inline += "&& systemctl restart httpd"
    s.inline += "&& rm -rf /var/www/html && ln -fs /vagrant /var/www/html"
    s.inline += "&& systemctl restart httpd.service"
  end
  config.vm.provision "laravel", privileged: false, type: "shell" do |s|
    s.inline = "curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -"
    s.inline += "&& sudo yum update && sudo yum install -y nodejs"
    s.inline += "&& curl -sS https://getcomposer.org/installer | php -- --quiet"
    s.inline += "&& sudo mv composer.phar /usr/bin/composer"
    s.inline += "&& cd /vagrant/laravel-coreui/src"
    s.inline += "&& composer install -q"
    s.inline += "&& npm install && npm run dev"
    s.inline += "&& sudo rm /etc/httpd/conf/httpd.conf"
    s.inline += "&& sudo cp -f /vagrant/httpd.conf /etc/httpd/conf/httpd.conf"
    s.inline += "&& sudo chown apache:apache /etc/httpd/conf/httpd.conf"
    s.inline += "&& sudo systemctl restart httpd && sudo systemctl enable httpd && sudo setenforce 0"
  end
end

