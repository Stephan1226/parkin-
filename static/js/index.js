const spotStatus = document.querySelector('#goToSpotStatus');
const entryExit = document.querySelector('#goToEntryExit');
const parkingLot = document.querySelector('#goToParkingLot');
const home = document.querySelector('#goToHome');
const goBack = document.querySelector('#windowHistoryBack');
function goToSpotStatusFunction() {
    window.location.href = '/spot-status';
}
function goToHomeFunction() {
    window.location.href = '/spot-status';
}
function goToEntryExitFunction() {
    window.location.href = '/spot-status';
}
function goToSpotStatusFunction() {
    window.location.href = '/spot-status';
}
function PageGoBack() {
    window.history.back();
}
spotStatus.addEventListener('click', goToSpotStatusFunction);
entryExit.addEventListener('click', goToSpotStatusFunction);
parkingLot.addEventListener('click', goToSpotStatusFunction);
home.addEventListener('click', goToSpotStatusFunction);
goBack.addEventListener('click', PageGoBack);
if (window.location.pathname === '/') {
    goBack.classList.add('hidden');
} else {
    goBack.classList.remove('hidden');
}
