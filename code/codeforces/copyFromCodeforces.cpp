#include<bits/stdc++.h>
using namespace std;
typedef long long lll;
lll t,n,p,k,d,f,i,j,m=1000000007,a[1000008];
lll bgm(lll x,lll y,lll z=1) {
    for(; y; y&1?z=z*x%m:0,x=x*x%m,y>>=1);
    return z;
}
int main() {
    freopen("test.txt","r",stdin);
  freopen("test2.out","w",stdout);
    for(scanf("%I64d",&t); t--; printf("%I64d\n",d*bgm(p,a[0])%m),i=f=d=0) {
        for(scanf("%I64d%I64d",&n,&p); i!=n; scanf("%I64d",a+i++));
        for(sort(a,a+n),a[n]=a[n-1]; i--; f?(d--?0:d+=m):(d?--d:d=1))
            if(d&&p!=1)
                for(j=a[i+1]-a[i]; j--;
                        (f|=i<(d*=p))?(d=d%m*bgm(p,j)%m,j=0):0);
    }
    exit(0);
}