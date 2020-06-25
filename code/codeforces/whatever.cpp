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
int N, M;
int foods[2*e5], friendStatus[2*e5], foodsNeed[2*e5];
bool friendsDone[2*e5], foodsDone[2*e5];
int DIE = 0;
II friends[2*e5];
vector<int> foodFriends [2*e5];
vector<int> res;
queue<int> oneFoodLeftFriends;
queue<int> foodSafe;

void outOfFood(int foodId){
  for0(i, foodFriends[foodId].size()){
    int dangerFriendId = foodFriends[foodId][i];
    if( friendsDone[ dangerFriendId ] == 1 ) continue;
    oneFoodLeftFriends.push( dangerFriendId );
  }
}

void eat( int foodId ){
  if( foods[ foodId ]==0 ) return;
  --foods[ foodId ];
  if( foods[ foodId ]==0 ){
    outOfFood( foodId );
  }
}

bool nextFriend(int friendId){
  if( friendsDone[friendId]==1 ) return 1;
  friendsDone[friendId]=1;
  res.push_back( friendId );
  II aFriend = friends[ friendId ];
  cout<<friendId<<' '<<foods[ aFriend.first ]<< ' '<<foods[ aFriend.second ]<<endl; 
  if( foods[ aFriend.first ] == 0 && foods[ aFriend.second ] == 0) return 0; // DIE
  eat( aFriend.first );
  eat( aFriend.second );
  return 1;
}

void isNextFriendOkay(int friendId){
  if( !nextFriend(friendId) ) DIE = 1;
  // cout<<friendId<<' '<<DIE<<endl;
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);
  // freopen("test.txt","r",stdin);
  cin>>N>>M;
  for1(i, N) cin>>foods[i];
  for1(i, M) {
    friendStatus[i]=2;
    cin>>friends[i].first>>friends[i].second;
    ++foodsNeed[ friends[i].first ];  
    ++foodsNeed[ friends[i].second ];  
    foodFriends[ friends[i].first ].push_back(i);
    foodFriends[ friends[i].second ].push_back(i);
  }
  for(int i=1; i<=N; i++){
    if( foodsNeed[i] <= foods[i] ){
      foodSafe.push(i);
      foodsDone[i] = 1;
    }
  }
  while( !foodSafe.empty() ){
    int nextFoodId = foodSafe.front(); foodSafe.pop();
    for0( i, foodFriends[ nextFoodId ].size() ){
      int saveFriendId = foodFriends[ nextFoodId ][i];
      if( friendsDone[saveFriendId] ) continue;
      friendsDone[saveFriendId] = 1;
      res.push_back( saveFriendId );
      II saveFriend = friends[ saveFriendId ];
      int anotherFoodId = saveFriend.first + saveFriend.second - nextFoodId;
      // cout<< nextFoodId<<' '<<saveFriendId<<' '<<anotherFoodId<<endl;
      --foodsNeed[ anotherFoodId ]; // dont eat another food
      // cout<<"CHANGE: "<<foodsNeed[ anotherFoodId ]<<' '<<foods[i]<<endl;
      if( foodsNeed[ anotherFoodId ] <= foods[anotherFoodId] && foodsDone[anotherFoodId]==0){
        foodsDone[anotherFoodId]=1;
        foodSafe.push( anotherFoodId );
      }
    }
  }

  if( res.size() ==M ){
    cout<<"ALIVE\n";
    for(int i=res.size()-1; i>=0; i--){
      cout<<res[i]<<' ';
    }
  } else {
    cout<<"DEAD\n";
  }
}
