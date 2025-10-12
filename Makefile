SHELL := /bin/bash

define HELP

	Available Commands:

		- dev: Start the application in a developer instance

		- build dev: Build development environment

		- prod: Start the application in a production instance

		- clean: Cleans up containers and exits running instances of the application

endef

export HELP

help:
	@echo -e "$$HELP"
.PHONY: help

dev:
	@echo -e "Starting in dev mode: Press CTRL + C to stop"
	@bash -c '\
	trap "echo Stopping containers; docker compose down --remove-orphans; exit" SIGINT SIGTERM; \
	DOCKERFILE=Dockerfile.dev NODE_ENV=dev docker compose up; \
	'
.PHONY: dev

build-dev: 
	@echo -e "Building development environment"
	DOCKERFILE=Dockerfile.dev CLIENT_DOCKERFILE=Dockerfile.dev NODE_ENV=dev docker compose build
.PHONY: build-dev

prod:
	@echo -e "Starting in production mode:"
	docker compose up --build
.PHONY: prod

clean:
	@echo -e "Stopping and removing containers"
	docker compose down --remove-orphans
.PHONY: clean