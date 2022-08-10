#include <stdio.h>
#include <stdint.h>

uint64_t fibo(uint64_t n) {
    if (n <= 1) {
        return n;
    }

    return fibo(n - 1) + fibo(n - 2);
}

int main() {
    fibo(50);
    return 0;
}