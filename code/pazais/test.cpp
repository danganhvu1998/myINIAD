    //https://codeforces.com/problemset/problem/1080/D
    #include <bits/stdc++.h>
    using namespace std;
     
    #define II pair<long long,long long>
    #define X first
    #define Y second
    #define PB push_back 
    long long const oo = 1000000007, N = 1000007, M = 100007;
     
    long long maximumSplit[100]; // maximumSplit[i] how many time need to split 2^ix2^i square to all 1x1 squares
    long long powerTwo[100];
     
    long long mainCalcutation(long long n, long long k){
        if(n>100) return 1;
        long long currentMaxSplitedTime = 1+maximumSplit[n-1];
        long long currentMinSplitedTime = 1;
        if(currentMaxSplitedTime>=k) return 1;
        for(long long i=2;i<=n;i++){
            currentMinSplitedTime += powerTwo[i]-1;
            currentMaxSplitedTime += powerTwo[i]-1+maximumSplit[n-i]*(powerTwo[i+1]-3);
            if(currentMaxSplitedTime>=k and k>= currentMinSplitedTime) return i;
        }
        return -1;
    }
     
    long long maximumSplitPreRun(){
        maximumSplit[1] = 1;
        long long limit = oo*oo;
        for(long long i=2; i<100; i++){
            if(maximumSplit[i-1]>=limit){
                maximumSplit[i]=limit;
            } else {
                maximumSplit[i]=maximumSplit[i-1]*4+1;
            }
        }
    }
     
    long long powerTwoPreRun(){
        powerTwo[0] = 1;
        long long limit = oo*oo;
        for(long long i=1; i<100; i++){
            if(powerTwo[i-1]>=limit){
                powerTwo[i]=limit;
            } else {
                powerTwo[i]=powerTwo[i-1]*2;
            }
            //cout<<i<<' '<<powerTwo[i];
        }
    }
     
    int main(){
        //freopen("test.txt","r",stdin);
        maximumSplitPreRun();
        powerTwoPreRun();
        long long N, n,k;
        cin>>N;
        for(long long i=0; i<N; i++){
            cin>>n>>k;
            long long ans = mainCalcutation(n, k);
            //cout<<"--->   "<<ans<<" "<<n<<" "<<k<<endl;
            if(ans<0){
                cout<<"NO\n";
            } else {
                cout<<"YES "<<n-ans<<"\n";
            }
        }
    }