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
int T, N, currAns;
int parent[e6], deep[e6];
stack <II> saveLast;

int __init__(){
  return 0;
}

II parentOf(int x){
  int length = 0;
  while( parent[x]!=0 ) {x = parent[x];++length;}
  return II(x, length);
}

void pushInStack(int a, int b){
  II AA = parentOf(a);
  II BB = parentOf(b);
  int A = AA.first, B = BB.first;
  if( A==B ){
    saveLast.push(II(0,0));
    return;
  }
  if(AA.second >= BB.second){
    swap(A,B);
  }
  parent[A] = B;
  saveLast.push(II(A,B));
  currAns--;
  return;
}

void popOutStack(){
  II last = saveLast.top();
  saveLast.pop();
  if( last.first + last.second ==0 ) return;
  parent[last.first] = 0;
  currAns++;
}

void print01(int val, int showNums = 20){
  char answer[showNums];
  for0(i, showNums){
    answer[ showNums-1-i ] = val%2+'0';
    val/=2;
  }
  cout<<answer;
}



int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  string query;
  int a,b;
  cin>>T>>N;
  currAns = N;
  while(T--){
    cin>>query;
    if( query[1] == 'U' ) {
      cin>>a>>b;
      pushInStack(a,b);
    } else {
      popOutStack();
    }
    cout<<currAns<<'\n';
  }
}
