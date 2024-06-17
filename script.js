const medicines = [
    { disease: '감기', recommendation: '아세트아미노펜(타이레놀), 이부프로펜(브루펜)' },
    { disease: '소화불량', recommendation: '오메프라졸 (Omeprazole), 란서프라졸 (Lansoprazole),라닛딘 (Ranitidine), 팜로티딘 (Famotidine)' },
    { disease: '두통', recommendation: '아세트아미노펜 (Acetaminophen), 이부프로펜 (Ibuprofen),아스피린 (Aspirin)' },
    { disease: '피로', recommendation:  '엽산 및 철분 보충제, 비타민 C' }
];

document.getElementById('diseaseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼의 기본 동작 방지

    const disease = document.getElementById('disease').value.trim();

    if (disease === '') {
        alert('병을 입력해주세요.');
        return;
    }

    // 병에 따른 추천 약 찾기
    const recommendedMedicine = findRecommendedMedicine(disease);

    // 결과를 화면에 표시
    displayRecommendation(recommendedMedicine);
});

function findRecommendedMedicine(disease) {
    const foundMedicine = medicines.find(medicine => medicine.disease === disease);

    if (!foundMedicine) {
        return '병원에 방문하시는 것이 좋습니다.'; // 해당 병에 대한 약 추천이 없는 경우
    }

    return foundMedicine.recommendation;
}

function displayRecommendation(recommendation) {
    const recommendationContainer = document.getElementById('recommendation');
    recommendationContainer.innerHTML = '';

    if (recommendation === '병원에 방문하시는 것이 좋습니다.') {
        const messageElement = document.createElement('p');
        messageElement.textContent = recommendation;
        recommendationContainer.appendChild(messageElement);
    } else {
        const medicineElement = document.createElement('div');
        medicineElement.classList.add('result-item');
        medicineElement.textContent = `추천 약: ${recommendation}`;
        recommendationContainer.appendChild(medicineElement);
    }
}
