module my_HA( A, B, R, C );
input A, B;
output R, C;

  assign R = (A & ~B) | (~A & B);
  assign C = A & B;
endmodule

module my_FA (Cin, A, B, R, Cout);
input Cin, A, B;
output R, Cout;
wire r1, c1, c2;
my_HA ha1( A, B, r1, c1 );
my_HA ha2( r1, Cin, R, c2 );

assign Cout = c1 | c2;
endmodule

// Full adder with subtraction 
module my_FAS(Cin, A, B, R, Cout, S_SUB);
input Cin, A, B, S_SUB;
output R, Cout;
wire b_in;
my_FA my_fa( Cin, A, b_in, R, Cout );
assign b_in = S_SUB^B;
endmodule

// ALU for 1 bit
module my_ALUI(Cin, A, B, R, Cout, S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
input Cin,A,B,S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT;
output R,Cout;
wire sand,sfas, snot, sor, sxor;
my_FAS f(Cin,A,B,sfas,Cout,S_SUB);

assign sand = A&B;
assign snot = ~A;
assign sor = A|B;
assign sxor = A^B;
assign R = (sfas&S_FAS) | (sand&S_AND) | (snot&S_NOT) | (sor&S_OR) | (sxor&S_XOR); 

endmodule

// ALU for 16 bits
module my_ALU(A, B, R, Cout, S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
input [15:0] A, B;
input S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT;
output [15:0] R;
output Cout;
wire [15:0] c;
    my_ALUI f1(S_SUB,A[0],B[0],R[0],c[0],S_SUB,S_FAS,S_AND,S_OR,S_XOR,S_NOT);
    my_ALUI f2(c[0],A[1],B[1],R[1],c[1],S_SUB,S_FAS,S_AND,S_OR,S_XOR,S_NOT);
    my_ALUI f3(c[1],A[2],B[2],R[2],c[2],S_SUB,S_FAS,S_AND,S_OR,S_XOR,S_NOT);
    my_ALUI f4(c[2],A[3],B[3],R[3],c[3],S_SUB,S_FAS,S_AND,S_OR,S_XOR,S_NOT);
    my_ALUI f5(c[3],A[4],B[4],R[4],c[4],S_SUB,S_FAS,S_AND,S_OR,S_XOR,S_NOT);
    my_ALUI f6(c[4],A[5],B[5],R[5],c[5],S_SUB,S_FAS,S_AND,S_OR,S_XOR,S_NOT);
    my_ALUI f7(c[5],A[6],B[6],R[6],c[6],S_SUB,S_FAS,S_AND,S_OR,S_XOR,S_NOT);
    my_ALUI f8(c[6],A[7],B[7],R[7],c[7],S_SUB,S_FAS,S_AND,S_OR,S_XOR,S_NOT);
    my_ALUI f9(c[7],A[8],B[8],R[8],c[8],S_SUB,S_FAS,S_AND,S_OR,S_XOR,S_NOT);
    my_ALUI f10(c[8],A[9],B[9],R[9],c[9],S_SUB,S_FAS,S_AND,S_OR,S_XOR,S_NOT);
    my_ALUI f11(c[9],A[10],B[10],R[10],c[10],S_SUB,S_FAS,S_AND,S_OR,S_XOR,S_NOT);
    my_ALUI f12(c[10],A[11],B[11],R[11],c[11],S_SUB,S_FAS,S_AND,S_OR,S_XOR,S_NOT);
    my_ALUI f13(c[11],A[12],B[12],R[12],c[12],S_SUB,S_FAS,S_AND,S_OR,S_XOR,S_NOT);
    my_ALUI f14(c[12],A[13],B[13],R[13],c[13],S_SUB,S_FAS,S_AND,S_OR,S_XOR,S_NOT);
    my_ALUI f15(c[13],A[14],B[14],R[14],c[14],S_SUB,S_FAS,S_AND,S_OR,S_XOR,S_NOT);
    my_ALUI f16(c[14],A[15],B[15],R[15],c[15],S_SUB,S_FAS,S_AND,S_OR,S_XOR,S_NOT);
endmodule

module my_decoder(IR, IsALU, IsADDI, IsADD, IsSUB, IsAND, IsOR, IsXOR, IsNOT);

input [15:0] IR;
output IsALU, IsADDI, IsADD, IsSUB, IsAND, IsOR, IsXOR, IsNOT;

assign IsALU = ~IR[15]&~IR[14]&~IR[13]&~IR[12];
assign IsAdDI = ~IR[15]&IR[14]&~IR[13]&~IR[12];
assign IsADD = IR[7]&~IR[6]&IR[5]&~IR[4];
assign IsSUB = ~IR[7]&~IR[6]&IR[5]&~IR[4];
assign IsAND = IR[7]&IR[6]&~IR[5]&~IR[4];
assign IsOR = IR[7]&IR[6]&IR[5]&~IR[4];
assign IsXOR = IR[7]&IR[6]&~IR[5]&IR[4];
assign IsNOT = IR[7]&~IR[6]&IR[5]&IR[4];

endmodule




module my_registers( WN, N1, N2, WD, RD1, RD2 );
input [3:0] WN, N1, N2;
input [15:0] WD;
output [15:0] RD1, RD2;
reg [15:0] registers[0:15];

// always @( posedge CK ) begin
// registers[WN] <= WD;
// End

assign RD1 = registers[N1];
assign RD2 = registers[N2];

endmodule


module my_CPU16v0(IR);

input [15:0] IR;

wire IsALU, IsADDI, IsADD, IsSUB, IsAND, IsOR, IsXOR, IsNOT, S_SUB, S_FAS;
wire [15:0] A, B, R, RD1, RD2;
wire Cout;

assign S_SUB = IsSUB;
assign S_FAS = IsADD | IsSUB;

my_registers register1(4'b0, IR[11:8], IR[3:0], 16'b0, A, B); 
my_ALU alu1 (A, B, R, Cout, S_SUB, S_FAS, IsAND, IsOR, IsXOR, IsNOT); 
my_decoder decoder1 (IR, IsALU, IsADDI, IsADD, IsSUB, IsAND, IsOR, IsXOR, IsNOT);

endmodule