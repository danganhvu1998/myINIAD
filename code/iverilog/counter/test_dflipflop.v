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
    #30 D <= 1'b0;
    #30 D <= 1'b1;
    #30
    $finish;
end
endmodule