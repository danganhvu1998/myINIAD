#include <bits/stdc++.h>
using namespace std;
 
#define II pair<int, int>
#define child_notes_sum first
#define lazy_update second
#define PB push_back 
long long const oo = 1000000007, e5 = 100007;

struct IT_TREE{
  int size;
  II* tree_value;

  void init(int tree_size){
    size = tree_size;
    tree_value = (II*)malloc(sizeof(II) * size * 3);
    
  }

  void lazy_update_child_notes(int curr_note,  int control_pos_from, int control_pos_to){
    tree_value[curr_note].child_notes_sum += tree_value[curr_note].lazy_update*(control_pos_to-control_pos_from+1);
    if(control_pos_to>control_pos_from){
      tree_value[curr_note*2].lazy_update += tree_value[curr_note].lazy_update;
      tree_value[curr_note*2+1].lazy_update += tree_value[curr_note].lazy_update;
    }
    //if(curr_note<20) cout<<"-->>> LAZY "<<curr_note<<" "<<tree_value[curr_note].lazy_update<<" "<<control_pos_from<<" "<<control_pos_to<<" "<<tree_value[17].child_notes_sum<<" "<<tree_value[17].lazy_update<<"\n";
    tree_value[curr_note].lazy_update = 0;
  }

  void _add(int curr_note, int control_pos_from, int control_pos_to, int value, int pos_from, int pos_to){
    //cout<<"ADD "<<curr_note<<" "<<control_pos_from<<" "<<control_pos_to<<"\n";
    lazy_update_child_notes(curr_note, control_pos_from, control_pos_to);
    if(control_pos_to<control_pos_from){
      return;
    }
    //-------------------------------------\\_
    if(control_pos_to<pos_from) {
      return;
    } else if(control_pos_from>pos_to){
      return;
    } else if( pos_from<=control_pos_from & control_pos_to<=pos_to) {
      tree_value[curr_note].lazy_update += value;
    } else {
      if(pos_to>=control_pos_to & control_pos_to>=pos_from){
        tree_value[curr_note].child_notes_sum += value*(control_pos_to-pos_from+1);
      } else {
        tree_value[curr_note].child_notes_sum += value*(pos_to-control_pos_from+1);
      }
      _add(curr_note*2, control_pos_from, (control_pos_to+control_pos_from)/2, value, pos_from, pos_to);
      _add(curr_note*2+1, (control_pos_to+control_pos_from)/2+1, control_pos_to, value, pos_from, pos_to);
    }
  }

  void add(int value, int pos_from, int pos_to){
    _add(1, 0, size-1, value, pos_from, pos_to);
  }

  int _sum(int curr_note, int control_pos_from, int control_pos_to, int pos_from, int pos_to){
    lazy_update_child_notes(curr_note, control_pos_from, control_pos_to);
    if(control_pos_to<control_pos_from){
      return 0;
    } else if(control_pos_to<pos_from) {
      return 0;
    } else if(control_pos_from>pos_to){
      return 0;
    } else if( pos_from<=control_pos_from & control_pos_to<=pos_to) {
      //cout<<"SUM "<<curr_note<<" "<<control_pos_from<<" "<<control_pos_to<<" >> "<<tree_value[curr_note].child_notes_sum<<"\n";
      return tree_value[curr_note].child_notes_sum;
    } else {
      int A = _sum(curr_note*2, control_pos_from, (control_pos_to+control_pos_from)/2, pos_from, pos_to);
      int B = _sum(curr_note*2+1, (control_pos_to+control_pos_from)/2+1, control_pos_to, pos_from, pos_to);
      //cout<<"SUM "<<curr_note<<" "<<control_pos_from<<" "<<control_pos_to<<" >> "<<A+B<<"\n";
      return A+B;
    }
  }

  int sum(int pos_from, int pos_to){
    return _sum(1, 0, size-1, pos_from, pos_to);
  }
} typedef it_tree;

int main(){
  freopen("test.txt","r",stdin);
  it_tree tree_test;
  int size, num_of_request;
  int type, pos_from, pos_to, value;
  cin>>size>>num_of_request;
  tree_test.init(size);
  for(int i=0;i<num_of_request;i++){
    cin>>type;
    if(type == 0){//UPDATE
      cin>>pos_from>>pos_to>>value;
      tree_test.add(value, pos_from, pos_to);
    } else {//SUM
      cin>>pos_from>>pos_to;
      cout<<pos_from<<" "<<pos_to<<" "<<tree_test.sum(pos_from, pos_to)<<"\n";
    }
  }
}

