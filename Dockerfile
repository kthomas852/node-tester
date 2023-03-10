FROM node
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
#EXPOSE 4045
CMD ["npm", "start"]
