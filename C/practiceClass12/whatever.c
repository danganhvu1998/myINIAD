#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Man: 0, Woman: 1
// Student: 0, Company: 1, PartTime: 2, Others: 3
// No: 0, Yes: 1
enum gender {Man, Woman};
enum profession {Student, Company, PartTime, Others};
enum twoselect {No,Yes};

// structuer questionnaire
struct questionnaire {
    enum gender Gender;
    int Age;
    enum profession Profession;
    enum twoselect LiveInAkabane;
    enum twoselect OverTwenty;
};

struct questionnaire List[100];
int maxid = 0;

void addquestionnaire(){
    int tmp;
    int flag = 1;

    printf("What is your gender?(Man: 0, Woman: 1)\n");
    scanf("%d",&tmp);
    while(tmp < 0 || tmp > 1){
        printf("Please input again!");
        scanf("%d",&tmp);
    }
    
    List[maxid].Gender = tmp;

    printf("What is your age?\n");
    scanf("%d", &tmp);
    while(tmp < 0){
        printf("Please input again!");
        scanf("%d",&tmp);
    }
    List[maxid].Age = tmp;

    printf("What is your profession?(Student: 0, Company worker: 1, Part-time worker: 2, Others: 3)\n");
    scanf("%d", &tmp);
    while(tmp < 0 || tmp > 3){
        printf("Please input again!");
        scanf("%d",&tmp);
    }
    List[maxid].Profession = tmp;

    printf("Do you live in Akabane?(No: 0, Yes: 1)\n");
    scanf("%d", &tmp);
    while(tmp < 0 || tmp > 1){
        printf("Please input again!");
        scanf("%d",&tmp);
    }
    List[maxid].LiveInAkabane = tmp;

    printf("Are you over 20 years old?(No: 0, Yes: 1)\n");
    scanf("%d", &tmp);
    while(tmp < 0 || tmp > 1){
        printf("Please input again!");
        scanf("%d",&tmp);
    }
    List[maxid].OverTwenty = tmp;

    maxid++;
}

void addquestionnaire(){
    int tmp;
    int flag = 1;
    printf("What is your gender?(Man: 0, Woman: 1)\n");
    scanf("%d",&flag);
    List[maxid].Gender = flag;
    printf("What is your age?\n");
    scanf("%d", &tmp);
    List[maxid].Age = tmp;

    printf("What is your profession?(Student: 0, Company worker: 1, Part-time worker: 2, Others: 3)\n");
    scanf("%d",&flag);
    List[maxid].Profession = flag;
    printf("Do you live in Akabane?(No: 0, Yes: 1)\n");
    scanf("%d",&flag);
    List[maxid].LiveInAkabane = flag;
    printf("Are you over 20 years old?(No: 0, Yes: 1)\n");
    scanf("%d",&flag);
    List[maxid].OverTwenty = flag;
    maxid++;
}


void profrate(){
    int student = 0, com = 0, part = 0, other = 0;
    for(int i = 0; i < maxid; i++){
        switch (List[i].Profession){
        {
            case 0:
                ++student;
                break;
            case 1:
                ++com;
                break;
            case 2:
                ++part;
                break;
            case 3:
                ++other;
                break;
        
        }
    }
    }
    printf("ration of student: %f\n",(float)(student/maxid)*100);
    printf("ration of company worker: %f\n",(float)(com/maxid)*100);
    printf("ration of part-time worker: %f\n",(float)(part/maxid)*100);
    printf("ration of other: %f\n",(float)(other/maxid)*100);
}

void print(){
    for (int i = 0; i < maxid; i++){
      printf("Gender: ");
      switch(List[i].Gender){
        case 0:
          printf("Man\n");
          break;
        case 1:
          printf("Woman\n");
          break;
      }

      printf("Age: %d\n", List[i].Age);

      printf("Profession: ");
      switch(List[i].Profession){
        case 0:
          printf("Student\n");
          break;
        case 1:
          printf("Company worker\n");
          break;
        case 2:
          printf("Part-time worker\n");
          break;
        case 3:
          printf("Others\n");
          break;          
      }

      printf("Live in Akabane: ");
      switch(List[i].LiveInAkabane){
        case 0:
          printf("No\n");
          break;
        case 1:
          printf("Yes\n");
          break;
      }

      printf("Over 20 years old: ");
      switch(List[i].OverWenty){
        case 0:
          printf("No\n\n");
          break;
        case 1:
          printf("Yes\n\n");
          break;
      }
    }
}


int main(void){
  char command[100];
  
  while(1){
    printf("\nPlease input a command: Add, Print, Profrate, Exit\n>>> ");
    scanf("%s",&command); // Input command with scanf
		
    if (strcmp(command,"Add")==0) addquestionnaire();
    else if (strcmp(command,"Print")==0) print();
    else if (strcmp(command,"Profrate")==0) profrate();
    else if (strcmp(command,"Exit")==0) break;
  }
}