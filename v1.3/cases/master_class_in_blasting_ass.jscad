function outer_extrude_2_outline_fn(){
    return new CSG.Path2D([[182.4750368,-212.0058063],[182.9750368,-81.7558063]]).appendArc([187.975,-76.775],{"radius":5,"clockwise":true,"large":false}).appendPoint([269.175,-76.775]).appendArc([274.1748526,-81.7366134],{"radius":5,"clockwise":true,"large":false}).appendPoint([275.1748526,-211.9866134]).appendArc([270.175,-217.025],{"radius":5,"clockwise":true,"large":false}).appendPoint([187.475,-217.025]).appendArc([182.4750368,-212.0058063],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
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
            
            
        
            function main() {
                return master_class_in_blasting_ass_case_fn();
            }

        