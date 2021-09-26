// Simple assembler
// 名前 (Name)：(Dang Anh Vu)　学籍番号 (ID)：10180005

#include <stdio.h>
#include <string.h>

#define R0 0
#define R1 1
#define R2 2
#define R3 3
#define R4 4
#define R5 5
#define R6 6
#define R7 7
#define R8 8
#define R9 9
#define R10 10
#define R11 11
#define R12 12
#define R13 13
#define R14 14
#define R15 15

// rr - d - s
// rrd d - s- imm16
// ri d- imm8

#define ADD(d,s)        rr(0x00a0,d,s,"ADD")
#define ADDI(d,imm8)    ri(0x4000,d,imm8,"ADDI")
#define AND(d,s)        rr(0x00c0,d,s,"AND")
#define BC(label)       bc(0x7c00,label,"BC")
#define BC24(label)     bc24(0xfc00,label,"BC24")
#define BNC(label)      bc(0x7d00,label,"BNC")
#define BNC24(label)    bc24(0xfd00,label,"BNC24")
#define BRA(label)      bc(0x7f00,label,"BRA")
#define BRA24(label)    bc24(0xff00,label,"BRA24")
#define CMP(d,s)        rr(0x0040,d,s,"CMP")
#define JL(s)           rr(0x1ec0,0,s,"JL")
#define JMP(s)          rr(0x1fc0,0,s,"JMP")
#define LD(d,s)         rr(0x20c0,d,s,"LD")
#define LDR(d,s,d16)    rrd(0xa0c0,d,s,d16,"LDR")
#define LDI(d,imm8)     ri(0x6000,d,imm8,"LDI")
#define LDI16(d,imm16)  rrd(0x90f0,d,0,imm16,"LDI16")
#define MUL(d,s)        rr(0x1060,d,s,"MUL")
#define MV(d,s)         rr(0x1080,d,s,"MV")
#define NOP()           rr(0x7000,0,0,"NOP")
#define NOT(d,s)        rr(0x00b0,d,s,"NOT")
#define OR(d,s)         rr(0x00e0,d,s,"OR")
#define ST(d,s)         rr(0x2040,d,s,"ST")
#define STR(d,s,d16)    rrd(0xa040,d,s,d16,"STR")
#define SUB(d,s)        rr(0x0020,d,s,"SUB")
#define XOR(d,s)        rr(0x00d0,d,s,"XOR")
#define ADD3(d,s,imm16) rrd(0x80a0,d,s,imm16,"ADD3")

#define AND3(d,s,imm16) rrd(0x80c0,d,s,imm16,"AND3")
#define CMPI(s,imm16)   rrd(0x8040,0,s,imm16,"CMPI")
#define CMPU(d,s)       rr(0x0050,d,s,"CMPU")
#define CMPUI(s,imm16)  rrd(0x8050,0,s,imm16,"CMPUI")
#define DIV(d,s)        rrd(0x9000,d,s,0,"DIV")

#define BNE(d,s,label)  beq(0xb010,d,s,label,"BNE")
#define BEQ(d,s,label)  beq(0xb000,d,s,label,"BEQ")
#define BEQZ(s,label)   beq(0xb080,0,s,label,"BEQZ")
#define BGEZ(s,label)   beq(0xb0b0,0,s,label,"BGEZ")
#define BGTZ(s,label)   beq(0xb0d0,0,s,label,"BGEZ")
#define BL(label)       bc(0x7e00,label,"BL")
#define BL24(label)     bc24(0xfe00,label,"BL24")
#define BLEZ(s,label)   beq(0xb0c0,0,s,label,"BLEZ")
#define BLTZ(s,label)   beq(0xb0a0,0,s,label,"BLTZ")
#define BNEZ(s,label)   beq(0xb090,0,s,label,"BNEZ")

#define DIVU(d,s)       rrd(0x9010,d,s,0,"DIVU")
#define LDPI(d,s)       rr(0x20e0,d,s,"LDPI")
#define LD24(d,label)   ld24(0xe000,d,label,"LD24")
#define LDB(d,s)        rr(0x2080,d,s,"LDB")
#define LDBR(d,s,imm16) rrd(0x2080,d,s,imm16,"LDBR")
#define LDH(d,s)        rr(0x20a0,d,s,"LDH")
#define LDHR(d,s,imm16) rrd(0xa0a0,d,s,imm16,"LDHR")
#define LDUB(d,s)        rr(0x2090,d,s,"LDUB")
#define LDUBR(d,s,imm16) rrd(0xa090,d,s,imm16,"LDUBR")
#define LDUH(d,s)        rr(0x20b0,d,s,"LDUH")
#define LDUHR(d,s,imm16) rrd(0xa0b0,d,s,imm16,"LDUHR")
#define NEG(d,s)         rr(0x0030,d,s,"NEG")
#define OR3(d,s,imm16)   rrd(0x80e0,d,s,imm16,"OR3")
#define REM(d,s)         rrd(0x9020,d,s,0,"REM")
#define REMU(d,s)        rrd(0x9030,d,s,0,"REMU")

