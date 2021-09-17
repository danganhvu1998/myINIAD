    // https://codeforces.com/contest/1269/problem/D
    #include <bits/stdc++.h>
    using namespace std;
      
    #define II pair<long long, long long>
    #define child_notes_sum first
    #define lazy_update second
    #define PB push_back 
      
    long long const oo = 1000000007, e5 = 100007, e6 = 1000007;
      
    long long num[3*e5];
    long long status[3*e5]; // Status[I] = A mean that collum I, cell 
    long long N, ans = 0;
      
    int main(){
      ios_base::sync_with_stdio(false);
      freopen("test.txt","r",stdin);
      long long a;
      long long lastOne = -1;
      cin>>N;
      status[0] = 1;
      for(long long i=0; i<N; i++){
        num[N-i] = ((i*i)%e5*i)%e5;
      }
      for(long long i=0; i<N; i++){
        ans += (status[i] - status[i]%2)/2;
        if(status[i] > num[i]){
          status[i+1] = 1;
          continue;
        }
        if(status[i]==0){
          status[i] = 1;
        }
        ans += (num[i]-status[i]+1) / 2;
        if( (num[i] - status[i])%2==0 ) {
          status[i+1] = status[i]+1;
        } else {
          status[i+1] = status[i]-1;
        }
      }
      cout<<ans;
    }