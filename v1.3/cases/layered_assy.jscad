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


function key_plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[187.475,-212.025],[187.975,-81.775]]).appendPoint([269.175,-81.775]).appendPoint([270.175,-212.025]).appendPoint([187.475,-212.025]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[250.15,-130.8],[264.15,-130.8]]).appendPoint([264.15,-116.8]).appendPoint([250.15,-116.8]).appendPoint([250.15,-130.8]).close().innerToCAG()
.union(
    new CSG.Path2D([[250.15,-149.85],[264.15,-149.85]]).appendPoint([264.15,-135.85]).appendPoint([250.15,-135.85]).appendPoint([250.15,-149.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[250.15,-168.9],[264.15,-168.9]]).appendPoint([264.15,-154.9]).appendPoint([250.15,-154.9]).appendPoint([250.15,-168.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[250.15,-197.475],[264.15,-197.475]]).appendPoint([264.15,-183.475]).appendPoint([250.15,-183.475]).appendPoint([250.15,-197.475]).close().innerToCAG()
).union(
    new CSG.Path2D([[231.1,-130.8],[245.1,-130.8]]).appendPoint([245.1,-116.8]).appendPoint([231.1,-116.8]).appendPoint([231.1,-130.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[231.1,-149.85],[245.1,-149.85]]).appendPoint([245.1,-135.85]).appendPoint([231.1,-135.85]).appendPoint([231.1,-149.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[231.1,-168.9],[245.1,-168.9]]).appendPoint([245.1,-154.9]).appendPoint([231.1,-154.9]).appendPoint([231.1,-168.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[231.1,-187.95],[245.1,-187.95]]).appendPoint([245.1,-173.95]).appendPoint([231.1,-173.95]).appendPoint([231.1,-187.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[231.1,-207],[245.1,-207]]).appendPoint([245.1,-193]).appendPoint([231.1,-193]).appendPoint([231.1,-207]).close().innerToCAG()
).union(
    new CSG.Path2D([[212.05,-130.8],[226.05,-130.8]]).appendPoint([226.05,-116.8]).appendPoint([212.05,-116.8]).appendPoint([212.05,-130.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[212.05,-149.85],[226.05,-149.85]]).appendPoint([226.05,-135.85]).appendPoint([212.05,-135.85]).appendPoint([212.05,-149.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[212.05,-168.9],[226.05,-168.9]]).appendPoint([226.05,-154.9]).appendPoint([212.05,-154.9]).appendPoint([212.05,-168.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[212.05,-187.95],[226.05,-187.95]]).appendPoint([226.05,-173.95]).appendPoint([212.05,-173.95]).appendPoint([212.05,-187.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[193,-130.8],[207,-130.8]]).appendPoint([207,-116.8]).appendPoint([193,-116.8]).appendPoint([193,-130.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[193,-149.85],[207,-149.85]]).appendPoint([207,-135.85]).appendPoint([193,-135.85]).appendPoint([193,-149.85]).close().innerToCAG()
).union(
    new CSG.Path2D([[193,-168.9],[207,-168.9]]).appendPoint([207,-154.9]).appendPoint([193,-154.9]).appendPoint([193,-168.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[193,-187.95],[207,-187.95]]).appendPoint([207,-173.95]).appendPoint([193,-173.95]).appendPoint([193,-187.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.525,-207],[216.525,-207]]).appendPoint([216.525,-193]).appendPoint([202.525,-193]).appendPoint([202.525,-207]).close().innerToCAG()
).union(
    new CSG.Path2D([[192.475,-113.8],[190.475,-111.8]]).appendPoint([190.475,-87.8]).appendPoint([192.475,-85.8]).appendPoint([264.675,-85.8]).appendPoint([266.675,-87.8]).appendPoint([266.675,-111.8]).appendPoint([264.675,-113.8]).appendPoint([192.475,-113.8]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
}


function board_extrude_2_outline_fn(){
    return new CSG.Path2D([[187.475,-212.025],[187.975,-81.775]]).appendPoint([269.175,-81.775]).appendPoint([270.175,-212.025]).appendPoint([187.475,-212.025]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function inner_extrude_2_outline_fn(){
    return new CSG.Path2D([[188.475,-211.025],[188.975,-82.775]]).appendPoint([268.175,-82.775]).appendPoint([269.175,-211.025]).appendPoint([188.475,-211.025]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
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
            
            

                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = key_plate_extrude_1_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
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
            
            

                function layered_assy_case_fn() {
                    

                // creating part 0 of case layered_assy
                let layered_assy__part_0 = top_layered_case_fn();

                // make sure that rotations are relative
                let layered_assy__part_0_bounds = layered_assy__part_0.getBounds();
                let layered_assy__part_0_x = layered_assy__part_0_bounds[0].x + (layered_assy__part_0_bounds[1].x - layered_assy__part_0_bounds[0].x) / 2
                let layered_assy__part_0_y = layered_assy__part_0_bounds[0].y + (layered_assy__part_0_bounds[1].y - layered_assy__part_0_bounds[0].y) / 2
                layered_assy__part_0 = translate([-layered_assy__part_0_x, -layered_assy__part_0_y, 0], layered_assy__part_0);
                layered_assy__part_0 = rotate([0,0,0], layered_assy__part_0);
                layered_assy__part_0 = translate([layered_assy__part_0_x, layered_assy__part_0_y, 0], layered_assy__part_0);

                layered_assy__part_0 = translate([0,0,0], layered_assy__part_0);
                let result = layered_assy__part_0;
                
            

                // creating part 1 of case layered_assy
                let layered_assy__part_1 = plate_case_fn();

                // make sure that rotations are relative
                let layered_assy__part_1_bounds = layered_assy__part_1.getBounds();
                let layered_assy__part_1_x = layered_assy__part_1_bounds[0].x + (layered_assy__part_1_bounds[1].x - layered_assy__part_1_bounds[0].x) / 2
                let layered_assy__part_1_y = layered_assy__part_1_bounds[0].y + (layered_assy__part_1_bounds[1].y - layered_assy__part_1_bounds[0].y) / 2
                layered_assy__part_1 = translate([-layered_assy__part_1_x, -layered_assy__part_1_y, 0], layered_assy__part_1);
                layered_assy__part_1 = rotate([0,0,0], layered_assy__part_1);
                layered_assy__part_1 = translate([layered_assy__part_1_x, layered_assy__part_1_y, 0], layered_assy__part_1);

                layered_assy__part_1 = translate([0,0,-3], layered_assy__part_1);
                result = result.union(layered_assy__part_1);
                
            

                // creating part 2 of case layered_assy
                let layered_assy__part_2 = ass_layered_case_fn();

                // make sure that rotations are relative
                let layered_assy__part_2_bounds = layered_assy__part_2.getBounds();
                let layered_assy__part_2_x = layered_assy__part_2_bounds[0].x + (layered_assy__part_2_bounds[1].x - layered_assy__part_2_bounds[0].x) / 2
                let layered_assy__part_2_y = layered_assy__part_2_bounds[0].y + (layered_assy__part_2_bounds[1].y - layered_assy__part_2_bounds[0].y) / 2
                layered_assy__part_2 = translate([-layered_assy__part_2_x, -layered_assy__part_2_y, 0], layered_assy__part_2);
                layered_assy__part_2 = rotate([0,0,0], layered_assy__part_2);
                layered_assy__part_2 = translate([layered_assy__part_2_x, layered_assy__part_2_y, 0], layered_assy__part_2);

                layered_assy__part_2 = translate([0,0,-6], layered_assy__part_2);
                result = result.union(layered_assy__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return layered_assy_case_fn();
            }

        