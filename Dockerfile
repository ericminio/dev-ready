FROM ericminio/node

USER root
RUN mkdir -p /home/dev/app && chown -R dev:dev /home/dev/app

USER dev
WORKDIR /home/dev/app