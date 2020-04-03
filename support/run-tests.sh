#!/bin/bash

version=$(ls $NVM_DIR/versions/node)
export PATH=$NVM_DIR/versions/node/$version/bin:$PATH;

cd /usr/local/src/app;
ls -la;
whoami;
npm install;
npm test;
