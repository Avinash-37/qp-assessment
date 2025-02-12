FROM node:20
WORKDIR /grosary_api
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 9009
CMD ["npm", "start"]
