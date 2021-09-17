module dflipflop(clk, D, q);
input clk, D;
output reg q;

always @(posedge clk) begin;
    q <= D;
end
endmodule