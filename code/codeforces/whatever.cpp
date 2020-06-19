#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);
vector<string> split(const string &);

/*
 * Complete the 'optimalPush' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 *  3. INTEGER c
 *  4. INTEGER d
 *  5. INTEGER e
 *  6. INTEGER f
 *  7. INTEGER g
 *  8. INTEGER h
 *  9. INTEGER i
 */

void printStatus(vector<int> status){
   for(int i=0; i<status.size(); i++) {
      cout<<status[i]<<' ';
   }
   cout<<endl;
}

vector<int> intToAns(int intStatus){
   vector<int>  res; res.clear();
   for(int i=0; i<9; i++) {
      int timePush = intStatus%4;
      intStatus/=4;
      int valPush = i+1;
      for(int j=0; j<timePush; j++) res.push_back(valPush);
   }
   // cout<<intStatus<<' ';
   // printStatus(res);
   return res;
}


vector<int>  nextStatus(vector<int> status, int button){
   // cout<<"###########################\n"<<button<<endl;
   // printStatus( status );
   vector<int> changePos;
   if( button==1 ){
      status[0]++;
      status[1]++;
      status[3]++;
      status[4]++;
   } else if( button==2 ){
      status[0]++;
      status[1]++;
      status[2]++;
   } else if( button==3 ){
      status[1]++;
      status[2]++;
      status[4]++;
      status[5]++;
   } else if( button==4 ){
      status[0]++;
      status[3]++;
      status[6]++;
   } else if( button==5 ){
      status[1]++;
      status[3]++;
      status[4]++;
      status[5]++;
      status[7]++;
   } else if( button==6 ){
      status[2]++;
      status[5]++;
      status[8]++;
   } else if( button==7 ){
      status[3]++;
      status[4]++;
      status[6]++;
      status[7]++;
   } else if( button==8 ){
      status[6]++;
      status[7]++;
      status[8]++;
   } else if( button==9 ){
      status[4]++;
      status[5]++;
      status[7]++;
      status[8]++;
   }
   for(int i=0; i<9; i++){
      status[i] = status[i]%4;
   }
   // printStatus( status );
   return status;
}

bool checkAns(vector<int> status, int testAns){
   vector<int> vectorAnsTest = intToAns(testAns);
   // cout<<"SIZE"<<' '<<testAns<<' '<<vectorAnsTest.size()<<endl;
   for(int i=0; i<vectorAnsTest.size(); i++){
      status = nextStatus( status, vectorAnsTest[i] );
   }
   for(int i=0; i<9; i++) if( status[i]!=0 ) return false;
   return true;
}

vector<int> optimalPush(int a, int b, int c, int d, int e, int f, int g, int h, int i) {
   vector<int> status; status.clear();
   status.push_back(a);
   status.push_back(b);
   status.push_back(c);
   status.push_back(d);
   status.push_back(e);
   status.push_back(f);
   status.push_back(g);
   status.push_back(h);
   status.push_back(i);
   for(int i=0; i<9; i++) status[i]/=3;
   for(int i=0; i<=262144; i++){
   //for(int i=0; i<=100; i++){
      if( checkAns( status, i ) ){
         printStatus( intToAns(i) );
         return intToAns(i);
      }
   }
   return intToAns(0);
}

int main()
{  
    freopen("test.txt","r",stdin);
    ofstream fout(getenv("OUTPUT_PATH"));

    string first_multiple_input_temp;
    getline(cin, first_multiple_input_temp);

    vector<string> first_multiple_input = split(rtrim(first_multiple_input_temp));

    int a = stoi(first_multiple_input[0]);

    int b = stoi(first_multiple_input[1]);

    int c = stoi(first_multiple_input[2]);

    string second_multiple_input_temp;
    getline(cin, second_multiple_input_temp);

    vector<string> second_multiple_input = split(rtrim(second_multiple_input_temp));

    int d = stoi(second_multiple_input[0]);

    int e = stoi(second_multiple_input[1]);

    int f = stoi(second_multiple_input[2]);

    string third_multiple_input_temp;
    getline(cin, third_multiple_input_temp);

    vector<string> third_multiple_input = split(rtrim(third_multiple_input_temp));

    int g = stoi(third_multiple_input[0]);

    int h = stoi(third_multiple_input[1]);

    int i = stoi(third_multiple_input[2]);

    vector<int> answer = optimalPush(a, b, c, d, e, f, g, h, i);

    for (int i = 0; i < answer.size(); i++) {
        fout << answer[i];

        if (i != answer.size() - 1) {
            fout << " ";
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

vector<string> split(const string &str) {
    vector<string> tokens;

    string::size_type start = 0;
    string::size_type end = 0;

    while ((end = str.find(" ", start)) != string::npos) {
        tokens.push_back(str.substr(start, end - start));

        start = end + 1;
    }

    tokens.push_back(str.substr(start));

    return tokens;
}