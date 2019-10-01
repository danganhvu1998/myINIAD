module my2inmux(A,B,S,R);
input A,B,S;
output R;
assign R = (A&(~S))|(B&S);

endmodule // 