##
# Role based auth service
##

# Image version
FROM node:slim

# Set work directory
WORKDIR /usr/app/src

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm install --prod-only

# Copy source code
COPY . ./

# Run application
CMD ["node", "src/index.js"]

# Set application port
EXPOSE 3000