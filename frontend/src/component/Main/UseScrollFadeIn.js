import { useCallback, useEffect} from 'react'

// 스크롤하면 페이드인 하는 애니메이션
const UseScrollFadeIn = (direction, duration, delay,element) => {
// direction 선택
const dom=element;
const handleDirection = (name) => {
	switch (name) {
    	case "up":
        	return "translate3d(0, 50%, 0)"
        case "down": return "tranlate3d(0, -50%, 0)"
        case "left": return "translate3d(50%, 0, 0)"
        case "right": return "translate3d(-50%, 0, 0)"
        default:
        return;
    }
}

// 설정해둔 컴포넌트를 만날때마다 함수가 재실행되도록 callback하기
const onScroll = useCallback(([entry])=>{
	const current  = dom;
    if(entry.isIntersecting) {
    	current.style.tansitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.opacity = 1;
        current.style.tranform = "translate3d(0, 0, 0)";
    }
}, [{delay}, {duration}])

// intersection-observer로 컴포넌트 위치 observe하기
useEffect(()=>{
	let observer;
    
    if(dom.current) {
    	observer = new IntersectionObserver(onScroll, {threshold: 0.7});
        observer.observe(dom.current);
        }
        
        return() => observer && observer.disconnect()
}, [onScroll])

return 'style= {{ opacity: 0, transform: handleDirection({direction}) }}' 

}
export default UseScrollFadeIn;