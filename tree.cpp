#include <iostream>
#include <queue>
using namespace std;
class node
{

public:
    int data;
    node *left;
    node *right;

    node(int d)
    {
        this->data = d;
        this->left = NULL;
        this->right = NULL;
    }
};
void lot(node *root)
{
    queue<node *> q;
    q.push(root);

    while (!q.empty())
    {
        node *temp = q.front();
        q.pop();
        cout << temp->data << " ";
        if (temp->left)
        {
            q.push(temp->left);
        }
        if (temp->right)
        {
            q.push(temp->right);
        }
    }
}
node *buildtree(node *root)
{
    cout << "enter tha data" << endl;
    int data;
    cin >> data;

    root = new node(data);
    if (data == -1)
    {
        return NULL;
    }

    cout << "enter the left part" << endl;
    root->left = buildtree(root->left);
    cout << "enter the right part" << endl;
    root->right = buildtree(root->right);
}
int main()
{

    node *root = NULL;
    root = buildtree(root);
    lot(root);

    return 0;
}