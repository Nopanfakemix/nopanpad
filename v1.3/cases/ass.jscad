function outer_extrude_30_outline_fn(){
    return new CSG.Path2D([[182.4750368,-212.0058063],[182.9750368,-81.7558063]]).appendArc([187.975,-76.775],{"radius":5,"clockwise":true,"large":false}).appendPoint([269.175,-76.775]).appendArc([274.1748526,-81.7366134],{"radius":5,"clockwise":true,"large":false}).appendPoint([275.1748526,-211.9866134]).appendArc([270.175,-217.025],{"radius":5,"clockwise":true,"large":false}).appendPoint([187.475,-217.025]).appendArc([182.4750368,-212.0058063],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 30] });
}


function inner_extrude_14_outline_fn(){
    return new CSG.Path2D([[188.475,-211.025],[188.975,-82.775]]).appendPoint([268.175,-82.775]).appendPoint([269.175,-211.025]).appendPoint([188.475,-211.025]).close().innerToCAG()
.extrude({ offset: [0, 0, 14] });
}


function board_extrude_2_outline_fn(){
    return new CSG.Path2D([[187.475,-212.025],[187.975,-81.775]]).appendPoint([269.175,-81.775]).appendPoint([270.175,-212.025]).appendPoint([187.475,-212.025]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function cutter_extrude_20_outline_fn(){
    return new CSG.Path2D([[119.05,-280.95],[319.05,-280.95]]).appendPoint([319.05,-80.95]).appendPoint([119.05,-80.95]).appendPoint([119.05,-280.95]).close().innerToCAG()
.extrude({ offset: [0, 0, 20] });
}




                function ass_case_fn() {
                    

                // creating part 0 of case ass
                let ass__part_0 = outer_extrude_30_outline_fn();

                // make sure that rotations are relative
                let ass__part_0_bounds = ass__part_0.getBounds();
                let ass__part_0_x = ass__part_0_bounds[0].x + (ass__part_0_bounds[1].x - ass__part_0_bounds[0].x) / 2
                let ass__part_0_y = ass__part_0_bounds[0].y + (ass__part_0_bounds[1].y - ass__part_0_bounds[0].y) / 2
                ass__part_0 = translate([-ass__part_0_x, -ass__part_0_y, 0], ass__part_0);
                ass__part_0 = rotate([0,0,0], ass__part_0);
                ass__part_0 = translate([ass__part_0_x, ass__part_0_y, 0], ass__part_0);

                ass__part_0 = translate([0,0,-55], ass__part_0);
                let result = ass__part_0;
                
            

                // creating part 1 of case ass
                let ass__part_1 = inner_extrude_14_outline_fn();

                // make sure that rotations are relative
                let ass__part_1_bounds = ass__part_1.getBounds();
                let ass__part_1_x = ass__part_1_bounds[0].x + (ass__part_1_bounds[1].x - ass__part_1_bounds[0].x) / 2
                let ass__part_1_y = ass__part_1_bounds[0].y + (ass__part_1_bounds[1].y - ass__part_1_bounds[0].y) / 2
                ass__part_1 = translate([-ass__part_1_x, -ass__part_1_y, 0], ass__part_1);
                ass__part_1 = rotate([0,0,0], ass__part_1);
                ass__part_1 = translate([ass__part_1_x, ass__part_1_y, 0], ass__part_1);

                ass__part_1 = translate([0,0,-39], ass__part_1);
                result = result.subtract(ass__part_1);
                
            

                // creating part 2 of case ass
                let ass__part_2 = board_extrude_2_outline_fn();

                // make sure that rotations are relative
                let ass__part_2_bounds = ass__part_2.getBounds();
                let ass__part_2_x = ass__part_2_bounds[0].x + (ass__part_2_bounds[1].x - ass__part_2_bounds[0].x) / 2
                let ass__part_2_y = ass__part_2_bounds[0].y + (ass__part_2_bounds[1].y - ass__part_2_bounds[0].y) / 2
                ass__part_2 = translate([-ass__part_2_x, -ass__part_2_y, 0], ass__part_2);
                ass__part_2 = rotate([0,0,0], ass__part_2);
                ass__part_2 = translate([ass__part_2_x, ass__part_2_y, 0], ass__part_2);

                ass__part_2 = translate([0,0,-27], ass__part_2);
                result = result.subtract(ass__part_2);
                
            

                // creating part 3 of case ass
                let ass__part_3 = cutter_extrude_20_outline_fn();

                // make sure that rotations are relative
                let ass__part_3_bounds = ass__part_3.getBounds();
                let ass__part_3_x = ass__part_3_bounds[0].x + (ass__part_3_bounds[1].x - ass__part_3_bounds[0].x) / 2
                let ass__part_3_y = ass__part_3_bounds[0].y + (ass__part_3_bounds[1].y - ass__part_3_bounds[0].y) / 2
                ass__part_3 = translate([-ass__part_3_x, -ass__part_3_y, 0], ass__part_3);
                ass__part_3 = rotate([-5,0,0], ass__part_3);
                ass__part_3 = translate([ass__part_3_x, ass__part_3_y, 0], ass__part_3);

                ass__part_3 = translate([0,20,-68], ass__part_3);
                result = result.subtract(ass__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return ass_case_fn();
            }

        