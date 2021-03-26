FROM node:14-alpine

RUN apk update && apk upgrade

WORKDIR /workspace
ADD . .
RUN yarn && yarn build

EXPOSE 5000
ENV PORT 5000
CMD ["yarn", "next", "start", "-p", "${PORT}"]
