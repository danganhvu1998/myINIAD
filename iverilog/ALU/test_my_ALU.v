module test_My_ALU();
    reg S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT;
    reg [15:0] A, B;
    wire [15:0] R;

    my_ALU alu1( A, B, R, S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT );

    initial begin
        $monitor( $stime, " A=%b B=%b R=%b S_SUB=%d S_FAS=%d S_AND=%d S_OR=%d S_XOR=%d S_NOT=%d", A, B, R, S_SUB, S_FAS, S_AND, S_OR, S_XOR, S_NOT );
            S_SUB <= 1'b0; S_FAS <= 1'b0; S_AND <= 1'b0; S_OR <= 1'b0; S_XOR <= 1'b0; S_NOT <= 1'b0;
            S_FAS <= 1'b1;
            A <= 65280; B <= 257; 
            #10 A <= 16; B <= 9; S_SUB <= 1'b1; 
	        #10 A <= 65280; B <= 255; S_SUB <= 1'b0; S_FAS <= 1'b0; S_AND <= 1'b1;
	        #10 A <= 43520; B <= 21760; S_AND <= 1'b0; S_OR <= 1'b1; 
        $finish;
    end
endmodule