#define SETH(d,imm16)    rrd(0xd0c0,d,0,imm16,"SETH")
#define SLL(d,s)         rr(0x1040,d,s,"SLL")
#define SLL3(d,s,imm16)  rrd(0x90c0,d,s,imm16,"SLL3")
#define SLLI(d,imm5)     ri5(0x5020,d,imm5,"SLLI")
#define SRA(d,s)         rr(0x1020,d,s,"SRA")
#define SRA3(d,s,imm16)  rrd(0x90a0,d,s,imm16,"SRA3")
#define SRAI(d,imm5)     ri5(0x5010,d,imm5,"SRAI")
#define SRL(d,s)         rr(0x1000,d,s,"SRL")
#define SRL3(d,s,imm16)  rrd(0x9080,d,s,imm16,"SRL3")
#define SRLI(d,imm5)     ri5(0x5000,d,imm5,"SRLI")
#define STPI(d,s)        rr(0x2060,d,s,"STPI")
#define STPD(d,s)        rr(0x2070,d,s,"STPD")
#define STB(d,s)         rr(0x2000,d,s,"STB")
#define STBR(d,s,imm16)  rrd(0x9000,d,s,imm16,"STBR")
#define STH(d,s)         rr(0x2020,d,s,"STH")
#define STHR(d,s,imm16)  rrd(0xa020,d,s,imm16,"STHR")
#define XOR3(d,s,imm16)  rrd(0x80d0,d,s,imm16,"XOR3")

#define org(a)          ( addr = a )
#define byte(d)         ( ( pass > 0 ) ? ( printf("%04x %02x\n",addr,d), addr += 1 ) : 0 )
#define half(d)         ( ( pass > 0 ) ? ( printf("%04x %04x\n",addr,d), addr += 2 ) : 0 )
#define word(d)         ( ( pass > 0 ) ? ( printf("%04x %08x\n",addr,d), addr += 4 ) : 0 )

int addr;
int pass;
int option;

int rr(int op, int d, int s, char *iname)
{
    if( pass > 0 ) {
        if( option )
            printf("%04x %04x\n", addr, op|(d<<8)|s);
        else
            printf("%04x %04x // %s\n", addr, op|(d<<8)|s, iname);
    }
    addr += 2;
    return 0;
}

int ri(int op, int d, int imm8, char *iname)
{
    if( pass > 0 ) {
        if( option )
            printf("%04x %04x\n", addr, op|(d<<8)|(imm8&0xff));
        else
            printf("%04x %04x // %s\n", addr, op|(d<<8)|(imm8&0xff), iname);
    }
    addr += 2;
    return 0;
}

int bc(int op, int label, char *iname)
{
    if( pass > 0 ) {
        if( option )
            printf("%04x %04x\n", addr, op|(((label-addr)>>1)&0xff));
        else
            printf("%04x %04x // %s\n", addr, op|(((label-addr)>>1)&0xff), iname);
    }
    addr += 2;
    return 0;
}

int bc24(int op, int label, char *iname)
{
    int pcdisp24;

    pcdisp24 = (label-addr)>>1;
    if( pass > 0 ) {
        if( option )
            printf("%04x %04x%04x\n", addr, op|((pcdisp24>>16)&0xff), (pcdisp24&0xffff));
        else
            printf("%04x %04x%04x // %s\n", addr, op|((pcdisp24>>16)&0xff), (pcdisp24&0xffff), iname);
    }
    addr += 4;
    return 0;
}

int beq(int op, int s1, int s2, int label, char *iname)
{
    int pcdisp16;

    pcdisp16 = (label-addr)>>1;
    if( pass > 0 ) {
        if( option )
            printf("%04x %04x%04x\n", addr, op|(s1<<8)|s2, pcdisp16&0xffff);
        else
            printf("%04x %04x%04x // %s\n", addr, op|(s1<<8)|s2, pcdisp16&0xffff, iname);
    }
    addr += 4;
    return 0;
}

int rrd(int op, int d, int s, int d16, char *iname)
{
    if( pass > 0 ) {
        if( option )
            printf("%04x %04x%04x\n", addr, op|(d<<8)|s, d16&0xffff);
        else
            printf("%04x %04x%04x // %s\n", addr, op|(d<<8)|s, d16&0xffff, iname);
    }
    addr += 4;
    return 0;
}

int ld24(int op, int d, int imm24, char *iname)
{
    if( pass > 0 ) {
        if( option )
            printf("%04x %04x%04x\n", addr, op|(d<<8)|((imm24>>16)&0xff), (imm24&0xffff));
        else
            printf("%04x %04x%04x // %s\n", addr, op|(d<<8)|((imm24>>16)&0xff), (imm24&0xffff), iname);
    }
    addr += 4;
    return 0;
}

int ri5(int op, int d, int imm5, char *iname)
{
    if( pass > 0 ) {
        if( option )
            printf("%04x %04x\n", addr, op|(d<<8)|(imm5&0x1f));
        else
            printf("%04x %04x // %s\n", addr, op|(d<<8)|(imm5&0x1f), iname);
    }
    addr += 2;
    return 0;
}

int main(int ac, char **av)
{
    int L_OK, L_NG,
        L1, L2, L3, L4, L5, L6, L7, L8, L9, L10,
        L11, L12, L13, L14, L15, L16, L17, L18, L19, L20;

    switch( ac ) {
    case 1:
        option = 0;
        break;
    case 2:
        if( strcmp(av[1],"-") == 0 )
            option = 1;
        else {
            printf("Usage: %s [-]\n", av[0]);
            return -1;
        }
        break;
    default:
        printf("Usage: %s [-]\n", av[0]);
        return -1;
    }
    
    for( pass = 0; pass < 2; pass++ ) {
        addr = 0;
#include "asmcode1.txt"
    }
    return 0;
}