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
            
            
        
            function main() {
                return plate_case_fn();
            }

        