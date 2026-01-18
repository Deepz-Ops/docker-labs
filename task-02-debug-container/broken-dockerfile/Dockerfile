# BROKEN DOCKERFILE - DO NOT MODIFY
# Your job is to identify the issues and create a fixed version

FROM node:14

# Issue 1: Wrong working directory path
WORKDIR /app/src

# Issue 2: Copying package.json to wrong location
COPY package.json /app/

# Issue 3: Not installing dependencies
# RUN npm install

# Issue 4: Copying application files before dependencies
COPY . .

# Issue 5: Wrong port exposed
EXPOSE 8080

# Issue 6: Incorrect CMD syntax and command
CMD node server.js
