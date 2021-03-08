#pragma GCC target("avx")
#pragma GCC optimize("O3")
#pragma GCC optimize("unroll-loops")
#include<bits/stdc++.h>
// #include<ext/pb_ds/assoc_container.hpp>
// #include<ext/pb_ds/tree_policy.hpp>
// #include<ext/pb_ds/tag_and_trait.hpp>
// using namespace __gnu_pbds;
// #include<boost/multiprecision/cpp_int.hpp>
// namespace multiprecisioninteger = boost::multiprecision;
// using cint=multiprecisioninteger::cpp_int;
using namespace std;
using ll = long long;
#define double long double
using datas = pair<ll, ll>;
using ddatas = pair<double, double>;
using tdata = pair<ll, datas>;
using vec = vector<ll>;
using mat = vector<vec>;
using pvec = vector<datas>;
using pmat = vector<pvec>;
// using llset=tree<ll,null_type,less<ll>,rb_tree_tag,tree_order_statistics_node_update>;
#define For(i,a,b) for(int i=a;i<(ll)b;++i)
#define bFor(i,b,a) for(int i=b;i>=(ll)a;--i)
#define rep(i,N) For(i,0,N)
#define rep1(i,N) For(i,1,N+1)
#define brep(i,N) bFor(i,N,0)
#define brep1(i,N) bFor(i,N,1)
#define all(v) (v).begin(),(v).end()
#define allr(v) (v).rbegin(),(v).rend()
#define vsort(v) sort(all(v))
#define vrsort(v) sort(allr(v))
#define uniq(v) vsort(v);(v).erase(unique(all(v)),(v).end())
#define endl "\n"
#define eb emplace_back
#define print(x) cout<<x<<endl
#define printyes print("Yes")
#define printno print("No")
#define printYES print("YES")
#define printNO print("NO")
#define output(v) do{bool f=0;for(auto outi:v){cout<<(f?" ":"")<<outi;f=1;}cout<<endl;}while(0)
#define matoutput(v) do{for(auto outimat:v)output(outimat);}while(0)
constexpr ll mod = 1000000007;
// constexpr ll mod=998244353;
constexpr ll inf = 1LL << 60;
constexpr double eps = 1e-9;
const double PI = acos(-1);
template<class T, class E> ostream& operator<<(ostream& os, const pair<T, E>& p) { return os << "(" << p.first << "," << p.second << ")"; }
template<class T> ostream& operator<<(ostream& os, const vector<T>& v) {
    os << "{";bool f = false;
    for (auto& x : v) { if (f)os << ",";os << x;f = true; }
    os << "}";
    return os;
}
template<class T> ostream& operator<<(ostream& os, const set<T>& v) {
    os << "{";bool f = false;
    for (auto& x : v) { if (f)os << ",";os << x;f = true; }
    os << "}";
    return os;
}
template<class T> inline bool chmax(T& a, T b) { bool x = a < b;if (x)a = b;return x; }
template<class T> inline bool chmin(T& a, T b) { bool x = a > b;if (x)a = b;return x; }
#define DEBUG 1
#ifdef DEBUG
void debugg() { cout << endl; }
template<class T, class... Args>void debugg(const T& x, const Args&... args) { cout << " " << x;debugg(args...); }
#define debug(...) cout<<__LINE__<<" ["<<#__VA_ARGS__<<"]:",debugg(__VA_ARGS__)
#else
#define debug(...) (void(0))
#endif

void startupcpp() {
    cin.tie(0);
    ios::sync_with_stdio(false);
    cout << fixed << setprecision(15);
}

double distance(ddatas x, ddatas y) {
    double a = x.first - y.first, b = x.second - y.second;
    return sqrt(a * a + b * b);
}

ll modinv(ll a, ll m = mod) {
    ll b = m, u = 1, v = 0, t;
    while (b) {
        t = a / b;
        a -= t * b; swap(a, b);
        u -= t * v; swap(u, v);
    }
    return (u + m) % m;
}

ll moddevide(ll a, ll b) { return (a * modinv(b)) % mod; }

vec modncrlistp, modncrlistm;

ll modncr(ll n, ll r) {
    if (n < r)return 0;
    ll i, size = modncrlistp.size();
    if (size <= n) {
        modncrlistp.resize(n + 1);
        modncrlistm.resize(n + 1);
        if (!size) {
            modncrlistp[0] = modncrlistm[0] = 1;
            size++;
        }
        For(i, size, n + 1) {
            modncrlistp[i] = modncrlistp[i - 1] * i % mod;
            modncrlistm[i] = modinv(modncrlistp[i]);
        }
    }
    return modncrlistp[n] * modncrlistm[r] % mod * modncrlistm[n - r] % mod;
}

ll modpow(ll a, ll n, ll m = mod) {
    ll res = 1;
    while (n > 0) {
        if (n & 1)res = res * a % m;
        a = a * a % m;
        n >>= 1;
    }
    return res;
}

ll gcd(ll a, ll b) { if (!b)return abs(a);return (a % b == 0) ? abs(b) : gcd(b, a % b); }
ll lcm(ll a, ll b) { return a / gcd(a, b) * b; }

ll countdigits(ll n, ll k = 10) {
    ll ans = 0;
    while (n) { n /= k;ans++; }
    return ans;
}

ll sumdigits(ll n, ll k = 10) {
    ll ans = 0;
    while (n) { ans += n % k;n /= k; }
    return ans;
}

ll N, M, K, H, W, A, B, C, D;
string s, t;
ll ans;
ll num[100005], last[100005], nextPos[100005];
ll lastInTo[] = { 0,0,0 };
vector<ll> arr[3];

void pushTo(int where, int pos) {
    arr[where].push_back(num[pos]);
    lastInTo[where] = pos;
}

int main() {
    startupcpp();
    freopen("test.txt", "r", stdin);
    int a;
    ans = 0;
    cin >> N;
    arr[1].push_back(inf); arr[2].push_back(inf); nextPos[0] = inf;
    rep1(i, N) {
        cin >> num[i];
        debug(num[i]);
    }
    brep1(i, N) {
        int currNum = num[i];
        nextPos[i] = last[currNum];
        if (not nextPos[i]) nextPos[i] = inf;
        last[currNum] = i;
    }
    rep1(i, N) {
        a = num[i];
        debug("---->", i, a);
        debug(arr[1]);
        debug(arr[2]);
        debug(nextPos[lastInTo[1]], nextPos[lastInTo[2]], lastInTo[1], lastInTo[2], num[lastInTo[1]], num[lastInTo[2]]);
        cout << endl;
        if (a != arr[1][arr[1].size() - 1] and a != arr[2][arr[2].size() - 1]) {
            if (nextPos[lastInTo[1]] >= nextPos[lastInTo[2]]) {
                pushTo(2, i);
                ++ans;
                continue;
            }
            else {
                pushTo(1, i);
                ++ans;
                continue;
            }
        }
        else if (a != arr[1][arr[1].size() - 1]) {
            pushTo(1, i);
            ++ans;
            continue;
        }
        else if (a != arr[2][arr[2].size() - 1]) {
            pushTo(2, i);
            ++ans;
            continue;
        }
        else {
            continue;
        }
    }
    debug(arr[1]);
    debug(arr[2]);
    cout << ans;
}