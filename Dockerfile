FROM timbru31/node-alpine-git as build-stage
 
WORKDIR /usr/src/app
 
COPY package.json ./
 
RUN npm install
 
COPY . .
 
RUN npm run build
 
# Stage 2
FROM nginx:1.13.12-alpine
COPY --from=node /usr/src/app/dist/projeto-angular7 /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
