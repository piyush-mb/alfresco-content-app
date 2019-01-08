#!/bin/sh
echo "Packing the changes .....";

npm run pack:ags-extension

echo "Installing Extension .....";

npm install dist/ags-extension/ags-extension-0.0.1.tgz

echo "Installation Done .... ";
