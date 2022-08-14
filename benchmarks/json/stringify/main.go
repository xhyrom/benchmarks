package main

import "encoding/json"

type hw struct {
    hello string `json:"hello"`
}

func main() {
	json.Marshal(hw{
		hello: "world",
	})
}