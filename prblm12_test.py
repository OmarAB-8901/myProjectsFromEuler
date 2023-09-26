
def f(L, nMax=45000):
    d = [0]*nMax
    for n in range(1, nMax):
        for j in range(n, nMax, n):
            print(j)
            break;
            d[j]+= 1
        nDiv = d[n-1] * d[n//2] if n%2==0 else d[(n-1)//2] * d[n]
        if nDiv > L: return (n-1, n*(n-1)//2)

print (f(int(input("First triangle number to have more than this number of divisors? "))))