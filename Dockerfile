# Use an official Node runtime as the parent image
FROM nginx:latest

COPY index.html /var/www/index.html
COPY app.js var/www/app.js
COPY nginx.conf /etc/nginx/nginx.conf


# Make the container's port 80 available to the outside world
EXPOSE 80

# Run app.js using node when the container launches
CMD ["nginx", "-g", "daemon off;"]
