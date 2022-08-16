variable "environment" {
  type        = string
  description = "Environment"
}

variable "project_name" {
  type        = string
  description = "This is the name of the project"
}

variable "aws_profile" {
  type        = string
  description = "AWS Profile"
}

variable "aws_region" {
  type        = string
  description = "AWS Region"
}

variable "cluster_name" {
  type        = string
  description = "Name of the application cluster"
}
