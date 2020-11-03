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

string ltrim(const string &);
string rtrim(const string &);

bool possible = true;
vector<int> edges[50];
int val[50];

/*
 * Complete the 'divideProps' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER N
 *  2. STRING_ARRAY conflictions
 */

void dfs(int node, int value){
  cout<<node<<' '<<val[node]<<' '<<value<<endl;
  if( val[node]!=0 ){
    if( val[node] != value ) possible = false;
    return;
  } else {
    val[node] = value;
    for(int i=0; i<edges[node].size(); i++){
      dfs( edges[node][i], -value );
    }
  }
}

int divideProps(int N, vector<string> conflictions) {
  int res = 0;
  for(int i=0; i<N; i++){
    cout<<'CON '<<conflictions[i]<<endl;
    int curr=0;
    for(int j=0; j<conflictions[i].length(); j++){
      if( conflictions[i][j]==' ' ) edges[i].push_back(j);
      else {
        curr = 10 * curr + conflictions[i][j]-'0';
      }
      edges[i].push_back(j);
    }
  }
  for(int i=0; i<N; i++){
    cout<<"=> "<<i<<' ';
    for(int j=0; j<edges[i].size(); j++){
      cout<<edges[i][j]<<' ';
    }
    cout<<endl;
  }
  for(int i=0; i<N; i++){
    if (val[i]==0) {
      res*=2;
      dfs(i, 1);
    }
  }
  if( possible ) return res;
  return -1;
}

int main()
{ 
    freopen("test.txt","r",stdin);
    int N;
    cin>>N;
    string str;
    getline(cin, str);
    vector<string> conflictions(N);
    for (int i = 0; i < N; i++) {
        string tempStr;
        getline(cin, tempStr);
        cout<<'WTF '<<tempStr<<endl;
        conflictions[i] = tempStr;
    }
    int ans = divideProps(N, conflictions);
    cout<<ans;

    return 0;
}
