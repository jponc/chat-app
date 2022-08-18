package main

import (
	"fmt"
	"os"
	"strconv"
	"time"
)

// Config
type Config struct {
	Port           int
	MongoDBUrl     string
	MongoDBTimeout time.Duration
}

// NewConfig initialises a new config
func NewConfig() (*Config, error) {
	portStr, err := getEnv("PORT")
	if err != nil {
		return nil, err
	}

	mongoDBUrl, err := getEnv("MONGODB_URL")
	if err != nil {
		return nil, err
	}

	port, err := strconv.Atoi(portStr)
	if err != nil {
		return nil, err
	}

	return &Config{
		Port:           port,
		MongoDBUrl:     mongoDBUrl,
		MongoDBTimeout: 10 * time.Second,
	}, nil
}

func getEnv(key string) (string, error) {
	v := os.Getenv(key)

	if v == "" {
		return "", fmt.Errorf("%s environment variable missing", key)
	}

	return v, nil
}
