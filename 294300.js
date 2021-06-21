const selectedSeat = '이건 어떤건지 몰라서 그냥 막 이렇게 했어요';
const inputList = document.querySelectorAll('input[name="seatId"]'); 

for ( let i = 0; i < inputList.length; i++ ) {
    let el = inputList[i]; 

    if ( el.value === selectedSeat ) {
        // 같은 값 
        el.disabled = false; 
    }
}