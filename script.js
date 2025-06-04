<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>KIỂM TRA MÃ ẨN - XÓA MÃ ẨN</title>

  <!-- Nhúng font Share Tech Mono -->
  <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
  <!-- Liên kết đến style.css -->
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <!-- Canvas chạy hiệu ứng Matrix Rain -->
  <canvas id="matrix"></canvas>

  <!-- Cửa sổ chính -->
  <div class="terminal-window">
    
    <!-- Thanh tiêu đề -->
    <div class="title-bar">
      <div class="title">KIỂM TRA MÃ ẨN  -  XÓA MÃ ẨN</div>
      <div class="window-controls">
        <span class="control minimize"></span>
        <span class="control maximize"></span>
        <span class="control close"></span>
      </div>
    </div>
    
    <!-- Thanh Tabs -->
    <div class="tabs">
      <span class="tab active" data-tab="tab1">Kiểm tra mã ẩn</span>
      <span class="tab" data-tab="tab2">Xóa mã ẩn</span>
      <span class="tab" data-tab="tab3">Kiểm tra cổng game</span>
    </div>
    
    <!-- ======= Tab 1: Kiểm tra mã Ẩn ======= -->
    <div class="tab-content active" id="tab1">
      <div class="tab1-flex">
        <!-- Cột trái: form (3 input + START + IP dưới START) -->
        <div class="tab1-form">
          <div class="field">
            <label for="phone">Số điện thoại_</label>
            <input type="text" id="phone" placeholder="">
          </div>
          <div class="field">
            <label for="game-port">Cổng game_</label>
            <input type="text" id="game-port" placeholder="">
          </div>
          <div class="field">
            <label for="game-account">Tài khoản game_</label>
            <input type="text" id="game-account" placeholder="">
          </div>
          <button class="action-btn" id="start-btn1" disabled>START</button>
          <!-- Nơi hiển thị IP (xuất dưới START) -->
          <div class="ip-display" id="ip-display1" style="margin-top:8px;"></div>
        </div>
        <!-- Cột phải: ô kết quả -->
        <div class="tab1-countdown" id="countdown-display1">
          <!-- Khi chưa bấm START, giữ trống để khung hiển thị -->
        </div>
      </div>
      <div class="result-block" id="result-block1-extra"></div>
    </div>

    <!-- ======= Tab 2: Xóa mã Ẩn ======= -->
    <div class="tab-content" id="tab2">
      <div class="tab2-flex">
        <!-- Cột trái: form (3 input + START + IP dưới START) -->
        <div class="tab2-form">
          <div class="field">
            <label for="del-phone">Số điện thoại_</label>
            <input type="text" id="del-phone" placeholder="">
          </div>
          <div class="field">
            <label for="del-game-port">Cổng game_</label>
            <input type="text" id="del-game-port" placeholder="">
          </div>
          <div class="field">
            <label for="del-game-account">Tài khoản game_</label>
            <input type="text" id="del-game-account" placeholder="">
          </div>
          <button class="action-btn" id="start-btn2" disabled>START</button>
          <!-- Nơi hiển thị IP (xuất dưới START) -->
          <div class="ip-display" id="ip-display2" style="margin-top:8px;"></div>
        </div>
        <!-- Cột phải: ô đếm ngược / cảnh báo -->
        <div class="tab2-countdown" id="countdown-display2">
          <!-- Khi chưa bấm START, giữ trống để khung hiển thị -->
        </div>
      </div>
      <div class="result-block" id="result-block2-extra"></div>
    </div>

    <!-- ======= Tab 3: Kiểm tra cổng game ======= -->
    <div class="tab-content" id="tab3">
      <div class="tab3-form">
        <div class="field">
          <label for="check-port">Cổng game_</label>
          <input type="text" id="check-port" placeholder="">
        </div>
        <button class="action-btn" id="start-btn3" disabled>START</button>
      </div>
      <div class="tab3-countdown" id="countdown-display3">
        <!-- Ban đầu giữ trống để khung hiển thị -->
      </div>
      <div class="result-block" id="result-block3-extra"></div>
    </div>

  </div>

  <!-- Liên kết đến script.js -->
  <script src="script.js"></script>
</body>
</html>
