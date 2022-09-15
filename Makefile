install:
	npm ci

start:
	npx webpack serve --development

build:
	npm run build

test:
	npm test

lint:
	npx eslint src/**
