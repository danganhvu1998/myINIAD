module test_led7seg;
reg i1,i2;
wire [7:0] led;
wire [3:0] sa;

led7seg led7seg1(.I1(i1),.I2(i2),.LED(led),.SA(sa));

initial begin
    $monitor("%t: i1 = %b, i2 = %b, sa = %b\n led\n  %b  \n%b   %b\n  %b  \n%b   %b\n  %b   %b .", $time, i1, i2, sa, led[0], led[5], led[1], led[6], led[4], led[2], led[3], led[7]);
    i1 = 1; i2 = 1;
    #10 i1 = 0; i2 = 1;
    #10 i1 = 1; i2 = 0;
    #10 i1 = 0; i2 = 0;
    $finish;
end

endmodule