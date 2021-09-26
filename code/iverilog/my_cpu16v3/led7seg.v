module led7seg(I1,I2,LED,SA);
// 入出力ポートの宣言をする
input I1;
input I2;
output [7:0] LED;
output [3:0] SA;

// 4つの桁が順番に4つのLEDに対応しているので、一番右の1桁だけ0、残りはZにする 
assign SA = 4'bZZZ0;

// ここに残りの内容を書く
wire tmp = ~I1 & I2;

assign LED[0] = tmp;
assign LED[1] = 1'b0;
assign LED[2] = I1 & ~I2;
assign LED[3] = tmp;
assign LED[4] = ~I1;
assign LED[5] = ~I1 | ~I2;
assign LED[6] = I2;

// 8つの桁が順番に7つのLEDに対応し、8つ目がDecimal Pointとする
// Decimal Pointは常に消灯
assign LED[7] = 1'b1; 

endmodule
