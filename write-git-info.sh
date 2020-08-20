#!/bin/bash

# This script fails in GitHub actions because of how it clones the repo

set -eo pipefail
cd "$( dirname "${BASH_SOURCE[0]}" )"

git describe --tags --dirty > dist/VERSION
git rev-parse HEAD > dist/COMMITHASH
