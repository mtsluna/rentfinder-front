FROM node:18.14.1-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --omit=dev

FROM nginx:alpine
COPY --from=node /app/dist/rentfinder-front /usr/share/nginx/html
COPY /nginx/nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80
