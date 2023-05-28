FROM node:19.0.0 as Builder

RUN mkdir -p /app/services/togepi

WORKDIR /app/services/togepi

COPY ./package.json .

RUN yarn install

COPY ./tsconfig.json .

COPY ./assets/ ./assets/

COPY ./html/ ./html/

COPY ./build-config/ ./build-config/

COPY ./src/ ./src/

COPY ./.babelrc ./.babelrc

COPY ./.env ./.env

RUN yarn clean:build

RUN yarn build

RUN rm -rf \
    node_modules \
    src \
    assets \
    tsconfig.json \ 
    .babelrc \
    package-lock.json

RUN yarn install --production

ENV PORT=3000

EXPOSE 3000

CMD ["yarn", "start"]