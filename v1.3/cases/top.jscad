function outer_extrude_5_outline_fn(){
    return new CSG.Path2D([[182.4750368,-212.0058063],[182.9750368,-81.7558063]]).appendArc([187.975,-76.775],{"radius":5,"clockwise":true,"large":false}).appendPoint([269.175,-76.775]).appendArc([274.1748526,-81.7366134],{"radius":5,"clockwise":true,"large":false}).appendPoint([275.1748526,-211.9866134]).appendArc([270.175,-217.025],{"radius":5,"clockwise":true,"large":false}).appendPoint([187.475,-217.025]).appendArc([182.4750368,-212.0058063],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}


function cover_hole_extrude_5_outline_fn(){
    return new CSG.Path2D([[191.475,-112.8],[265.675,-112.8]]).appendPoint([265.675,-86.8]).appendPoint([191.475,-86.8]).appendPoint([191.475,-112.8]).close().innerToCAG()
.union(
    new CSG.Path2D([[190.475,-209.525],[266.675,-209.525]]).appendPoint([266.675,-114.275]).appendPoint([190.475,-114.275]).appendPoint([190.475,-209.525]).close().innerToCAG()
).extrude({ offset: [0, 0, 5] });
}


function board_extrude_3_outline_fn(){
    return new CSG.Path2D([[187.475,-212.025],[187.975,-81.775]]).appendPoint([269.175,-81.775]).appendPoint([270.175,-212.025]).appendPoint([187.475,-212.025]).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}




                function top_case_fn() {
                    

                // creating part 0 of case top
                let top__part_0 = outer_extrude_5_outline_fn();

                // make sure that rotations are relative
                let top__part_0_bounds = top__part_0.getBounds();
                let top__part_0_x = top__part_0_bounds[0].x + (top__part_0_bounds[1].x - top__part_0_bounds[0].x) / 2
                let top__part_0_y = top__part_0_bounds[0].y + (top__part_0_bounds[1].y - top__part_0_bounds[0].y) / 2
                top__part_0 = translate([-top__part_0_x, -top__part_0_y, 0], top__part_0);
                top__part_0 = rotate([0,0,0], top__part_0);
                top__part_0 = translate([top__part_0_x, top__part_0_y, 0], top__part_0);

                top__part_0 = translate([0,0,0], top__part_0);
                let result = top__part_0;
                
            

                // creating part 1 of case top
                let top__part_1 = cover_hole_extrude_5_outline_fn();

                // make sure that rotations are relative
                let top__part_1_bounds = top__part_1.getBounds();
                let top__part_1_x = top__part_1_bounds[0].x + (top__part_1_bounds[1].x - top__part_1_bounds[0].x) / 2
                let top__part_1_y = top__part_1_bounds[0].y + (top__part_1_bounds[1].y - top__part_1_bounds[0].y) / 2
                top__part_1 = translate([-top__part_1_x, -top__part_1_y, 0], top__part_1);
                top__part_1 = rotate([0,0,0], top__part_1);
                top__part_1 = translate([top__part_1_x, top__part_1_y, 0], top__part_1);

                top__part_1 = translate([0,0,0], top__part_1);
                result = result.subtract(top__part_1);
                
            

                // creating part 2 of case top
                let top__part_2 = board_extrude_3_outline_fn();

                // make sure that rotations are relative
                let top__part_2_bounds = top__part_2.getBounds();
                let top__part_2_x = top__part_2_bounds[0].x + (top__part_2_bounds[1].x - top__part_2_bounds[0].x) / 2
                let top__part_2_y = top__part_2_bounds[0].y + (top__part_2_bounds[1].y - top__part_2_bounds[0].y) / 2
                top__part_2 = translate([-top__part_2_x, -top__part_2_y, 0], top__part_2);
                top__part_2 = rotate([0,0,0], top__part_2);
                top__part_2 = translate([top__part_2_x, top__part_2_y, 0], top__part_2);

                top__part_2 = translate([0,0,0], top__part_2);
                result = result.subtract(top__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return top_case_fn();
            }

        