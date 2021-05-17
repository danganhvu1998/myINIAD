Results are the same

```
~/gitRepo/myINIAD/thesis/cpp/page_rank$ time ./pageRank 

real    0m0.145s
user    0m0.131s
sys     0m0.008s
```

```
~/gitRepo/myINIAD/thesis/cpp/page_rank_with_redis$ g++ pageRank.cpp -o a.out -lhiredis && time ./a.out 

real	2m40.334s
user	0m19.272s
sys 	1m9.298s

GET:6008346
SET:13000
TOTAL COMMAND: 6034346 (Including DEL)
```