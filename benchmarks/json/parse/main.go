package main

import "encoding/json"

type hw struct {
    hello string `json:"hello"`
}

func main() {
	data := hw{}
	json.Unmarshal([]byte("{\"hello\": \"world\"}"), &data)
}