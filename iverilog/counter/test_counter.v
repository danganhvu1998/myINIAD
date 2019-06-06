module test_counter();

reg clk, res;
wire [3:0] out;

counter counter1(.clk(clk), .res(res), .q(out));
always #10 begin
    clk <= ~clk;
end

initial begin
    $monitor("%t: clk = %b, res = %b, out = %b", $time, clk, res, out);
    clk <= 10;
    res <= 1'b1;
    #20 res <= 1'b0;
    #100 
    $finish;
end
endmodule