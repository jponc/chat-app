
# Remote

This generates the s3 bucket and dynamodb which holds the terraform state and locks. This is pretty much the first step before running any terraform code in `infrastructure` folder.

# Usage

```
terraform init -var-file="ap-southeast-2_dev.tfvars"
terraform apply -var-file="ap-southeast-2_dev.tfvars"
```
