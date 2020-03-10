
install: install-deps

run:
	npx node 'bin/brain-games.js'

install-deps:
	npm ci

lint:
	npx eslint .


