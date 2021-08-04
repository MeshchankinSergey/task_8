function isPrime(num = 0) {
    if (num >1000 || num <= 1) return confirm ('данные неверны');
    for (let i = 2; i < num; i++)
        if (num % i === 0) return confirm ('число является составным');
    return confirm ('число является простым');
}

isPrime()