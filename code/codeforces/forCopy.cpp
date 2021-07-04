#include <bits/stdc++.h>
using namespace std;

#define II pair<int, int>
#define III pair<II, int>
#define X first.first
#define Y first.second
#define Z second
#define all(a) (a).begin(), (a).end()
#define for0(i, n) for (int i = 0; i < n; i++)
#define for1(i, n) for (int i = 1; i <= n; i++)

int const oo = 1000000007, e5 = 100007, e6 = 1000007;
int N, M;

int __init__() {
	return 0;
}

void print01(int val, int showNums = 20) {
	char answer[showNums];
	for0(i, showNums) {
		answer[showNums - 1 - i] = val % 2 + '0';
		val /= 2;
	}
	cout << answer;
}

int main() {
	ios_base::sync_with_stdio(false); cin.tie(0);__init__();
	freopen("test.txt", "r", stdin);
}
