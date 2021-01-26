# W/ COMPOSE

## RUN

~~~
sudo docker-compose up -d --build
~~~

### -d
starts it detached from console

### --build
rebuilds it (updates contents of container)

## STOP

~~~
sudo docker-compose down
~~~

# SINGLE CONTAINER

## BUILD

~~~
sudo docker build -t php-hello-world .
~~~

### -t
starts build / image [tagname]

# RUN

~~~
sudo docker run -p 8080:80 -v media/diasd1/Storage/workspace/exp/docker/php-apache/src/:/var/www/html/ -t hello-world
~~~

### -v
creates a junction between [localpath]:[containerpath]
enables live modification and reading of files stored in container

### -p
creates a junction between [localport]:[containerport]
necessary for webservers

### -t
starts build / image [tagname]
