let dayEl = $("#currentDay");
let today = moment().format('dddd'); 
dayEl.text(today);


for (let i = 9; i <= 17; i++){
    meridian = "AM"
    let time = i;
    if(i > 12){
        meridian = "PM";
        time -= 12;
    }
    let currentRow = `row-${i}`;
    $(".container").append($("<div></div>").addClass("row time-block").attr("id", currentRow));
    $(`#${currentRow}`).append($(`<p>${time + meridian}</p>`).addClass("hour col-1"));
    let currentTextArea =`textarea-${i}`;
    $(`#${currentRow}`).append($("<textarea></textarea>").addClass("past col-10").attr("id", currentTextArea).text(getText(i)));
    let currentBtn = `save-button-${i}`;
    $(`#${currentRow}`).append($("<button>Save</button>").addClass("saveBtn col-1").attr("id", currentBtn));



//     <div class="row time-block">
//     <p class="hour col-1">
//         10 AM
//     </p>
//     <textarea name="textarea-10" id="" value="Something" class="past col-10"></textarea>
//     <button class="saveBtn col-1">Save</button>
// </div>
}

function getText(timeblock){
    return "placeholder";
}