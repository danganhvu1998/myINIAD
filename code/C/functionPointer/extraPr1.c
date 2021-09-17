#include <stdio.h>

typedef struct student{
  char* name;
  int math;
  int physics;
  int economics;
} student;

int math_max(student A, student B){
  return A.math > B.math;
}

int math_min(student A, student B){
  return A.math < B.math;
}

int physics_max(student A, student B){
  return A.physics > B.physics;
}

int physics_min(student A, student B){
  return A.physics < B.physics;
}

int economics_max(student A, student B){
  return A.economics > B.economics;
}

int economics_min(student A, student B){
  return A.economics < B.economics;
}

student search(const student A[], int size, int (*callback)(student, student) ){
  student value = A[0];
  for (int i = 1; i < size; i++){
    if ( (*callback)(A[i], value) ) {
      value = A[i];
    }
  }
  return value;
}

void print(student tmp){
  printf("%s, Math: %d, Phys: %d, Eco: %d\n", tmp.name, tmp.math, tmp.physics, tmp.economics);
}

int main(void){
  student A[5] = {
   {"INIAD", 95, 80, 95},
   {"Jyoho", 75, 82, 65},
   {"Toyo", 65, 79, 93},
   {"Renke", 68, 91, 43},
   {"Info", 70, 98, 45},
  };
  int size = sizeof(A)/sizeof(A[0]);

  print(search(A, size, math_max));
  print(search(A, size, physics_min));
}
