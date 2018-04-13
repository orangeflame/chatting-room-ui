FROM node:8-alpine

ARG GIT_COMMIT
ENV GIT_COMMIT ${GIT_COMMIT}

ENV NODE_ENV production
ENV NODE_PATH ./dist

WORKDIR /opt/app
COPY .next .next
COPY dist dist
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY healthcheck.js healthcheck.js
COPY next.config.js next.config.js
RUN yarn

HEALTHCHECK --interval=5s --timeout=3s CMD node ./healthcheck

CMD [ "yarn", "start" ]
