FROM mhart/alpine-node:latest
WORKDIR /app

RUN npm install -g pm2

# copy all the relevant application content to the image
# order is important here, you want folders which are least likely
# to change and/or largest on top (b/c cache)
COPY ./node_modules /app/node_modules
COPY ./src /app/src
COPY ./web/index.js /app/web/
COPY ./pm2.json /app/

# this is what gets executed when you run the container
CMD pm2 start --no-daemon /app/pm2.json --only app_${NODE_ENV}
