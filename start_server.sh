#!/bin/bash

comando="node index.js"

comando_angular="ng serve"

cd "./backend"
echo "Iniciando servidor node"
$comando &

sleep 3

cd ".."
echo "Iniciando Angular"
$comando_angular

