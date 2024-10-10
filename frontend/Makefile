start:
	npm run dev

cloudfront-deploy:
	npm run build
	aws s3 sync ./dist s3://$(S3_BUCKET_NAME) --delete
	aws cloudfront create-invalidation --distribution-id $(CLOUDFRONT_DISTRIBUTION_ID) --paths "/*"


