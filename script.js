/* Reset cơ bản */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Thân trang */
body {
  font-family: 'Share Tech Mono', monospace;
  background: black;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* Hai hình nền cố định */
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  opacity: 0.05;
  z-index: -3;
}

/* Canvas hiệu ứng Matrix nằm trên ảnh nền */
canvas#matrix {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
}

/* Khung nhập liệu đặt giữa màn hình */
.glow-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px #0f0;
  text-align: center;
  color: #0f0;
  z-index: 1;
}

.glow-box h2 {
  margin-bottom: 15px;
  color: #fff;
  text-shadow: 0 0 5px #0f0;
}

.glow-box input {
  display: block;
  width: 260px;
  margin: 10px auto;
  padding: 8px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #0f0;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
}

.glow-box input::placeholder {
  color: #ccc;
}

.glow-box button {
  margin-top: 15px;
  padding: 10px 20px;
  background: #0f0;
  border: none;
  color: #000;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.glow-box button:hover {
  background: #fff;
  color: #0f0;
  box-shadow: 0 0 10px #0f0;
}

#message {
  margin-top: 15px;
  font-size: 14px;
  min-height: 18px; /* Giữ chiều cao ổn định ngay cả khi chưa có text */
}

