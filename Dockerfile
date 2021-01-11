FROM node:9.4.0-alpine as client

WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN npm install -qy
COPY client/ ./
RUN npm run build


# Setup the server

FROM node:9.4.0-alpine

WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/app/server/

COPY server/ ./
COPY client/ ./
RUN cd ./server/ ; npm i
RUN cd ./client/ ; npm i

EXPOSE 4000
EXPOSE 3000

CMD ["npm", "start"]