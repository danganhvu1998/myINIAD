// Instruction simulator
// 名前 (Name)：(Dang Anh Vu)　学籍番号 (ID)：10180005

#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>

#define LINESIZE 256 // Max #characters of one line (#bytes)
#define MEMSIZE 4096 // Memory size (#bytes)
#define sign_extend(x) ( ( ( signed ) ( (x)<< 8 ) ) >>8 )

unsigned char mem[MEMSIZE];
int regfile[16];
int pc = 0;
int cbit = 0;

char *skipspace(char *p)
{
    while( isspace(*p) )
        p++;
    return p;
}

int toxdigit(char c)
{
    if( isdigit(c) )
        return c-'0';
    else if( islower(c) )
        return c-'a'+10;
    else
        return c-'A'+10;
}

int loaddata(char *fname)
{
    FILE *fp; // File pointer
    char line[LINESIZE], *p;
    int addr;

    fp = fopen(fname, "r"); // Open file.
    if( fp == NULL ) {
        printf("%s file not opened.\n", fname);
        return -1;
    }
    while( fgets(line, LINESIZE, fp) != NULL ) {
        for( addr = 0, p = skipspace(line); isxdigit(*p); p++ )
            addr = (addr<<4)+toxdigit(*p);
        for( p = skipspace(p); isxdigit(*p) && isxdigit(*(p+1)); p = p+2 )
            mem[addr++] = (toxdigit(*p)<<4)+toxdigit(*(p+1));
    }
    fclose(fp); // Close file.
    return 0;
}

#define get2bytes(a) ((mem[a]<<8)|mem[(a)+1])
#define get4bytes(a) ((mem[a]<<24)|(mem[(a)+1]<<16)|(mem[(a)+2]<<8)|mem[(a)+3])
#define put2bytes(a,d) ((mem[a]=(((d)>>8)&0xff)), (mem[(a)+1]=((d)&0xff))) 
#define put4bytes(a,d) ((mem[a]=(((d)>>24)&0xff)), (mem[(a)+1]=(((d)>>16)&0xff)), (mem[(a)+2]=(((d)>>8)&0xff)), (mem[(a)+3]=((d)&0xff))) 

