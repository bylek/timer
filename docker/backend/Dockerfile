FROM node:6.7

RUN mkdir -p /app
ADD package.json /app
RUN npm install --prod
ADD config models routes app.js /app/

CMD npm start