# Use the official Node.js image for building the React app
FROM node:16 AS build
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . ./

# Build the React app
RUN npm run build

# Use the official Nginx image to serve the React app
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build .

# Expose the port Nginx runs on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]