function outer_extrude_2_outline_fn(){
    return new CSG.Path2D([[182.4750368,-212.0058063],[182.9750368,-81.7558063]]).appendArc([187.975,-76.775],{"radius":5,"clockwise":true,"large":false}).appendPoint([269.175,-76.775]).appendArc([274.1748526,-81.7366134],{"radius":5,"clockwise":true,"large":false}).appendPoint([275.1748526,-211.9866134]).appendArc([270.175,-217.025],{"radius":5,"clockwise":true,"large":false}).appendPoint([187.475,-217.025]).appendArc([182.4750368,-212.0058063],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function cover_hole_extrude_8_outline_fn(){
    return new CSG.Path2D([[191.475,-112.8],[265.675,-112.8]]).appendPoint([265.675,-86.8]).appendPoint([191.475,-86.8]).appendPoint([191.475,-112.8]).close().innerToCAG()
.union(
    new CSG.Path2D([[190.475,-209.525],[266.675,-209.525]]).appendPoint([266.675,-114.275]).appendPoint([190.475,-114.275]).appendPoint([190.475,-209.525]).close().innerToCAG()
).extrude({ offset: [0, 0, 8] });
}


function board_extrude_5_outline_fn(){
    return new CSG.Path2D([[187.475,-212.025],[187.975,-81.775]]).appendPoint([269.175,-81.775]).appendPoint([270.175,-212.025]).appendPoint([187.475,-212.025]).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}




                function top_layered_case_fn() {
                    

                // creating part 0 of case top_layered
                let top_layered__part_0 = outer_extrude_2_outline_fn();

                // make sure that rotations are relative
                let top_layered__part_0_bounds = top_layered__part_0.getBounds();
                let top_layered__part_0_x = top_layered__part_0_bounds[0].x + (top_layered__part_0_bounds[1].x - top_layered__part_0_bounds[0].x) / 2
                let top_layered__part_0_y = top_layered__part_0_bounds[0].y + (top_layered__part_0_bounds[1].y - top_layered__part_0_bounds[0].y) / 2
                top_layered__part_0 = translate([-top_layered__part_0_x, -top_layered__part_0_y, 0], top_layered__part_0);
                top_layered__part_0 = rotate([0,0,0], top_layered__part_0);
                top_layered__part_0 = translate([top_layered__part_0_x, top_layered__part_0_y, 0], top_layered__part_0);

                top_layered__part_0 = translate([0,0,0], top_layered__part_0);
                let result = top_layered__part_0;
                
            

                // creating part 1 of case top_layered
                let top_layered__part_1 = outer_extrude_2_outline_fn();

                // make sure that rotations are relative
                let top_layered__part_1_bounds = top_layered__part_1.getBounds();
                let top_layered__part_1_x = top_layered__part_1_bounds[0].x + (top_layered__part_1_bounds[1].x - top_layered__part_1_bounds[0].x) / 2
                let top_layered__part_1_y = top_layered__part_1_bounds[0].y + (top_layered__part_1_bounds[1].y - top_layered__part_1_bounds[0].y) / 2
                top_layered__part_1 = translate([-top_layered__part_1_x, -top_layered__part_1_y, 0], top_layered__part_1);
                top_layered__part_1 = rotate([0,0,0], top_layered__part_1);
                top_layered__part_1 = translate([top_layered__part_1_x, top_layered__part_1_y, 0], top_layered__part_1);

                top_layered__part_1 = translate([0,0,3], top_layered__part_1);
                result = result.union(top_layered__part_1);
                
            

                // creating part 2 of case top_layered
                let top_layered__part_2 = outer_extrude_2_outline_fn();

                // make sure that rotations are relative
                let top_layered__part_2_bounds = top_layered__part_2.getBounds();
                let top_layered__part_2_x = top_layered__part_2_bounds[0].x + (top_layered__part_2_bounds[1].x - top_layered__part_2_bounds[0].x) / 2
                let top_layered__part_2_y = top_layered__part_2_bounds[0].y + (top_layered__part_2_bounds[1].y - top_layered__part_2_bounds[0].y) / 2
                top_layered__part_2 = translate([-top_layered__part_2_x, -top_layered__part_2_y, 0], top_layered__part_2);
                top_layered__part_2 = rotate([0,0,0], top_layered__part_2);
                top_layered__part_2 = translate([top_layered__part_2_x, top_layered__part_2_y, 0], top_layered__part_2);

                top_layered__part_2 = translate([0,0,6], top_layered__part_2);
                result = result.union(top_layered__part_2);
                
            

                // creating part 3 of case top_layered
                let top_layered__part_3 = cover_hole_extrude_8_outline_fn();

                // make sure that rotations are relative
                let top_layered__part_3_bounds = top_layered__part_3.getBounds();
                let top_layered__part_3_x = top_layered__part_3_bounds[0].x + (top_layered__part_3_bounds[1].x - top_layered__part_3_bounds[0].x) / 2
                let top_layered__part_3_y = top_layered__part_3_bounds[0].y + (top_layered__part_3_bounds[1].y - top_layered__part_3_bounds[0].y) / 2
                top_layered__part_3 = translate([-top_layered__part_3_x, -top_layered__part_3_y, 0], top_layered__part_3);
                top_layered__part_3 = rotate([0,0,0], top_layered__part_3);
                top_layered__part_3 = translate([top_layered__part_3_x, top_layered__part_3_y, 0], top_layered__part_3);

                top_layered__part_3 = translate([0,0,0], top_layered__part_3);
                result = result.subtract(top_layered__part_3);
                
            

                // creating part 4 of case top_layered
                let top_layered__part_4 = board_extrude_5_outline_fn();

                // make sure that rotations are relative
                let top_layered__part_4_bounds = top_layered__part_4.getBounds();
                let top_layered__part_4_x = top_layered__part_4_bounds[0].x + (top_layered__part_4_bounds[1].x - top_layered__part_4_bounds[0].x) / 2
                let top_layered__part_4_y = top_layered__part_4_bounds[0].y + (top_layered__part_4_bounds[1].y - top_layered__part_4_bounds[0].y) / 2
                top_layered__part_4 = translate([-top_layered__part_4_x, -top_layered__part_4_y, 0], top_layered__part_4);
                top_layered__part_4 = rotate([0,0,0], top_layered__part_4);
                top_layered__part_4 = translate([top_layered__part_4_x, top_layered__part_4_y, 0], top_layered__part_4);

                top_layered__part_4 = translate([0,0,0], top_layered__part_4);
                result = result.subtract(top_layered__part_4);
                
            
                    return result;
                }
            
            
        
            function main() {
                return top_layered_case_fn();
            }

        