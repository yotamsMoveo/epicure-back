FROM node:16 as base
WORKDIR /app
COPY package*.json .
ARG NODE_ENV
#RUN npm install
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install;\
        else npm install --only=production; \
        fi
COPY . .
#ENV PORT 4000
EXPOSE 4000
# CMD ["node","index.js"]


# FROM node:16 as base

# WORKDIR /app

# COPY package*.json ./

# RUN npm i

# COPY . .