// کپی کد به کلیپ‌بورد
function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code').textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = 'کپی شد! ✓';
        button.style.background = '#00b894';
        button.style.color = 'white';
        button.style.borderColor = '#00b894';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            button.style.color = '';
            button.style.borderColor = '';
        }, 2000);
    }).catch(err => {
        console.error('خطا در کپی:', err);
        button.textContent = 'خطا!';
    });
}

// انیمیشن ورود بخش‌ها هنگام اسکرول (اختیاری - پیشرفته)
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.lesson-body section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease-out';
        observer.observe(section);
    });
});
