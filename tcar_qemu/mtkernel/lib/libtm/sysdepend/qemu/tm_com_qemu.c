/*
 *----------------------------------------------------------------------
 *    micro T-Kernel 3.00.00.B1
 *
 *    Copyright (C) 2006-2019 by Ken Sakamura.
 *    This software is distributed under the T-License 2.1.
 *----------------------------------------------------------------------
 *
 *    Released by TRON Forum(http://www.tron.org) at 2020/03/13.
 *
 *----------------------------------------------------------------------
 */

/*
 *    tm_com.c
 *    T-Monitor Communication low-level device driver (M367 IoT-Engine)
 */

#include <tk/typedef.h>
#include <sys/sysdef.h>
#include "../../libtm.h"

#ifdef USE_COM_QEMU

LOCAL void smh_send( UW ch)
{
	Asm("mov r0, #3" ::: "r0");
	Asm("mov r1, %0" ::"r"(&ch): "r1");
	Asm("bkpt 0xAB");
}

EXPORT	void	tm_snd_dat( const UB* buf, INT size )
{
	while(size-- > 0) {
		smh_send(*buf++);
	}
}


EXPORT	void	tm_rcv_dat( UB* buf, INT size )
{
}


EXPORT	void	tm_com_init(void)
{
}

#endif /* USE_COM_QEMU */