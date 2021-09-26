// https://codeforces.com/contest/1282/problem/D
#include <bits/stdc++.h>
using namespace std;

#define II pair<int, int>

int const oo = 1000000007, e5 = 100007, e6 = 1000007;
int wrongA, wrongB, wrongNum;
int cntA, cntB, totalB;
string result;
int N;

int ask(string s) {
  cout << s << endl;
  fflush(stdout);
  int x;
  cin >> x;
  if (x == 0) {
    exit(0);
  }
  return x;
}

int main() {
  ios_base::sync_with_stdio(false); cin.tie(0);
  for (int i = 0; i < 300; i++) {
    cout << 'a';
  }
  cout << endl;
  fflush(stdout);
  cin >> wrongA;
  for (int i = 0; i < 300; i++) {
    cout << 'b';
  }
  cout << endl;
  fflush(stdout);
  cin >> wrongB;
  N = 600 - wrongA - wrongB;
  cntA = wrongB - 300 + N;
  cntB = wrongA - 300 + N;
  totalB = cntB;
  string pat;
  for (int i = 0; i < N; i++) {
    result.push_back('a');
    pat.push_back('a');
  }
  for (int i = 0; i < N - 1; i++) {
    pat[i] = 'b';
    int x = ask(pat);
    pat[i] = 'a';
    if (x < totalB) {
      result[i] = 'b';
      cntB--;
    }
    else {
      cntA--;
    }
  }
  if (cntA == 0) result[N - 1] = 'b';
  else result[N - 1] = 'a';
  ask(result);
}