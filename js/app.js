var picker = new Lightpick({
    field: document.getElementById('datepicker'),
    singleDate: false,
    onSelect: function(start, end){
        var str = '';
        str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
        str += end ? end.format('Do MMMM YYYY') : '...';
        document.getElementById('datepicker').innerHTML = str;
        document.getElementById('nights').innerHTML = end.diff(start, 'days') + " Νύχτες";
    }
});