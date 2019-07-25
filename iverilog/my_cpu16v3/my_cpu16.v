module my_FA2( Cin, A, B, R, Cout );
input Cin, A, B;
output R, Cout;

  assign R = (A&~B&~Cin)|(~A&B&~Cin)|(~A&~B&Cin)|(A&B&Cin);
  assign Cout = (A&B)|(A&Cin)|(B&Cin);
endmodule

module my_FAS( Cin, A, B, R, Cout, S_SUB );
input Cin, A, B, S_SUB;
output R, Cout;
wire b_in;
my_FA2 my_fa( Cin, A, b_in, R, Cout );

  assign b_in = (B&~S_SUB)|(~B&S_SUB);
endmodule

module my_ALUI( Cin, A, B, R, Cout, S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT );
input Cin, A, B, S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT;
output R, Cout;
wire fas_out, and_out, or_out, xor_out, not_out;
my_FAS my_fas( Cin, A, B, fas_out, Cout, S_SUB );

  assign R = (S_FAS&fas_out)|(S_AND&(A&B))|(S_OR&(A|B))|(S_XOR&(A^B))|(S_NOT&(~A));
endmodule

module my_ALU( A, B, R, Cout, S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT );
input [15:0] A, B;
input S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT;
output [15:0] R;
output Cout;
wire [15:0] c;
my_ALUI my_alu0( S_SUB, A[0], B[0], R[0], c[0], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
my_ALUI my_alu1( c[0], A[1], B[1], R[1], c[1], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
my_ALUI my_alu2( c[1], A[2], B[2], R[2], c[2], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
my_ALUI my_alu3( c[2], A[3], B[3], R[3], c[3], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
my_ALUI my_alu4( c[3], A[4], B[4], R[4], c[4], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
my_ALUI my_alu5( c[4], A[5], B[5], R[5], c[5], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
my_ALUI my_alu6( c[5], A[6], B[6], R[6], c[6], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
my_ALUI my_alu7( c[6], A[7], B[7], R[7], c[7], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
my_ALUI my_alu8( c[7], A[8], B[8], R[8], c[8], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
my_ALUI my_alu9( c[8], A[9], B[9], R[9], c[9], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
my_ALUI my_alu10( c[9], A[10], B[10], R[10], c[10], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
my_ALUI my_alu11( c[10], A[11], B[11], R[11], c[11], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
my_ALUI my_alu12( c[11], A[12], B[12], R[12], c[12], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
my_ALUI my_alu13( c[12], A[13], B[13], R[13], c[13], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
my_ALUI my_alu14( c[13], A[14], B[14], R[14], c[14], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
my_ALUI my_alu15( c[14], A[15], B[15], R[15], c[15], S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);

  assign Cout = c[15];
endmodule

// デコーダ
module my_decoder(IR, IsALU, IsADDI, IsADD, IsSUB, IsAND, IsOR, IsXOR, IsNOT, IsLDIn);

input [15:0] IR;
output IsALU, IsADDI, IsADD, IsSUB, IsAND, IsOR, IsXOR, IsNOT, IsLDIn;

// Bits 15-12
assign IsALU = ~IR[15]&~IR[14]&~IR[13]&~IR[12];
assign IsADDI = ~IR[15]&IR[14]&~IR[13]&~IR[12];


// Bits 7-4
assign IsADD = IR[7]&~IR[6]&IR[5]&~IR[4];
assign IsSUB = ~IR[7]&~IR[6]&IR[5]&~IR[4];
assign IsAND = IR[7]&IR[6]&~IR[5]&~IR[4];
assign IsOR = IR[7]&IR[6]&IR[5]&~IR[4];
assign IsXOR = IR[7]&IR[6]&~IR[5]&IR[4];
assign IsNOT = IR[7]&~IR[6]&IR[5]&IR[4];

// all
assign IsLDIn = ~IR[15]&~IR[14]&IR[13]&~IR[12];

endmodule


module my_registers( WN, N1, N2, WD, RD1, RD2, CK );
input [3:0] WN, N1, N2;
input [15:0] WD;
input CK;
output [15:0] RD1, RD2;
reg [15:0] registers[0:15];

always @( posedge CK ) begin
  registers[WN] <= WD;
end

assign RD1 = registers[N1];
assign RD2 = registers[N2];

initial begin
    registers[0] = 0;
    registers[1] = 1;
    registers[2] = 2; 
    registers[3] = 3;
    registers[4] = 4;
    registers[5] = 5;
    registers[6] = 6;
    registers[7] = 10; 
    registers[8] =  16'b0000000000000000;
    registers[9] =  16'b0000000000000001;
    registers[10] = 16'b0000000000000010;
    registers[11] = 16'b0000000000000011;
    registers[12] = 16'b0000000000000100;
    registers[13] = 16'b0000000000000101;
    registers[14] = 16'b0000000000000110;
    registers[15] = 16'b0000000000000111; 
end

endmodule

module my_memory( ADDR, DATA );
input [15:0] ADDR;
output [15:0] DATA;
reg [7:0] mem[0:63]; // memory 8-bit width

assign DATA  = { mem[ADDR], mem[ADDR+1] };

initial begin
    
    mem[0] = 8'b00100000;
    mem[1] = 8'b11001111;
    mem[3] = 8'b00100001;
    mem[4] = 8'b11001111;
    mem[5] = 8'b00000000;
    mem[6] = 8'b10100001;

end

endmodule

module my_CPU16v3(CK,SW,RegIn);

input CK;
input [2:0] SW;
output [15:0] RegIn;

reg [15:0] PC;

wire IsALU, IsADDI, IsADD, IsSUB, IsAND, IsOR, IsXOR, IsNOT, S_SUB, S_FAS, IsLDIn;
wire [15:0] A, B, IR, R;
wire Cout;

assign S_SUB = IsSUB;
assign S_FAS = IsADD | IsSUB;

my_registers register1( .WN(IR[11:8]), .N1(IR[11:8]), .N2(IR[3:0]), .WD(RegIn), .RD1(A), .RD2(B), .CK(CK));
my_ALU alu1( A, B, R, Cout, S_SUB, S_FAS, IsAND, IsOR, IsXOR, IsNOT );
my_decoder decoder1(IR, IsALU, IsADDI, IsADD, IsSUB, IsAND, IsOR, IsXOR, IsNOT, IsLDIn );

// The memory output is directly connected to IR
// because cpu16 dosen't have load/store, 
my_memory memory1(PC, IR); 

// fetch
always @( posedge CK ) begin
    PC <= PC+2;
end

// input for register is switch or alu result
assign RegIn = (IsLDIn == 1'b1) ? {13'b0000_0000_0000_0, SW} : R;

initial begin
    PC = 0;
end
endmodule
