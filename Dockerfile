FROM ericminio/node

USER root
RUN mkdir -p /home/dev/app 
RUN chown -R dev:dev /home/dev/app
COPY ./app /home/dev/app

RUN mkdir -p /home/dev/support 
RUN chown -R dev:dev /home/dev/support
COPY ./support /home/dev/support

USER dev
WORKDIR /home/dev