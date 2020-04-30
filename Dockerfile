# Stage 1
FROM timbru31/node-alpine-git as build-stage
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
 
# Stage 2
FROM nginx:stable-alpine as production-stage
COPY --from=node /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]