// document.addEventListener('DOMContentLoaded', () => {
//     // const navbar = document.querySelector('.navbar');
//     // const navLinks = document.querySelectorAll('.nav-links a');
//     // const sections = document.querySelectorAll('section');
    
//     // // Smooth scroll function with offset
//     // function smoothScroll(target) {
//     //     const navbarHeight = navbar.offsetHeight;
//     //     const targetPosition = target.offsetTop - navbarHeight;
        
//     //     window.scrollTo({
//     //         top: targetPosition,
//     //         behavior: 'smooth'
//     //     });
//     // }
    
//     // // Handle navigation clicks
//     // navLinks.forEach(link => {
//     //     link.addEventListener('click', (e) => {
//     //         e.preventDefault();
//     //         const targetId = link.getAttribute('href').substring(1); // Remove # from href
//     //         const targetSection = document.querySelector(`#${targetId}`); // Find section by ID
            
//     //         // Remove active class from all links
//     //         navLinks.forEach(link => link.classList.remove('active'));
//     //         // Add active class to clicked link
//     //         link.classList.add('active');
            
//     //         smoothScroll(targetSection);
//     //     });
//     // });
    
//     // Update active section on scroll
//     function updateActiveSection() {
//         const navbarHeight = navbar.offsetHeight;
//         let currentSectionId = '';
        
//         sections.forEach(section => {
//             const sectionTop = section.offsetTop - navbarHeight - 100;
//             const sectionBottom = sectionTop + section.offsetHeight;
            
//             if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
//                 currentSectionId = section.id;
                
//                 // Add visual indicator for current section
//                 section.style.transform = 'scale(1)';
//                 section.style.opacity = '1';
//             }
//         });
        
//         // Update navigation
//         navLinks.forEach(link => {
//             link.classList.toggle('active', link.getAttribute('href').substring(1) === currentSectionId);
//         });
//     }
    
//     // Handle scroll events
//     window.addEventListener('scroll', () => {
//         // Update navbar background
//         if (window.scrollY > 50) {
//             navbar.style.background = 'rgba(18, 18, 18, 0.98)';
//             navbar.style.boxShadow = '0 2px 10px rgba(76, 175, 80, 0.1)';
//         } else {
//             navbar.style.background = 'rgba(18, 18, 18, 0.95)';
//             navbar.style.boxShadow = 'none';
//         }
        
//         // Update active section
//         updateActiveSection();
//     });
    
//     // Initial call to set correct active section
//     updateActiveSection();
// });
