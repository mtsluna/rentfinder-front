uuidGenerated=$(uuidgen)

export DOCKER_BUILDKIT=0
export COMPOSE_DOCKER_CLI_BUILD=0

docker build -t mtsluna/rentfinder-front:${uuidGenerated} ..
docker tag mtsluna/rentfinder-front:${uuidGenerated} docker.io/mtsluna/rentfinder-front:${uuidGenerated}
docker push mtsluna/rentfinder-front:${uuidGenerated}

commands="
  containerId=\$(docker ps -aqf 'name=rentfinderfront');

  echo \${containerId}

  commands=""

  if [ -z \$containerId ]; then
    commands='
      docker pull docker.io/mtsluna/rentfinder-front:${uuidGenerated} &&
      docker run -d --restart=unless-stopped -p 80:4200 --memory=256MB --name=rentfinderfront docker.io/mtsluna/rentfinder-front:${uuidGenerated}
      docker image prune -f
    '
  else
    commands='
      docker pull docker.io/mtsluna/rentfinder-front:${uuidGenerated} &&
      docker stop \$(docker ps -aqf 'name=rentfinderfront') &&
      docker rm \$(docker ps -aqf 'name=rentfinderfront') &&
      docker run -d --restart=unless-stopped -p 80:4200 --memory=256MB --name=rentfinderfront docker.io/mtsluna/rentfinder-front:${uuidGenerated} &&
      docker image prune -f
    '
  fi

  eval \$commands

"

ssh root@191.96.31.101 -t "${commands}"
