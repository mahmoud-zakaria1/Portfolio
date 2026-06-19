/**
 * Portfolio - Main Application Entry
 * Architecture: Modular initialization for UI components, features, and AI Chatbot.
 */

// ==========================================
// 1. Types & Interfaces
// ==========================================

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// ==========================================
// 2. Core UI Utilities
// ==========================================

function initFooterYear(): void {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

function initSmoothScroll(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event: MouseEvent) => {
      const targetId = anchor.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector<HTMLElement>(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

function initThemeToggle(): void {
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

// ==========================================
// 3. Feature: Algorithm Showcase
// ==========================================

function initAlgorithmShowcase(): void {
  const bubbleBtn = document.getElementById("btn-bubble") as HTMLButtonElement | null;
  const pointerBtn = document.getElementById("btn-pointer") as HTMLButtonElement | null;
  const codeDisplay = document.getElementById("code-block") as HTMLElement | null;
  const fileNameDisplay = document.getElementById("algo-file-name") as HTMLElement | null;
  const complexityBadge = document.getElementById("complexity-badge") as HTMLElement | null;
  const complexityText = document.getElementById("complexity-text") as HTMLElement | null;

  if (!bubbleBtn || !pointerBtn || !codeDisplay || !fileNameDisplay || !complexityBadge || !complexityText) return;

  const bubbleCode: string = `function bubbleSortOptimized(arr: number[]): number[] {
    let n = arr.length;
    let swapped: boolean;
    
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}`;

  const pointerCode: string = `function threePointerSort(arr: number[]): number[] {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr;
}`;

  // Initial State
  codeDisplay.textContent = bubbleCode;

  // Bubble Sort Event
  bubbleBtn.addEventListener("click", () => {
    pointerBtn.classList.remove("active");
    bubbleBtn.classList.add("active");

    fileNameDisplay.textContent = "bubbleSort.ts";
    codeDisplay.textContent = bubbleCode;
    complexityBadge.textContent = "Time Complexity: O(n²)";
    complexityBadge.style.backgroundColor = "#ff4d4d";
    complexityText.textContent = "The traditional sorting approach. It is highly educational for understanding data flow, but scales poorly with large datasets due to intensive nested iterations.";
  });

  // Three-Pointer Event
  pointerBtn.addEventListener("click", () => {
    bubbleBtn.classList.remove("active");
    pointerBtn.classList.add("active");

    fileNameDisplay.textContent = "threePointer.ts";
    codeDisplay.textContent = pointerCode;
    complexityBadge.textContent = "Time Complexity: O(n)";
    complexityBadge.style.backgroundColor = "#2ecc71";
    complexityText.textContent = "An enterprise-grade optimized solution! It processes and sorts the array in a single pass, drastically minimizing computational overhead and maximizing backend resource efficiency.";
  });
}

// ==========================================
// 4. Feature: Contact Modal & Form Handling
// ==========================================

function initContactModule(): void {
  const contactModal = document.getElementById('contact-modal') as HTMLElement | null;
  const openFormBtn = document.getElementById('open-form-btn') as HTMLButtonElement | null;
  const closeFormBtn = document.getElementById('close-form-btn') as HTMLButtonElement | null;
  const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;

  if (!contactModal || !openFormBtn || !closeFormBtn || !contactForm) return;

  const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
  const btnText = submitBtn.querySelector('.btn-text') as HTMLElement;
  const spinner = submitBtn.querySelector('.spinner') as HTMLElement;
  const formStatus = document.getElementById('form-status') as HTMLElement;

  const resetForm = (): void => {
    contactForm.reset();
    formStatus.className = 'form-status hidden';
    formStatus.textContent = '';
    document.querySelectorAll('.error-message').forEach(err => err.textContent = '');
  };

  const closeModal = (): void => {
    contactModal.classList.add('hidden');
    document.body.style.overflow = '';
    resetForm();
  };

  openFormBtn.addEventListener('click', (): void => {
    contactModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  closeFormBtn.addEventListener('click', closeModal);

  contactModal.addEventListener('click', (e: MouseEvent): void => {
    if (e.target === contactModal) closeModal();
  });

  contactForm.addEventListener('submit', async (e: Event): Promise<void> => {
    e.preventDefault();

    let isValid: boolean = true;
    document.querySelectorAll('.error-message').forEach(err => err.textContent = '');
    formStatus.className = 'form-status hidden';

    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;

    if (!nameInput.value.trim()) {
      (document.getElementById('name-error') as HTMLElement).textContent = 'Name is required.';
      isValid = false;
    }

    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      (document.getElementById('email-error') as HTMLElement).textContent = 'Email is required.';
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      (document.getElementById('email-error') as HTMLElement).textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      (document.getElementById('message-error') as HTMLElement).textContent = 'Message cannot be empty.';
      isValid = false;
    }

    if (!isValid) return;

    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    spinner.classList.remove('hidden');

    const formData: ContactFormData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      message: messageInput.value.trim()
    };

    try {
      const response = await fetch('https://formspree.io/f/mjgdqbvz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        formStatus.textContent = 'Thank you! Your message has been sent successfully.';
        formStatus.className = 'form-status success';
        contactForm.reset();
        setTimeout(closeModal, 2500);
      } else {
        throw new Error('API server returned an error.');
      }
    } catch (error) {
      formStatus.textContent = 'Oops! Something went wrong. Please try again later.';
      formStatus.className = 'form-status error';
    } finally {
      submitBtn.disabled = false;
      btnText.textContent = 'Submit';
      spinner.classList.add('hidden');
    }
  });
}

// ==========================================
// 5. Feature: AI Chatbot Core Engine With Permanent Quick Replies & HTML Injection
// ==========================================

function initAIChatbot(): void {
  const botToggleBtn = document.getElementById('bot-toggle-btn') as HTMLButtonElement | null;
  const botWindow = document.getElementById('bot-window') as HTMLDivElement | null;
  const botCloseBtn = document.getElementById('bot-close-btn') as HTMLButtonElement | null;
  const botForm = document.getElementById('bot-form') as HTMLFormElement | null;
  const botInput = document.getElementById('bot-input') as HTMLInputElement | null;
  const botMessages = document.getElementById('bot-messages') as HTMLDivElement | null;
  const botSuggestions = document.getElementById('bot-suggestions') as HTMLDivElement | null;

  if (!botToggleBtn || !botWindow || !botCloseBtn || !botForm || !botInput || !botMessages) {
    return;
  }

  const scrollToLatest = (): void => {
    botMessages.scrollTop = botMessages.scrollHeight;
  };

  const appendBubble = (text: string, type: 'incoming' | 'outgoing'): void => {
    const bubble = document.createElement('div');
    bubble.classList.add('portfolio-bot__msg', `portfolio-bot__msg--${type}`);

    if (type === 'incoming') {
      // 🔓 تسمح للمتصفح بترجمة تاجات الـ HTML مثل الروابط والـ Breaks للرسايل القادمة من البوت
      bubble.style.whiteSpace = 'normal';
      bubble.innerHTML = text.replace(/\n/g, '<br>');
    } else {
      // 🔒 حماية صارمة لرسايل المستخدم الـ Outgoing لمنع أي ثغرات حقن برمجية
      bubble.style.whiteSpace = 'pre-line';
      bubble.textContent = text;
    }

    botMessages.appendChild(bubble);
    scrollToLatest();
  };

  const showTypingIndicator = (): HTMLDivElement => {
    const indicator = document.createElement('div');
    indicator.classList.add('portfolio-bot__msg', 'portfolio-bot__msg--incoming', 'typing-indicator-bubble');
    indicator.textContent = 'Typing...';
    botMessages.appendChild(indicator);
    scrollToLatest();
    return indicator;
  };

  const processUserQuery = (queryText: string): void => {
    appendBubble(queryText, 'outgoing');

    const typingElement = showTypingIndicator();

    setTimeout(() => {
      typingElement.remove();
      const systemReply = dispatchAutomatedReply(queryText);
      appendBubble(systemReply, 'incoming');
    }, 1000);
  };

  // 🔘 Toggle chat window presentation state
  botToggleBtn.addEventListener('click', () => {
    botWindow.classList.toggle('hidden');
    scrollToLatest();
  });

  botCloseBtn.addEventListener('click', () => {
    botWindow.classList.add('hidden');
  });

  // ⌨️ Handle Form Submit (Manual Typing input)
  botForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const cleanInput = botInput.value.trim();
    if (!cleanInput) return;

    botInput.value = '';
    processUserQuery(cleanInput);
  });

  // 💡 Handle Quick Reply Suggestions Click Events
  if (botSuggestions) {
    const suggestionButtons = botSuggestions.querySelectorAll('.bot-suggest-btn');
    suggestionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const targetQuery = button.getAttribute('data-query');
        if (targetQuery) {
          processUserQuery(targetQuery);
        }
      });
    });
  }
}

