#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm install --production
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/AppointmentBooking /usr/share/nginx/html