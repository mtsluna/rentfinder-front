FROM node:18.14.1-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/rentfinder-front /usr/share/nginx/html

EXPOSE 80
