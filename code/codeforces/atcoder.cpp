#include <bits/stdc++.h>
using namespace std;

#define II pair<long long, long long>
#define III pair<II, long long>
#define X first.first
#define Y first.second
#define Z second
#define all(a) (a).begin(), (a).end()
#define for0(i, n) for (long long i = 0; i < n; i++)
#define for1(i, n) for (long long i = 1; i <= n; i++)

long long const oo = 1000000007, e5 = 100007, e6 = 1000007;
long long N, M;

long long __init__() {
    return 0;
}

void print01(long long val, long long showNums = 20) {
    char answer[showNums];
    for0(i, showNums) {
        answer[showNums - 1 - i] = val % 2 + '0';
        val /= 2;
    }
    cout << answer;
}

long long f(long long digitsCount, long long k, long long last = 9) {
    if (k <= 1) {
        return k;
    }
    else if (digitsCount == 1) {
        return min(9LL, k);
    }
    else if (pow(9, digitsCount) <= k) {
        return pow(9, digitsCount <= k);
    }
    long long res = 0;
    for (long long i = 1; i <= last; i++) res += f(digitsCount - 1, k / i, i);
    return res;
}

int main() {
    ios_base::sync_with_stdio(false); cin.tie(0);__init__();
    cout << f(18, 1000000000);
}
