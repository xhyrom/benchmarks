def fibo(n : UInt64) : UInt64
    if n <= 1
        return n
    end

    return fibo(n - 1) + fibo(n - 2)
end

fibo(50)
