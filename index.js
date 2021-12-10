const imgArr = document.getElementsByClassName('items7-9');
let indexActive = Array.from(imgArr).findIndex(el => el.hasAttribute('show'));
const imgContainer = document.querySelector('#item6');
const incIndex = ind => ind === 2 ? 0 : ++ind;
const decIndex = ind => !ind ? 2 : --ind;

const handleRewind = ({target}) => {
    imgArr[indexActive].removeAttribute('show');
    indexActive = target.innerText === '\u276E' ? decIndex(indexActive) : incIndex(indexActive);
    imgArr[indexActive].setAttribute('show', true);
    imgContainer.firstElementChild.src = imgArr[indexActive].firstElementChild.src;
}
const handleMoreClick = ({target}) => {
    if(target.innerText === 'see more'){
        document.getElementById('temporary').style.display = "contents";
        target.innerText = "see less";
    }else{
        document.getElementById('temporary').style.display = "none";
        target.innerText = "see more";
    }
}
handleSearch = () => {
    document.getElementById('search').style.visibility = 'visible';
}
document.querySelectorAll('.left-arrow').forEach(el => el.addEventListener('click', handleRewind));
document.querySelectorAll('.right-arrow').forEach(el => el.addEventListener('click', handleRewind));
document.getElementById('more').addEventListener('click', handleMoreClick);
document.getElementById('search-click').addEventListener('click', handleSearch);