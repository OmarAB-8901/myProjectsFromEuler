
result = 2**1000;
print(result);

sumAllNumbers = 0;
for n in range(0, len(str(result))):
    sumAllNumbers += int( str(result)[n] );

print(sumAllNumbers);