wafacl-deploy:
	aws cloudformation create-stack --stack-name yuta-cloudformation-wafacl \
	--template-body file://cloudFormation/cloudformation-wafacl.yml \
	--capabilities CAPABILITY_NAMED_IAM \
	--region us-east-1

cloudfront-deploy:
	aws cloudformation create-stack --stack-name yuta-cloudformation-cloudfront \
	--template-body file://cloudFormation/cloudformation-cloudfront.yml \
	--capabilities CAPABILITY_NAMED_IAM \
	--parameters ParameterKey=WAFWebACLArn,ParameterValue=$(WAF_ACL_ARN) \
				ParameterKey=S3BucketName,ParameterValue=$(S3_BUCKET_NAME)
	--region ap-northeast-1