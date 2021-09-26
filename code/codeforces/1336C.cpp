// https://codeforces.com/contest/1336/problem/C
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
string T, S;
long long N, M, module=998244353;
long long dp[3005][3005];
long long hashT[3005];
long long addFront[30][3005];
long long pow97[3005];
long long dp2[3005][3005];
long long __init__(){
  return 0;
}

long long sameCharCount(string str){
  long long hashStr[3005];
  int hashOfTPath;
  hashStr[0] = 0;
  while( str.length()>M ) str.pop_back();
  for(long long i=1; i<=str.length(); i++){
    hashStr[i] = (hashStr[i-1]*97+str[i-1])%module;
  }
  cout<<T<<' ';
  for(long long i=str.length(); i>=1; i--){
    hashOfTPath = (hashT[M]-hashT[M-i]*pow97[i]%module+module)%module;
    if( hashStr[i]==hashOfTPath ) {
      cout<<str<<' '<<i<<endl;
      return i;
    }
  }
  cout<<str<<' '<<0<<endl;
  return 0;
}

void calAddFont(){
  string createdStr="";
  for(long long j=0; j<=M;j++){
    if(j!=0){
      createdStr = T[M-j]+createdStr;
    }
    for(char chr='a'; chr<='z'; chr++){
      long long i = chr-'a';
      addFront[i][j] = sameCharCount(chr+createdStr);
    }
  }
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  cin>>S>>T;
  N = S.length();
  M = T.length();
  //Calculate dp2
  for(int i=1; i<=M;i++){
    if( T[i-1]==S[0] ) dp2[i][i]=1;
  }
  for(int i=1; i<N;i++){
    
  }


  // HASH T
  hashT[0] = 0;
  pow97[0]=1;
  for(long long i=1; i<=M; i++){
    pow97[i] = pow97[i-1]*97%module;
    hashT[i] = (hashT[i-1]*97+T[i-1])%module;
  }
  calAddFont();
  dp[0][0] = 1; // dp[x][y] mean come to pos x, currently y first characters is the same as T's last y characters
  for(long long i=0; i<N; i++){
    for(long long j=0; j<=M; j++){
      if( j>i ) break;
      cout<<i<<' '<<j<<' '<<addFront[ S[i]-'a' ][j]<<' '<<addBack[ S[i]-'a' ][j]<<endl;
      dp[ i+1 ][ addFront[ S[i]-'a' ][j] ] += dp[i][j];
      dp[i+1][j] += dp[i][j];
    }
    cout<<endl;
  }
  long long res = 0;
  for(int i=M; i<=N; i++){
    res += dp[i][M];
  }
  cout<<res;
}
