/*
 *----------------------------------------------------------------------
 *    micro T-Kernel 3.00.00
 *
 *    Copyright (C) 2006-2019 by Ken Sakamura.
 *    This software is distributed under the T-License 2.1.
 *----------------------------------------------------------------------
 *
 *    Released by TRON Forum(http://www.tron.org) at 2019/12/12.
 *
 *----------------------------------------------------------------------
 */

/*
 *    tm_com.c (T-Monitor)
 *    T-Monitor Communication low-level device driver for IoT-Engine M367
 */

#include <tk/typedef.h>
#include <sys/sysdef.h>
#include "../../libtm.h"

#include "SEGGER_RTT.h"

#ifdef USE_COM_SEGGER_RTT

EXPORT	void	tm_snd_dat( const UB *buf, INT size )
{
	SEGGER_RTT_Write(0, (char*)buf, size);
}


EXPORT	void	tm_rcv_dat( UB* buf, INT size )
{
	SEGGER_RTT_Read(0, (char*)buf, size);
}


EXPORT	void	tm_com_init(void)
{

}

#endif /* USE_COM_SEGGER_RTT */