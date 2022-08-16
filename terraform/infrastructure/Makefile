# Create workspaces per env
init-workspaces:
	terraform workspace new dev

# Initialise per env

init-dev:
	terraform workspace select dev
	terraform init

# Plan per env
plan-dev:
	terraform workspace select dev
	terraform plan -var-file="ap-southeast-2_dev.tfvars"


# Apply per env
apply-dev:
	terraform workspace select dev
	terraform apply -var-file="ap-southeast-2_dev.tfvars"

