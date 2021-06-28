let dayEl = $("#currentDay");
let today = moment().format('dddd, Do MMMM'); 

dayEl.text(today);


const currentHour = moment().format('HH');


function getText(hour){
    return localStorage.getItem(`plansFor${hour}`);
}

function savePlans(event){

    let clickedIdArr = event.target.id.split("-");
    let clickedId = clickedIdArr[2];

    let plansString = $(`#textarea-${clickedId}`).val();

    localStorage.setItem(`plansFor${clickedId}`, plansString)
}


function createPlanner(){
    for (let i = 9; i <= 17; i++){
        let pastPresentFuture;    
        meridian = "AM"
        let time = i;

        if(i > 12){
            meridian = "PM";
            time -= 12;
        }
        console.log(currentHour)

        if(currentHour < i){
            pastPresentFuture = "future"
        }else if(currentHour > i){
            pastPresentFuture = "past"
        }else{
            pastPresentFuture = "present"
        }


        let currentRow = `row-${i}`;
        $(".container").append($("<div></div>").addClass("row time-block").attr("id", currentRow));
        $(`#${currentRow}`).append($(`<p>${time + meridian}</p>`).addClass("hour col-1"));
        let currentTextArea =`textarea-${i}`;
        $(`#${currentRow}`).append($("<textarea></textarea>").addClass(`${pastPresentFuture} col-10`).attr("id", currentTextArea).text(getText(i)));
        let currentBtn = `save-button-${i}`;
        $(`#${currentRow}`).append($("<button>Save</button>").addClass("saveBtn col-1").attr("id", currentBtn));

        $(`#${currentBtn}`).click(savePlans);

    }
}

createPlanner();

