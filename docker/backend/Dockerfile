FROM node:6.7

RUN mkdir -p /app
ADD package.json /app
RUN cd /app && npm install --prod
ADD . /app/

WORKDIR /app
CMD npm start