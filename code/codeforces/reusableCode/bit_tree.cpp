#include <bits/stdc++.h>
using namespace std;
 
#define II pair<int, int>
#define child_notes_sum first
#define lazy_update second
#define PB push_back 

int const oo = 1000000007, e5 = 100007, e6 = 1000007;

struct BIT_TREE{
  int size;
  int* tree_value;

  void init(int tree_size){
    size = tree_size;
    tree_value = (int*)malloc(sizeof(int) * (size+5) );
    for(int i=0; i<=size; i++) tree_value[i]=0;
  }

  void update(int pos, int value){
    for (int i=pos; i<=size; i+=i&-i)
      tree_value[i]+=value;
  }

  int get(int pos){
    int result=0;
    for (int i=pos; i>=1; i-=i&-i)
      result += tree_value[i];
    return result;
  }

  int get(int posFrom, int posTo){
    return get(posTo) - get(posFrom-1);
  }
} typedef bit_tree;

int main(){
  ios_base::sync_with_stdio(false);
  freopen("test.txt","r",stdin);
  int N, M;
  int type, value, pos;
  bit_tree testTree;
  cin>>N>>M;
  testTree.init(N);
  while(M--){
    cin>>type;
    if(type == 1){
      cin>>pos>>value;
      testTree.update(pos, value);
    } else {
      cin>>pos;
      cout<<pos<<" "<<testTree.get(pos)<<endl;
    }
  }
}