# BUILD

~~~
sudo docker build -t php-hello-world .
~~~

## -t
starts build / image [tagname]

# RUN

~~~
sudo docker run -p 8080:80 -v media/diasd1/Storage/workspace/exp/docker/php-apache/src/:/var/www/html/ -t hello-world
~~~

## -v
creates a junction between [localpath]:[containerpath]
enables live modification and reading of files stored in container

## -p
creates a junction between [localport]:[containerport]
necessary for webservers

## -t
starts build / image [tagname]