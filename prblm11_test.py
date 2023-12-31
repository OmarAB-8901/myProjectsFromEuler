g = [[int(t) for t in s.split()] for s in open('pe11.txt').readlines()]

maxp = 0
rows, cols, path_size = len(g), len(g[0]), 4
print( rows, cols, path_size );
for i in range(rows):
    # print( i );
    for j in range(cols - path_size + 1):
        print( j );
        phv = max(g[i][j] * g[i][j+1] * g[i][j+2] * g[i][j+3],
                  g[j][i] * g[j+1][i] * g[j+2][i] * g[j+3][i])
        if i <= rows-path_size:
           pdd = max(g[i][j] * g[i+1][j+1] * g[i+2][j+2] * g[i+3][j+3],
                     g[i][j+3] * g[i+1][j+2] * g[i+2][j+1] * g[i+3][j])
        maxp = max(maxp, phv, pdd)
 
print ("Greatest product of", path_size, "adjacent numbers:", maxp)