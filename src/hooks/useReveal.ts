import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { 
        if (e.isIntersecting) e.target.classList.add("visible")
      })
    }, { 
      threshold: 0.1,
      rootMargin: '50px' 
    })

    const elements = document.querySelectorAll(".reveal");
    elements.forEach(el => observer.observe(el));
    
    // Check if elements are already in view on mount
    setTimeout(() => {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add("visible");
        }
      });
    }, 100);
    
    return () => observer.disconnect()
  }, []);
}
