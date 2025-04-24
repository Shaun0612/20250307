function setup() {  //設定函數，初始值的設定
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    //設定背景色為品紅色
    background(255, 0, 255);
    
    // 根據滑鼠的 X 座標計算大小，範圍從 100 到 500
    let size = map(mouseX, 0, windowWidth, 100, 500);
    
    //設定方形的顏色為天藍色
    fill(0, 255, 255);
    rectMode(CENTER);
    
    //設定圓的邊框為藍色
    stroke(0, 0, 255);
    //設定圓的邊框寬度為10 
    strokeWeight(10)
    //設定圓的顏色為黃色
    fill(255, 255, 0);
    
    // 計算每個方形和圓形的間距
    let spacing = size + 20;
    
    // 畫一排圓形和方形
    for (let x = spacing / 2; x < windowWidth; x += spacing) {
      for (let y = spacing / 2; y < windowHeight; y += spacing) {
        // 畫方形
        fill(0, 255, 255);
        rect(x, y, size, size);
        
        // 畫圓形
        fill(255, 255, 0);
        ellipse(x, y, size, size);
      }
    }
  }
  
  //當視窗的大小改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }