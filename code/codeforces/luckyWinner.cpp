#include <bits/stdc++.h>
#define up(i,a,b) for(int (i) = (a);(i)<=(b);++(i))
#define down(i,b,a) for(int (i) = (b);i>=(a);--i)
#define debug(x) cerr << (x) << '\n';
#define bits(x,i) ((x >> i) & 1)
#define mid ((l+r)/2)
#define pr pair<int,int>
using namespace std;
const int N = 1005;
const int INF = 1e18;
long long dp[N][N];
long long a[N];
int t,n,m;
long long solve(){
	for(int i=0;i<=n;++i) for(int j=0;j<=m+1;++j) dp[i][j] = INF;
	dp[0][0] = 0;
	dp[1][0] = 0; dp[1][1] = a[1];
	for(int i=2;i<=n;++i){
		for(int j=0;j<=min(i, m+1);++j) dp[i][j] = dp[i-1][j];
		for(int j=1;j<=min(i, m+1);++j) dp[i][j] = min(dp[i][j], dp[i-1][j-1] + a[i]); 
		for(int j=2;j<=min(i, m+1);++j) dp[i][j] = min(dp[i][j], dp[i-2][j-2] + min(a[i], a[i-1])); 
	}
	// for(int i=1;i<=n;++i){
	// 	for(int j=0;j<=m;++j){
	// 		cout << dp[i][j] << ' ';
	// 	}
	// 	cout << '\n';
	// }
	return min(dp[n][m], dp[n][m+1]);
}
int main(){
	ios_base::sync_with_stdio(0); cin.tie(0);
  freopen("test.txt","r",stdin);
	cin >> t;
	up(Test,1,t){
		cin >> n >> m;
		up(i,1,n) cin >> a[i];
		cout << "Case " << Test << ": " << solve() << '\n';
	}
}