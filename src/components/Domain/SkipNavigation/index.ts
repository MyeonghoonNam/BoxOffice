const SkipNavigation = () => {
	let $element;

	const render = () => {
		const $skipNavigation = document.createElement('div');
		$skipNavigation.setAttribute('class', 'nav-skip');
		$skipNavigation.innerHTML = `
      <a href="#nav-key">영화목록 바로가기</a>
			<a href="#company-key">회사정보 바로가기</a>
    `;

		return $skipNavigation;
	};

	return () => {
		$element = render();

		return $element;
	};
};

export default SkipNavigation;
