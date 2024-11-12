# Use Node.js 14 as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port that the server runs on
EXPOSE 5000

# Command to start the application
CMD ["npm", "run", "start"]