/**
 * Handles expanded local AI request routing with rich HTML structural links.
 * Explicitly injects fully qualified anchor links tailored for immediate execution.
 */
function dispatchAutomatedReply(userInput: string): string {
  const normText = userInput.toLowerCase();

  // 1. Hiring, Timeline & Professional Career Goals
  if (/\b(contact|hire|email|social|github|linkedin|job|remote|target)\b/i.test(normText)) {
    return `Mahmoud's immediate target is to achieve a Senior Developer trajectory within 2 years. He is actively open to remote contract opportunities or full-time roles in local and Gulf markets as a gateway to European tech hubs!

🔗 <a href="https://www.linkedin.com/in/mahmoud-zakaria-2644982ab/" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); text-decoration: underline; font-weight: 600;">LinkedIn Profile</a>
🐙 <a href="https://github.com/mz2862001-ux" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); text-decoration: underline; font-weight: 600;">GitHub Account</a>
📧 <a href="mailto:mz282001@gmail.com" style="color: var(--color-accent); text-decoration: underline; font-weight: 600;">mz282001@gmail.com</a>

Feel free to leave a direct message via the portfolio contact form modal as well!`;
  }

  // 2. Identity & Profile Intro
  if (/\b(hi|hello|hey|who are you|about mahmoud|identity|greetings)\b/i.test(normText)) {
    return "Hi there! I'm Mahmoud's AI assistant. Mahmoud is a full-stack engineer specializing in the MERN stack. He focuses on complex backend architecture, dynamic data validation, and structural routing models. What can I help you discover about him?";
  }

  // 3. Technical Stack & Architecture Preferences
  if (/\b(skill|tech|stack|framework|node|react|express|mongo|mern|backend|frontend|typescript)\b/i.test(normText)) {
    return "Mahmoud is thoroughly integrated into the MERN Stack (MongoDB, Express.js, React, Node.js) paired with clean TypeScript implementations. He prioritizes sophisticated system logic, safe schema controllers, and server execution layers over simple UI/UX styling operations.";
  }

  // 4. Core Architectural Projects
  if (/\b(project|portfolio|work|lms|menu|restaurant|app)\b/i.test(normText)) {
    return "He has architected robust, functional full-stack platforms:\n\n1. 📚 **Learning Management System (LMS)**: Managed dynamic learning flows, role permissions, and analytical data stores.\n2. 🍔 **Restaurant Menu App**: A complete multi-user system partitioning consumer features from a granular owner administration console.\n\nBoth items demonstrate safe controller optimization and strict coding standards.";
  }

  // 5. The Psychology Degree Edge
  if (/\b(psychology|university|alexandria|degree|education|background)\b/i.test(normText)) {
    return "Mahmoud completed his degree at the Faculty of Arts, Psychology department at Alexandria University. This background injects strong architectural value into his engineering: it refines how he structures user behavioral loops, streamlines complex system logic, and sharpens team problem-solving dynamics.";
  }

  // 6. Future Roadmap: DevOps, Security & Cloud
  if (/\b(future|next|learn|devops|cyber|security|cloud)\b/i.test(normText)) {
    return "Mahmoud's forward-looking roadmap involves amplifying his full-stack capabilities with dedicated training in Cloud Infrastructure, automated DevOps CI/CD pipelines, and deep Cybersecurity practices.";
  }

  // Default Fallback
  return `That sounds like an interesting engineering scenario! Mahmoud possesses the architectural logic to approach that beautifully. Let's start a technical dialogue via his <a href="mailto:mz282001@gmail.com" style="color: var(--color-accent); text-decoration: underline;">Email</a> or use the contact form!`;
}

// ==========================================
// 6. Application Bootstrap (Entry Point)
// ==========================================

function bootstrapApplication(): void {
  initFooterYear();
  initSmoothScroll();
  initThemeToggle();
  initAlgorithmShowcase();
  initContactModule();
  initAIChatbot(); // Seamless injection of the chatbot module into the boot layer
}

// Wait for the HTML DOM to be fully loaded before running any logic
document.addEventListener("DOMContentLoaded", bootstrapApplication);