int execinstr() // Execute an instruction
{
    int icode1, icode2, nextpc, rd, rs, addr, data;
    long long int ltmp;
    char *iname;

    icode1 = get2bytes(pc);
    if( (icode1&0x8000) == 0 ) { // 16-bit instruction code
        nextpc = pc+2;
    } else { // 32-bit instruction
        icode2 = get2bytes(pc+2);
        nextpc = pc+4;
    }

    rd = (icode1>>8)&0x0f;
    rs = icode1&0x0f;
    switch( icode1&0xf0f0 ) {
    case 0xb000: // BEQ
        if (regfile[rd] == regfile[rs])
            nextpc= (pc &  0xfffffffc) + ((signed short) icode2 << 1);
        iname = "BEQ";
        break;
    case 0x00a0: // ADD
        regfile[rd] += regfile[rs];
        iname = "ADD";
        break;
    case 0x00c0: // AND
        regfile[rd] &= regfile[rs];
        iname = "AND";
        break;
    case 0x0040: // CMP
        cbit = ((regfile[rd] < regfile[rs]) ? 1 : 0);
        iname = "CMP";
        break;
    case 0x20c0: // LD
        addr = regfile[rs];
        regfile[rd] = get4bytes(addr);
        iname = "LD";
        break;
    case 0xa0c0: // LDR
        addr = regfile[rs]+(short)icode2;
        regfile[rd] = get4bytes(addr);
        iname = "LDR";
        break;
    case 0x1060: // MUL
        ltmp = (long long int)regfile[rd]*(long long int)regfile[rs];
        regfile[rd] = (int) ltmp;
        iname = "MUL";
        break;
    case 0x1080: // MV
        regfile[rd] = regfile[rs];
        iname = "MV";
        break;
    case 0x00b0: // NOT
        regfile[rd] = ~regfile[rs];
        iname = "NOT";
        break;
    case 0x00e0: // OR
        regfile[rd] |= regfile[rs];
        iname = "OR";
        break;
    case 0x2040: // ST
        addr = regfile[rs];
        data = regfile[rd];
        put4bytes(addr,data);
        iname = "ST";
        break;
    case 0xa040: // STR
        addr = regfile[rs]+(short)icode2;
        data = regfile[rd];
        put4bytes(addr,data);
        iname = "STR";
        break;
    case 0x0020: // SUB
        regfile[rd] -= regfile[rs];
        iname = "SUB";
        break;
    case 0x00d0: // XOR
        regfile[rd] ^= regfile[rs];
        iname = "XOR";
        break;
    case 0x80a0: // ADD3
        regfile[rd] = regfile[rs] + (short)icode2;
        iname = "ADD3";
        break;
    case 0x80c0: // AND3
        regfile[rd] = regfile[rs]&(short)icode2;
        iname = "AND3";
        break;
    case 0xb0c0: // BLEZ
        if((signed)regfile[rd]<=0)
            nextpc = pc + ((signed short)(icode2&0x00ff)<<1);
        iname = "BLEZ";
        break;
    case 0xb010: // BNE
        if(regfile[rd]!=regfile[rs])
            nextpc = pc + ((signed short)(icode2&0x00ff)<<1);
        iname = "BNE";
        break;
    case 0xb090: // BNEZ
        if(regfile[rs]!=0)
            nextpc = pc + ((signed short)(icode2&0x00ff)<<1);
        iname = "BNEZ";
        break;
    case 0x8040: // CMPI
        cbit = ((signed)regfile[rs]<(signed short)icode2) ? 1:0;
        iname = "CMPI";
        break;
    case 0x0050: // CMPU
        cbit = ((unsigned)regfile[rd] < (unsigned)regfile[rs]) ? 1:0;
        iname = "CMPU";
        break;
    case 0x8050: // CMPUI
        cbit = ((unsigned)regfile[rs] < (signed short)icode2) ? 1:0;
        iname = "CMPUI";
        break;
    case 0x9000: // DIV
        regfile[rd] = (signed)regfile[rd]/(signed)regfile[rs];
        iname = "DIV";
        break;
    case 0x9010: // DIVU
        regfile[rd] = (unsigned)regfile[rd]/(unsigned)regfile[rs];
        iname = "DIVU";
        break;
    case 0x20e0: //LDPI
        // printf("->>>PC: %04x %s --- %04x %04x\n", pc, iname, icode1, icode1&0xf0f0);
        addr = regfile[rs];
        regfile[rs]+=4;
        regfile[rd] = get4bytes(addr);
        iname = "LDPI";
        break;
    case 0x2080: // LDB
        addr = (signed char)regfile[rs];
        regfile[rd] = get2bytes(addr);
        iname = "LDB";
        break;
    case 0xc080: // LDBR
        addr = (signed char)regfile[rs]+(short)icode2;
        regfile[rd] = get2bytes(addr);
        iname = "LDBR";
        break;
    case 0x20a0: // LDH
        addr = (signed short)regfile[rs];
        regfile[rd] = get4bytes(addr);
        iname = "LDH";
        break;
    case 0xa0a0: // LDHR
        addr = (signed short)regfile[rs]+(short)icode2;
        regfile[rd] = get4bytes(addr);
        iname = "LDHR";
        break;
    case 0x2090: // LDUB
        addr = (unsigned char)regfile[rs];
        regfile[rd] = get2bytes(addr);
        iname = "LDUB";
        break;
    case 0xa090: // LDUBR
        addr = (unsigned char)regfile[rs] + (short)icode2;
        regfile[rd] = get2bytes(addr);
        iname = "LDUBR";
        break;
    case 0x20b0: // LDUH
        addr = (unsigned short)regfile[rs];
        regfile[rd] = get4bytes(addr);
        iname = "LDUH";
        break;
    case 0xa0b0: // LDUHR
        addr = (unsigned short)regfile[rs] + (short)icode2;
        regfile[rd] = get4bytes(addr);
        iname = "LDUHR";
        break;
    case 0x0030: // NEG
        regfile[rd] = 0 - regfile[rs];
        iname = "NEG";
        break;
    case 0x80e0: // OR3
        regfile[rd] = regfile[rs] | (unsigned short)icode2;
        iname = "OR3";
        break;
    case 0x9020: // REM
        regfile[rd] = (signed)regfile[rd]%(signed)regfile[rs];
        iname = "REM";
        break;
    case 0x9030: // REMU
        regfile[rd] = (unsigned)regfile[rd]%(unsigned)regfile[rs];
        iname = "REMU";
        break;
    case 0xd0c0: // SETH
        regfile[rd] = (signed short)icode2<<8;
        iname = "SETH";
        break;
    case 0x1040: // SLL
        regfile[rd] = regfile[rd]<<(regfile[rs]&31);
        iname = "SLL";
        break;
    case 0x90c0: // SLL3
        regfile[rd] = regfile[rs]<<(icode2&31);
        iname = "SLL3";
        break;
    case 0x5020: // SLLI
        regfile[rd] = regfile[rd]<<icode1;
        iname = "SLLI";
        break;
    case 0x1020: // SRA
        regfile[rd] = (signed)regfile[rd] >> (regfile[rs]&31);
        iname = "SRA";
        break;
    case 0x90a0: // SRA3
        regfile[rd] = (signed)regfile[rs] >> (icode2&31);
        iname = "SRA3";
        break;
    case 0x5010: // SRAI
        regfile[rd] = (signed)regfile[rd] >> icode1;
        iname = "SRAI";
        break;
    case 0x1000: // SRL
        regfile[rd] = (unsigned)regfile[rd] >> (regfile[rs]&31);
        iname = "SRL";
        break;
    case 0x9080: // SRL3
        regfile[rd] = (unsigned)regfile[rs] >> (icode2&31);
        iname = "SRL3";
        break;
    case 0x5000: // SRLI
        regfile[rd] = (unsigned)regfile[rd] >> (icode1&31);
        iname = "SRLI";
        break;
    case 0x2060: // STPI
        addr = regfile[rs];
        regfile[rs]+=4;
        data = regfile[rd];
        put4bytes(addr,data);
        iname = "STPI";
        break;
    case 0x2070: // STPD
        addr = regfile[rs];
        regfile[rs]-=4;
        data = regfile[rd];
        put4bytes(addr,data);
        iname = "STPD";
        break;
    case 0x2000: // STB
        addr = (char)regfile[rs];
        data = (char)regfile[rd];
        put2bytes(addr,data);
        iname = "STB";
        break;
    case 0xa000: // STBR
        addr = (char)regfile[rs]+(short)icode2;
        data = (char)regfile[rd];
        put2bytes(addr,data);
        iname = "STBR";
        break;
    case 0x2020: // STH
        addr = (signed short)regfile[rs];
        data = (signed short)regfile[rd];
        put4bytes(addr,data);
        iname = "STH";
        break;
    case 0xa020: // STHR
        addr = (signed short)regfile[rs]+(short)icode2;
        data = (signed short)regfile[rd];
        put4bytes(addr,data);
        iname = "STHR";
        break;
    case 0x80d0: // XOR3
        regfile[rd] = (unsigned)regfile[rs]^(unsigned short)icode2;
        iname = "XOR";
        break;
    default:
        switch( icode1&0xff00 ) {
        case 0x7c00: // BC
            if( cbit == 1 )
                nextpc = pc+((char)(icode1&0x00ff)<<1);
            iname = "BC";
            break;
        case 0xfc00: // BC24
            if( cbit == 1 )
                nextpc = pc+((((char)(icode1&0x00ff)<<16)|(unsigned short)icode2)<<1);
            iname = "BC24";
            break;
        case 0x7d00: // BNC
            if( cbit == 0 )
                nextpc = pc+((char)(icode1&0x00ff)<<1);
            iname = "BNC";
            break;
        case 0xfd00: // BNC24
            if( cbit == 0 )
                nextpc = pc+((((char)(icode1&0x00ff)<<16)|(unsigned short)icode2)<<1);
            iname = "BNC24";
            break;
        case 0x7f00: // BRA
            printf("RUNNUNG");
            nextpc = pc+((unsigned short)(icode1&0x00ff)<<1);
            iname = "BRA";
            break;
        case 0xff00: // BRA24
            nextpc = pc+((((char)(icode1&0x00ff)<<16)|(unsigned short)icode2)<<1);
            iname = "BRA24";
            break;
        case 0x7e00: // BL
            regfile[14] = pc + 2;
            nextpc= pc + ( ( ( signed char ) icode1 & 0x0000ffff ) << 1 );
            iname = "BL";
            break;
        case 0xfe00: // BL24
            regfile[14] = pc  + 4;
            ltmp= ((icode1 & 0x00ff) << 16) + icode2; // pcdisp24
            nextpc = pc + ( sign_extend (ltmp) << 1 );  
            iname = "BL24";
            break;
        default:
            switch( icode1&0xfff0 ) {
            case 0x1ec0: // JL
                regfile[14] = pc+2;
                nextpc = regfile[rs]&0xfffffffe;
                iname = "JL";
                break;
            case 0x1fc0: // JMP
                nextpc = regfile[rs]&0xfffffffe;
                iname = "JMP";
                break;
            case 0xb080: // BEQZ
                if(regfile[rs]==0)
                    nextpc = pc + ((signed short)(icode2&0x00ff)<<1);
                iname = "BEQZ";
                break;
            case 0xb0b0: // BGEZ
                if(regfile[rs]>=0)
                    nextpc = pc + ((char)(icode2&0x00ff)<<1);
                iname = "BGEZ";
                break;
            case 0xb0d0: // BGTZ
                if(regfile[rs]>0)
                    nextpc = pc + ((char)(icode2&0x00ff)<<1);
                iname = "BGTZ";
                break;
            case 0xb0a0: // BLTZ
                if ((signed) regfile[rs] < 0)
                    nextpc = (pc ) + (((signed short) icode2) << 1);
                iname = "BLTZ";
                break;
            default:
                if( (icode1&0xf000) == 0x4000 ) { // ADDI
                    regfile[rd] += (char)(icode1&0x00ff);
                    iname = "ADDI";
                } else if( (icode1&0xf000) == 0x6000 ) { // LDI
                    regfile[rd] = (char)(icode1&0x00ff);
                    iname = "LDI";
                } else if( (icode1&0xf0ff) == 0x90f0 ) { // LDI16
                    regfile[rd] = (short)icode2;
                    iname = "LDI16";
                } else if( (icode1&0xffff) == 0x7000 ) { // NOP
                    iname = "NOP";
                } else if( (icode1&0xffff) == 0xe000 ) { // LD24
                    ltmp= (icode1 << 8) + icode2;
                    regfile[rd] = ltmp & 0x00ffffff;
                    iname = "LD24";
                } else {
                    printf("Unknown instruction: icode1 = %04x\n", icode1);
                    return -1;
                }
            }
        }
    }
    printf("PC: %04x %s --- %04x %04x %04x\n", pc, iname, icode1, icode1&0xf0f0, nextpc);
    pc = nextpc;
    return 0;
}

int main(int ac, char **av)
{
    int i, n;

    if( ac < 2 || 3 < ac ) {
        printf("%s: file [#instructions]\n", av[0]);
        return -1;
    }

    if( loaddata(av[1]) < 0 )
        return -1;
    if( ac == 2 )
        n = 10;
    else
        n = atoi(av[2]);

    for( i = 0; regfile[13] == 0 && i < n; i++ )
        execinstr();
        
    if( regfile[13] == 1 || i >= n )
        printf("Success.\n");
    else
        printf("Fail: ERR=%04x\n", regfile[12]);
}

// Running 100 time execinstr()
// Not sure what is regfile[13] using for
