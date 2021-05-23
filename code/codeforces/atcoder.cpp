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
int N, Q, U, D;
int parentOf[2 * e5][20];
int posInFlatTree[2*e5];
int levelOf[2*e5];
vector<int> flatTree;
vector<int> childs[2*e5];

int __init__() {
  	return 0;
}

int getParentAtLevel(int currNode, int currLv){
    if( currLv ==0 ) return currNode;
    int currGoDown = 1, lv = 0;
    while(currGoDown * 2 <= currLv){
        ++lv;
        currGoDown *= 2;
    }
    return getParentAtLevel( parentOf[currNode][lv], currLv -= currGoDown );
}

int firstPos(int targetNode, int level){
    int ll=0, rr=N-1, mm;
    while(rr > ll + 3){
        mm = (rr+ll) / 2;
        int nodeAt = flatTree[mm];
        int parentMM = getParentAtLevel( nodeAt, level );
        if( posInFlatTree[parentMM] <= posInFlatTree[targetNode] ){ // right side
            rr = mm;
        } else { // lef side
            ll = mm;
        }
    }
    for(int i=ll; i<=rr; i++) if( getParentAtLevel( flatTree[i], level ) == targetNode ) return i;
    return 10000000;
}

int lastPos(int targetNode, int level){
    int ll=0, rr=N-1, mm;
    while(rr > ll + 3){
        mm = (rr+ll) / 2;
        int nodeAt = flatTree[mm];
        int parentMM = getParentAtLevel( nodeAt, level );
        if( posInFlatTree[parentMM] < posInFlatTree[targetNode] ){ // right side
            rr = mm;
        } else { // lef side
            ll = mm;
        }
    }
    for(int i=rr; i>=ll; i--) if( getParentAtLevel( flatTree[i], level ) == targetNode ) return i;
    return -100000;
}


int main() {
    ios_base::sync_with_stdio(false); cin.tie(0);__init__();
    freopen("test.txt", "r", stdin);
    // INPUT
	cin>>N;
    parentOf[1][0] = 0;
    for(int i=2; i<=N; i++) {
        cin>>parentOf[i][0];
        childs[ parentOf[i][0] ].push_back(i);
    }
    
    // ALC TREE
    for(int lv=1; lv<20; lv++){
        for(int node=1; node<=N; node++){
            parentOf[node][lv] = parentOf[ parentOf[node][lv-1] ][lv-1];
        }
    }
    // for(int lv=0; lv<5; lv++){
    //     for(int node=1; node<=N; node++){
    //         cout<<parentOf[node][lv]<<' ';
    //     }
    //     cout<<endl;
    // }
    // for(int i=1; i<=7; i++) cout<< getParentAtLevel(8, i);
    
    // FLATTEN THE TREE + ASSIGN LEVEL
    flatTree.push_back(1);
    levelOf[1] = 0; levelOf[0] = 0;
    for(int i=0; i<N; i++){
        int currNode = flatTree[i];
        int nodeLevel = levelOf[ currNode ];
        for(int j=0; j< childs[ currNode ].size(); j++){
            flatTree.push_back( childs[currNode][j] );
            levelOf[ childs[currNode][j] ] = nodeLevel + 1;
        }
    }
    // for(int i=0; i<N; i++) cout<<flatTree[i]<<' ';cout<<endl;
    for(int i=0; i<N; i++) posInFlatTree[ flatTree[i] ] = i;
    
    // ANSWER
    cin>>Q;
    while(Q--){
        cin>>U>>D;
        D -= levelOf[U
        //cout<<U<<' '<<D<<'\n';
        if(D < 0){
            cout<<0<<'\n';
        } else if (D == 0){
            cout<<1<<'\n';
        } else {
            int res = lastPos(U, D) - firstPos(U, D) + 1;
            if(res > 0) cout<<res<<'\n';
            else cout<<"0\n";
        }
    }

}
