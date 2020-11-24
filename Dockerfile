FROM node:12 AS ui-build

# Create app directory
WORKDIR /usr/src/app

COPY views/url-short/ ./views/url-short/
RUN cd views/url-short/ && npm install && npm run build
FROM node:12 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/views/url-short/dist ./views/url-short/dist
COPY package*.json ./
RUN npm install

COPY index.js ./

COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]