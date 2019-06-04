#include<stdio.h>
#include<stdlib.h>

struct student{
        int id;
        char *name;
        struct student *next;
};

int main(void){
        struct student *list, *head, *final;

        list = malloc(sizeof(struct student));
        list->id = 3;
        list->name = "Jyouho";
        list->next = NULL;
        head = list;
        final = list;
				
        list = malloc(sizeof(struct student));
        list->id = 1;
        list->name = "Toyo";
        list->next = final;
        head = list;
        /*
          Problem 1-1:
        */
        
				
        /*
          Problem 1-3:
        */
		list = malloc(sizeof(struct student));
        list->id = 4;
        list->name = "Renke";
        list->next = NULL;
        final->next = list;
        final = list;

        /*
          Extra problem 1-4:
        */
		list = malloc(sizeof(struct student));
        list->id = 2;
        list->name = "INIAD";
        list->next = head->next;
        head->next = list;
        /*
          Extra Problem 1-5:
        */
        list = head->next;
        list->next = list->next->next;


		for (struct student *run=head; run!=NULL; run=run->next){
            printf("id: %d, name: %s\n", run->id, run->name);
        }		
        /*
          Problem 1-2:
        */
}
