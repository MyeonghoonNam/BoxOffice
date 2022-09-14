function Footer() {
	return (
		<footer id="company-key" className="container-company">
			<section className="container-info">
				<h2 className="sr-only">시네마 정보</h2>
				<strong className="title-company">Hoon Cinema</strong>
				<dl className="list-company-info">
					<dt className="sr-only">시네마 이름</dt>
					<dd>(주)Hoon 시네마</dd>
					<dt>대표</dt>
					<dd>Hoon</dd>
					<dt>사업자번호</dt>
					<dd>000-0000-0000</dd>
					<dd>광고 영화 메이킹</dd>
					<dt>주소</dt>
					<dd>인천광역시</dd>
				</dl>
				<em className="sr-only">sns 링크 목록</em>
				<ul className="list-sns">
					<li>
						<a href="#none" className="link-twitter">
							트위터
						</a>
					</li>
					<li>
						<a href="#none" className="link-insta">
							인스타그램
						</a>
					</li>
					<li>
						<a href="#none" className="link-facebook">
							페이스북
						</a>
					</li>
				</ul>
				<small className="text-copy">
					Copyright &copy;Hoon Cinema. All Rights Reserved.
				</small>
			</section>
		</footer>
	);
}

export default Footer;
