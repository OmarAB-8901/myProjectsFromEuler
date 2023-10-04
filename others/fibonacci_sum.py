sumFib = 0;
fibonacci = [0,1];
total = 0;
for i in range(2,36):
    sumFib = fibonacci[i-1] + fibonacci[i-2]
    fibonacci.append(sumFib);
    if sumFib % 2 == 0 and sumFib < 4000000:
        total += sumFib;

print( fibonacci );
print( total );

# 3524578 