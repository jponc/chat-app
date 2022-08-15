package main

import (
	"fmt"
	"os"
	"strconv"
)

// Config
type Config struct {
	Port int
}

// NewConfig initialises a new config
func NewConfig() (*Config, error) {
	portStr, err := getEnv("PORT")
	if err != nil {
		return nil, err
	}

	port, err := strconv.Atoi(portStr)
	if err != nil {
		return nil, err
	}

	return &Config{
		Port: port,
	}, nil
}

func getEnv(key string) (string, error) {
	v := os.Getenv(key)

	if v == "" {
		return "", fmt.Errorf("%s environment variable missing", key)
	}

	return v, nil
}
