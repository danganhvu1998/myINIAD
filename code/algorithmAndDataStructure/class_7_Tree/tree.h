/* tree.h */

typedef void* T;

typedef struct Node {
    T value;
    struct Node* leftmost_child;
    struct Node* right_sibling;
    struct Node* parent;
} Node;

Node* tree_construct(T value, Node** nodes, int length);
void tree_free(Node* tree);

int tree_depth(Node* node);
int tree_height(Node* node);

typedef void (*Visitfn)(T value);

void tree_preorder(Node* tree, Visitfn f);
void tree_inorder(Node* tree, Visitfn f);
void tree_postorder(Node* tree, Visitfn f);