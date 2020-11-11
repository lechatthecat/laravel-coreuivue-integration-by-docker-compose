FROM php:7.3-fpm-alpine
LABEL maintainer "maintainer name"

ARG TZ
ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /composer

####################
# PHP Settings
####################
RUN set -eux && \
  apk add --update-cache --no-cache --virtual=.build-php-dependencies tzdata && \
  cp /usr/share/zoneinfo/${TZ} /etc/localtime && \
  apk del .build-php-dependencies && \
  docker-php-ext-install pdo_mysql && \
  curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer && \
  apk add --update-cache --no-cache nodejs nodejs-npm

#CMD /bin/ash /docker.sh
