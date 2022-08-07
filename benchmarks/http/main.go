package main

import (
    "fmt"
    "html"
    "net/http"
)

type fooHandle struct{}

func (f *fooHandle) ServeHTTP(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, World!")
}

func main() {
    http.ListenAndServe(":3000", new(fooHandle))
}