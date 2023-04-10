# Use the official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN yarn build

# Set the NODE_ENV environment variable to "production"
ENV NODE_ENV=production

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]