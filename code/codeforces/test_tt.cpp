#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);



/*
 * Complete the 'running_median' function below.
 *
 * The function is expected to return a DOUBLE_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

int valuesCount[105];
double lastResult = 0;

int lastVal = 0, lastFrom = 0, lastTo = 0;
 
double valueAtPos(int pos){
    while(1){
        if( pos >= lastFrom && pos <= lastTo) return (double) lastVal;
        else if( pos < lastFrom ){
            --lastVal;
            while(valuesCount[lastVal]==0) --lastVal;
            lastTo = lastFrom - 1;
            lastFrom = lastTo - valuesCount[lastVal] + 1;
        } else {
            ++lastVal;
            while(valuesCount[lastVal]==0) ++lastVal;
            lastFrom = lastTo + 1;
            lastTo = lastFrom + valuesCount[lastVal] - 1;
        }
    }
    return 0;
}

vector<double> running_median(vector<int> arr) {
    vector<double> result;
    int N = arr.size(), value;
    for(int pos=0; pos< N; pos++){
        value = arr[pos];
        ++valuesCount[ value ];
        if( value < lastVal ) {
            ++lastFrom;
            ++lastTo;
        } else if(value == lastVal){
            ++lastTo;
        }
        if( pos % 2 == 0){
            result.push_back( valueAtPos(pos/2+1) );
        } else {
            result.push_back( (valueAtPos(pos/2+1) + valueAtPos(pos/2+2)) / 2 );
        }
        cout<<result[ result.size()-1 ]<<"\n";
    }
    return result;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));
    freopen("test.txt","r",stdin);
    string arr_count_temp;
    getline(cin, arr_count_temp);

    int arr_count = stoi(ltrim(rtrim(arr_count_temp)));

    vector<int> arr(arr_count);

    for (int i = 0; i < arr_count; i++) {
        string arr_item_temp;
        getline(cin, arr_item_temp);

        int arr_item = stoi(ltrim(rtrim(arr_item_temp)));

        arr[i] = arr_item;
    }

    vector<double> result = running_median(arr);

    for (size_t i = 0; i < result.size(); i++) {
        fout << result[i];

        if (i != result.size() - 1) {
            fout << "\n";
        }
    }

    fout << "\n";

    fout.close();

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}
