// This is the general terraform configuration including AWS profile used, dynamodb table, and AWS region
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.17.1"
    }
  }

  // Cannot add variables in backend configuration :/
  backend "s3" {
    bucket         = "chat-app-terraform-state-ap-southeast-2"
    key            = "global/s3/terraform.tfstate"
    region         = "ap-southeast-2"
    profile        = "jponc"
    dynamodb_table = "chat-app-terraform-locks-ap-southeast-2"
    encrypt        = true
  }
}

provider "aws" {
  profile = var.aws_profile
  region  = var.aws_region
}
