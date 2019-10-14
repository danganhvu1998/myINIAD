/* dlinked_list.h */

typedef struct list_node {
    int value;
    struct list_node* next;
    struct list_node* previous;
} list_node;

typedef struct dlinked_list {
    list_node* top;
    list_node* tail;
} dlinked_list;

typedef dlinked_list* LIST;
typedef list_node* POSITION;

LIST list_construct();
void list_free(LIST lst);
void list_print(LIST lst);

void list_insert(LIST lst, POSITION pos, int value);
void list_delete(LIST lst, POSITION pos);
int list_retrieve(LIST lst, POSITION pos);
POSITION list_first(LIST lst);
POSITION list_last(LIST lst);
POSITION list_next(LIST lst, POSITION pos);
POSITION list_previous(LIST lst, POSITION pos);

POSITION list_get(LIST lst, int n);
POSITION list_index(LIST lst, int value);