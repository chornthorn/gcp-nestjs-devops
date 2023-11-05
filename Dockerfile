FROM node:18-alpine as dev-stage

# Create app directory
RUN mkdir -p /usr/src/app

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# build app
RUN npm run build

FROM node:18-alpine as  prod-stage

# Create app directory
RUN mkdir -p /usr/src/app

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy source code
COPY --from=dev-stage /usr/src/app/dist ./dist

# Expose port
EXPOSE 3000

# Run app
CMD ["npm", "run", "start:prod"]