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
            
            

                function assembly_case_fn() {
                    

                // creating part 0 of case assembly
                let assembly__part_0 = top_case_fn();

                // make sure that rotations are relative
                let assembly__part_0_bounds = assembly__part_0.getBounds();
                let assembly__part_0_x = assembly__part_0_bounds[0].x + (assembly__part_0_bounds[1].x - assembly__part_0_bounds[0].x) / 2
                let assembly__part_0_y = assembly__part_0_bounds[0].y + (assembly__part_0_bounds[1].y - assembly__part_0_bounds[0].y) / 2
                assembly__part_0 = translate([-assembly__part_0_x, -assembly__part_0_y, 0], assembly__part_0);
                assembly__part_0 = rotate([0,0,0], assembly__part_0);
                assembly__part_0 = translate([assembly__part_0_x, assembly__part_0_y, 0], assembly__part_0);

                assembly__part_0 = translate([0,0,0], assembly__part_0);
                let result = assembly__part_0;
                
            

                // creating part 1 of case assembly
                let assembly__part_1 = plate_case_fn();

                // make sure that rotations are relative
                let assembly__part_1_bounds = assembly__part_1.getBounds();
                let assembly__part_1_x = assembly__part_1_bounds[0].x + (assembly__part_1_bounds[1].x - assembly__part_1_bounds[0].x) / 2
                let assembly__part_1_y = assembly__part_1_bounds[0].y + (assembly__part_1_bounds[1].y - assembly__part_1_bounds[0].y) / 2
                assembly__part_1 = translate([-assembly__part_1_x, -assembly__part_1_y, 0], assembly__part_1);
                assembly__part_1 = rotate([0,0,0], assembly__part_1);
                assembly__part_1 = translate([assembly__part_1_x, assembly__part_1_y, 0], assembly__part_1);

                assembly__part_1 = translate([0,0,0], assembly__part_1);
                result = result.union(assembly__part_1);
                
            

                // creating part 2 of case assembly
                let assembly__part_2 = ass_case_fn();

                // make sure that rotations are relative
                let assembly__part_2_bounds = assembly__part_2.getBounds();
                let assembly__part_2_x = assembly__part_2_bounds[0].x + (assembly__part_2_bounds[1].x - assembly__part_2_bounds[0].x) / 2
                let assembly__part_2_y = assembly__part_2_bounds[0].y + (assembly__part_2_bounds[1].y - assembly__part_2_bounds[0].y) / 2
                assembly__part_2 = translate([-assembly__part_2_x, -assembly__part_2_y, 0], assembly__part_2);
                assembly__part_2 = rotate([0,0,0], assembly__part_2);
                assembly__part_2 = translate([assembly__part_2_x, assembly__part_2_y, 0], assembly__part_2);

                assembly__part_2 = translate([0,0,0], assembly__part_2);
                result = result.union(assembly__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return assembly_case_fn();
            }

        