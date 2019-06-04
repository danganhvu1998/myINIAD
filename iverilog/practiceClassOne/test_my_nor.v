module test_my_nor;
    reg a, b;
    wire out;

    my_nor ma2(.A(a), .B(b), .Y(out));

    initial begin
        $dumpfile("test_my_nor.vcd");
        $dumpvars(0, test_my_nor);
        $monitor("%t: a = %b, b = %b, out = %b", $time, a, b, out);
        a = 0; b = 0;
        #10 b = 1;
        #10 a = 1;b = 0;
        #10 a = 1;b = 1;
        $finish;
    end
endmodule