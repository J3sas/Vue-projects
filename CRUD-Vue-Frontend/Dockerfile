# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies including pm2
RUN npm install pm2 --save && npm install

# Copy the rest of the application code
COPY . .

# Build the frontend
RUN npm run dev

# Expose the port the app runs on
EXPOSE 5173

# Command to run the frontend
CMD ["pm2-runtime", "npm", "--", "run", "dev"]
