sam-local:
	DOCKER_HOST=$(shell docker context inspect colima | jq -r '.[0].Endpoints.docker.Host') && \
	export DOCKER_HOST && \
	sam build && \
	sam local start-api --docker-network sam-try-network

sam-deploy:
	sam build
	if aws s3 ls "s3://$(S3_BUCKET)" 2>&1 | grep -q 'NoSuchBucket'; then \
        echo "バケット $(S3_BUCKET) が存在しません。作成します。"; \
        aws s3 mb s3://$(S3_BUCKET) --region ap-northeast-1; \
    else \
        echo "バケット $(S3_BUCKET) は既に存在します。クリーンナップします。"; \
        aws s3 rm s3://$(S3_BUCKET) --recursive; \
    fi
	sam deploy --s3-bucket $(S3_BUCKET) --no-confirm-changeset

sam-delete:
	sam delete --stack-name temp-ogata-sam

