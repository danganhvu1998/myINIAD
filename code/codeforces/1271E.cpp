// http://codeforces.com/contest/1271/problem/E
#include <bits/stdc++.h>
using namespace std;
 
#define II pair<long long, long long>
#define child_notes_sum first
#define lazy_update second
#define PB push_back 

long long const oo = 1000000007, e5 = 100007, e6 = 1000007;
long long A,B;

long long ff(long long start, long long end){
  long long result;
  long long AA = A-A%2;
  if(start > A) {
    result = 0;
  } else if(end > A){
    result = (AA - start + 2) - (A%2==0);
  } else {
    result = ( ff(start*2, end*2+2) +  end - start + 2 );
  }
  // cout<<"\n-- "<<start<<" "<<end<<" "<<result<<endl;
  return result;
}

long long f(long long a){
  if(a%2==0) return ff(a, a);
  else return ff(a*2, a*2)+1;
}

int main(){
  ios_base::sync_with_stdio(false);
  freopen("test.txt","r",stdin);
  long long ans0=0, ans1=0, ans;
  long long ll,rr,mm;
  cin>>A>>B;
  ll=2; rr=A-A%2;
  // cout<<ll<<" "<<rr<<" "<<f(4)<<endl;
  while(rr-ll>10){
    mm= (rr+ll) / 2;
    mm=mm-mm%2;
    if(f(mm)>=B) ll=mm;
    else rr=mm;
  }
  for(long long i=rr; i>=ll; i-=2){
    if( f(i)>=B ) {
      ans0 = i;
      break;
    }
  }
  // cout<<ll<<" "<<rr<<" "<<f(4)<<endl;
  ll=1; rr=A+A%2-1;
  while(rr-ll>10){
    mm= (rr+ll) / 2;
    mm=mm-mm%2+1;
    // cout<<ll<<" "<<rr<<" "<<mm<<" "<<f(mm)<<endl;
    if(f(mm)>=B) ll=mm;
    else rr=mm;
  }
  for(long long i=rr; i>=ll; i-=2){
    if( f(i)>=B ) {
      ans1 = i;
      break;
    }
  }
  //cout<<ans0<<" "<<ans1<<" "<<f(490559)<<endl;
  cout<<max(ans0, ans1);
}