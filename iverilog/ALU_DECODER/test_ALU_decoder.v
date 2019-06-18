module my_FA(Cin, A, B, R, Cout);
input Cin, A, B;
output R, Cout;
	assign R = (A & ~B & ~Cin) | (~A & B & ~Cin) | (~A & ~B & Cin) | (A & B & Cin);
	assign Cout = (A & B) | (A & Cin) | (B & Cin);
endmodule

module my_ALUI(Cin, A, B, R, Cout, S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
input S_sub, Cin, A, B, S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT;
output R, Cout;
wire A_FAS, A_AND, A_OR, A_XOR, A_NOT;
    my_FA FA(Cin, A, S_SUB^B, A_FAS, Cout);
    assign A_AND = A&B;
    assign A_OR = A|B;
    assign A_XOR = A^B;
    assign A_NOT = !A;
    assign R = (A_FAS&S_FAS)|(A_AND&S_AND)|(A_OR&S_OR)|(A_XOR&S_XOR)|(A_NOT&S_NOT);
endmodule

module my_ALU(A, B, R, S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
input [15:0] A, B;
input S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT;
output [15:0] R;
wire [15:0] Cout;
    my_ALUI my_alui0(S_SUB, A[0], B[0], R[0], Cout[0], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
    my_ALUI my_alui1(Cout[0], A[1], B[1], R[1], Cout[1], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
    my_ALUI my_alui2(Cout[1], A[2], B[2], R[2], Cout[2], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
    my_ALUI my_alui3(Cout[2], A[3], B[3], R[3], Cout[3], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
    my_ALUI my_alui4(Cout[3], A[4], B[4], R[4], Cout[4], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
    my_ALUI my_alui5(Cout[4], A[5], B[5], R[5], Cout[5], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
    my_ALUI my_alui6(Cout[5], A[6], B[6], R[6], Cout[6], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
    my_ALUI my_alui7(Cout[6], A[7], B[7], R[7], Cout[7], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
    my_ALUI my_alui8(Cout[7], A[8], B[8], R[8], Cout[8], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
    my_ALUI my_alui9(Cout[8], A[9], B[9], R[9], Cout[9], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
    my_ALUI my_alui10(Cout[9], A[10], B[10], R[10], Cout[10], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
    my_ALUI my_alui11(Cout[10], A[11], B[11], R[11], Cout[11], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
    my_ALUI my_alui12(Cout[11], A[12], B[12], R[12], Cout[12], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
    my_ALUI my_alui13(Cout[12], A[13], B[13], R[13], Cout[13], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
    my_ALUI my_alui14(Cout[13], A[14], B[14], R[14], Cout[14], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
    my_ALUI my_alui15(Cout[14], A[15], B[15], R[15], Cout[15], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
endmodule

module my_decoder(IR, IsALU, IsSUB, IsFAS, IsAND, IsOR, IsXOR, IsNOT);
input [15:0] IR; 
output IsALU, IsSUB, IsFAS, IsAND, IsOR, IsXOR, IsNOT;

    assign IsALU = ~IR[15]&~IR[14]&~IR[13]&~IR[12];
    assign IsFAS = ~IR[6]&IR[5]&~IR[4];
    assign IsSUB = ~IR[7]&~IR[6]&IR[5]&~IR[4];
    assign IsAND = IR[7]&IR[6]&~IR[5]&~IR[4];
    assign IsOR  = IR[7]&IR[6]&IR[5]&~IR[4];
    assign IsXOR = IR[7]&IR[6]&~IR[5]&IR[4];
    assign IsNOT = IR[7]&~IR[6]&IR[5]&IR[4];
endmodule