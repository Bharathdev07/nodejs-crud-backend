FROM node:14
WORKDIR /back
COPY .env /back
COPY package.json /back
RUN npm install
COPY . .
CMD ["npm","start"]
