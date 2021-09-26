/* array_list.h */

#define INITIAL_SIZE 10

typedef struct array_list {
    int* elements;
    int length;
    int max_length;
} array_list;

typedef array_list* LIST;
typedef int POSITION;

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