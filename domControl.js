let $title = document.querySelector('#title');
// 1. null이 아닐 때로 제한
if ($title !== null) {
    $title.innerHTML = '반가워요';
}
// 위의 방법외에도 html 조작시 narrowing하는 방법 4가지가 더 있다
// 2. instanceof 사용
if ($title instanceof Element) {
    $title.innerHTML = '반가워요';
}
// 3. as로 사기치기(as는 정말 가급적 사용하지말자)
let $title2 = document.querySelector('#title');
$title2.innerHTML = '반가와요';
// 4. object에 붙이는 ?. (옵셔널 체이닝)
if ($title?.innerHTML !== undefined) {
    $title.innerHTML = '반가워요';
}
// 5. tsconfig에서 nullcheck 엄격모드를 지우든가 false로 바꿔버리기
// a 태그와 같이 태그들은 좀더 상세한 element를 정해줘야한다.
let $link = document.querySelector('.link');
if ($link instanceof HTMLAnchorElement) {
    $link.href = 'https://kakao.com';
}
let $button = document.querySelector('#button');
// $button?.addEventListener('click', function () {});
if ($button instanceof Element) {
    $button.addEventListener('click', function () { });
}
// assignment 7-1
let $img = document.querySelector('#img');
if ($img instanceof HTMLImageElement) {
    $img.src = 'new.jpg';
}
// assignment 7-2
let anchorTags = document.querySelectorAll('.naver');
anchorTags.forEach(($ele) => {
    if ($ele instanceof HTMLAnchorElement) {
        $ele.href = 'https://kakao.com';
    }
});
