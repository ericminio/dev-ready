#!/bin/bash

echo waiting for postgres...;
while ! docker-compose exec database psql data -U dev -c "select current_database()";
do
    sleep 1;
done;
echo postgres database data is ready;
