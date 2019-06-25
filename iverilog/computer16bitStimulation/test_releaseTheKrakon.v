module test_my_cpu16;
reg CK;
my_CPU16v1 cpu16v1(CK);

always #10 begin
    CK <= ~CK;
end

initial begin
    $monitor( $stime, " PC=%d IR=%b A=%b B=%b R=%b Cout=%d S_SUB=%d S_FAS=%d S_AND=%d S_OR=%d S_XOR=%d S_NOT=%d", 
              cpu16v1.PC, cpu16v1.IR, cpu16v1.A, cpu16v1.B, cpu16v1.R, cpu16v1.Cout, 
              cpu16v1.S_SUB, cpu16v1.S_FAS, cpu16v1.IsAND, cpu16v1.IsOR, cpu16v1.IsXOR, cpu16v1.IsNOT );

    /// memory
    // ADD R0, R1
    #0

    CK=0;
    cpu16v1.memory1.mem[0] = 8'b0000_0000;
    cpu16v1.memory1.mem[1] = 8'b1010_0001;
    
    // SUB R2, R3
    cpu16v1.memory1.mem[2] = 8'b0000_0010;
    cpu16v1.memory1.mem[3] = 8'b0010_0011;

    // AND R0, R4
	cpu16v1.memory1.mem[4] = 8'b0000_0001;
	cpu16v1.memory1.mem[5] = 8'b1100_0100;
    // OR R5, R6
    cpu16v1.memory1.mem[6] = 8'b0000_0101;
	cpu16v1.memory1.mem[7] = 8'b1110_0110;  
    // register
    cpu16v1.register1.registers[0] = 65280;
    cpu16v1.register1.registers[1]= 257;
	cpu16v1.register1.registers[2]= 16;
	cpu16v1.register1.registers[3]= 9;
	cpu16v1.register1.registers[4]= 255;
	cpu16v1.register1.registers[5]= 43520;
	cpu16v1.register1.registers[6]= 21760;
    //<Please fill in here>   
    // add clock
    //<Please fill in here>  

    #50
   $finish;
end
endmodule
