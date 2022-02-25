#!/bin/bash

set -eo pipefail
cd "$( dirname "${BASH_SOURCE[0]}" )"

# This script fails in GitHub actions because of how it clones the repo
CI="${CI:-false}"
if [ "${CI}" != "true" ]; then
	git describe --tags --dirty > dist/VERSION
	git rev-parse HEAD > dist/COMMITHASH
fi
