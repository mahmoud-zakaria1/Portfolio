/**
 * Portfolio - Main Application Entry
 * Architecture: Modular initialization for UI components and features.
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
  // DOM Elements Selection
  const contactModal = document.getElementById('contact-modal') as HTMLElement | null;
  const openFormBtn = document.getElementById('open-form-btn') as HTMLButtonElement | null;
  const closeFormBtn = document.getElementById('close-form-btn') as HTMLButtonElement | null;
  const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;
  
  if (!contactModal || !openFormBtn || !closeFormBtn || !contactForm) return;

  const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
  const btnText = submitBtn.querySelector('.btn-text') as HTMLElement;
  const spinner = submitBtn.querySelector('.spinner') as HTMLElement;
  const formStatus = document.getElementById('form-status') as HTMLElement;

  // Form Reset Helper
  const resetForm = (): void => {
    contactForm.reset();
    formStatus.className = 'form-status hidden';
    formStatus.textContent = '';
    document.querySelectorAll('.error-message').forEach(err => err.textContent = '');
  };

  // Close Modal Helper
  const closeModal = (): void => {
    contactModal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
    resetForm();
  };

  // Event Listeners for Modal Toggles
  openFormBtn.addEventListener('click', (): void => {
    contactModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  });

  closeFormBtn.addEventListener('click', closeModal);

  contactModal.addEventListener('click', (e: MouseEvent): void => {
    if (e.target === contactModal) closeModal();
  });

  // Form Submit Logic
  contactForm.addEventListener('submit', async (e: Event): Promise<void> => {
    e.preventDefault();

    // Clear previous errors
    let isValid: boolean = true;
    document.querySelectorAll('.error-message').forEach(err => err.textContent = '');
    formStatus.className = 'form-status hidden';

    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;

    // Client-Side Validation
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

    // Activate Loading State
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    spinner.classList.remove('hidden');

    const formData: ContactFormData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      message: messageInput.value.trim()
    };

    try {
      // Execute API Call
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
      // Restore UI State
      submitBtn.disabled = false;
      btnText.textContent = 'Submit';
      spinner.classList.add('hidden');
    }
  });
}

// ==========================================
// 5. Application Bootstrap (Entry Point)
// ==========================================

function bootstrapApplication(): void {
  initFooterYear();
  initSmoothScroll();
  initThemeToggle();
  initAlgorithmShowcase();
  initContactModule();
}

// Wait for the HTML DOM to be fully loaded before running any logic
document.addEventListener("DOMContentLoaded", bootstrapApplication);