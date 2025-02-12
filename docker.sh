docker build . -t defaultuser/defaultservice
docker run -p 9009:9009 -d defaultuser/defaultservice