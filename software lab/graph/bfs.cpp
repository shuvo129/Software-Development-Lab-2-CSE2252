#include<bits/stdc++.h>
using namespace std;

#define MX 110

vector<int> graph[MX];
int dist[MX];
bool vis[MX];

//bfs
void bfs(int source){// source =1
    queue <int> Q; //stl queue
    //source initialization
    vis[source] = 1;
    dist[source] = 0;
    Q.push(source);

    while(!Q.empty()){
        int node = Q.front(); // get the source node =1
        Q.pop();

        for(int i=0; i<graph[node].size();i++){
            int next= graph[node][i]; // 1 1 -> 3
            if(vis[next]==0){ // if not visited
                vis[next] = 1; // make visited by placing 1
                dist[next] = dist[node]+1; // update the distance value
                Q.push(next); // push to queue
            }
        }
    }
}

int main()
{
    int nodes,edges;
    cout<<"Enter the number of nodes and edges: "<<endl;
    cin>>nodes>>edges;

    for(int i=1;i<=edges;i++){
        int u,v;
        cin>>u>>v;
        graph[u].push_back(v);
        graph[v].push_back(u);
    }
    int source;
    cin>>source;
    bfs(source);
    cout<<"From node"<<source<<endl;
    for(int i=1; i<= nodes; i++){
        cout<<"Distance of "<< i<<" is : "<<dist[i]<<endl;
    }

    return 0;
}
