FROM node:14 AS build-phase

WORKDIR /usr/src/app

COPY . .

RUN npm install -g serve && \
    npm install && \
    npm run build

FROM node:14-alpine3.13

EXPOSE 3000

WORKDIR /usr/src/app

COPY --from=build-phase /usr/src/app/build/ /usr/src/app/build

RUN npm install -g serve && \
    adduser -D appuser && \
    chown appuser build

USER appuser

ENTRYPOINT [ "serve", "-s", "-l", "3000", "build" ]


# # Stage 1: Build the React app
# FROM node:14-alpine as builder
# WORKDIR /app
# COPY package*.json .
# RUN npm install  # Install dependencies using npm
# COPY . .
# RUN npm run build  # Build the app using npm

# # Stage 2: Serve with Nginx
# FROM nginx:1.19.0
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=builder /app/build .

# # Expose port 80 for documentation purposes
# EXPOSE 80

# ENTRYPOINT ["nginx", "-g", "daemon off;"]


# # Use Node.js 14 as a base image
# FROM node:14

# # Set the working directory in the container
# WORKDIR /app

# # Copy the package.json and package-lock.json to install dependencies
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application files
# COPY . .

# # Expose the port that the client runs on
# EXPOSE 3000

# # Command to start the application
# CMD ["npm", "run", "start"]
