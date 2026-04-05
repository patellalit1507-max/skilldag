FROM node:20-slim

# Install Python 3 for Python code execution
RUN apt-get update && apt-get install -y python3 python3-pip --no-install-recommends \
    && ln -sf /usr/bin/python3 /usr/bin/python \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Cloud Run injects PORT env variable
ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]
