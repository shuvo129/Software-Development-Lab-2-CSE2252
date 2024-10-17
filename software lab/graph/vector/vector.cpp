#include<iostream>
#include<vector>
using namespace std;


int main()
{
    vector<int> v;
    v.push_back(1);
    v.push_back(2);
    v.push_back(3);

    for(int i=0;i<v.size();i++)
    {
        cout<<v[i]<<endl;
    } // 1 2 3

    /*
    Iterators are used to point at the memory addresses of STL
    containers. They are primarily used in sequence of numbers,
    characters etc

    Operations of iterators :-

    1. begin() :- This function is used to return the beginning
    position of the container.
    2. end() :- This function is used to return the after end position
     of the container.
    */
    cout<<"iterator"<<endl;
    vector<int>::iterator it;
    for(it=v.begin(); it!=v.end();it++){
        cout<<*it<<endl;
    } // 1 2 3


    cout<<"auto"<<endl;
    for(auto element:v){
        cout<<element<<endl;
    }// 1 2 3

    cout<<"pop_back()"<<endl;
    v.pop_back(); // 1 2

    /*for(auto element:v){
        cout<<element<<endl;
    }*/




}

