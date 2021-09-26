#include <bits/stdc++.h>
using namespace std;
 
#define II pair<int, int>
#define PB push_back 

int const oo = 1000000007, e5 = 100007, e6 = 1000007;
int N;
int num[105];
int ans=0;
pair<int,int> ansPair[200];

int check(){
  for(int i=1;i<=N;i++){
    if( num[i]!=i ) return 0;
  }
  return 1;
}

int checkOrdered(int start, int end){
  for(int i=start;i<end;i++){
    if( (num[i+1]-num[i])*(num[end]-num[start])<0 ) return 0;
  }
  return 1;
}

void swapBetween(int ll, int rr){
  //cout<<ll<<" "<<rr<<endl;
  for(int i=ll; i<rr; i++){
    if( (num[i]-num[i+1])*(num[ll]-num[rr])<0 ){
      //cout<<"ERROR\n";
      return;
    }
  }
  if(ll==rr) return;
  if(rr>N) return;
  ++ans;
  ansPair[ans] = pair<int, int>(ll, rr);
  int mm=(rr-ll)/2;
  for(int i=0; i<=mm; i++){
    swap( num[ll+i], num[rr-i] );
  }
}

int sortedTo(int start=1, int minimum=0, int maximum=oo){
  for(int i=start; i<N; i++){
    if( (num[i+1] - num[i])*(num[start+1]-num[start])<0 ) return i;
    if(num[i+1]<minimum) return i;
    if(num[i+1]>maximum) return i;
  }
  return N;
}

int cutPoint(int nextAddNum){
  int bigger, smaller;
  for(int i=1; i<=N; i++){
    if(num[i+1]==nextAddNum) return 0;
    bigger = max(num[i], num[i+1]);
    smaller = min(num[i], num[i+1]);
    if(bigger>nextAddNum & nextAddNum>smaller){
      return i+1;
    }
  }
}

void printArray(){
  for(int i=1; i<=20; i++){
    cout<<num[i]<<" ";
  }
  cout<<" ---- "<<ans<<endl;
}

void connect(int cutPos, int posFrom, int posTo){
  // cout<<"--> "<<cutPos<<" "<<posFrom<<" "<<posTo<<endl;
  // printArray();
  if(num[posTo] > num[cutPos]){
    if( num[posTo] < num[posFrom] ) swapBetween(posFrom, posTo);
    if( num[posFrom-1] < num[cutPos] ) swapBetween(cutPos, posFrom-1);
  } else {
    if( num[posTo] > num[posFrom] ) swapBetween(posFrom, posTo);
    if( num[posFrom-1] > num[cutPos] ) swapBetween(cutPos, posFrom-1);
  }
}


int checkNextValueIsTop(int toPos, int nextValue){
  if( nextValue > num[1] and nextValue>num[toPos]) return 1;
  if( nextValue < num[1] and nextValue<num[toPos]) return 1;
  return 0;
}

void tryNextStep(){
  int sortedToPos = sortedTo();
  int sortedToValue = num[sortedToPos];
  int nextAddPos = sortedToPos+1;
  int nextAddValue = num[ nextAddPos ];
  int cutPos = cutPoint( nextAddValue );
  if( checkNextValueIsTop(sortedToPos, nextAddValue) ){
    swapBetween(1, sortedToPos);
    return;
  }
  II addRangeValue = II( min(num[cutPos-1], num[cutPos])+1, max(num[cutPos-1], num[cutPos])-1 );
  II addRangePos = II(nextAddPos, sortedTo(nextAddPos, addRangeValue.first, addRangeValue.second));
  // cout<<cutPos<<" "<<addRangePos.first<<" "<<addRangePos.second<<" "<<addRangeValue.first<<" "<<addRangeValue.second<<endl;
  connect(cutPos, addRangePos.first, addRangePos.second);
  connect(1, cutPos, addRangePos.second);
}


int main(){
  ios_base::sync_with_stdio(false);
  // freopen("test.txt","r",stdin);
  cin>>N;
  for(int i=1; i<=N;i++){
    cin>>num[i];
  }
  // for(int i=1; i<=100; i++){
  //   if(i%2==1) num[i] = i/2+1;
  //   else num[i]=101 - i/2;
  // }
  // printArray();
  // while(ans<5){
  //   for(int i=10; i>0; i--){
  //     for(int j=10; j<=90; j++){
  //       if(ans>=5) break;
  //       swapBetween(j, i+j);
  //       if(ans>=5) break;
  //     }
  //   }
  // }
  while( !check() ){
    tryNextStep();
    // printArray();
  }
  cout<<ans<<"\n";
  for(int i=1; i<=ans; i++){
    cout<<ansPair[i].first<<" "<<ansPair[i].second;
    if(i<ans) cout<<"\n";
  }
}