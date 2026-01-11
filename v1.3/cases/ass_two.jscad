function outer_extrude_2_outline_fn(){
    return new CSG.Path2D([[182.4750368,-212.0058063],[182.9750368,-81.7558063]]).appendArc([187.975,-76.775],{"radius":5,"clockwise":true,"large":false}).appendPoint([269.175,-76.775]).appendArc([274.1748526,-81.7366134],{"radius":5,"clockwise":true,"large":false}).appendPoint([275.1748526,-211.9866134]).appendArc([270.175,-217.025],{"radius":5,"clockwise":true,"large":false}).appendPoint([187.475,-217.025]).appendArc([182.4750368,-212.0058063],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function inner_extrude_2_outline_fn(){
    return new CSG.Path2D([[188.475,-211.025],[188.975,-82.775]]).appendPoint([268.175,-82.775]).appendPoint([269.175,-211.025]).appendPoint([188.475,-211.025]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
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
            
            
        
            function main() {
                return ass_two_case_fn();
            }

        