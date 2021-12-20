function preload(){

}

function setup(){
canvas = createCanvas(280, 280);
canvas.center();
background("white");


}

function clearCanvas(){
    background("white");
}


timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;


array_1=[ "backpack" , "box" , "book" , "bottle" , "suitcase", "toothpaste" , "laptop" , "hat", "pencil" , "paintbrush" , "building" ];

quick_draw_data_set = Math.floor( ( Math.random() * quick_draw_data_set.length ) +1 );

element_of_array = quick_draw_data_set[random_number];