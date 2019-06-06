module test_dflipflop();

reg clk, D;
wire q;

dflipflop dflipflop1(.clk(clk), .D(D), .q(q));

always #10 begin
    clk <= ~clk;
end

initial begin
    $monitor("%t: clk = %b, D = %b, q = %b", $time, clk, D, q);
    clk <= 0;
    D <= 1'b0;
    #10 D <= 1'b1;
    #50 D <= 1'b0;
    #70 D <= 1'b1;
    #100 
    $finish;
end
endmodule