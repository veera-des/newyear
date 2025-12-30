// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Ask for her name
    const herName = prompt("Enter your girlfriend's name (or nickname):", "My Love");
    const nameElement = document.getElementById('herName');
    if (herName && herName.trim() !== "") {
        nameElement.textContent = herName;
        localStorage.setItem('herName', herName);
    } else {
        const savedName = localStorage.getItem('herName');
        if (savedName) {
            nameElement.textContent = savedName;
        }
    }
    
    // Initialize all modules
    initApp();
});

function initApp() {
    console.log("🎉 Initializing New Year Surprise...");
    
    // Add dynamic styles first
    addDynamicStyles();
    
    // Initialize modules in order
    initBackgroundAnimations();
    initCursorHearts();
    initMusic();
    initNavigation();
    initScratchCard();
    initFireworks();
    
    // Quick safety check
    setTimeout(safetyChecks, 2000);
}

// ==================== DYNAMIC STYLES ====================
function addDynamicStyles() {
    // These styles ensure proper display
    const style = document.createElement('style');
    style.textContent = `
        /* Force memory 1 to be visible */
        #memory1.active {
            display: block !important;
            opacity: 1 !important;
        }
        
        /* Ensure next button appears when not hidden */
        #nextBtn3:not(.hidden) {
            display: flex !important;
            visibility: visible !important;
            opacity: 1 !important;
        }
        
        /* Celebration spark animation */
        .celebration-spark {
            position: fixed;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            box-shadow: 0 0 15px currentColor;
        }
        
        /* Progress animation for scratch */
        @keyframes progressFill {
            from { width: 0%; }
            to { width: var(--progress-width); }
        }
    `;
    document.head.appendChild(style);
}

// ==================== BACKGROUND ANIMATIONS ====================
function initBackgroundAnimations() {
    createFloatingHearts();
    createSparkles();
    createLoveWords();
}

function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    if (!container) return;
    
    const heartCount = 30;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        
        // Random position
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 25 + 15;
        heart.style.fontSize = `${size}px`;
        
        // Random color
        const colors = ['#ff4d8d', '#ff9ec0', '#ffd166', '#ff9a76'];
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Random animation
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        heart.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        container.appendChild(heart);
    }
}

