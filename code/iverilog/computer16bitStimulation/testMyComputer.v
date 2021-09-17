module test_My_ALU();
    reg [15:0] A, B, IR;
    wire IsALU, S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT;
    wire [15:0] R;
    my_CPU16v0 cpu16v0(IR);

    initial begin
        $monitor( $stime, " CK=%b PK=%d IR=%b A=%b B=%b R=%b Cout=%d S_SUB=%d S_FAS=%d S_AND=%d S_OR=%d S_XOR=%d S_NOT", 
            CK, cpu16v1.PC, cpu16v0.IR,cpu16v0.A, cpu16v0.B, cpu16v0.R, cpu16v0.Cout, 
            cpu16v0.S_SUB, cpu16v0.S_FAS, cpu16v0.IsAND, cpu16v0.IsOR, cpu16v0.IsXOR, cpu16v0.IsNOT );
        cpu16v0.register1.registers[0] = 65280;
        cpu16v0.register1.registers[1] = 257;

        IR <= 16'b0000_0000_1010_0001; 
        #10
        cpu16v0.register1.registers[0] = 16;
        cpu16v0.register1.registers[1] = 9;
        IR <= 16'b0000_0000_0010_0001;
        #10
        cpu16v0.register1.registers[0] = 65280;
        cpu16v0.register1.registers[1] = 257;
        IR <= 16'b0000_0000_1100_0001;
        #10
        cpu16v0.register1.registers[0] = 43520;
        cpu16v0.register1.registers[1] = 21760;
        IR <= 16'b0000_0000_1110_0001;
        $finish;
    end
endmodule