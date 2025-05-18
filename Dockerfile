# Project: Dockerfile for Node.js Application
FROM node:23-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json .

# Install the node packages
RUN npm install 

# Copy all the files
COPY . .

# Expose the container
EXPOSE 3000

# Start the node app
CMD [ "npm", "start", "--host=0.0.0.0" ]