function createSparkles() {
    const container = document.getElementById('sparkles');
    if (!container) return;
    
    const sparkleCount = 50;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random position
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 4 + 2;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        // Random color
        sparkle.style.backgroundColor = `hsl(${Math.random() * 60 + 300}, 100%, 70%)`;
        sparkle.style.boxShadow = `0 0 ${size * 2}px currentColor`;
        
        // Animation
        const duration = Math.random() * 3 + 1;
        const delay = Math.random() * 2;
        sparkle.style.animation = `sparkleTwinkle ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        container.appendChild(sparkle);
    }
}

function createLoveWords() {
    const container = document.getElementById('loveWords');
    if (!container) return;
    
    const words = ['Love', 'Forever', 'Together', 'Always', 'You & Me', 'Soulmate', 'Destiny', 'Happiness'];
    
    words.forEach((word, index) => {
        const wordElement = document.createElement('div');
        wordElement.className = 'love-word';
        wordElement.textContent = word;
        
        // Random position
        wordElement.style.left = `${Math.random() * 90 + 5}%`;
        wordElement.style.top = `${Math.random() * 90 + 5}%`;
        
        // Random size and opacity
        wordElement.style.fontSize = `${Math.random() * 1 + 1}rem`;
        wordElement.style.opacity = Math.random() * 0.3 + 0.1;
        
        // Animation
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        wordElement.style.animation = `wordFloat ${duration}s linear ${delay}s infinite`;
        
        container.appendChild(wordElement);
    });
}

// ==================== CURSOR HEARTS TRAIL ====================
function initCursorHearts() {
    const cursorTrail = document.getElementById('cursorTrail');
    if (!cursorTrail) return;
    
    let mouseX = 0, mouseY = 0;
    let heartCount = 0;
    
    // Update mouse position
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create heart every few pixels of movement
        if (heartCount % 3 === 0) {
            createHeartTrail(e.clientX, e.clientY);
        }
        heartCount++;
    });
    
    // Create heart trail
    function createHeartTrail(x, y) {
        const heart = document.createElement('div');
        heart.className = 'heart-trail';
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        
        // Random size
        const size = Math.random() * 20 + 10;
        heart.style.fontSize = `${size}px`;
        
        // Random color
        const colors = ['#ff4d8d', '#ff9ec0', '#ffd166', '#9d4edd'];
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Position
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        
        // Random movement
        const tx = (Math.random() - 0.5) * 100;
        const ty = (Math.random() - 0.5) * 100 - 50;
        heart.style.setProperty('--tx', `${tx}px`);
        heart.style.setProperty('--ty', `${ty}px`);
        
        cursorTrail.appendChild(heart);
        
        // Remove after animation
        setTimeout(() => {
            if (heart.parentNode === cursorTrail) {
                heart.remove();
            }
        }, 1500);
    }
    
    // Create initial hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createHeartTrail(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight
            );
        }, i * 100);
    }
}

// ==================== MUSIC CONTROL ====================
function initMusic() {
    const musicControl = document.getElementById('musicControl');
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    if (!musicControl || !backgroundMusic) return;
    
    let isPlaying = false;
    
    // Try to play music on first interaction
    const playMusicOnInteraction = function() {
        if (!isPlaying) {
            backgroundMusic.volume = 0.3;
            backgroundMusic.play().then(() => {
                isPlaying = true;
                musicControl.innerHTML = '<i class="fas fa-volume-up"></i>';
                console.log("🎵 Music started playing");
            }).catch(e => {
                console.log("Music autoplay prevented, waiting for user interaction");
            });
        }
        // Remove this event listener after first interaction
        document.removeEventListener('click', playMusicOnInteraction);
        document.removeEventListener('keydown', playMusicOnInteraction);
        document.removeEventListener('touchstart', playMusicOnInteraction);
    };
    
    // Add event listeners for user interaction
    document.addEventListener('click', playMusicOnInteraction, { once: true });
    document.addEventListener('keydown', playMusicOnInteraction, { once: true });
    document.addEventListener('touchstart', playMusicOnInteraction, { once: true });
    
    // Toggle music on button click
    musicControl.addEventListener('click', function() {
        if (isPlaying) {
            backgroundMusic.pause();
            musicControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            backgroundMusic.play();
            musicControl.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
        isPlaying = !isPlaying;
    });
}

// ==================== NAVIGATION SYSTEM ====================
function initNavigation() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const nextBtn1 = document.getElementById('nextBtn1');
    const nextBtn2 = document.getElementById('nextBtn2');
    const nextBtn3 = document.getElementById('nextBtn3');
    const restartBtn = document.getElementById('restartBtn');
    const showFireworksBtn = document.getElementById('showFireworksBtn');
    const skipScratchBtn = document.getElementById('skipScratchBtn');
    
    if (!slides.length) {
        console.error("No slides found!");
        return;
    }
    
    let currentSlide = 1;
    const totalSlides = slides.length;
    
    // Navigate to slide
    function goToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > totalSlides) {
            console.error("Invalid slide number:", slideNumber);
            return;
        }
        
        console.log(`Navigating to slide ${slideNumber}`);
        
        // Hide current slide
        const currentActiveSlide = document.querySelector('.slide.active');
        const currentActiveDot = document.querySelector('.dot.active');
        
        if (currentActiveSlide) {
            currentActiveSlide.classList.remove('active');
        }
        if (currentActiveDot) {
            currentActiveDot.classList.remove('active');
        }
        
        // Show new slide
        const newSlide = document.getElementById(`slide${slideNumber}`);
        const newDot = document.querySelector(`.dot[data-slide="${slideNumber}"]`);
        
        if (newSlide) {
            newSlide.classList.add('active');
        }
        if (newDot) {
            newDot.classList.add('active');
        }
        
        currentSlide = slideNumber;
        
        // Special effects for certain slides
        if (slideNumber === 2) {
            animateLoveLetter();
        } else if (slideNumber === 3) {
            // Make sure memory 1 is visible
            const memory1 = document.getElementById('memory1');
            if (memory1) {
                memory1.classList.add('active');
            }
        } else if (slideNumber === 4) {
            createFireworks();
        }
    }
    
    // Animate love letter paragraphs
    function animateLoveLetter() {
        const paragraphs = document.querySelectorAll('.letter-paragraph');
        paragraphs.forEach((para, index) => {
            setTimeout(() => {
                para.style.animationDelay = `${index * 0.5}s`;
                para.style.animation = 'fadeInUp 0.8s forwards';
            }, index * 500);
        });
    }
    
    // Event listeners for navigation buttons
    if (nextBtn1) {
        nextBtn1.addEventListener('click', () => goToSlide(2));
    }
    
    if (nextBtn2) {
        nextBtn2.addEventListener('click', () => goToSlide(3));
    }
    
    if (nextBtn3) {
        nextBtn3.addEventListener('click', () => goToSlide(4));
    }
    
    if (restartBtn) {
        restartBtn.addEventListener('click', restartExperience);
    }
    
    if (showFireworksBtn) {
        showFireworksBtn.addEventListener('click', createFireworks);
    }
    
    if (skipScratchBtn) {
        skipScratchBtn.addEventListener('click', function() {
            // Reveal all memories instantly
            for (let i = 1; i <= 4; i++) {
                const memory = document.getElementById(`memory${i}`);
                if (memory) {
                    memory.classList.add('active');
                }
            }
            
            // Update display
            const memoryCountElement = document.getElementById('memoryCount');
            const progressFill = document.getElementById('progressFill');
            
            if (memoryCountElement) {
                memoryCountElement.textContent = '4';
            }
            if (progressFill) {
                progressFill.style.width = '100%';
            }
            
            // Show next button
            if (nextBtn3) {
                nextBtn3.classList.remove('hidden');
                nextBtn3.classList.add('pulse');
            }
            
            // Play celebration sound
            try {
                const revealSound = document.getElementById('revealSound');
                if (revealSound) {
                    revealSound.currentTime = 0;
                    revealSound.volume = 0.5;
                    revealSound.play();
                }
            } catch (e) {
                console.log("Sound play prevented");
            }
        });
    }
    
    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideNum = parseInt(this.getAttribute('data-slide'));
            if (!isNaN(slideNum)) {
                goToSlide(slideNum);
            }
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            if (currentSlide < totalSlides) {
                goToSlide(currentSlide + 1);
            }
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (currentSlide > 1) {
                goToSlide(currentSlide - 1);
            }
        }
    });
    
    // Initialize to slide 1
    setTimeout(() => goToSlide(1), 100);
}

// ==================== SCRATCH CARD SYSTEM ====================
function initScratchCard() {
    const canvas = document.getElementById('scratchCanvas');
    if (!canvas) {
        console.error("Scratch canvas not found!");
        return;
    }
    
    const ctx = canvas.getContext('2d');
    const memoryCountElement = document.getElementById('memoryCount');
    const progressFill = document.getElementById('progressFill');
    const nextBtn3 = document.getElementById('nextBtn3');
    
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let revealedPercent = 0;
    let memoriesRevealed = 0;
    const totalMemories = 4;
    const revealThresholds = [20, 40, 60, 80]; // Percentage thresholds for each memory
    
    // Set canvas size
    function resizeCanvas() {
        const container = canvas.parentElement;
        if (!container) return;
        
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        initScratchLayer();
    }
    
    // Initialize scratch layer
    function initScratchLayer() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Create silver scratch card background
        ctx.fillStyle = '#c0c0c0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add metallic texture effect
        ctx.fillStyle = '#e0e0e0';
        for (let i = 0; i < 1500; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 3 + 1;
            ctx.fillRect(x, y, size, size);
        }
        
        // Add dark spots for texture
        ctx.fillStyle = '#a0a0a0';
        for (let i = 0; i < 500; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 2 + 1;
            ctx.fillRect(x, y, size, size);
        }
        
        // Add instruction text
        ctx.fillStyle = '#666';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('✨ Scratch here to reveal memories ✨', canvas.width / 2, canvas.height / 2);
        
        // Set composite operation for scratching
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = 40;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
    }
    
    // Get mouse/touch position
    function getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;
        
        if (evt.type.includes('touch')) {
            clientX = evt.touches[0].clientX;
            clientY = evt.touches[0].clientY;
        } else {
            clientX = evt.clientX;
            clientY = evt.clientY;
        }
        
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }
    
    // Start scratching
    function startScratching(e) {
        isDrawing = true;
        const pos = getMousePos(canvas, e);
        lastX = pos.x;
        lastY = pos.y;
        
        // Draw initial point
        ctx.beginPath();
        ctx.arc(lastX, lastY, 20, 0, Math.PI * 2);
        ctx.fill();
        
        // Play scratch sound
        try {
            const scratchSound = document.getElementById('scratchSound');
            if (scratchSound) {
                scratchSound.currentTime = 0;
                scratchSound.volume = 0.2;
                scratchSound.play();
            }
        } catch (e) {
            console.log("Sound play prevented");
        }
        
        updateProgress();
    }
    
    // Scratch while moving
    function scratch(e) {
        if (!isDrawing) return;
        
        e.preventDefault();
        const pos = getMousePos(canvas, e);
        const x = pos.x;
        const y = pos.y;
        
        // Draw line from last position to current position
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        // Update last position
        lastX = x;
        lastY = y;
        
        updateProgress();
    }
    
    // Stop scratching
    function stopScratching() {
        isDrawing = false;
    }
    
    // Update progress
    function updateProgress() {
        // Calculate revealed percentage
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        let transparentPixels = 0;
        let totalPixels = 0;
        
        // Count transparent pixels (alpha = 0)
        for (let i = 3; i < pixels.length; i += 4) {
            totalPixels++;
            if (pixels[i] === 0) {
                transparentPixels++;
            }
        }
        
        // Calculate percentage revealed
        revealedPercent = (transparentPixels / totalPixels) * 100;
        
        // Update progress bar
        if (progressFill) {
            progressFill.style.width = `${Math.min(revealedPercent, 100)}%`;
        }
        
        // Check which memories should be revealed
        let newMemoriesRevealed = 0;
        for (let i = 0; i < revealThresholds.length; i++) {
            if (revealedPercent >= revealThresholds[i]) {
                newMemoriesRevealed = i + 1;
            }
        }
        
        // Update memories if needed
        if (newMemoriesRevealed > memoriesRevealed) {
            revealMemory(newMemoriesRevealed);
        }
        
        // Show next button if all memories are revealed
        if (memoriesRevealed >= totalMemories && nextBtn3) {
            showNextButton();
        }
    }
    
    // Reveal memory
    function revealMemory(count) {
        memoriesRevealed = count;
        
        // Update memory count display
        if (memoryCountElement) {
            memoryCountElement.textContent = memoriesRevealed;
        }
        
        // Show the corresponding memories
        for (let i = 1; i <= memoriesRevealed; i++) {
            const memory = document.getElementById(`memory${i}`);
            if (memory && !memory.classList.contains('active')) {
                memory.classList.add('active');
                
                // Play reveal sound
                try {
                    const revealSound = document.getElementById('revealSound');
                    if (revealSound) {
                        revealSound.currentTime = 0;
                        revealSound.volume = 0.5;
                        revealSound.play();
                    }
                } catch (e) {
                    console.log("Sound play prevented");
                }
                
                // Add celebration effect
                createCelebrationEffect(memory);
            }
        }
    }
    
    // Show next button
    function showNextButton() {
        if (!nextBtn3) return;
        
        nextBtn3.classList.remove('hidden');
        nextBtn3.classList.add('pulse');
        
        // Add a completion message
        const progressText = document.querySelector('.progress-text');
        if (progressText) {
            progressText.innerHTML = '🎉 All Memories Uncovered! 🎉';
            progressText.style.color = '#ffd166';
            progressText.style.fontWeight = 'bold';
        }
    }
    
    // Create celebration effect
    function createCelebrationEffect(element) {
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const colors = ['#ff4d8d', '#ffd166', '#9d4edd', '#4dffb4'];
        
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const spark = document.createElement('div');
                spark.className = 'celebration-spark';
                
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                spark.style.left = `${centerX}px`;
                spark.style.top = `${centerY}px`;
                spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                spark.style.boxShadow = `0 0 15px ${spark.style.backgroundColor}`;
                
                document.body.appendChild(spark);
                
                // Animate spark
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 60 + 30;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                const animation = spark.animate([
                    { transform: 'translate(0, 0) scale(0.5)', opacity: 1 },
                    { transform: `translate(${tx}px, ${ty}px) scale(1.5)`, opacity: 0 }
                ], {
                    duration: 800,
                    easing: 'ease-out'
                });
                
                // Remove spark after animation
                animation.onfinish = () => {
                    if (spark.parentNode) {
                        spark.remove();
                    }
                };
                
                // Safety remove after 1 second
                setTimeout(() => {
                    if (spark.parentNode) {
                        spark.remove();
                    }
                }, 1000);
            }, i * 100);
        }
    }
    
    // Event listeners for desktop
    canvas.addEventListener('mousedown', startScratching);
    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('mouseup', stopScratching);
    canvas.addEventListener('mouseleave', stopScratching);
    
    // Event listeners for mobile
    canvas.addEventListener('touchstart', function(e) {
        e.preventDefault();
        startScratching(e);
    }, { passive: false });
    
    canvas.addEventListener('touchmove', function(e) {
        e.preventDefault();
        scratch(e);
    }, { passive: false });
    
    canvas.addEventListener('touchend', function(e) {
        e.preventDefault();
        stopScratching();
    }, { passive: false });
    
    canvas.addEventListener('touchcancel', stopScratching);
    
    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Auto-show next button after 60 seconds if not all memories revealed
    setTimeout(() => {
        if (memoriesRevealed < totalMemories && nextBtn3) {
            const skipBtn = document.getElementById('skipScratchBtn');
            if (skipBtn) {
                skipBtn.style.display = 'flex';
                skipBtn.style.animation = 'pulse 1.5s infinite';
            }
        }
    }, 60000);
}

// ==================== FIREWORKS SYSTEM ====================
function initFireworks() {
    window.createFireworks = createFireworks;
}

function createFireworks() {
    const container = document.getElementById('fireworksContainer');
    if (!container) return;
    
    const colors = ['#ff4d8d', '#ffd166', '#9d4edd', '#4dffb4', '#ff9a76'];
    
    // Clear existing fireworks
    container.innerHTML = '';
    
    // Create multiple fireworks
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createFirework(container, colors);
        }, i * 200);
    }
}

function createFirework(container, colors) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    
    // Random position
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;
    
    // Random color
    const color = colors[Math.floor(Math.random() * colors.length)];
    firework.style.color = color;
    firework.style.backgroundColor = color;
    
    container.appendChild(firework);
    
    // Random explosion pattern
    const particleCount = 8 + Math.floor(Math.random() * 8);
    
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            createParticle(firework, color);
        }, i * 30);
    }
    
    // Remove firework after animation
    setTimeout(() => {
        if (firework.parentNode === container) {
            firework.remove();
        }
    }, 2000);
}

function createParticle(parent, color) {
    const particle = document.createElement('div');
    particle.className = 'firework-particle';
    
    // Same color as parent
    particle.style.backgroundColor = color;
    
    // Random size
    const size = Math.random() * 6 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.borderRadius = '50%';
    particle.style.position = 'fixed';
    particle.style.zIndex = '1000';
    
    // Position at center of parent
    const parentRect = parent.getBoundingClientRect();
    particle.style.left = `${parentRect.left + parentRect.width / 2}px`;
    particle.style.top = `${parentRect.top + parentRect.height / 2}px`;
    
    document.body.appendChild(particle);
    
    // Random direction and distance
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 80 + 40;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    
    // Animate particle
    const animation = particle.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
    ], {
        duration: 1200,
        easing: 'ease-out'
    });
    
    // Remove particle after animation
    animation.onfinish = () => {
        if (particle.parentNode) {
            particle.remove();
        }
    };
    
    // Safety remove after 1.5 seconds
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 1500);
}

// ==================== RESTART EXPERIENCE ====================
function restartExperience() {
    console.log("🔄 Restarting experience...");
    
    // Reset to first slide
    const currentSlide = document.querySelector('.slide.active');
    const currentDot = document.querySelector('.dot.active');
    
    if (currentSlide) {
        currentSlide.classList.remove('active');
    }
    if (currentDot) {
        currentDot.classList.remove('active');
    }
    
    const firstSlide = document.getElementById('slide1');
    const firstDot = document.querySelector('.dot[data-slide="1"]');
    
    if (firstSlide) {
        firstSlide.classList.add('active');
    }
    if (firstDot) {
        firstDot.classList.add('active');
    }
    
    // Reset scratch card
    const canvas = document.getElementById('scratchCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = '#c0c0c0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'destination-out';
        
        // Re-add instruction text
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = '#666';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('✨ Scratch here to reveal memories ✨', canvas.width / 2, canvas.height / 2);
        ctx.globalCompositeOperation = 'destination-out';
    }
    
    // Reset memories
    const memoryCountElement = document.getElementById('memoryCount');
    const progressFill = document.getElementById('progressFill');
    
    if (memoryCountElement) {
        memoryCountElement.textContent = '0';
    }
    if (progressFill) {
        progressFill.style.width = '0%';
    }
    
    // Reset memory display (only show first one)
    for (let i = 1; i <= 4; i++) {
        const memory = document.getElementById(`memory${i}`);
        if (memory) {
            if (i === 1) {
                memory.classList.add('active');
            } else {
                memory.classList.remove('active');
            }
        }
    }
    
    // Hide next button
    const nextBtn3 = document.getElementById('nextBtn3');
    if (nextBtn3) {
        nextBtn3.classList.add('hidden');
        nextBtn3.classList.remove('pulse');
    }
    
    // Reset progress text
    const progressText = document.querySelector('.progress-text');
    if (progressText) {
        progressText.innerHTML = 'Memories Uncovered: <span id="memoryCount">0</span>/4';
    }
    
    // Ask for name again
    const herName = prompt("Enter your girlfriend's name again:", localStorage.getItem('herName') || "My Love");
    const nameElement = document.getElementById('herName');
    if (herName && herName.trim() !== "") {
        nameElement.textContent = herName;
        localStorage.setItem('herName', herName);
    }
    
    // Recreate background animations
    const heartsContainer = document.getElementById('floatingHearts');
    const sparklesContainer = document.getElementById('sparkles');
    const wordsContainer = document.getElementById('loveWords');
    
    if (heartsContainer) heartsContainer.innerHTML = '';
    if (sparklesContainer) sparklesContainer.innerHTML = '';
    if (wordsContainer) wordsContainer.innerHTML = '';
    
    setTimeout(() => {
        initBackgroundAnimations();
    }, 500);
}

// ==================== SAFETY CHECKS ====================
function safetyChecks() {
    console.log("🔍 Running safety checks...");
    
    // Check if memory 1 is visible
    const memory1 = document.getElementById('memory1');
    if (memory1 && !memory1.classList.contains('active')) {
        console.log("⚠️ Memory 1 not visible, fixing...");
        memory1.classList.add('active');
    }
    
    // Check if navigation buttons exist
    const nextButtons = ['nextBtn1', 'nextBtn2', 'nextBtn3'];
    nextButtons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (!btn) {
            console.error(`❌ Button ${btnId} not found!`);
            
            // Create fallback button if missing
            if (btnId === 'nextBtn3') {
                const fallbackBtn = document.createElement('button');
                fallbackBtn.id = 'nextBtn3';
                fallbackBtn.className = 'cta-button';
                fallbackBtn.innerHTML = '<span>Continue to Final Surprise</span><i class="fas fa-arrow-right"></i>';
                fallbackBtn.onclick = () => {
                    const slide4 = document.getElementById('slide4');
                    const slide3 = document.getElementById('slide3');
                    if (slide4 && slide3) {
                        slide3.classList.remove('active');
                        slide4.classList.add('active');
                    }
                };
                
                const slide3 = document.getElementById('slide3');
                if (slide3) {
                    const content = slide3.querySelector('.slide-content');
                    if (content) {
                        content.appendChild(fallbackBtn);
                    }
                }
            }
        }
    });
    
    // Check if all 4 memories exist
    for (let i = 1; i <= 4; i++) {
        const memory = document.getElementById(`memory${i}`);
        if (!memory) {
            console.error(`❌ Memory ${i} not found!`);
        }
    }
    
    console.log("✅ Safety checks completed");
}

// ==================== ADDITIONAL HELPER FUNCTIONS ====================
// Make functions available globally for debugging
window.debug = {
    goToSlide: function(slideNum) {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        
        if (slideNum < 1 || slideNum > slides.length) {
            console.error("Invalid slide number");
            return;
        }
        
        // Hide current slide
        document.querySelector('.slide.active')?.classList.remove('active');
        document.querySelector('.dot.active')?.classList.remove('active');
        
        // Show new slide
        document.getElementById(`slide${slideNum}`)?.classList.add('active');
        document.querySelector(`.dot[data-slide="${slideNum}"]`)?.classList.add('active');
    },
    
    revealAllMemories: function() {
        for (let i = 1; i <= 4; i++) {
            const memory = document.getElementById(`memory${i}`);
            if (memory) {
                memory.classList.add('active');
            }
        }
        
        const memoryCountElement = document.getElementById('memoryCount');
        const progressFill = document.getElementById('progressFill');
        const nextBtn3 = document.getElementById('nextBtn3');
        
        if (memoryCountElement) memoryCountElement.textContent = '4';
        if (progressFill) progressFill.style.width = '100%';
        if (nextBtn3) {
            nextBtn3.classList.remove('hidden');
            nextBtn3.classList.add('pulse');
        }
    },
    
    resetScratch: function() {
        const canvas = document.getElementById('scratchCanvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = '#c0c0c0';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Add instruction text
            ctx.fillStyle = '#666';
            ctx.font = 'bold 20px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('✨ Scratch here to reveal memories ✨', canvas.width / 2, canvas.height / 2);
            
            ctx.globalCompositeOperation = 'destination-out';
        }
        
        // Reset memories display
        for (let i = 1; i <= 4; i++) {
            const memory = document.getElementById(`memory${i}`);
            if (memory) {
                if (i === 1) {
                    memory.classList.add('active');
                } else {
                    memory.classList.remove('active');
                }
            }
        }
        
        const memoryCountElement = document.getElementById('memoryCount');
        const progressFill = document.getElementById('progressFill');
        const nextBtn3 = document.getElementById('nextBtn3');
        
        if (memoryCountElement) memoryCountElement.textContent = '0';
        if (progressFill) progressFill.style.width = '0%';
        if (nextBtn3) {
            nextBtn3.classList.add('hidden');
            nextBtn3.classList.remove('pulse');
        }
    }
};

console.log("✨ New Year Surprise JavaScript loaded successfully!");