module test_My_ALU();
    reg [15:0] A, B, IR;
    wire IsALU, S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT;
    wire [15:0] R;

    my_decoder decoder1(IR, IsALU, S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);
    my_ALU alu1( A, B, R, S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT);

    initial begin
        $monitor( $stime, " IR=%b A=%b B=%b R=%b S_SUB=%d S_FAS=%d S_AND=%d S_OR=%d S_XOR=%d S_NOT=%d", IR, A, B, R, S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT );
        IR = 16'b0000_xxxx_1010_xxxx;
        A <= 65280; B <= 257; 
        #10
        IR = 16'b0000_xxxx_0010_xxxx;
        A <= 16; B <= 9; 
        #10
        IR = 16'b0000_xxxx_1100_xxxx;
        A <= 65280; B <= 255; 
        #10
        IR = 16'b0000_xxxx_1110_xxxx;
        A <= 43520; B <= 21760;
        $finish;
    end
endmodule