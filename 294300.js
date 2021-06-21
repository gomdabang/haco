const inputList = document.querySelectorAll('input[name="seatId"]'); 

// 예제1
// 한번만 확인 

function checkSeat(selectedSeat) {
    for ( let i = 0; i < inputList.length; i++ ) {
        let el = inputList[i]; 
        if ( el.value === selectedSeat ) {
            // 같은 값 
            el.disabled = false; 
        }
    }
}

checkSeat('seat00'); 


// 에제2
// 한번만 확인 
let seatIdList = []; 
for ( let i = 0; i < inputList.length; i++ ) {
    let el = inputList[i];
    seatIdList.push( el.value ); 
}

function checkSeat2(selectedSeat) {
    let index = seatIdList.indexOf(selectedSeat);
    if ( index > -1 ) {
        // 같은 값 
        inputList[index].disabled = false; 
    }
}

checkSeat2('seat00');
