
# PlanAhead Launch Script for Post-Synthesis pin planning, created by Project Navigator

create_project -name my_cpu16v3 -dir "/home/ise/ise_ca2019/my_cpu16v3/planAhead_run_1" -part xc6slx4tqg144-3
set_property design_mode GateLvl [get_property srcset [current_run -impl]]
set_property edif_top_file "/home/ise/ise_ca2019/my_cpu16v3/cpu16controller.ngc" [ get_property srcset [ current_run ] ]
add_files -norecurse { {/home/ise/ise_ca2019/my_cpu16v3} }
set_param project.pinAheadLayout  yes
set_property target_constrs_file "cpu16controller.ucf" [current_fileset -constrset]
add_files [list {cpu16controller.ucf}] -fileset [get_property constrset [current_run]]
link_design
