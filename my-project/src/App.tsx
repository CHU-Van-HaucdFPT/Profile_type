import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="" rel="icon" type="image/x-icon" />
        <link rel="stylesheet" href="index.css" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <title>My info</title>
        <div className="wrapper">
          <div className="main">
            {/* Main page */}
            <div className="profile-slice home">
              <div className="profile">
                <div className="profile-above">
                  <div className="avatar">
                    {/* Link avatar */}
                    <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/339019548_881051429624842_59623441575931593_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bXwe_WyuvkUAX_moiiv&_nc_ht=scontent.fhan14-4.fna&oh=00_AfDa0o5T3i0YDQWnvnvGcd-Mhzd04-bPAeh1IICMZs2XtA&oe=654E2968" />
                  </div>
                  <div className="info ms-4">
                    <h2>Chu Văn Hậu</h2>
                    <div className="info-maxim">
                      <i className="fad fa-comment-lines" /> No pain, no gain!
                    </div>
                  </div>
                </div>
                <div className="profile-below mt-4">
                  <h1>Chào Các Bạn,</h1>
                  <p>Sau đây tôi xin nói qua đôi chút về bản thân mình.</p>
                  <p>
                    Tôi là <b>Văn Hậu</b>, một cậu sinh viên ngành <b>Thiết Kế Web</b>{" "}
                    với ước mơ trở thành một Developer chuyên nghiệp, tôi thích khám
                    phá, tìm tòi, học hỏi những điều thú vị trên mạng Internet. Biết
                    đôi chút về HTML, CSS, JS, NodeJS, ReactJS,...
                  </p>
                  <p>Dưới đây là một vài đường link của tôi.</p>
                  <ul className="link ps-0 mt-3">
                    <li className="link-fb">
                      {/* Link facebook */}
                      <a
                        href="https://www.facebook.com/hau.chuvan.733"
                        target="blank"
                        title="Facebook"
                      >
                        <i className="fab fa-facebook-square" />
                      </a>
                    </li>
                    <li className="link-ins">
                      {/* Link instagram */}
                      <a
                        href="https://www.instagram.com/chuvan_hau/"
                        target="blank"
                        title="Instagram"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li className="link-git">
                      {/* Link github */}
                      <a
                        href="https://github.com/CHU-Van-HaucdFPT"
                        target="blank"
                        title="Github"
                      >
                        <i className="fab fa-github" />
                      </a>
                    </li>
                    <li className="link-mail">
                      {/* Link mail  */}
                      <a
                        href="https://mail.google.com/mail/u/0/?hl=en/#inbox"
                        target="blank"
                        title="Mail"
                      >
                        <i className="fas fa-envelope" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="profile-slice fb">
              <div className="profile p-0">
                <div className="fb-cover">
                  {/* Link cover facebook */}
                  <img
                    id="coverImg"
                    className="cover-img"
                    src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/356235308_1017886736245772_634520844073662078_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hvYdmF2Xz54AX-JWgy6&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCGEqOVvFgEdFR3zpRT-0HcGt2ErFeJxN7CxqEGn1IU2A&oe=654E1F1C"
                  />
                  <input type="file" id="addCover" />
                  <label
                    className="add-cover btn btn-sm btn-secondary"
                    htmlFor="addCover"
                  >
                    <i className="fal fa-camera" />
                  </label>
                </div>
                <div className="fb-bottom p-3">
                  <div className="fb-avatar">
                    {/* Link avatar facebook */}
                    <img
                      className="avatar-img"
                      src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/339019548_881051429624842_59623441575931593_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bXwe_WyuvkUAX_moiiv&_nc_ht=scontent.fhan14-4.fna&oh=00_AfDa0o5T3i0YDQWnvnvGcd-Mhzd04-bPAeh1IICMZs2XtA&oe=654E2968"
                      alt="facebook-avatar"
                    />
                  </div>
                  <div className="fb-name">
                    <h1>Chu Văn Hậu</h1>
                    <span>333 Bạn bè</span>
                  </div>
                  <div className="fb-btn mb-4">
                    {/* Link messenger */}
                    <a
                      className="btn btn-primary mt-2 mx-1"
                      href="https://www.facebook.com/messages/t/100060563742011/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-messenger" /> Nhắn tin
                    </a>
                    {/* Link facebook */}
                    <a
                      className="btn btn-secondary mt-2 mx-1"
                      href="https://www.facebook.com/hau.chuvan.733"
                      target="_blank"
                    >
                      <i className="fas fa-rss" /> Theo dõi
                    </a>
                  </div>
                  <div className="intro">
                    <p>
                      <i className="fas fa-graduation-cap" />
                      Học tại
                      <b>Cao Đẳng FPT poly</b>
                    </p>
                    <p>
                      <i className="fas fa-graduation-cap" />
                      Đã học tại
                      <b>THPT Yên Dũng số 2</b>
                    </p>
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      Đến từ <b>Bắc Giang</b>
                    </p>
                    <p className="mb-0">
                      <i className="fas fa-rss" />
                      Có 300 người theo dõi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-slice ins">
              <div className="profile">
                <div className="ins">
                  <div className="ins-header">
                    <div className="left">
                      <h2 className="mb-3">
                        <i className="far fa-long-arrow-left me-3" /> chuvan_hau
                      </h2>
                    </div>
                    <div className="right">
                      <h2>
                        <i className="far fa-bell" />
                        <i className="far fa-ellipsis-v ms-3" />
                      </h2>
                    </div>
                  </div>
                  <div className="ins-avatar">
                    {/* Link avatar instagram */}
                    <img
                      className="ins-avatar-image"
                      src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/339019548_881051429624842_59623441575931593_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bXwe_WyuvkUAX_moiiv&_nc_ht=scontent.fhan14-4.fna&oh=00_AfDa0o5T3i0YDQWnvnvGcd-Mhzd04-bPAeh1IICMZs2XtA&oe=654E2968"
                      alt="facebook-avatar"
                    />
                    <div className="ins-info d-flex ms-3">
                      <div className="count">
                        <h5>0</h5>
                        <span>Bài viết</span>
                      </div>
                      <div className="count">
                        <h5>66</h5>
                        <span>Người theo dõi</span>
                      </div>
                      <div className="count">
                        <h5>104</h5>
                        <span>Đang theo dõi</span>
                      </div>
                    </div>
                  </div>
                  <div className="ins-name mt-3">
                    <h3 className="mb-1">Chu Văn Hậu</h3>
                    <a href="https://www.instagram.com/chuvan_hau/" target="_blank">
                      No Pain No Gain
                    </a>
                  </div>
                  <div className="ins-btn mt-3">
                    {/* Link instagram */}
                    <a
                      className="btn btn-sm btn-primary px-5"
                      href="https://www.instagram.com/chuvan_hau/"
                      target="_blank"
                    >
                      Theo dõi
                    </a>
                    {/* Link instagram */}
                    <a
                      className="btn btn-sm btn-message px-3"
                      href="https://www.instagram.com/chuvan_hau/"
                      target="_blank"
                    >
                      Nhắn tin
                    </a>
                    {/* Link instagram */}
                    <a
                      className="btn btn-sm btn-follow"
                      href="https://www.instagram.com/chuvan_hau/"
                      target="_blank"
                    >
                      <i className="fas fa-user-plus" />
                    </a>
                  </div>
                  <div className="ins-body">
                    <i className="fal fa-camera" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dark-switch" />
        <div className="play-btn" />
        <audio className="music-audio">
          {/* Link mp3 */}
          <source src="" type="audio/mpeg" />
        </audio>
      </>

    </>
  )
}

export default App
