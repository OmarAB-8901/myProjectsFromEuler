c = [1]
def collatz(_):
    cx = [0, 1] + [0]*5000000
    def d(n):
        if n>5000000: return d((3*n + 1)//2 if n&1 else n//2) + 1
        if not cx[n]: cx[n] = d((3*n + 1)//2 if n&1 else n//2) + 1
        return cx[n]
    m = 0
    for n in range(2, 5000001):
        # print( n );
        q = d(n)
        if q>=m: c.append(n); m = q
    return c[::-1]

c = collatz(0)
for _ in range(int(input())):
    i = int(input())
    print (min(c, key=lambda x:x>i))