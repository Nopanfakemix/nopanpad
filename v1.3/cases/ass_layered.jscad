function outer_extrude_2_outline_fn(){
    return new CSG.Path2D([[182.4750368,-212.0058063],[182.9750368,-81.7558063]]).appendArc([187.975,-76.775],{"radius":5,"clockwise":true,"large":false}).appendPoint([269.175,-76.775]).appendArc([274.1748526,-81.7366134],{"radius":5,"clockwise":true,"large":false}).appendPoint([275.1748526,-211.9866134]).appendArc([270.175,-217.025],{"radius":5,"clockwise":true,"large":false}).appendPoint([187.475,-217.025]).appendArc([182.4750368,-212.0058063],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function board_extrude_2_outline_fn(){
    return new CSG.Path2D([[187.475,-212.025],[187.975,-81.775]]).appendPoint([269.175,-81.775]).appendPoint([270.175,-212.025]).appendPoint([187.475,-212.025]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function inner_extrude_2_outline_fn(){
    return new CSG.Path2D([[188.475,-211.025],[188.975,-82.775]]).appendPoint([268.175,-82.775]).appendPoint([269.175,-211.025]).appendPoint([188.475,-211.025]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}




                function ass_one_case_fn() {
                    

                // creating part 0 of case ass_one
                let ass_one__part_0 = outer_extrude_2_outline_fn();

                // make sure that rotations are relative
                let ass_one__part_0_bounds = ass_one__part_0.getBounds();
                let ass_one__part_0_x = ass_one__part_0_bounds[0].x + (ass_one__part_0_bounds[1].x - ass_one__part_0_bounds[0].x) / 2
                let ass_one__part_0_y = ass_one__part_0_bounds[0].y + (ass_one__part_0_bounds[1].y - ass_one__part_0_bounds[0].y) / 2
                ass_one__part_0 = translate([-ass_one__part_0_x, -ass_one__part_0_y, 0], ass_one__part_0);
                ass_one__part_0 = rotate([0,0,0], ass_one__part_0);
                ass_one__part_0 = translate([ass_one__part_0_x, ass_one__part_0_y, 0], ass_one__part_0);

                ass_one__part_0 = translate([0,0,0], ass_one__part_0);
                let result = ass_one__part_0;
                
            

                // creating part 1 of case ass_one
                let ass_one__part_1 = board_extrude_2_outline_fn();

                // make sure that rotations are relative
                let ass_one__part_1_bounds = ass_one__part_1.getBounds();
                let ass_one__part_1_x = ass_one__part_1_bounds[0].x + (ass_one__part_1_bounds[1].x - ass_one__part_1_bounds[0].x) / 2
                let ass_one__part_1_y = ass_one__part_1_bounds[0].y + (ass_one__part_1_bounds[1].y - ass_one__part_1_bounds[0].y) / 2
                ass_one__part_1 = translate([-ass_one__part_1_x, -ass_one__part_1_y, 0], ass_one__part_1);
                ass_one__part_1 = rotate([0,0,0], ass_one__part_1);
                ass_one__part_1 = translate([ass_one__part_1_x, ass_one__part_1_y, 0], ass_one__part_1);

                ass_one__part_1 = translate([0,0,0], ass_one__part_1);
                result = result.subtract(ass_one__part_1);
                
            
                    return result;
                }
            
            

                function ass_two_case_fn() {
                    

                // creating part 0 of case ass_two
                let ass_two__part_0 = outer_extrude_2_outline_fn();

                // make sure that rotations are relative
                let ass_two__part_0_bounds = ass_two__part_0.getBounds();
                let ass_two__part_0_x = ass_two__part_0_bounds[0].x + (ass_two__part_0_bounds[1].x - ass_two__part_0_bounds[0].x) / 2
                let ass_two__part_0_y = ass_two__part_0_bounds[0].y + (ass_two__part_0_bounds[1].y - ass_two__part_0_bounds[0].y) / 2
                ass_two__part_0 = translate([-ass_two__part_0_x, -ass_two__part_0_y, 0], ass_two__part_0);
                ass_two__part_0 = rotate([0,0,0], ass_two__part_0);
                ass_two__part_0 = translate([ass_two__part_0_x, ass_two__part_0_y, 0], ass_two__part_0);

                ass_two__part_0 = translate([0,0,0], ass_two__part_0);
                let result = ass_two__part_0;
                
            

                // creating part 1 of case ass_two
                let ass_two__part_1 = inner_extrude_2_outline_fn();

                // make sure that rotations are relative
                let ass_two__part_1_bounds = ass_two__part_1.getBounds();
                let ass_two__part_1_x = ass_two__part_1_bounds[0].x + (ass_two__part_1_bounds[1].x - ass_two__part_1_bounds[0].x) / 2
                let ass_two__part_1_y = ass_two__part_1_bounds[0].y + (ass_two__part_1_bounds[1].y - ass_two__part_1_bounds[0].y) / 2
                ass_two__part_1 = translate([-ass_two__part_1_x, -ass_two__part_1_y, 0], ass_two__part_1);
                ass_two__part_1 = rotate([0,0,0], ass_two__part_1);
                ass_two__part_1 = translate([ass_two__part_1_x, ass_two__part_1_y, 0], ass_two__part_1);

                ass_two__part_1 = translate([0,0,0], ass_two__part_1);
                result = result.subtract(ass_two__part_1);
                
            
                    return result;
                }
            
            

                function master_class_in_blasting_ass_case_fn() {
                    

                // creating part 0 of case master_class_in_blasting_ass
                let master_class_in_blasting_ass__part_0 = outer_extrude_2_outline_fn();

                // make sure that rotations are relative
                let master_class_in_blasting_ass__part_0_bounds = master_class_in_blasting_ass__part_0.getBounds();
                let master_class_in_blasting_ass__part_0_x = master_class_in_blasting_ass__part_0_bounds[0].x + (master_class_in_blasting_ass__part_0_bounds[1].x - master_class_in_blasting_ass__part_0_bounds[0].x) / 2
                let master_class_in_blasting_ass__part_0_y = master_class_in_blasting_ass__part_0_bounds[0].y + (master_class_in_blasting_ass__part_0_bounds[1].y - master_class_in_blasting_ass__part_0_bounds[0].y) / 2
                master_class_in_blasting_ass__part_0 = translate([-master_class_in_blasting_ass__part_0_x, -master_class_in_blasting_ass__part_0_y, 0], master_class_in_blasting_ass__part_0);
                master_class_in_blasting_ass__part_0 = rotate([0,0,0], master_class_in_blasting_ass__part_0);
                master_class_in_blasting_ass__part_0 = translate([master_class_in_blasting_ass__part_0_x, master_class_in_blasting_ass__part_0_y, 0], master_class_in_blasting_ass__part_0);

                master_class_in_blasting_ass__part_0 = translate([0,0,0], master_class_in_blasting_ass__part_0);
                let result = master_class_in_blasting_ass__part_0;
                
            
                    return result;
                }
            
            

                function ass_layered_case_fn() {
                    

                // creating part 0 of case ass_layered
                let ass_layered__part_0 = ass_one_case_fn();

                // make sure that rotations are relative
                let ass_layered__part_0_bounds = ass_layered__part_0.getBounds();
                let ass_layered__part_0_x = ass_layered__part_0_bounds[0].x + (ass_layered__part_0_bounds[1].x - ass_layered__part_0_bounds[0].x) / 2
                let ass_layered__part_0_y = ass_layered__part_0_bounds[0].y + (ass_layered__part_0_bounds[1].y - ass_layered__part_0_bounds[0].y) / 2
                ass_layered__part_0 = translate([-ass_layered__part_0_x, -ass_layered__part_0_y, 0], ass_layered__part_0);
                ass_layered__part_0 = rotate([0,0,0], ass_layered__part_0);
                ass_layered__part_0 = translate([ass_layered__part_0_x, ass_layered__part_0_y, 0], ass_layered__part_0);

                ass_layered__part_0 = translate([0,0,0], ass_layered__part_0);
                let result = ass_layered__part_0;
                
            

                // creating part 1 of case ass_layered
                let ass_layered__part_1 = ass_two_case_fn();

                // make sure that rotations are relative
                let ass_layered__part_1_bounds = ass_layered__part_1.getBounds();
                let ass_layered__part_1_x = ass_layered__part_1_bounds[0].x + (ass_layered__part_1_bounds[1].x - ass_layered__part_1_bounds[0].x) / 2
                let ass_layered__part_1_y = ass_layered__part_1_bounds[0].y + (ass_layered__part_1_bounds[1].y - ass_layered__part_1_bounds[0].y) / 2
                ass_layered__part_1 = translate([-ass_layered__part_1_x, -ass_layered__part_1_y, 0], ass_layered__part_1);
                ass_layered__part_1 = rotate([0,0,0], ass_layered__part_1);
                ass_layered__part_1 = translate([ass_layered__part_1_x, ass_layered__part_1_y, 0], ass_layered__part_1);

                ass_layered__part_1 = translate([0,0,-3], ass_layered__part_1);
                result = result.union(ass_layered__part_1);
                
            

                // creating part 2 of case ass_layered
                let ass_layered__part_2 = ass_two_case_fn();

                // make sure that rotations are relative
                let ass_layered__part_2_bounds = ass_layered__part_2.getBounds();
                let ass_layered__part_2_x = ass_layered__part_2_bounds[0].x + (ass_layered__part_2_bounds[1].x - ass_layered__part_2_bounds[0].x) / 2
                let ass_layered__part_2_y = ass_layered__part_2_bounds[0].y + (ass_layered__part_2_bounds[1].y - ass_layered__part_2_bounds[0].y) / 2
                ass_layered__part_2 = translate([-ass_layered__part_2_x, -ass_layered__part_2_y, 0], ass_layered__part_2);
                ass_layered__part_2 = rotate([0,0,0], ass_layered__part_2);
                ass_layered__part_2 = translate([ass_layered__part_2_x, ass_layered__part_2_y, 0], ass_layered__part_2);

                ass_layered__part_2 = translate([0,0,-6], ass_layered__part_2);
                result = result.union(ass_layered__part_2);
                
            

                // creating part 3 of case ass_layered
                let ass_layered__part_3 = ass_two_case_fn();

                // make sure that rotations are relative
                let ass_layered__part_3_bounds = ass_layered__part_3.getBounds();
                let ass_layered__part_3_x = ass_layered__part_3_bounds[0].x + (ass_layered__part_3_bounds[1].x - ass_layered__part_3_bounds[0].x) / 2
                let ass_layered__part_3_y = ass_layered__part_3_bounds[0].y + (ass_layered__part_3_bounds[1].y - ass_layered__part_3_bounds[0].y) / 2
                ass_layered__part_3 = translate([-ass_layered__part_3_x, -ass_layered__part_3_y, 0], ass_layered__part_3);
                ass_layered__part_3 = rotate([0,0,0], ass_layered__part_3);
                ass_layered__part_3 = translate([ass_layered__part_3_x, ass_layered__part_3_y, 0], ass_layered__part_3);

                ass_layered__part_3 = translate([0,0,-9], ass_layered__part_3);
                result = result.union(ass_layered__part_3);
                
            

                // creating part 4 of case ass_layered
                let ass_layered__part_4 = ass_two_case_fn();

                // make sure that rotations are relative
                let ass_layered__part_4_bounds = ass_layered__part_4.getBounds();
                let ass_layered__part_4_x = ass_layered__part_4_bounds[0].x + (ass_layered__part_4_bounds[1].x - ass_layered__part_4_bounds[0].x) / 2
                let ass_layered__part_4_y = ass_layered__part_4_bounds[0].y + (ass_layered__part_4_bounds[1].y - ass_layered__part_4_bounds[0].y) / 2
                ass_layered__part_4 = translate([-ass_layered__part_4_x, -ass_layered__part_4_y, 0], ass_layered__part_4);
                ass_layered__part_4 = rotate([0,0,0], ass_layered__part_4);
                ass_layered__part_4 = translate([ass_layered__part_4_x, ass_layered__part_4_y, 0], ass_layered__part_4);

                ass_layered__part_4 = translate([0,0,-12], ass_layered__part_4);
                result = result.union(ass_layered__part_4);
                
            

                // creating part 5 of case ass_layered
                let ass_layered__part_5 = ass_two_case_fn();

                // make sure that rotations are relative
                let ass_layered__part_5_bounds = ass_layered__part_5.getBounds();
                let ass_layered__part_5_x = ass_layered__part_5_bounds[0].x + (ass_layered__part_5_bounds[1].x - ass_layered__part_5_bounds[0].x) / 2
                let ass_layered__part_5_y = ass_layered__part_5_bounds[0].y + (ass_layered__part_5_bounds[1].y - ass_layered__part_5_bounds[0].y) / 2
                ass_layered__part_5 = translate([-ass_layered__part_5_x, -ass_layered__part_5_y, 0], ass_layered__part_5);
                ass_layered__part_5 = rotate([0,0,0], ass_layered__part_5);
                ass_layered__part_5 = translate([ass_layered__part_5_x, ass_layered__part_5_y, 0], ass_layered__part_5);

                ass_layered__part_5 = translate([0,0,-15], ass_layered__part_5);
                result = result.union(ass_layered__part_5);
                
            

                // creating part 6 of case ass_layered
                let ass_layered__part_6 = ass_two_case_fn();

                // make sure that rotations are relative
                let ass_layered__part_6_bounds = ass_layered__part_6.getBounds();
                let ass_layered__part_6_x = ass_layered__part_6_bounds[0].x + (ass_layered__part_6_bounds[1].x - ass_layered__part_6_bounds[0].x) / 2
                let ass_layered__part_6_y = ass_layered__part_6_bounds[0].y + (ass_layered__part_6_bounds[1].y - ass_layered__part_6_bounds[0].y) / 2
                ass_layered__part_6 = translate([-ass_layered__part_6_x, -ass_layered__part_6_y, 0], ass_layered__part_6);
                ass_layered__part_6 = rotate([0,0,0], ass_layered__part_6);
                ass_layered__part_6 = translate([ass_layered__part_6_x, ass_layered__part_6_y, 0], ass_layered__part_6);

                ass_layered__part_6 = translate([0,0,-18], ass_layered__part_6);
                result = result.union(ass_layered__part_6);
                
            

                // creating part 7 of case ass_layered
                let ass_layered__part_7 = master_class_in_blasting_ass_case_fn();

                // make sure that rotations are relative
                let ass_layered__part_7_bounds = ass_layered__part_7.getBounds();
                let ass_layered__part_7_x = ass_layered__part_7_bounds[0].x + (ass_layered__part_7_bounds[1].x - ass_layered__part_7_bounds[0].x) / 2
                let ass_layered__part_7_y = ass_layered__part_7_bounds[0].y + (ass_layered__part_7_bounds[1].y - ass_layered__part_7_bounds[0].y) / 2
                ass_layered__part_7 = translate([-ass_layered__part_7_x, -ass_layered__part_7_y, 0], ass_layered__part_7);
                ass_layered__part_7 = rotate([0,0,0], ass_layered__part_7);
                ass_layered__part_7 = translate([ass_layered__part_7_x, ass_layered__part_7_y, 0], ass_layered__part_7);

                ass_layered__part_7 = translate([0,0,-21], ass_layered__part_7);
                result = result.union(ass_layered__part_7);
                
            

                // creating part 8 of case ass_layered
                let ass_layered__part_8 = master_class_in_blasting_ass_case_fn();

                // make sure that rotations are relative
                let ass_layered__part_8_bounds = ass_layered__part_8.getBounds();
                let ass_layered__part_8_x = ass_layered__part_8_bounds[0].x + (ass_layered__part_8_bounds[1].x - ass_layered__part_8_bounds[0].x) / 2
                let ass_layered__part_8_y = ass_layered__part_8_bounds[0].y + (ass_layered__part_8_bounds[1].y - ass_layered__part_8_bounds[0].y) / 2
                ass_layered__part_8 = translate([-ass_layered__part_8_x, -ass_layered__part_8_y, 0], ass_layered__part_8);
                ass_layered__part_8 = rotate([0,0,0], ass_layered__part_8);
                ass_layered__part_8 = translate([ass_layered__part_8_x, ass_layered__part_8_y, 0], ass_layered__part_8);

                ass_layered__part_8 = translate([0,0,-24], ass_layered__part_8);
                result = result.union(ass_layered__part_8);
                
            

                // creating part 9 of case ass_layered
                let ass_layered__part_9 = master_class_in_blasting_ass_case_fn();

                // make sure that rotations are relative
                let ass_layered__part_9_bounds = ass_layered__part_9.getBounds();
                let ass_layered__part_9_x = ass_layered__part_9_bounds[0].x + (ass_layered__part_9_bounds[1].x - ass_layered__part_9_bounds[0].x) / 2
                let ass_layered__part_9_y = ass_layered__part_9_bounds[0].y + (ass_layered__part_9_bounds[1].y - ass_layered__part_9_bounds[0].y) / 2
                ass_layered__part_9 = translate([-ass_layered__part_9_x, -ass_layered__part_9_y, 0], ass_layered__part_9);
                ass_layered__part_9 = rotate([0,0,0], ass_layered__part_9);
                ass_layered__part_9 = translate([ass_layered__part_9_x, ass_layered__part_9_y, 0], ass_layered__part_9);

                ass_layered__part_9 = translate([0,0,-27], ass_layered__part_9);
                result = result.union(ass_layered__part_9);
                
            

                // creating part 10 of case ass_layered
                let ass_layered__part_10 = master_class_in_blasting_ass_case_fn();

                // make sure that rotations are relative
                let ass_layered__part_10_bounds = ass_layered__part_10.getBounds();
                let ass_layered__part_10_x = ass_layered__part_10_bounds[0].x + (ass_layered__part_10_bounds[1].x - ass_layered__part_10_bounds[0].x) / 2
                let ass_layered__part_10_y = ass_layered__part_10_bounds[0].y + (ass_layered__part_10_bounds[1].y - ass_layered__part_10_bounds[0].y) / 2
                ass_layered__part_10 = translate([-ass_layered__part_10_x, -ass_layered__part_10_y, 0], ass_layered__part_10);
                ass_layered__part_10 = rotate([0,0,0], ass_layered__part_10);
                ass_layered__part_10 = translate([ass_layered__part_10_x, ass_layered__part_10_y, 0], ass_layered__part_10);

                ass_layered__part_10 = translate([0,0,-30], ass_layered__part_10);
                result = result.union(ass_layered__part_10);
                
            

                // creating part 11 of case ass_layered
                let ass_layered__part_11 = master_class_in_blasting_ass_case_fn();

                // make sure that rotations are relative
                let ass_layered__part_11_bounds = ass_layered__part_11.getBounds();
                let ass_layered__part_11_x = ass_layered__part_11_bounds[0].x + (ass_layered__part_11_bounds[1].x - ass_layered__part_11_bounds[0].x) / 2
                let ass_layered__part_11_y = ass_layered__part_11_bounds[0].y + (ass_layered__part_11_bounds[1].y - ass_layered__part_11_bounds[0].y) / 2
                ass_layered__part_11 = translate([-ass_layered__part_11_x, -ass_layered__part_11_y, 0], ass_layered__part_11);
                ass_layered__part_11 = rotate([0,0,0], ass_layered__part_11);
                ass_layered__part_11 = translate([ass_layered__part_11_x, ass_layered__part_11_y, 0], ass_layered__part_11);

                ass_layered__part_11 = translate([0,0,-33], ass_layered__part_11);
                result = result.union(ass_layered__part_11);
                
            

                // creating part 12 of case ass_layered
                let ass_layered__part_12 = master_class_in_blasting_ass_case_fn();

                // make sure that rotations are relative
                let ass_layered__part_12_bounds = ass_layered__part_12.getBounds();
                let ass_layered__part_12_x = ass_layered__part_12_bounds[0].x + (ass_layered__part_12_bounds[1].x - ass_layered__part_12_bounds[0].x) / 2
                let ass_layered__part_12_y = ass_layered__part_12_bounds[0].y + (ass_layered__part_12_bounds[1].y - ass_layered__part_12_bounds[0].y) / 2
                ass_layered__part_12 = translate([-ass_layered__part_12_x, -ass_layered__part_12_y, 0], ass_layered__part_12);
                ass_layered__part_12 = rotate([0,0,0], ass_layered__part_12);
                ass_layered__part_12 = translate([ass_layered__part_12_x, ass_layered__part_12_y, 0], ass_layered__part_12);

                ass_layered__part_12 = translate([0,0,-36], ass_layered__part_12);
                result = result.union(ass_layered__part_12);
                
            

                // creating part 13 of case ass_layered
                let ass_layered__part_13 = master_class_in_blasting_ass_case_fn();

                // make sure that rotations are relative
                let ass_layered__part_13_bounds = ass_layered__part_13.getBounds();
                let ass_layered__part_13_x = ass_layered__part_13_bounds[0].x + (ass_layered__part_13_bounds[1].x - ass_layered__part_13_bounds[0].x) / 2
                let ass_layered__part_13_y = ass_layered__part_13_bounds[0].y + (ass_layered__part_13_bounds[1].y - ass_layered__part_13_bounds[0].y) / 2
                ass_layered__part_13 = translate([-ass_layered__part_13_x, -ass_layered__part_13_y, 0], ass_layered__part_13);
                ass_layered__part_13 = rotate([0,0,0], ass_layered__part_13);
                ass_layered__part_13 = translate([ass_layered__part_13_x, ass_layered__part_13_y, 0], ass_layered__part_13);

                ass_layered__part_13 = translate([0,0,-39], ass_layered__part_13);
                result = result.union(ass_layered__part_13);
                
            

                // creating part 14 of case ass_layered
                let ass_layered__part_14 = master_class_in_blasting_ass_case_fn();

                // make sure that rotations are relative
                let ass_layered__part_14_bounds = ass_layered__part_14.getBounds();
                let ass_layered__part_14_x = ass_layered__part_14_bounds[0].x + (ass_layered__part_14_bounds[1].x - ass_layered__part_14_bounds[0].x) / 2
                let ass_layered__part_14_y = ass_layered__part_14_bounds[0].y + (ass_layered__part_14_bounds[1].y - ass_layered__part_14_bounds[0].y) / 2
                ass_layered__part_14 = translate([-ass_layered__part_14_x, -ass_layered__part_14_y, 0], ass_layered__part_14);
                ass_layered__part_14 = rotate([0,0,0], ass_layered__part_14);
                ass_layered__part_14 = translate([ass_layered__part_14_x, ass_layered__part_14_y, 0], ass_layered__part_14);

                ass_layered__part_14 = translate([0,0,-42], ass_layered__part_14);
                result = result.union(ass_layered__part_14);
                
            
                    return result;
                }
            
            
        
            function main() {
                return ass_layered_case_fn();
            }

        