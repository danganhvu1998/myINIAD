module my_FA(Cin, A, B, R, Cout);
input Cin, A, B;
output R, Cout;
	assign R = (A & ~B & ~Cin) | (~A & B & ~Cin) | (~A & ~B & Cin) | (A & B & Cin);
	assign Cout = (A & B) | (A & Cin) | (B & Cin);
endmodule

module my_FAS(S_sub, Cin, A, B, R, Cout);
input S_sub, Cin, A, B;
output R, Cout;
wire tempB;
	assign tempB = S_sub^B;
    my_FA FA(Cin, A, tempB, R, Cout);
endmodule

module my_FAS_16(S_sub, A, B, R);
input [15:0] A, B;
input S_sub;
output [15:0] R;
wire [15:0] Cout;
    my_FAS fas01(S_sub, S_sub, A[0], B[0], R[0], Cout[0]);
    my_FAS fas02(S_sub, Cout[0], A[1], B[1], R[1], Cout[1]);
    my_FAS fas03(S_sub, Cout[1], A[2], B[2], R[2], Cout[2]);
    my_FAS fas04(S_sub, Cout[2], A[3], B[3], R[3], Cout[3]);
    my_FAS fas05(S_sub, Cout[3], A[4], B[4], R[4], Cout[4]);
    my_FAS fas06(S_sub, Cout[4], A[5], B[5], R[5], Cout[5]);
    my_FAS fas07(S_sub, Cout[5], A[6], B[6], R[6], Cout[6]);
    my_FAS fas08(S_sub, Cout[6], A[7], B[7], R[7], Cout[7]);
    my_FAS fas09(S_sub, Cout[7], A[8], B[8], R[8], Cout[8]);
    my_FAS fas10(S_sub, Cout[8], A[9], B[9], R[9], Cout[9]);
    my_FAS fas11(S_sub, Cout[9], A[10], B[10], R[10], Cout[10]);
    my_FAS fas12(S_sub, Cout[10], A[11], B[11], R[11], Cout[11]);
    my_FAS fas13(S_sub, Cout[11], A[12], B[12], R[12], Cout[12]);
    my_FAS fas14(S_sub, Cout[12], A[13], B[13], R[13], Cout[13]);
    my_FAS fas15(S_sub, Cout[13], A[14], B[14], R[14], Cout[14]);
    my_FAS fas16(S_sub, Cout[14], A[15], B[15], R[15], Cout[15]);
endmodule