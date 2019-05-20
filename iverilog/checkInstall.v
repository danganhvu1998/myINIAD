module my_HA(A, B, R, C);
input A,B;
output R, C;

    assign R = (A & ~B)|(~A &B);
    assign C = A & B;
endmodule

module MY_FA(Cin, A, B, R, Cout);
input Cin, A, B;
output R, Cout;
wire r1, c1, c2;
my_HA ha1(A, B, r1, c1);
my_HA ha2(r1, Cin, R, c2);

    assign Cout = c1|c2;
endmodule

module my_FA(Cin, A, B, R, Cout);
input Cin, A, B;
output R, Cout;
    assign R = (A & ~B & ~Cin)|(~A & B & ~Cin)|(~A & ~B & Cin)|(A & B & Cin);
    assign Cout = (A & B)|(A & Cin)|(Cin & B);
endmodule

module test_my_FA;
reg cin, a, b;
wire r, cout;
my_FA my_fa(cin, a, b, r, cout);

initial begin
    cin = 0; a=1'b0; b=1'b0;
    #1000 cin=0; a=1'b0; b=1'b1;
    #1000 cin=0; a=1'b1; b=1'b0;
    #1000 cin=0; a=1'b1; b=1'b1;
    #1000 cin=1; a=1'b0; b=1'b0;
    #1000 cin=1; a=1'b0; b=1'b1;
    #1000 cin=1; a=1'b1; b=1'b0;
    #1000 cin=1; a=1'b1; b=1'b1;
end

initial
    $monitor($stime, "cin=%b a=%b b=%b r=%b cout=%b", cin, a, b, r, cout);

endmodule