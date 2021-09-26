#include <tm/tmonitor.h>

#define SCB_STIR 0xE000EF00
#define INT3 3

void sw_int(UINT intno) {
  (_UW)SCB_STIR = intno;    
}

void inthdr(UINT intno) {
  ClearInt(INT3);
  return;
}

EXPORT INT usermain( void )
{
      T_DINT dint;
      dint.intatr = TA_HLNG;
      dint.inthdr = inthdr;
      UINT intsts;
      DI(intsts);
      SetIntMode(INT3, IM_EDGE | IM_LOW);
      ClearInt(INT3);
      EnableInt(INT3, 5);
      EI(intsts);
      tk_def_int(INT3, &dint);

      while(1) {
        sw_int(INT3);
        tk_dly_tsk(1000);
      }
        return 0;

}