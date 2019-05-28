module test_my2inmux;
reg a,b,s;
wire out;
my2inmux f(.A(a), .B(b), .S(s), .R(out));
initial begin
  $monitor("%t: a = %b b = %b s = %b out = %b",$time,a,b,s,out);
  s = 0; a = 0; b = 0;
  #10 s = 0; a = 0; b = 1;
  #10 s = 0; a = 1; b = 0;
  #10 s = 0; a = 1; b = 1;
  #10 s = 1; a = 0; b = 0;
  #10 s = 1; a = 0; b = 1;
  #10 s = 1; a = 1; b = 0;
  #10 s = 1; a = 1; b = 1;

  #10 $finish;
end

endmodule // 