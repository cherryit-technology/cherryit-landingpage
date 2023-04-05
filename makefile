setup:
	npm run i

run:
	npm run dev

build:
	npm run build
	npm run export

server: build
	npm run server