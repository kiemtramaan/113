
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const letters = "アァイィウヴエカガキギクグケゲコゴサザシジスズセゼソゾABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = new Array(Math.floor(columns)).fill(1);
function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff99";
  ctx.font = fontSize + "px monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 50);

function generateCode(length = 10) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function submitForm() {
  const phone = document.getElementById('phone').value.trim();
  const idname = document.getElementById('idname').value.trim();
  const gamename = document.getElementById('gamename').value.trim();
  const msg = document.getElementById('message');
  const successSound = document.getElementById('successSound');

  if (!/^0\d{9}$/.test(phone)) {
    msg.textContent = 'Sai định dạng Số điện thoại!';
    return;
  }
  if (!/^[a-zA-Z0-9_]{4,}$/.test(idname)) {
    msg.textContent = 'ID phải ít nhất 4 ký tự, không dấu!';
    return;
  }
  if (!/^[a-zA-Z0-9_ ]{3,}$/.test(gamename)) {
    msg.textContent = 'Cổng game quá ngắn hoặc có ký tự không hợp lệ!';
    return;
  }

  let countdown = 5;
  msg.style.color = '#ffcc00';
  msg.textContent = `Đang kiểm tra... ${countdown}s`;
  const interval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      msg.textContent = `Đang kiểm tra... ${countdown}s`;
    } else {
      clearInterval(interval);
      const hiddenCode = generateCode();
      msg.style.color = '#ff6666';
      msg.innerHTML = `⚠️ TÀI KHOẢN CỦA BẠN CHỨA MÃ ẨN ⚠️\n\nMã ẩn: ${hiddenCode}`;
      successSound.play();
    }
  }, 1000);
}
