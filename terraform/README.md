# Infrastructure

- This uses Terraform with `hashicorp/aws` version `4.17.1`

# Starting

Install dependencies

```
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
```

Initialise remote

```
cd remote
terraform init -var-file="ap-southeast-2_dev.tfvars"
terraform apply -var-file="ap-southeast-2_dev.tfvars"
```

Initialise infrastructure

```
cd infrastructure

# initialise terraform
terraform init

# initialise workspaces
make init-workspaces

# init all workspaces
make init-dev
make init-staging
make init-prod
```
