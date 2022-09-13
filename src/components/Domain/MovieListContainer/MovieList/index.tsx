import { ScreenReader } from '../../..';

function MovieList() {
	return (
		<section>
			<ScreenReader tag="h3" text="현재 상영 영화 목록" />

			<ul className="movie-list">
				<li>
					<article>
						<h4 className="sr-only">영화 상세 정보</h4>
						<a href="#none" className="movie-link">
							<img
								src="/images/포스터_위니브월드.png"
								alt="위니브 월드 : 새로운 시대"
							/>
						</a>
						<strong className="movie-title sl-ellipsis">
							위니브 월드: 새로운시대
						</strong>
						<dl className="movie-info">
							<div>
								<dt>개요</dt>
								<dd>판타지</dd>
							</div>
							<div className="movie-grade">
								<dt>평점</dt>
								<dd>9.05</dd>
							</div>
							<div>
								<dt>개봉</dt>
								<dd>2021.03.27</dd>
							</div>
							<div>
								<dt>출연</dt>
								<dd className="multi-ellipsis">
									라이캣, 소울곰, 개리씨, 빙키, 뮤라, 자바독, 소울곰, 웨이드
								</dd>
							</div>
						</dl>
					</article>
					<a href="#none" className="movie-reserv-link">
						예매하기
					</a>
					<a href="#none" className="movie-preview-link">
						예고편
					</a>
				</li>
				<li>
					<article>
						<h4 className="sr-only">영화 상세 정보</h4>
						<a href="#none" className="movie-link">
							<img
								src="/images/포스터_눈떠보니자바.png"
								alt="눈떠보니 코딩테스트 전"
							/>
						</a>
						<strong className="movie-title sl-ellipsis">
							눈떠보니 코딩테스트 전..
						</strong>
						<dl className="movie-info">
							<div>
								<dt>개요</dt>
								<dd>스릴러</dd>
							</div>
							<div className="movie-grade">
								<dt>평점</dt>
								<dd>8.25</dd>
							</div>
							<div>
								<dt>개봉</dt>
								<dd>2021.04.01</dd>
							</div>
							<div>
								<dt>출연</dt>
								<dd className="multi-ellipsis">자바독, 개리씨, 빙키</dd>
							</div>
						</dl>
					</article>
					<a href="#none" className="movie-reserv-link">
						예매하기
					</a>
					<a href="#none" className="movie-preview-link">
						예고편
					</a>
				</li>
				<li>
					<article>
						<h4 className="sr-only">영화 상세 정보</h4>
						<a href="#none" className="movie-link">
							<img src="/images/포스터_부트캠프.jpg" alt="파이썬 부트캠프" />
						</a>
						<strong className="movie-title sl-ellipsis">파이썬 부트캠프</strong>
						<dl className="movie-info">
							<div>
								<dt>개요</dt>
								<dd>드라마</dd>
							</div>
							<div className="movie-grade">
								<dt>평점</dt>
								<dd>8.77</dd>
							</div>
							<div>
								<dt>개봉</dt>
								<dd>2021.04.12</dd>
							</div>
							<div>
								<dt>출연</dt>
								<dd className="multi-ellipsis">캣, 파이, 썬, 뮤라</dd>
							</div>
						</dl>
					</article>
					<a href="#none" className="movie-reserv-link">
						예매하기
					</a>
					<a href="#none" className="movie-preview-link">
						예고편
					</a>
				</li>
				<li>
					<article>
						<h4 className="sr-only">영화 상세 정보</h4>
						<a href="#none" className="movie-link">
							<img src="/images/포스터_파이큐티.png" alt="파이큐티의 사랑" />
						</a>
						<strong className="movie-title sl-ellipsis">파이큐티의 사랑</strong>
						<dl className="movie-info">
							<div>
								<dt>개요</dt>
								<dd>로맨스</dd>
							</div>
							<div className="movie-grade">
								<dt>평점</dt>
								<dd>8.81</dd>
							</div>
							<div>
								<dt>개봉</dt>
								<dd>2021.04.08</dd>
							</div>
							<div>
								<dt>출연</dt>
								<dd className="multi-ellipsis">파이썬, 큐티</dd>
							</div>
						</dl>
					</article>
					<a href="#none" className="movie-reserv-link">
						예매하기
					</a>
					<a href="#none" className="movie-preview-link">
						예고편
					</a>
				</li>
				<li>
					<article>
						<h4 className="sr-only">영화 상세 정보</h4>
						<a href="#none" className="movie-link">
							<img src="/images/포스터_앤진액스.png" alt="NGINX의 춤" />
						</a>
						<strong className="movie-title sl-ellipsis">NGINX의 춤</strong>
						<dl className="movie-info">
							<div>
								<dt>개요</dt>
								<dd>드라마</dd>
							</div>
							<div className="movie-grade">
								<dt>평점</dt>
								<dd>9.88</dd>
							</div>
							<div>
								<dt>개봉</dt>
								<dd>2021.04.15</dd>
							</div>
							<div>
								<dt>출연</dt>
								<dd className="multi-ellipsis">NGINX, 노션</dd>
							</div>
						</dl>
					</article>
					<a href="#none" className="movie-reserv-link">
						예매하기
					</a>
					<a href="#none" className="movie-preview-link">
						예고편
					</a>
				</li>
				<li>
					<article>
						<h4 className="sr-only">영화 상세 정보</h4>
						<a href="#none" className="movie-link">
							<img src="/images/포스터_어쩌다밋업.png" alt="어쩌다 밋업" />
						</a>
						<strong className="movie-title sl-ellipsis">어쩌다 밋업</strong>
						<dl className="movie-info">
							<div>
								<dt>개요</dt>
								<dd>드라마</dd>
							</div>
							<div className="movie-grade">
								<dt>평점</dt>
								<dd>9.25</dd>
							</div>
							<div>
								<dt>개봉</dt>
								<dd>2021.04.17</dd>
							</div>
							<div>
								<dt>출연</dt>
								<dd className="multi-ellipsis">라이캣, 소울곰, 자바독</dd>
							</div>
						</dl>
					</article>
					<a href="#none" className="movie-reserv-link">
						예매하기
					</a>
					<a href="#none" className="movie-preview-link">
						예고편
					</a>
				</li>
				<li>
					<article>
						<h4 className="sr-only">영화 상세 정보</h4>
						<a href="#none" className="movie-link">
							<img src="/images/포스터_파이게임.jpg" alt="파이게임 어드벤처" />
						</a>
						<strong className="movie-title sl-ellipsis">
							파이게임 어드벤처
						</strong>
						<dl className="movie-info">
							<div>
								<dt>개요</dt>
								<dd>판타지액션</dd>
							</div>
							<div className="movie-grade">
								<dt>평점</dt>
								<dd>8.56</dd>
							</div>
							<div>
								<dt>개봉</dt>
								<dd>2021.04.05</dd>
							</div>
							<div>
								<dt>출연</dt>
								<dd className="multi-ellipsis">파이썬, 개리씨</dd>
							</div>
						</dl>
					</article>
					<a href="#none" className="movie-reserv-link">
						예매하기
					</a>
					<a href="#none" className="movie-preview-link">
						예고편
					</a>
				</li>
				<li>
					<article>
						<h4 className="sr-only">영화 상세 정보</h4>
						<a href="#none" className="movie-link">
							<img src="/images/포스터_MBIT.png" alt="MBIT는 내 운명" />
						</a>
						<strong className="movie-title sl-ellipsis">MBIT는 내 운명</strong>
						<dl className="movie-info">
							<div>
								<dt>개요</dt>
								<dd>로맨스</dd>
							</div>
							<div className="movie-grade">
								<dt>평점</dt>
								<dd>9.02</dd>
							</div>
							<div>
								<dt>개봉</dt>
								<dd>2021.04.12</dd>
							</div>
							<div>
								<dt>출연</dt>
								<dd className="multi-ellipsis">라이캣, 자바독, 개리씨</dd>
							</div>
						</dl>
					</article>
					<a href="#none" className="movie-reserv-link">
						예매하기
					</a>
					<a href="#none" className="movie-preview-link">
						예고편
					</a>
				</li>
			</ul>
		</section>
	);
}

export default MovieList;
