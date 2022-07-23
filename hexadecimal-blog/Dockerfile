FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js

# CHANGE THIS IF YOU CHANGED THE PORT VARIABLE IN config.js
EXPOSE 3000