up-f:
	docker-compose up --build --no-recreate -d
up:
	docker-compose up -d
stop:
	docker-compose stop
run:
	docker exec -it bonus-register sh -c "npm i --legacy-peer-deps && npm run dev"
build:
	docker exec -it bonus-register sh -c "npm run build"
