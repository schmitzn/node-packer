#!/bin/bash
SRC=$(realpath "$(dirname "$BASH_SOURCE")")
ruby "${SRC}/nodec/bin/nodec" "${SRC}/Hello_World/HelloWorld.js" -r "${SRC}/Hello_World" -d "${SRC}/tmp" -o "Unix.bin" --clean-tmpdir
