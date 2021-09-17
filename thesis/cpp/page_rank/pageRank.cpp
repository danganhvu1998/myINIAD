// https://codeforces.com/contest/1336/problem/C
#include <bits/stdc++.h>
using namespace std;

#define II pair<long long, long long>
#define III pair<II, long long>
#define X first.first
#define Y first.second
#define Z second
#define all(a) (a).begin(), (a).end()
#define for0(i, n) for (long long i = 0; i < n; i++)
#define for1(i, n) for (long long i = 1; i <= n; i++)

long long const MAX_ROUND = 1000;
double const ACCEPT_ERROR = 0.000001;
long long const oo = 1000000007, e5 = 100007, e6 = 1000007;
long long const MAXIMUM_NODE_SUPPORT = e6; // Accept maximum e6 nodes

vector<long long> edgesTo[MAXIMUM_NODE_SUPPORT]; // edgesTo[i] contain list of nodes that can go to i
double nodeWeight[2][MAXIMUM_NODE_SUPPORT];
long long toNodesCount[MAXIMUM_NODE_SUPPORT];
long long N, M;
long long lastRound = 0;

void calculation(long long round) {
    int lastRound = round % 2;
    int currRound = 1 - lastRound;
    for0(i, N) {
        double weight = 0;
        for0(j, edgesTo[i].size()) {
            const int fromNode = edgesTo[i][j];
            weight += nodeWeight[lastRound][fromNode] / toNodesCount[fromNode];
        }
        nodeWeight[currRound][i] = weight;
    }
}

bool isAcceptErrorSastisfied() {
    for0(i, N) {
        double error = abs(nodeWeight[0][i] - nodeWeight[1][i]);
        if (error > ACCEPT_ERROR) {
            // cout<<error<<'\n';
            return false;
        }
    }
    return true;
}

int main() {
    ios_base::sync_with_stdio(false); cin.tie(0);
    freopen("graph_10e5.out", "r", stdin);
    freopen("result.out", "w", stdout);
    // INPUT GRAPH
    cin >> N >> M;
    for0(i, N) toNodesCount[i] = 0;
    for0(i, M) {
        long long a, b;
        cin >> a >> b; // From a we can go to b
        ++toNodesCount[a];
        edgesTo[b].push_back(a);
    }

    // INIT WEIGHT
    for0(i, N) nodeWeight[0][i] = 1;
    for0(i, MAX_ROUND) {
        calculation(i);
        cout << "DONE " << lastRound << '\n';
        lastRound = i;
        if (isAcceptErrorSastisfied()) break;
    }
    const int lastRoundWeightIndex = lastRound % 2 ? 1 : 0;
    for0(i, N) cout << nodeWeight[lastRoundWeightIndex][i] << ' ';
    cout << '\n' << lastRound << ' ' << lastRoundWeightIndex;
}
