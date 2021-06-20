const dateList = [
    '2001-06-20 23:51:00', 
    '2011-06-20 23:51:00', 
    '2020-06-20 23:51:00',
    '2020-06-21 00:00:00',
    '2020-06-21 23:51:00',
    '2020-06-25 23:51:00', 
    '2020-06-26 23:51:00', 
    '2021-04-20 23:51:00', 
    '2021-06-18 23:51:00', 
    '2021-06-20 23:51:00', 
    '2021-06-20 23:57:59', 
    '2021-06-21 00:06:59', 
    '2021-06-21 00:14:01'
];

let timeList = [];
for ( let i = 0; i < dateList.length; i++ ) {
    const _date = dateList[i];
    const _time = new Date( _date ).getTime(); 
    
    timeList.push( _time );
}

const now = new Date().getTime();
const sec = 1000; 
const min = sec * 60; 
const hour = min * 60; 
const day = hour * 24; 
const weekly = day * 7; 
const month = day * 30; 
const year = day * 365; 

let output = [];
for ( let i = 0; i < timeList.length; i++ ) {
    const _time = now - timeList[i];
    const _date = dateList[i];

    if ( _time / year >= 1 ) {
        output.push( `${_date} ${Math.floor( _time / year )}년` ); 
        continue; 
    }

    if ( _time / weekly >= 1 ) {
        output.push( `${_date} ${Math.round( _time / weekly )}주` ); 
        continue;
    }

    if ( _time / day >= 1 ) {
        output.push( `${_date} ${Math.round( _time / day )}일` );
        continue;
    }

    if ( _time / hour >= 1 ) {
        output.push( `${_date} ${Math.round( _time / hour )}시간` );
        continue;
    }

    if ( _time / min >= 1 ) {
        output.push( `${_date} ${Math.round( _time / min )}분` );
        continue;
    }

    if ( _time / sec >= 1 ) {
        output.push( `${_date} ${Math.round( _time / sec )}초` );
        continue;
    }
}

const message = output.join('\n');
console.log( message );

// 2021년 6월 21일 오전 00:14 분 경 
/* output: 
2001-06-20 23:51:00 20년
2011-06-20 23:51:00 10년
2020-06-20 23:51:00 1년
2020-06-21 00:00:00 1년
2020-06-21 23:51:00 52주
2020-06-25 23:51:00 51주
2020-06-26 23:51:00 51주
2021-04-20 23:51:00 9주
2021-06-18 23:51:00 2일
2021-06-20 23:51:00 23분
2021-06-20 23:57:59 16분
2021-06-21 00:06:59 7분
2021-06-21 00:14:01 3초
*/
