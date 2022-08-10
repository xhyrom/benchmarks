package main

import "fmt"

func fibo(n int) int {
    if n <= 1 {
        return n
    }

    return fibo(n - 1) + fibo(n - 2)
}

func main() {
    fibo(50)
}
