FROM nginx:alpine

ENV HUGO_VERSION 0.73.0
ENV HUGO_BINARY hugo_${HUGO_VERSION}_Linux-64bit.tar.gz
ENV HUGO_SITE /usr/src/app

# Install Hugo
RUN set -x && \
    apk add --update wget ca-certificates && \
    wget https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY} && \
    tar xzf ${HUGO_BINARY} && \
    rm -r ${HUGO_BINARY} && \
    mv hugo /usr/bin && \
    apk del wget ca-certificates && \
    rm /var/cache/apk/*

# Install Bash, Git, Yarn
RUN apk add --no-cache bash && \
    apk add git && \
    apk add yarn

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

WORKDIR ${HUGO_SITE}

EXPOSE 80 443

COPY nginx.conf /etc/nginx/conf.d/redlake-tech.com.conf

COPY . .

RUN git submodule update --init --recursive && \
    yarn install && \
    yarn build

CMD ["yarn", "run", "api:prod"]