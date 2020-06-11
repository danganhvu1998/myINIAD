#include <tk/tkernel.h>
#include <tm/tmonitor.h>

ID lock;

void task01(INT stacd, void *exinf) {
   while(1) {
     tk_loc_mtx(lock, TMO_FEVR);
     tm_printf("Task 01 is running\n");
     tk_slp_tsk(1);
     tk_unl_mtx(lock);
   }
   tk_exd_tsk();
}

void task02(INT stacd, void *exinf) {
   while(1) {
     tk_loc_mtx(lock, TMO_FEVR);
     tm_printf("Task 02 is running\n");
     tk_slp_tsk(1);
     tk_unl_mtx(lock);
   }
   tk_exd_tsk();
}

void task03(INT stacd, void *exinf) {
   while(1) {
     tk_loc_mtx(lock, TMO_FEVR);
     tm_printf("Task 03 is running\n");
     tk_slp_tsk(1);
     tk_unl_mtx(lock);
   }
   tk_ext_tsk();
}

ID create_task(INT itskpri, void (*ftask)(INT, void *)) {
   T_CTSK ctsk;
   ID tskid;
   ctsk.tskatr = TA_HLNG | TA_RNG3;
   ctsk.task = ftask;
   ctsk.itskpri = itskpri;
   ctsk.stksz = 1024;
   tskid = tk_cre_tsk(&ctsk);
   tk_sta_tsk(tskid, 0);
   return tskid;
}

EXPORT INT usermain( void ) {
   T_CMTX cmtx;
   cmtx.mtxatr = TA_TFIFO | TA_INHERIT;
   cmtx.ceilpri = 0;
   lock = tk_cre_mtx(&cmtx);
   ID task01Id = create_task(10, task01);
   ID task02Id = create_task(10, task02);
   ID task03Id = create_task(10, task03);
   tk_slp_tsk(TMO_FEVR);
   return 0;
}

//


#include <tk/tkernel.h>
#include <tm/tmonitor.h>

ID lock;
ID task01Id;
ID task02Id;
ID task03Id;

void task01(INT stacd, void *exinf) {
   while(1) {
      tk_loc_mtx(lock, TMO_FEVR);
      int i;
      T_RTSK rtsk;
      tk_ref_tsk(task01Id, &rtsk);
      tm_printf("Task 01 priority (after lock acquired): %d\n", rtsk.tskpri);
      tm_printf("Task 01 is running\n");
      tk_ref_tsk(task01Id, &rtsk);
      tm_printf("Task 01 priority (before lock released): %d\n", rtsk.tskpri);
      tk_unl_mtx(lock);
   }
   tk_exd_tsk();
}

void task02(INT stacd, void *exinf) {
   while(1) {
      tk_loc_mtx(lock, TMO_FEVR);
      int i;
      T_RTSK rtsk;
      tk_ref_tsk(task01Id, &rtsk);
      tm_printf("Task 02 priority (after lock acquired): %d\n", rtsk.tskpri);
      tm_printf("Task 02 is running\n");
      tk_ref_tsk(task02Id, &rtsk);
      tm_printf("Task 02 priority (before lock released): %d\n", rtsk.tskpri);
      tk_unl_mtx(lock);
   }
   tk_exd_tsk();
}

void task03(INT stacd, void *exinf) {
   while(1) {
      tk_loc_mtx(lock, TMO_FEVR);
      int i;
      T_RTSK rtsk;
      tk_ref_tsk(task03Id, &rtsk);
      tm_printf("Task 02 priority (after lock acquired): %d\n", rtsk.tskpri);
      tm_printf("Task 03 is running\n");
      tk_ref_tsk(task01Id, &rtsk);
      tm_printf("Task 03 priority (before lock released): %d\n", rtsk.tskpri);
      tk_unl_mtx(lock);
   }
   tk_exd_tsk();
}

ID create_task(INT itskpri, void (*ftask)(INT, void *)) {
   T_CTSK ctsk;
   ID tskid;
   ctsk.tskatr = TA_HLNG | TA_RNG3;
   ctsk.task = ftask;
   ctsk.itskpri = itskpri;
   ctsk.stksz = 1024;
   tskid = tk_cre_tsk(&ctsk);
   tk_sta_tsk(tskid, 0);
   tk_ref_tsk(tskid, 0);
   return tskid;
}

EXPORT INT usermain( void ) {
   T_CMTX cmtx;
   cmtx.mtxatr = TA_TFIFO | TA_CEILING;
   cmtx.ceilpri = 8;
   lock = tk_cre_mtx(&cmtx);
   ID task01Id = create_task(10, task01);
   ID task02Id = create_task(10, task02);
   ID task03Id = create_task(10, task03);
   tk_slp_tsk(TMO_FEVR);
   return 0;
}