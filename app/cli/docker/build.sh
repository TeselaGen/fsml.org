#!/bin/bash

# build docker
versionTag="latest"
imageName="oclif"

docker build . -t $imageName:$versionTag
