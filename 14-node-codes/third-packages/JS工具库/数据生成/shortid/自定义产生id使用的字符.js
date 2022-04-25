const shortid = require('shortid');

// 设置组成id的字符（64个） ☵☶☳☴☲☷☱☰
shortid.characters('䷀䷁䷂䷃䷄䷅䷆䷇䷈䷉䷊䷋䷌䷍䷎䷏䷐䷑䷒䷓䷔䷕䷖䷗䷘䷙䷚䷛䷜䷝䷞䷟䷠䷡䷢䷣䷤䷥䷦䷧䷨䷩䷪䷫䷬䷭䷮䷯䷰䷱䷲䷳䷴䷵䷶䷷䷸䷹䷺䷻䷼䷽䷾䷿');

// 随机生成id
for(let i=0; i<100000; i++) {
  console.log(shortid.generate());
}




