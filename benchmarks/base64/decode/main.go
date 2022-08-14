package main

import b64 "encoding/base64"

func main() {
	b64.StdEncoding.DecodeString("SGVsbG8sIFdvcmxkIQ==")
}