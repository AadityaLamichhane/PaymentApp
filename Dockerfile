FROM node:20.12.0-alpine3.19
WORKDIR /user/src/app

COPY package.json yarn.lock tsconfig.json turbo.json  ./
COPY apps/ ./apps
COPY packages ./packages 
RUN yarn install 
RUN yarn run db:generate 
RUN yarn run build
CMD ["yarn","run" ,"start-user-app"]
