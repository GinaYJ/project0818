CONTAINER = bonus-register

up-f:
	docker-compose up --build --no-recreate -d
up:
	docker-compose up -d
stop:
	docker-compose stop
run:
	docker exec -it $(CONTAINER) sh -c "npm i --legacy-peer-deps && npm run dev"
build:
	docker exec -it $(CONTAINER) sh -c "npm run build"
clean:
	docker stop $(CONTAINER)
	docker container rm $(CONTAINER)
	docker image rm $(CONTAINER)
