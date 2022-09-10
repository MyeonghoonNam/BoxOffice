const Footer = () => {
	let $element;

	const render = () => {
		const $footer = document.createElement('footer');
		$footer.setAttribute('id', 'company-key');
		$footer.setAttribute('class', 'container-company');
		$footer.innerHTML = `
      <section class="container-info">
        <h2 class="sr-only">시네마 정보</h2>
        <strong class="title-company">Hoon Cinema</strong>
        <dl class="list-company-info">
          <dt class="sr-only">시네마 이름</dt>
          <dd>(주)Hoon 시네마</dd>
          <dt>대표</dt>
          <dd>Hoon</dd>
          <dt>사업자번호</dt>
          <dd>000-0000-0000</dd>
          <dd>광고 영화 메이킹</dd>
          <dt>주소</dt>
          <dd>인천광역시</dd>
        </dl>
        <em class="sr-only">sns 링크 목록</em>
        <ul class="list-sns">
          <li><a href="#none" class="link-twitter">트위터</a></li>
          <li><a href="#none" class="link-insta">인스타그램</a></li>
          <li><a href="#none" class="link-facebook">페이스북</a></li>
        </ul>
        <small class="text-copy"
          >Copyright &copy;Hoon Cinema. All Rights Reserved.</small
        >
      </section>
    `;

		return $footer;
	};

	return () => {
		$element = render();

		return $element;
	};
};

export default Footer;
