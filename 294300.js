const inputList = document.querySelectorAll('input[name="seatId"]'); 

function checkSeat(selectedSeat) {
    for ( let i = 0; i < inputList.length; i++ ) {
        let el = inputList[i]; 

        if ( el.value === selectedSeat ) {
            // 같은 값 
            el.disabled = false; 
        }
    }
}

checkSeat('seat00'); // 한번만 동작 
