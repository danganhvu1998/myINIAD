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
 *	sysdef.h
 *
 *	System dependencies definition (TX03M367 depended)
 *	Included also from assembler program.
 */

#ifndef __TK_SYSDEF_DEPEND_CPU_H__
#define __TK_SYSDEF_DEPEND_CPU_H__


/* CPU Core-dependent definition */
#include "../core/acm3/sysdef.h"

/* ------------------------------------------------------------------------ */
/*
 * Internal Memorie (Main RAM)  0x20000800 - 0x2001FFFF
 */
#if !USE_QEMU
#define INTERNAL_RAM_SIZE       0x0001F800
#define INTERNAL_RAM_START      0x20000800
#else
#define INTERNAL_RAM_SIZE       0x0000F800
#define INTERNAL_RAM_START      0x20000800
#endif

#define INTERNAL_RAM_END        (INTERNAL_RAM_START+INTERNAL_RAM_SIZE)

/* ------------------------------------------------------------------------ */
/*
 * Initial Stack pointer (Used in initialization process)
 */
#define	INITIAL_SP		INTERNAL_RAM_END


/* ------------------------------------------------------------------------ */
/*
 * Clock Control
 */

/* Clock Generator Registers */
#define CLKCTRL_BASE		0x400F3000
#define CLKCTRL_CGSYSCR		(CLKCTRL_BASE + 0x0000)
#define CLKCTRL_CGOSCCR		(CLKCTRL_BASE + 0x0004)
#define CLKCTRL_CGSTBYCR	(CLKCTRL_BASE + 0x0008)
#define CLKCTRL_CGPLLSEL	(CLKCTRL_BASE + 0x000C)
#define CLKCTRL_CGCKSTP		(CLKCTRL_BASE + 0x0018)
#define CLKCTRL_CGPROTECT	(CLKCTRL_BASE + 0x003C)
#define CLKCTRL_CGIMCG		(CLKCTRL_BASE + 0x0040)
#define CLKCTRL_CGICRCG		(CLKCTRL_BASE + 0x0060)

/* PLL Selection */
#define	CLKCTRL_CGPLLSEL_4X		0x00005A0F
#define	CLKCTRL_CGPLLSEL_6X		0x00006296

#define CLKCTRL_CGPLLSEL_PLLSEL		0x00000001

/* Oscillation control */
#define CLKCTRL_CGOSCCR_ALWAYSWRITE	0x00000030

#define CLKCTRL_CGOSCCR_WUEON		0x00000001
#define CLKCTRL_CGOSCCR_WUEF		0x00000002
#define CLKCTRL_CGOSCCR_PLLON		0x00000004
#define CLKCTRL_CGOSCCR_WUPSEL_XT1	0x00000008

#define CLKCTRL_CGOSCCR_WUPT(usec,MHz)	( (usec * MHz) >> 4 ) << 20

#define HISPEED_CLOCK_MHz	12

#define PLL_MODE_4X		4
#define PLL_MODE_6X		6

#define	CLOCK_fPLL		(HISPEED_CLOCK_MHz * PLL_MODE_6X * 1000000)
#define	CLOCK_fc		(CLOCK_fPLL)
#define	CLOCK_fgear		(CLOCK_fc / 2)
#define	CLOCK_fsys		(CLOCK_fgear)
#define	CLOCK_fperiph		(CLOCK_fgear)
#define	CLOCK_T0		(CLOCK_fperiph)

#define TMCLK			(CLOCK_fsys / 1000000)	/* Timer clock input (MHz) */
#define TMCLK_KHz		(CLOCK_fsys / 1000)	/* Timer clock input (kHz) */

/*
 * Settable interval range (millisecond)
 */
#define MIN_TIMER_PERIOD	1
#define MAX_TIMER_PERIOD	50


/* ------------------------------------------------------------------------ */
/*
 * Number of Interrupt vectors
 */
#define N_INTVEC		128	/* Number of Interrupt vectors */

/*
 * The number of the implemented bit width for priority value fields.
 */
#define INTPRI_BITWIDTH		3


/* ------------------------------------------------------------------------ */
/*
 * Interrupt Priority Levels
 */
#define INTPRI_MAX_EXTINT_PRI	1	/* Highest Ext. interrupt level */
#define INTPRI_SVC		0	/* SVCall */
#define INTPRI_SYSTICK		1	/* SysTick */
#define INTPRI_PENDSV		7	/* PendSV */

/*
 * Time-event handler interrupt level
 */
#define TIMER_INTLEVEL		0


/* ------------------------------------------------------------------------ */
/*
 * Watchdog Timer
 */
#define WDOG_BASE		0x400F2000

#define	WDOG_WDMOD		(WDOG_BASE + 0x0000)	/* Mode Reg. */
#define	WDOG_WDCR		(WDOG_BASE + 0x0004)	/* Control Reg. */

#define	WDOG_WDMOD_WDTE		0x00000080	/* Enable */
#define	WDOG_WDCR_DISABLE	0x000000B1	/* Disable Code */


/* ------------------------------------------------------------------------ */
/*
 * GPIO
 */
#define	PORTA_BASE	0x400C0000
#define	PORTB_BASE	0x400C0100
#define	PORTE_BASE	0x400C0400
#define	PORTF_BASE	0x400C0500
#define	PORTG_BASE	0x400C0600
#define	PORTH_BASE	0x400C0700
#define	PORTI_BASE	0x400C0800
#define	PORTK_BASE	0x400C0A00
#define	PORTL_BASE	0x400C0B00

#define	DATA(n)		(PORT##n##_BASE + 0x00)	// data
#define	CR(n)		(PORT##n##_BASE + 0x04)	// Output Control
#define	FR1(n)		(PORT##n##_BASE + 0x08)	// Function 1
#define	FR2(n)		(PORT##n##_BASE + 0x0C)	// Function 2
#define	FR3(n)		(PORT##n##_BASE + 0x10)	// Function 3
#define	FR4(n)		(PORT##n##_BASE + 0x14)	// Function 4
#define	FR5(n)		(PORT##n##_BASE + 0x18)	// Function 5
#define	FR6(n)		(PORT##n##_BASE + 0x1C)	// Function 6
#define	OD(n)		(PORT##n##_BASE + 0x28)	// Open Drain Control
#define	PUP(n)		(PORT##n##_BASE + 0x2C)	// Pull-up Control
#define	PDN(n)		(PORT##n##_BASE + 0x30)	// Pull-down Control
#define	IE(n)		(PORT##n##_BASE + 0x38)	// Input Control

/* ------------------------------------------------------------------------ */
/*
 * Coprocessor
 */
#define CPU_HAS_FPU			0
#define CPU_HAS_DPS			0

/*
 *  Number of coprocessors to use. 
 *    There is no coprocessor for this microcomputer.
 */
#define NUM_COPROCESSOR		0

#endif /* __TK_SYSDEF_DEPEND_CPU_H__ */
