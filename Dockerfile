# https://github.com/strapi-community/strapi-tool-dockerize/blob/main/templates/Dockerfile-prod.liquid
# Creating multi-stage build for production
FROM node:20-alpine as build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/

COPY package.json yarn.lock ./
RUN yarn global add node-gyp \
  && yarn install --only=production \
  && yarn add mysql2 pg

ENV STRAPI_TELEMETRY_DISABLED=true
ENV STRAPI_DISABLE_REMOTE_DATA_TRANSFER=false

ENV PATH /opt/node_modules/.bin:$PATH
WORKDIR /opt/app
COPY . .
RUN yarn run build

# Creating final production image
FROM node:20-alpine
RUN apk add --no-cache vips-dev
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
WORKDIR /opt/app
COPY --from=build /opt/app ./
ENV PATH /opt/node_modules/.bin:$PATH
ENV STRAPI_TELEMETRY_DISABLED=true
ENV STRAPI_DISABLE_REMOTE_DATA_TRANSFER=false

RUN chown -R node:node /opt/app
USER node
EXPOSE 1337
CMD ["yarn", "start"]
