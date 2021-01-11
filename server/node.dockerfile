FROM node:latest

# Expose the default port
EXPOSE 4000

# Create/Set the working directory
RUN mkdir /server
WORKDIR /server

ENV PATH /client/node_modules/.bin:$PATH
COPY . /server/
#COPY yarn.lock /server/
RUN yarn

# Set Command
CMD ["yarn", "start"]