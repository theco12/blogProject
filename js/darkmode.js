var count = 0;

$('.badge').on('click', function(){
    count = count +1;
    console.log(count);
});

const divtag = document.querySelector('div');

divtag.innerHTML('안녕하세요.');
divtag.style.fontSize ="30px";