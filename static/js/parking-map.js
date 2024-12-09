// 주차 공간 상태 데이터
const parkingStatus = {
    A: [
      { id: 'A1', time: '4h 21m 45s', available: false },
      { id: 'A2', time: 'Available', available: true },
      { id: 'A3', time: 'Available', available: true },
      { id: 'A4', time: 'Available', available: true },
      { id: 'A5', time: '3h 42m 11s', available: false },
      { id: 'A6', time: 'Available', available: true },
      { id: 'A7', time: '52h 02m 01s', available: false },
    ],
    B: [
      { id: 'B1', time: '12h 22m 32s', available: false },
      { id: 'B2', time: '100+', available: false },
      { id: 'B3', time: 'Available', available: true },
      { id: 'B4', time: '00h 03m 52s', available: false },
      { id: 'B5', time: 'Available', available: true },
      { id: 'B6', time: 'Available', available: true },
      { id: 'B7', time: '00h 00m 02s', available: false },
    ],
  };
  
  // 주차 상태 표시 그리드 생성
  const parkingGrid = document.getElementById('parking-grid');
  
  Object.keys(parkingStatus).forEach((rowLabel) => {
    // 행 레이블 추가
    const rowTitle = document.createElement('div');
    rowTitle.textContent = rowLabel;
    rowTitle.className = 'row-label';
    parkingGrid.appendChild(rowTitle);
  
    // 주차 공간 추가
    parkingStatus[rowLabel].forEach((spot) => {
      const spotDiv = document.createElement('div');
      spotDiv.textContent = spot.time;
      spotDiv.className = `parking-spot ${spot.available ? 'available' : 'unavailable'}`;
      spotDiv.dataset.id = spot.id;
  
      // 클릭 이벤트 추가
      spotDiv.addEventListener('click', () => {
        if (spot.available) {
          alert(`주차 위치 ${spot.id}를 선택하셨습니다.`);
          goToNextScreen(spot.id);
        } else {
          alert('이 위치는 선택할 수 없습니다!');
        }
      });
  
      parkingGrid.appendChild(spotDiv);
    });
  });
  
  // 다음 화면으로 이동 (결과 표시용)
  function goToNextScreen(selectedSpot) {
    const result = document.getElementById('selection-result');
    result.textContent = `선택된 주차 위치: ${selectedSpot}`;
  }
  