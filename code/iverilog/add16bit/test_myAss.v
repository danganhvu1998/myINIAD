module test_My_Add();
    reg sub;
    reg [15:0] a, b;
    wire [15:0] r;

    my_FAS_16 ma1(.S_sub(sub), .A(a), .B(b), .R(r));

    initial begin
        sub = 1;
        $monitor("%t: a = %b, b = %b, out = %b, sub = %b", $time, a, b, r, sub);
        a = 1; b = 0; 
        #10 a = 2; b = 1;
        #10 a = 1; b = 2;
        #10 a = 1024; b = 1;
        #10 a = 1024; b = 1023;
        #10 a = 32767; b = 32768;
        $finish;
    end
endmodule