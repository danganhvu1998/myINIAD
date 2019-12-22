#include <bits/stdc++.h>
using namespace std;
 
#define II pair<long long, long long>
#define child_notes_sum first
#define lazy_update second
#define PB push_back 

long long const oo = 1000000007, e5 = 100007, e6 = 1000007;

struct BIT_TREE{
  long long size;
  long long* tree_value;

  void init(long long tree_size){
    size = tree_size;
    tree_value = (long long*)malloc(sizeof(long long) * (size+5) );
    for(long long i=0; i<=size; i++) tree_value[i]=0;
  }

  void update(long long pos, long long value){
    for (long long i=pos; i<=size; i+=i&-i)
      tree_value[i]+=value;
  }

  long long get(long long pos){
    long long result=0;
    for (long long i=pos; i>=1; i-=i&-i)
      result += tree_value[i];
    return result;
  }

  long long get(long long posFrom, long long posTo){
    return get(posTo) - get(posFrom-1);
  }
} typedef bit_tree;

long long N;
long long num[2*e5], pos[2*e5];
long long sortCost[2*e5];
bit_tree treePos, treeValue;

long long findMiddlePos(){
  long long expected = treePos.get(N);
  expected = expected/2 + expected%2;
  long long ll=1, rr=N, mm;
  while(ll<rr){
    mm=(ll+rr)/2;
    long long getMM = treePos.get(mm);
    if(getMM<expected) ll=mm+1;
    else rr=mm;
  }
  return ll;
}

void calculateSortCost(){
  long long middlePos, leftSum, rightSum, leftCount, rightCount, moveToMiddleCost;
  treePos.init(N);
  treeValue.init(N);
  for(long long i=1; i<=N; i++){
    treePos.update( pos[i], 1 );
    sortCost[i] = sortCost[i-1] + treePos.get(pos[i]+1, N);
    // cout<<i<<" "<<sortCost[i]<<" "<<findMiddlePos()<<" "<<treePos.get(findMiddlePos())<<" ";
    middlePos = findMiddlePos();
    treeValue.update( pos[i], pos[i] );
    leftSum = treeValue.get(middlePos);
    leftCount = treePos.get(middlePos);
    rightSum = treeValue.get(middlePos+1, N);
    rightCount = treePos.get(middlePos+1, N);
    moveToMiddleCost = abs(middlePos*leftCount-leftSum-leftCount*(leftCount-1)/2);
    moveToMiddleCost += abs(rightSum-middlePos*rightCount-rightCount*(rightCount+1)/2);
    // cout<<moveToMiddleCost<<" "<<sortCost[i]+moveToMiddleCost<<"\n";
    cout<<sortCost[i]+moveToMiddleCost<<" ";
  } 
}

int main(){
  ios_base::sync_with_stdio(false);
  freopen("test.txt","r",stdin);
  long long a;
  cin>>N;
  
  for(long long i=1; i<=N; i++){
    cin>>a;
    num[i] = a;
    pos[a] = i;
  }
  calculateSortCost();
  

}