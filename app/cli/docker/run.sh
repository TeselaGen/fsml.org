# Remove the container if exists.
docker rm -f oclif || true

# NOTE: we could also clone the repo, but a mounted volume
# is still useful in order to easily retrieve the installer files.

REL_DIR=$(pwd)/../../..
DIR=$(cd $REL_DIR; pwd)
echo "Running oclif linux installer docker with FSML mounted: $DIR"
docker run \
    --volume "$DIR/fsml.org/":"/root/fsml.org/" \
    -it \
    --name oclif \
    oclif:latest

# Remove the container as its no longer useful.
docker rm -f oclif
docker rmi -f oclif

