package main

import b64 "encoding/base64"

func main() {
    b64.StdEncoding.EncodeToString([]byte("Hello, World!"))
}