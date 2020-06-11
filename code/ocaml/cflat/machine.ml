(* machine definition *)

let reg_ret = "%rax"

let regs_args = [| "%rdi"; "%rsi"; "%rdx"; "%rcx"; "%r8"; "%r9" |]
let regs_args_lst = Array.to_list regs_args
(* let regs_args_32 = [| "%edi"; "%esi"; "%edx"; "%ecx"; "%r10d"; "%r8d"; "%r9d" |] *)

(* note: callee-save registers, %r12-%r15, %rbx, %rbp, %rsp are not included *)
let regs_all = Array.append regs_args [| "%r10"; "%r11"; "%rax" |]
let regs_all_lst = Array.to_list regs_all
(* let regs_all_32 = Array.append regs_args [| "%r10d"; "%r11d" |] *)

let reg_ptr r = r

let reg_int =
  let h = Hashtbl.create 128 in
  List.iter (fun (r64, r32) -> Hashtbl.add h r64 r32)
    ["%rdi", "%edi";
     "%rsi", "%esi";
     "%rdx", "%edx";
     "%rcx", "%ecx";
     "%r8", "%r8d";
     "%r9", "%r9d";
     "%r10", "%r10d";
     "%r11", "%r11d";
     "%rax", "%eax" ];
  fun r -> Hashtbl.find h r
