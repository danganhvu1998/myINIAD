module led7seg(I1, I2, LED, SA);
input I1,I2;
output [7:0]LED;
output [3:0]SA;

wire i1,i2;
assign SA= 4'bZZZ0;
assign i1=~I1;
assign i2=~I2;

assign LED[0]=i1 &(~i2);
assign LED[1]=0;
assign LED[2]=(~i1) &i2;
assign LED[3]=i1 &(~i2);
assign LED[4]=i1;
assign LED[5]=i1|i2;
assign LED[6]=~i2;
assign LED[7]= 1;

endmodule