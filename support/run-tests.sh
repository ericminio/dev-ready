#!/bin/bash

version=$(ls $NVM_DIR/versions/node)
export PATH=$NVM_DIR/versions/node/$version/bin:$PATH;

cd /tmp/app;
ls -la;
npm install;
npm test;
