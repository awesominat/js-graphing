$(document).ready(function () {



}); //ready

var mousex = 0,
    mousey = 0;

var scale = 1;
var currentzoom = 1;
var originx = 0;
var originy = 0;



function drawchart() {

    var grid_size = 40;
    var x_axis_distance_grid_lines = grid_size / 4;
    var y_axis_distance_grid_lines = grid_size / 4;
    var x_axis_starting_point = {
        number: 1,
        suffix: ''
    };
    var y_axis_starting_point = {
        number: 1,
        suffix: ''
    };

    //var canvas = document.getElementById("Canvas");
    // var ctx = canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.shadowBlur = 0;
    var canvas_width = canvas.width;
    var canvas_height = canvas.height;

    var num_lines_x = Math.floor(canvas_height / grid_size);
    var num_lines_y = Math.floor(canvas_width / grid_size);
    //console.log( num_lines_x , num_lines_y)
    // Draw grid lines along X-axis
    for (var i = 0; i <= num_lines_x; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;

        // If line represents X-axis draw in different color
        if (i == x_axis_distance_grid_lines)
            ctx.strokeStyle = "#000000";
        else
            ctx.strokeStyle = "#e9e9e9";

        if (i == num_lines_x) {
            ctx.moveTo(0, grid_size * i);
            ctx.lineTo(canvas_width, grid_size * i);
        } else {
            ctx.moveTo(0, grid_size * i + 0.5);
            ctx.lineTo(canvas_width, grid_size * i + 0.5);
        }
        ctx.stroke();
    }

    // Draw grid lines along Y-axis
    for (i = 0; i <= num_lines_y; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;

        // If line represents X-axis draw in different color
        if (i == y_axis_distance_grid_lines)
            ctx.strokeStyle = "#000000";
        else
            ctx.strokeStyle = "#e9e9e9";

        if (i == num_lines_y) {
            ctx.moveTo(grid_size * i, 0);
            ctx.lineTo(grid_size * i, canvas_height);
        } else {
            ctx.moveTo(grid_size * i + 0.5, 0);
            ctx.lineTo(grid_size * i + 0.5, canvas_height);
        }
        ctx.stroke();
    }

    // Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual

    ctx.translate(y_axis_distance_grid_lines * grid_size, x_axis_distance_grid_lines * grid_size);
    ctx.fillStyle = "#198b27";
    // Ticks marks along the positive X-axis
    for (i = 1; i < (num_lines_y - y_axis_distance_grid_lines); i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        //ctx.strokeStyle = "#000000";

        // Draw a tick mark 6px long (-3 to 3)
        ctx.moveTo(grid_size * i + 0.5, -3);
        ctx.lineTo(grid_size * i + 0.5, 3);
        ctx.stroke();

        // Text value at that point
        ctx.font = '8px Arial';
        ctx.textAlign = 'start';
        ctx.fillText(x_axis_starting_point.number * i * 10 + x_axis_starting_point.suffix, grid_size * i - 2, 15);
    }

    // Ticks marks along the negative X-axis
    for (i = 1; i < y_axis_distance_grid_lines; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        //ctx.strokeStyle = "#000000";

        // Draw a tick mark 6px long (-3 to 3)
        ctx.moveTo(-grid_size * i + 0.5, -3);
        ctx.lineTo(-grid_size * i + 0.5, 3);
        ctx.stroke();

        // Text value at that point
        ctx.font = '8px Arial';
        ctx.textAlign = 'end';
        ctx.fillText(-x_axis_starting_point.number * i * 10 + x_axis_starting_point.suffix, -grid_size * i + 3, 15);
    }

    // Ticks marks along the positive Y-axis
    // Positive Y-axis of graph is negative Y-axis of the canvas
    for (i = 1; i < (num_lines_x - x_axis_distance_grid_lines); i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        //ctx.strokeStyle = "#000000";

        // Draw a tick mark 6px long (-3 to 3)
        ctx.moveTo(-3, grid_size * i + 0.5);
        ctx.lineTo(3, grid_size * i + 0.5);
        ctx.stroke();

        // Text value at that point
        ctx.font = '8px Arial';
        ctx.textAlign = 'start';
        ctx.fillText(-y_axis_starting_point.number * i * 10 + y_axis_starting_point.suffix, 8, grid_size * i + 3);
    }

    // Ticks marks along the negative Y-axis
    // Negative Y-axis of graph is positive Y-axis of the canvas
    for (i = 1; i < x_axis_distance_grid_lines; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        //ctx.strokeStyle = "#000000";

        // Draw a tick mark 6px long (-3 to 3)
        ctx.moveTo(-3, -grid_size * i + 0.5);
        ctx.lineTo(3, -grid_size * i + 0.5);
        ctx.stroke();

        // Text value at that point
        ctx.font = '8px Arial';
        ctx.textAlign = 'start';
        ctx.fillText(y_axis_starting_point.number * i * 10 + y_axis_starting_point.suffix, 8, -grid_size * i + 3);
    }
}