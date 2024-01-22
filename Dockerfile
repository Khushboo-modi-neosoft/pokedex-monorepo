FROM node:18 as base
WORKDIR /app
COPY ./package.json ./

COPY ./lerna.json ./
COPY . /app
RUN yarn setup
RUN yarn build

EXPOSE 3000
CMD ["yarn", "production"]