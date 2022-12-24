const scrolledIndicatorFill = document.querySelector(

    ".scrolled-indicator-fill"
  
  );
const btnScrollToTop = document.querySelector("#btnScrollToTop");
// 스크롤 표시 함수
window.addEventListener("scroll", () => {
    //스크롤 가능 정도
    const scrollable = document.documentElement.scrollHeight - window.innerHeight; // 문서전체높이 - window 높이;
    //스크롤 한 정도를 px단위로 표시
    const scroll = window.scrollY;
    let percentageScrolled = 100;
    // 스크롤 가능 시
    if (scrollable > 0) {
      percentageScrolled = Math.ceil((scroll / scrollable) * 100);
    }
    scrolledIndicatorFill.style.width = `${percentageScrolled}%`;
  });