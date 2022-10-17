FROM ubuntu:latest

# Curl
RUN apt-get -y update && apt-get -y install curl

# Oclif needs node
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g yarn
RUN yarn global add pm2@latest

# Oclif needs git
RUN apt-get update
RUN apt-get install -y git

# Oclif needs zip
RUN apt-get install -y zip

# Oclif needs bzip2
RUN apt-get install -y bzip2

# Oclif needs apt-utils
RUN apt-get install -y apt-utils

# Oclif needs xz-utils
RUN apt-get install -y xz-utils

COPY start.sh /root/start.sh

# ENTRYPOINT ["tail", "-f", "/dev/null"]
CMD ["bash", "/root/start.sh"]
