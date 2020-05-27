#!/bin/bash

set -eo pipefail

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
git -C "${SCRIPT_DIR}" describe --tags --dirty > "${SCRIPT_DIR}/dist/VERSION"
git -C "${SCRIPT_DIR}" rev-parse HEAD > "${SCRIPT_DIR}/dist/COMMITHASH"
