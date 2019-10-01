module counter(clk, res, q);
input clk, res;
output reg [3:0] q;

always @(posedge clk) begin;
    if(res == 1'b1)
        q <= 4'b0000;
    else 
        q <= q + 4'b0001;
end
endmodule