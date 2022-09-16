FROM node:18
WORKDIR /backend
COPY . .
RUN npm install
CMD ["npm","start"]

