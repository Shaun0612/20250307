function setup() {  //設定函數，初始值的設定
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight);
    
    
  }
  
  function draw() {
    //設定背景色為品紅色
    background(255, 0, 255);
    //設定圓的顏色為天藍色
    fill(0, 255, 255);
    //設定圓的邊框為藍色
    stroke(0, 0, 255);
    //設定圓的邊框寬度為10 
    strokeWeight(10)
    //在視窗的中間畫一個圓，圓的半徑為200
    //ellipse(width/2, height/2, 200, 200);
    //依照上面的圓顔色和框線顔色，從視窗最左邊，連續產生圓到視窗最右邊
    for (let i = 0; i < width+50; i+=50) {
      fill(0, 255, 255);
      stroke(0, 0, 255);
      strokeWeight(10)
      ellipse(i, height/2, 50, 50);
    }
  }
  
  //當視窗的大小改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }