// Instruction simulator
// 名前 (Name)：清水徹 (Toru Shimizu)　学籍番号 (ID)：1018xxxx

#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>

#define LINESIZE 256 // Max #characters of one line (#bytes)
#define MEMSIZE 4096 // Memory size (#bytes)

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
            nextpc = pc+((char)(icode1&0x00ff)<<1);
            iname = "BRA";
            break;
        case 0xff00: // BRA24
            nextpc = pc+((((char)(icode1&0x00ff)<<16)|(unsigned short)icode2)<<1);
            iname = "BRA24";
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
                } else {
                    printf("Unknown instruction: icode1 = %04x\n", icode1);
                    return -1;
                }
            }
        }
    }
    printf("PC: %04x %s\n", pc, iname);
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