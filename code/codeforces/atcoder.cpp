#include <bits/stdc++.h>

using namespace std;

string ltrim(const string&);
string rtrim(const string&);



#define for0(i, n) for (long long i = 0; i < n; i++)
#define for1(i, n) for (long long i = 1; i <= n; i++)
long long const maxLength = 100007, oo = 1000000007;
long long const base = 31;
long long powOfBase[maxLength];

long long hashArr[maxLength];
long long N;

void reset() {
    for0(i, maxLength) hashArr[i] = 0;
}

long long charToInt(char c) {
    return c - 'a' + 1;
}

void initHashArr(string str) {
    hashArr[0] = charToInt(str[0]);
    for (long long i = 1; i < N; i++) {
        hashArr[i] = (hashArr[i - 1] * base + charToInt(str[i])) % oo;
    }
    // for (long long i = 0; i < N; i++) {
    //     cout << hashArr[i] << " ";
    // }
    // cout << endl;
}

bool isSame(long long leftPos, long long rightPos) {
    // cout << "LR " << leftPos << " " << rightPos << " " << (oo + hashArr[rightPos] - hashArr[leftPos - 1] * powOfBase[rightPos - leftPos + 1] % oo) % oo << " " << hashArr[rightPos - leftPos] << endl;
    return (oo + hashArr[rightPos] - hashArr[leftPos - 1] * powOfBase[rightPos - leftPos + 1] % oo) % oo == hashArr[rightPos - leftPos];
}

int count(long long pos) {
    long long ll = pos, rr = N - 1, mm;
    while (rr > ll + 2) {
        mm = (ll + rr) / 2;
        if (isSame(pos, mm)) {
            ll = mm;
        }
        else {
            rr = mm;
        }
    }
    for (long long i = rr; i >= ll; i--) {
        if (isSame(pos, i)) return i - pos + 1;
    }
    return 0;
}

int solve(string str) {
    int res = 0;
    N = str.length();
    reset();
    initHashArr(str);
    res = N; // pos = 0
    for (long long i = 1; i < N; i++) {
        if (str[i] == str[0]) {
            res += count(i);
            // cout << i << " " << count(i) << endl;
        }
    }
    return res;
}

vector<int> commonPrefix(vector<string> inputs) {
    vector<int> res;
    powOfBase[0] = 1;
    for (int i = 1; i < maxLength; i++) powOfBase[i] = powOfBase[i - 1] * base % oo;
    for0(i, inputs.size()) {
        res.push_back(solve(inputs[i]));
    }
    return res;
}

int main()
{
    freopen("test.txt", "r", stdin);
    ofstream fout(getenv("OUTPUT_PATH"));

    string inputs_count_temp;
    getline(cin, inputs_count_temp);

    int inputs_count = stoi(ltrim(rtrim(inputs_count_temp)));

    vector<string> inputs(inputs_count);

    for (int i = 0; i < inputs_count; i++) {
        string inputs_item;
        getline(cin, inputs_item);

        inputs[i] = inputs_item;
    }

    vector<int> result = commonPrefix(inputs);

    for (int i = 0; i < result.size(); i++) {
        fout << result[i];

        if (i != result.size() - 1) {
            fout << "\n";
        }
    }

    fout << "\n";

    fout.close();

    return 0;
}

string ltrim(const string& str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string& str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}