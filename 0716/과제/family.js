window.onload = function() {
	additems(3);
	/*
	additems();
	additems();
	*/
	/* 항목 추가 */
	const add = document.getElementsByClassName('add');

	add[0].addEventListener('click', function() {
		additems();
	});

};

/* 입력 항목 추가 */

function additems(num) {
	num = num || 1; // num이 있으면 그 값을 사용, 없으면 기본값으로 1을사용
	
	for(let i = 0; i < num; i++) {
		const tr = document.createElement('tr');
		const tds = [], inputs = [];
		const names = ['name', 'gender', 'age', 'job'];
		
		for(let i = 0; i < 5; i++) {
			tds[i] = document.createElement('td');
			if (i == 4) { // 삭제 버튼 추가
				const span = document.createElement('span');
				const text = document.createTextNode('삭제');
				span.appendChild(text);
				span.className = 'delete btn';
				
				addEventRemoveitem(span); // 삭제 이벤트 핸들러 등록
				
				tds[i].appendChild(span);
			
			} else { // 입력 항목 추가
				inputs[i] = document.createElement('input');
				inputs[i].setAttribute('type', 'text');
				inputs[i].setAttribute('name', names[i]);
			
				tds[i].appendChild(inputs[i]);
			}
		
			tr.appendChild(tds[i]);
		}
			const tbody = document.getElementsByTagName('tbody');
			tbody[0].appendChild(tr);
		}
	}
	/*
	입력 항목 삭제 이벤트 핸들러 등록
	*/
	function addEventRemoveitem(el) {
		el.addEventListener('click', function(e) {
				const target = e.target;
				const tr = target.parentElement.parentElement; // tr;
				const tbody = tr.parentElement; // tbody
				tbody.removeChild(tr);
		});
	}