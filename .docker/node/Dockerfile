FROM node:slim
WORKDIR /app

RUN npm install -g pm2

# copy all the relevant application content to the image
# order is important here, you want folders which are least likely to change and/or largest on top (b/c cache)
COPY ./node_modules /app/node_modules
COPY ./src /app/src
COPY ./web/index.js /app/web/
COPY ./pm2.yml /app/

# this is what gets executed when you run the container

# pm2 is crappy, it doesn't work properly with this for some reason
# CMD ["pm2", "start", "--no-daemon", "/app/pm2.yml", "--only", "app_${NODE_ENV}", "--env", "${NODE_ENV}"]
CMD ["pm2", "start", "--no-daemon", "/app/pm2.yml", "--env", "${NODE_ENV}"]