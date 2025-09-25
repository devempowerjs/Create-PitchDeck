import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Shield, Users, TrendingUp, Target, Zap, BarChart3, DollarSign, Calendar, Award, Globe, Sparkles, Download, Printer } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import homepageImage from 'figma:asset/eaadca48765831c54ab4604a8e71a1168aef21e7.png';
import extensionImage from 'figma:asset/bd0d982768ba44be28d0922225a13d8777b177fb.png';
import dashboardImage from 'figma:asset/c10e96fcfa1d8258ed3f7054ceb18fe8a96e3239.png';
import businessDashboardImage from 'figma:asset/47ffc225fd3fb4db132453c9f2f17543db56e1d3.png';
import growthChartImage from 'figma:asset/7f5c727299f2fbf5d79dd0182bfe2f95a254d775.png';
import teenagerPhoneImage from 'figma:asset/e987d36892134e10b7093c0a00f5a500fa3f8a60.png';
import brandLogo from 'figma:asset/39da371163597e494f67834a50f27167ef02d903.png';
import croppedBrandLogo from 'figma:asset/d68b93c799417889bdf1243156e70a42d0dd3f23.png';
import mayankPhoto from 'figma:asset/82a1197822a058727b7ddc791b6f898abb14e930.png';
import lavanyaPhoto from 'figma:asset/4566e04f36d6dff0e83971241a2a1794ccd7f071.png';
import atulyaPhoto from 'figma:asset/a0bcb78ecde43ed59ed968447aab92ee26547240.png';

const slides = [
  { id: 1, title: "Title / Cover" },
  { id: 2, title: "The Problem" },
  { id: 3, title: "Our Solution" },
  { id: 4, title: "Why Now?" },
  { id: 5, title: "Unique Value Proposition" },
  { id: 6, title: "How It Works" },
  { id: 7, title: "Product Demo" },
  { id: 8, title: "Revenue Model" },
  { id: 9, title: "Cost Structure" },
  { id: 10, title: "Roadmap" },
  { id: 11, title: "Impact & Key Metrics" },
  { id: 12, title: "Competitive Edge" },
  { id: 13, title: "Business Potential" },
  { id: 14, title: "Team Dynamo" },
  { id: 15, title: "Thank You" }
];

export function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isExporting, setIsExporting] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (currentSlide < slides.length) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
  };

  const exportToPDF = async () => {
    setIsExporting(true);
    
    // Create a new window for the PDF content
    const printWindow = window.open('', '_blank', 'width=1200,height=800');
    
    if (!printWindow) {
      alert('Please allow popups to export PDF');
      setIsExporting(false);
      return;
    }

    // Function to convert image to base64
    const getImageAsBase64 = async (imageUrl: string): Promise<string> => {
      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });
      } catch (error) {
        console.error('Failed to load image:', imageUrl, error);
        return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNjM2NmYxIiBvcGFjaXR5PSIwLjIiLz4KPHRLEHHQIEE9IjE1MCIgeT0iMTAwIiBmaWxsPSIjZmZmZmZmIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZTwvdGV4dD4KPC9zdmc+';
      }
    };

    // Convert all images to base64
    const imageUrls = {
      brandLogo: await getImageAsBase64(croppedBrandLogo),
      teenagerPhone: await getImageAsBase64(teenagerPhoneImage), 
      growthChart: await getImageAsBase64(growthChartImage),
      homepage: await getImageAsBase64(homepageImage),
      extension: await getImageAsBase64(extensionImage),
      dashboard: await getImageAsBase64(dashboardImage),
      businessDashboard: await getImageAsBase64(businessDashboardImage),
      mayankPhoto: await getImageAsBase64(mayankPhoto),
      lavanyaPhoto: await getImageAsBase64(lavanyaPhoto),
      atulyaPhoto: await getImageAsBase64(atulyaPhoto)
    };

    // Get current page styles
    const styleSheets = Array.from(document.styleSheets)
      .map(styleSheet => {
        try {
          return Array.from(styleSheet.cssRules)
            .map(rule => rule.cssText)
            .join('\n');
        } catch (e) {
          return '';
        }
      })
      .join('\n');

    // Create complete HTML document for printing
    const printHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Digital Guard Pitch Deck - Team Dynamo</title>
        <style>
          ${styleSheets}
          
          /* Print-specific styles */
          @media print {
            @page {
              size: landscape;
              margin: 0;
            }
            
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            
            body {
              margin: 0;
              padding: 0;
            }
            
            .print-slide {
              width: 100vw;
              height: 100vh;
              page-break-after: always;
              page-break-inside: avoid;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 2rem;
              background: linear-gradient(135deg, rgb(124, 58, 237), rgb(37, 99, 235), rgb(124, 58, 237)) !important;
            }
            
            .print-slide:last-child {
              page-break-after: avoid;
            }
          }
          
          /* Screen styles for the print preview */
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, rgb(124, 58, 237), rgb(37, 99, 235), rgb(124, 58, 237));
          }
          
          .print-slide {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            background: linear-gradient(135deg, rgb(124, 58, 237), rgb(37, 99, 235), rgb(124, 58, 237));
          }
          
          .slide-content {
            width: 100%;
            max-width: 72rem;
            height: 100%;
            color: white;
          }
          
          h1 {
            font-size: 3rem;
            font-weight: 600;
            line-height: 1.2;
            margin-bottom: 1.5rem;
          }
          
          h2 {
            font-size: 2.5rem;
            font-weight: 600;
            line-height: 1.2;
            margin-bottom: 1.25rem;
          }
          
          h3 {
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 1.3;
            margin-bottom: 1rem;
          }
          
          h4 {
            font-size: 1.25rem;
            font-weight: 500;
            line-height: 1.3;
            margin-bottom: 0.75rem;
          }
          
          p {
            font-size: 1rem;
            line-height: 1.5;
            margin-bottom: 0.75rem;
          }
          
          .grid {
            display: grid;
            gap: 1.5rem;
          }
          
          .grid-cols-3 {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .grid-cols-5 {
            grid-template-columns: repeat(5, 1fr);
          }
          
          .card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 0.75rem;
            padding: 1.5rem;
            text-align: center;
          }
          
          .icon {
            width: 3rem;
            height: 3rem;
            margin: 0 auto 1rem;
          }
          
          .text-center {
            text-align: center;
          }
          
          .mb-8 {
            margin-bottom: 2rem;
          }
          
          .mb-12 {
            margin-bottom: 3rem;
          }
          
          .flex {
            display: flex;
          }
          
          .items-center {
            align-items: center;
          }
          
          .justify-center {
            justify-content: center;
          }
          
          .gap-6 {
            gap: 1.5rem;
          }
          
          .text-white {
            color: white;
          }
          
          .text-white\\/80 {
            color: rgba(255, 255, 255, 0.8);
          }
          
          .rounded-full {
            border-radius: 9999px;
          }
          
          .bg-white\\/20 {
            background-color: rgba(255, 255, 255, 0.2);
          }
          
          .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .py-2 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
        </style>
      </head>
      <body>
        ${generateAllSlidesHTML(imageUrls)}
      </body>
      </html>
    `;

    // Write content to new window
    printWindow.document.write(printHTML);
    printWindow.document.close();

    // Wait for content to load, then print
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
      
      // Close the window after printing
      setTimeout(() => {
        printWindow.close();
        setIsExporting(false);
      }, 1000);
    }, 1500);
  };

  const generateAllSlidesHTML = (imageUrls: any) => {
    return `
      <!-- SIMPLE CLEAN 15 SLIDES FOR PDF -->
      
      <!-- Slide 1: Title -->
      <div class="print-slide">
        <div class="slide-content">
          <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <div style="margin-bottom: 3rem;">
              <div style="width: 6rem; height: 6rem; margin: 0 auto 2rem;">
                <img src="${imageUrls.brandLogo}" alt="Digital Guard Logo" style="width: 100%; height: 100%; object-fit: contain;" />
              </div>
              <div style="background: rgba(255, 255, 255, 0.2); padding: 0.5rem 1rem; border-radius: 9999px; display: inline-block; margin-bottom: 1rem;">
                <span style="color: white; font-size: 0.875rem;">Team Dynamo Presents</span>
              </div>
            </div>
            
            <h1 style="color: white; margin-bottom: 1.5rem; font-size: 4rem;">Digital Guard</h1>
            <p style="color: rgba(255, 255, 255, 0.9); font-size: 1.5rem; margin-bottom: 3rem;">Your digital life, protected & future-ready.</p>
            
            <div style="display: flex; gap: 2rem; justify-content: center;">
              <div style="text-align: center; padding: 1rem; background: rgba(255, 255, 255, 0.1); border-radius: 0.75rem;">
                <svg style="width: 2rem; height: 2rem; color: white; margin: 0 auto 0.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
                <span style="color: white;">Website</span>
              </div>
              <div style="text-align: center; padding: 1rem; background: rgba(255, 255, 255, 0.1); border-radius: 0.75rem;">
                <svg style="width: 2rem; height: 2rem; color: white; margin: 0 auto 0.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span style="color: white;">Extension</span>
              </div>
              <div style="text-align: center; padding: 1rem; background: rgba(255, 255, 255, 0.1); border-radius: 0.75rem;">
                <svg style="width: 2rem; height: 2rem; color: white; margin: 0 auto 0.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                <span style="color: white;">Dashboards</span>
              </div>
            </div>
            
            <p style="color: rgba(255, 255, 255, 0.6); margin-top: 2rem;">Comprehensive Digital Safety Ecosystem</p>
          </div>
        </div>
      </div>

      <!-- Slide 2: The Problem -->
      <div class="print-slide">
        <div class="slide-content">
          <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h1 class="text-center mb-8">The Problem</h1>
            
            <div style="margin-bottom: 2rem; padding: 1.5rem; background: rgba(255, 255, 255, 0.1); border-radius: 1rem; text-align: center;">
              <h3 style="color: white; margin-bottom: 1rem;">Critical Digital Safety Crisis</h3>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
                <div>
                  <div style="font-size: 2rem; font-weight: bold; color: #fca5a5;">1.3B+</div>
                  <div style="color: rgba(255, 255, 255, 0.8);">Teens at Risk</div>
                </div>
                <div>
                  <div style="font-size: 2rem; font-weight: bold; color: #fdba74;">↑42%</div>
                  <div style="color: rgba(255, 255, 255, 0.8);">Cyber Threats</div>
                </div>
                <div>
                  <div style="font-size: 2rem; font-weight: bold; color: #fde047;">85%</div>
                  <div style="color: rgba(255, 255, 255, 0.8);">No Protection</div>
                </div>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; width: 100%;">
              <div>
                <img src="${imageUrls.teenagerPhone}" alt="Teenagers using social media" style="width: 100%; height: 15rem; object-fit: cover; border-radius: 1rem;" />
                <p style="color: white; text-align: center; margin-top: 1rem;">Digital Natives Growing Up Unprotected</p>
              </div>
              
              <div style="display: grid; gap: 1rem;">
                <div class="card" style="padding: 1rem;">
                  <h4 style="color: white;">73% of teens regret posts</h4>
                  <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">Oversharing online with lasting consequences</p>
                </div>
                <div class="card" style="padding: 1rem;">
                  <h4 style="color: white;">Deleted ≠ Gone</h4>
                  <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">Digital footprints remain forever</p>
                </div>
                <div class="card" style="padding: 1rem;">
                  <h4 style="color: white;">Rising Cyber Threats</h4>
                  <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">42% yearly increase in risks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 3: Our Solution -->
      <div class="print-slide">
        <div class="slide-content">
          <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h1 class="text-center mb-8">Our Solution</h1>
            
            <div style="margin-bottom: 2rem; text-align: center;">
              <p style="color: white; font-size: 1.25rem;">Complete Digital Safety Ecosystem</p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; width: 100%;">
              <div class="card" style="padding: 2rem; text-align: center;">
                <svg style="width: 4rem; height: 4rem; margin: 0 auto 1.5rem; color: #60a5fa;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
                <h3 style="color: white; margin-bottom: 1rem;">Website Platform</h3>
                <p style="color: rgba(255, 255, 255, 0.8);">Interactive guides, privacy quizzes & educational resources</p>
                <div style="margin-top: 1rem; font-size: 0.875rem; color: rgba(255, 255, 255, 0.7);">
                  📚 Learning • 🎯 Quizzes • 📊 Tracking
                </div>
              </div>
              
              <div class="card" style="padding: 2rem; text-align: center;">
                <svg style="width: 4rem; height: 4rem; margin: 0 auto 1.5rem; color: #a855f7;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <h3 style="color: white; margin-bottom: 1rem;">Smart Extension</h3>
                <p style="color: rgba(255, 255, 255, 0.8);">AI-powered real-time protection & privacy alerts</p>
                <div style="margin-top: 1rem; font-size: 0.875rem; color: rgba(255, 255, 255, 0.7);">
                  🛡️ Detection • ⚡ Alerts • 🔐 Privacy
                </div>
              </div>
              
              <div class="card" style="padding: 2rem; text-align: center;">
                <svg style="width: 4rem; height: 4rem; margin: 0 auto 1.5rem; color: #10b981;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                <h3 style="color: white; margin-bottom: 1rem;">Analytics Dashboard</h3>
                <p style="color: rgba(255, 255, 255, 0.8);">Comprehensive insights for schools & enterprises</p>
                <div style="margin-top: 1rem; font-size: 0.875rem; color: rgba(255, 255, 255, 0.7);">
                  📈 Analytics • 🏫 Schools • 🏢 Enterprise
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 4: Why Now? -->
      <div class="print-slide">
        <div class="slide-content">
          <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h1 class="text-center mb-8">Why Now?</h1>
            
            <div style="margin-bottom: 2rem; text-align: center;">
              <p style="color: white; font-size: 1.25rem;">Perfect Market Timing</p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem; align-items: center; width: 100%;">
              <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                <div class="card" style="padding: 1.5rem;">
                  <h3 style="color: white; margin-bottom: 0.5rem;">1.3B+ Teenagers online daily</h3>
                  <p style="color: rgba(255, 255, 255, 0.8);">Growing 15% yearly</p>
                </div>
                <div class="card" style="padding: 1.5rem;">
                  <h3 style="color: white; margin-bottom: 0.5rem;">Cyber Threats Rising 42%</h3>
                  <p style="color: rgba(255, 255, 255, 0.8);">Year over year increase</p>
                </div>
                <div class="card" style="padding: 1.5rem;">
                  <h3 style="color: white; margin-bottom: 0.5rem;">85% Want Protection</h3>
                  <p style="color: rgba(255, 255, 255, 0.8);">Parents & schools seeking solutions</p>
                </div>
              </div>
              
              <div style="text-align: center;">
                <img src="${imageUrls.growthChart}" alt="Market Growth" style="width: 100%; height: 20rem; object-fit: cover; border-radius: 1rem;" />
                <p style="color: white; margin-top: 1rem;">Digital Safety Market: $15.2B (2024)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 5: Unique Value Proposition -->
      <div class="print-slide">
        <div class="slide-content">
          <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h1 class="text-center mb-8">Unique Value Proposition</h1>
            
            <div style="margin-bottom: 2rem; text-align: center;">
              <p style="color: white; font-size: 1.25rem;">First comprehensive digital safety ecosystem that educates, protects, and scales</p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; width: 100%;">
              <div class="card" style="padding: 2rem; text-align: center;">
                <svg style="width: 3rem; height: 3rem; margin: 0 auto 1rem; color: #fbbf24;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                <h3 style="color: white; margin-bottom: 0.5rem;">First Complete Ecosystem</h3>
                <p style="color: rgba(255, 255, 255, 0.8);">Education + Prevention + Analytics</p>
              </div>
              
              <div class="card" style="padding: 2rem; text-align: center;">
                <svg style="width: 3rem; height: 3rem; margin: 0 auto 1rem; color: #10b981;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 style="color: white; margin-bottom: 0.5rem;">Privacy-First</h3>
                <p style="color: rgba(255, 255, 255, 0.8);">Local processing, no data storage</p>
              </div>
              
              <div class="card" style="padding: 2rem; text-align: center;">
                <svg style="width: 3rem; height: 3rem; margin: 0 auto 1rem; color: #a855f7;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <h3 style="color: white; margin-bottom: 0.5rem;">Infinitely Scalable</h3>
                <p style="color: rgba(255, 255, 255, 0.8);">Teens to global enterprises</p>
              </div>
              
              <div class="card" style="padding: 2rem; text-align: center;">
                <svg style="width: 3rem; height: 3rem; margin: 0 auto 1rem; color: #3b82f6;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 714.438 0 3.42 3.42 0 701.946.806 3.42 3.42 0 713.138 3.138 3.42 3.42 0 70.806 1.946 3.42 3.42 0 710 4.438 3.42 3.42 0 70-.806 1.946 3.42 3.42 0 71-3.138 3.138 3.42 3.42 0 70-1.946.806 3.42 3.42 0 71-4.438 0 3.42 3.42 0 70-1.946-.806 3.42 3.42 0 71-3.138-3.138 3.42 3.42 0 70-.806-1.946 3.42 3.42 0 710-4.438 3.42 3.42 0 70.806-1.946 3.42 3.42 0 713.138-3.138z"></path>
                </svg>
                <h3 style="color: white; margin-bottom: 0.5rem;">Education-First</h3>
                <p style="color: rgba(255, 255, 255, 0.8);">Behavior change, not just blocking</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 6: How It Works -->
      <div class="print-slide">
        <div class="slide-content">
          <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h1 class="text-center mb-12">How It Works</h1>
            <div style="width: 100%; max-width: 80rem;">
              <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 2rem;">
                <div style="display: flex; align-items: center; gap: 2rem;">
                  <div style="text-align: center;">
                    <svg style="width: 4rem; height: 4rem; color: rgb(147, 197, 253); margin: 0 auto 1rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                    </svg>
                    <h3 style="color: white; margin-bottom: 0.5rem;">Learn</h3>
                    <p style="color: rgba(255, 255, 255, 0.8);">Website</p>
                  </div>
                  <div style="color: rgba(255, 255, 255, 0.6); font-size: 2rem;">→</div>
                  <div style="text-align: center;">
                    <svg style="width: 4rem; height: 4rem; color: rgb(134, 239, 172); margin: 0 auto 1rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 style="color: white; margin-bottom: 0.5rem;">Protect</h3>
                    <p style="color: rgba(255, 255, 255, 0.8);">Extension</p>
                  </div>
                  <div style="color: rgba(255, 255, 255, 0.6); font-size: 2rem;">→</div>
                  <div style="text-align: center;">
                    <svg style="width: 4rem; height: 4rem; color: rgb(196, 181, 253); margin: 0 auto 1rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 712-2h2a2 2 0 712 2v10m-6 0a2 2 0 712 2h2a2 2 0 712-2m0 0V5a2 2 0 712-2h2a2 2 0 712 2v14a2 2 0 71-2 2h-2a2 2 0 71-2-2z"></path>
                    </svg>
                    <h3 style="color: white; margin-bottom: 0.5rem;">Analyze</h3>
                    <p style="color: rgba(255, 255, 255, 0.8);">Dashboard</p>
                  </div>
                </div>
              </div>
              <div class="card" style="padding: 2rem; text-align: center;">
                <p style="font-size: 1.125rem;">Comprehensive 3-step digital safety journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 7: Product Demo -->
      <div class="print-slide">
        <div class="slide-content">
          <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h1 class="text-center mb-8">Product Demo</h1>
            <div style="margin-bottom: 2rem; text-align: center;">
              <p style="color: white; background: rgba(16, 185, 129, 0.2); padding: 0.5rem 1rem; border-radius: 9999px; display: inline-block;">🟢 Live Products</p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; width: 100%;">
              <div class="card" style="padding: 1.5rem;">
                <h3 style="color: white; margin-bottom: 1rem;">Website Homepage</h3>
                <img src="${imageUrls.homepage}" alt="Digital Guard Website Homepage" style="width: 100%; height: 10rem; object-fit: cover; border-radius: 0.5rem; margin-bottom: 1rem;" />
                <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">Educational Platform</p>
              </div>
              
              <div class="card" style="padding: 1.5rem;">
                <h3 style="color: white; margin-bottom: 1rem;">Browser Extension</h3>
                <img src="${imageUrls.extension}" alt="Digital Guard Browser Extension" style="width: 100%; height: 10rem; object-fit: cover; border-radius: 0.5rem; margin-bottom: 1rem;" />
                <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">Real-time Protection</p>
              </div>
              
              <div class="card" style="padding: 1.5rem;">
                <h3 style="color: white; margin-bottom: 1rem;">Analytics Dashboard</h3>
                <img src="${imageUrls.dashboard}" alt="Digital Guard Analytics Dashboard" style="width: 100%; height: 10rem; object-fit: cover; border-radius: 0.5rem; margin-bottom: 1rem;" />
                <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">Institutional Insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 8: Revenue Model -->
      <div class="print-slide">
        <div class="slide-content">
          <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h1 class="text-center mb-8">Revenue Model</h1>
            
            <div style="margin-bottom: 2rem; text-center;">
              <p style="color: white; font-size: 1.25rem;">5 Revenue Streams</p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; width: 100%; margin-bottom: 2rem;">
              <div class="card" style="padding: 1rem; text-align: center; font-size: 0.875rem;">
                <svg style="width: 2rem; height: 2rem; margin: 0 auto 0.5rem; color: rgb(134, 239, 172);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
                <h4 style="color: white; margin-bottom: 0.5rem; font-size: 0.75rem;">Website Ads</h4>
                <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.75rem;">₹5K+/month</p>
              </div>
              <div class="card" style="padding: 1rem; text-align: center; font-size: 0.875rem;">
                <svg style="width: 2rem; height: 2rem; margin: 0 auto 0.5rem; color: rgb(134, 239, 172);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 715 0z"></path>
                </svg>
                <h4 style="color: white; margin-bottom: 0.5rem; font-size: 0.75rem;">Premium Extension</h4>
                <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.75rem;">₹99/year</p>
              </div>
              <div class="card" style="padding: 1rem; text-align: center; font-size: 0.875rem;">
                <svg style="width: 2rem; height: 2rem; margin: 0 auto 0.5rem; color: rgb(134, 239, 172);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 714.438 0 3.42 3.42 0 701.946.806 3.42 3.42 0 713.138 3.138 3.42 3.42 0 70.806 1.946 3.42 3.42 0 710 4.438 3.42 3.42 0 70-.806 1.946 3.42 3.42 0 71-3.138 3.138 3.42 3.42 0 70-1.946.806 3.42 3.42 0 71-4.438 0 3.42 3.42 0 70-1.946-.806 3.42 3.42 0 71-3.138-3.138 3.42 3.42 0 70-.806-1.946 3.42 3.42 0 710-4.438 3.42 3.42 0 70.806-1.946 3.42 3.42 0 713.138-3.138z"></path>
                </svg>
                <h4 style="color: white; margin-bottom: 0.5rem; font-size: 0.75rem;">School Licenses</h4>
                <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.75rem;">₹5-15K/year</p>
              </div>
              <div class="card" style="padding: 1rem; text-align: center; font-size: 0.875rem;">
                <svg style="width: 2rem; height: 2rem; margin: 0 auto 0.5rem; color: rgb(134, 239, 172);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <h4 style="color: white; margin-bottom: 0.5rem; font-size: 0.75rem;">Corporate</h4>
                <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.75rem;">₹25K+/year</p>
              </div>
              <div class="card" style="padding: 1rem; text-align: center; font-size: 0.875rem;">
                <svg style="width: 2rem; height: 2rem; margin: 0 auto 0.5rem; color: rgb(134, 239, 172);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                <h4 style="color: white; margin-bottom: 0.5rem; font-size: 0.75rem;">CSR Partnerships</h4>
                <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.75rem;">₹50K+/project</p>
              </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; text-align: center;">
              <div class="card" style="padding: 1.5rem;">
                <div style="font-size: 1.5rem; font-weight: bold; color: #86efac;">Year 1</div>
                <div style="color: white; font-size: 1.125rem;">₹3L+</div>
              </div>
              <div class="card" style="padding: 1.5rem;">
                <div style="font-size: 1.5rem; font-weight: bold; color: #93c5fd;">Year 2</div>
                <div style="color: white; font-size: 1.125rem;">₹12L+</div>
              </div>
              <div class="card" style="padding: 1.5rem;">
                <div style="font-size: 1.5rem; font-weight: bold; color: #c084fc;">Year 3</div>
                <div style="color: white; font-size: 1.125rem;">₹45L+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 9: Cost Structure -->
      <div class="print-slide">
        <div class="slide-content">
          <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h1 class="text-center mb-12">Cost Structure</h1>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; width: 100%; max-width: 64rem;">
              <div class="card" style="padding: 2rem; text-align: center;">
                <svg style="width: 4rem; height: 4rem; margin: 0 auto 1.5rem; color: rgb(248, 113, 113);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <h3 style="color: white;">Development & Maintenance</h3>
                <p style="color: rgba(255, 255, 255, 0.8);">Platform development & technical support</p>
              </div>
              <div class="card" style="padding: 2rem; text-align: center;">
                <svg style="width: 4rem; height: 4rem; margin: 0 auto 1.5rem; color: rgb(248, 113, 113);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
                <h3 style="color: white;">Hosting & Infrastructure</h3>
                <p style="color: rgba(255, 255, 255, 0.8);">Cloud services & server costs</p>
              </div>
              <div class="card" style="padding: 2rem; text-align: center;">
                <svg style="width: 4rem; height: 4rem; margin: 0 auto 1.5rem; color: rgb(248, 113, 113);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <h3 style="color: white;">Marketing & Outreach</h3>
                <p style="color: rgba(255, 255, 255, 0.8);">Digital marketing & awareness campaigns</p>
              </div>
              <div class="card" style="padding: 2rem; text-align: center;">
                <svg style="width: 4rem; height: 4rem; margin: 0 auto 1.5rem; color: rgb(248, 113, 113);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 715 0z"></path>
                </svg>
                <h3 style="color: white;">Training & Support</h3>
                <p style="color: rgba(255, 255, 255, 0.8);">Educational content & user support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 10: Roadmap -->
      <div class="print-slide">
        <div class="slide-content">
          <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h1 class="text-center mb-8">Development Roadmap</h1>
            <div style="width: 100%; max-width: 72rem;">
              <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem;">
                <div class="card" style="padding: 1.5rem; font-size: 0.875rem;">
                  <div style="background: #10b981; color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; margin-bottom: 1rem; text-align: center;">Current</div>
                  <ul style="list-style: none; padding: 0;">
                    <li style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">• Website Live</li>
                    <li style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">• Extension Beta</li>
                    <li style="color: rgba(255, 255, 255, 0.8);">• First Users</li>
                  </ul>
                </div>
                <div class="card" style="padding: 1.5rem; font-size: 0.875rem;">
                  <div style="background: #3b82f6; color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; margin-bottom: 1rem; text-align: center;">Q1 2025</div>
                  <ul style="list-style: none; padding: 0;">
                    <li style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">• Free teen version</li>
                    <li style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">• Alert system</li>
                    <li style="color: rgba(255, 255, 255, 0.8);">• Privacy shortcuts</li>
                  </ul>
                </div>
                <div class="card" style="padding: 1.5rem; font-size: 0.875rem;">
                  <div style="background: #a855f7; color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; margin-bottom: 1rem; text-align: center;">Q2 2025</div>
                  <ul style="list-style: none; padding: 0;">
                    <li style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">• Gamification</li>
                    <li style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">• Advanced AI</li>
                    <li style="color: rgba(255, 255, 255, 0.8);">• Premium features</li>
                  </ul>
                </div>
                <div class="card" style="padding: 1.5rem; font-size: 0.875rem;">
                  <div style="background: #f97316; color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; margin-bottom: 1rem; text-align: center;">Q3 2025</div>
                  <ul style="list-style: none; padding: 0;">
                    <li style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">• School Dashboard</li>
                    <li style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">• Corporate Version</li>
                    <li style="color: rgba(255, 255, 255, 0.8);">• Bulk licensing</li>
                  </ul>
                </div>
                <div class="card" style="padding: 1.5rem; font-size: 0.875rem;">
                  <div style="background: #eab308; color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; margin-bottom: 1rem; text-align: center;">2026+</div>
                  <ul style="list-style: none; padding: 0;">
                    <li style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">• Mobile app</li>
                    <li style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">• AI sentiment</li>
                    <li style="color: rgba(255, 255, 255, 0.8);">• Global certification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 11: Impact & Key Metrics -->
      <div class="print-slide">
        <div class="slide-content">
          <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h1 class="text-center mb-12">Impact & Key Metrics</h1>
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1.5rem; width: 100%; max-width: 72rem;">
              <div class="card" style="padding: 1.5rem; text-align: center;">
                <svg style="width: 3rem; height: 3rem; margin: 0 auto 1rem; color: rgb(253, 224, 71);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 715 0z"></path>
                </svg>
                <h4 style="color: white; font-size: 0.875rem;">Students Trained</h4>
              </div>
              <div class="card" style="padding: 1.5rem; text-align: center;">
                <svg style="width: 3rem; height: 3rem; margin: 0 auto 1rem; color: rgb(253, 224, 71);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <h4 style="color: white; font-size: 0.875rem;">Extension Downloads</h4>
              </div>
              <div class="card" style="padding: 1.5rem; text-align: center;">
                <svg style="width: 3rem; height: 3rem; margin: 0 auto 1rem; color: rgb(253, 224, 71);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h4 style="color: white; font-size: 0.875rem;">Threats Prevented</h4>
              </div>
              <div class="card" style="padding: 1.5rem; text-align: center;">
                <svg style="width: 3rem; height: 3rem; margin: 0 auto 1rem; color: rgb(253, 224, 71);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 714.438 0 3.42 3.42 0 701.946.806 3.42 3.42 0 713.138 3.138 3.42 3.42 0 70.806 1.946 3.42 3.42 0 710 4.438 3.42 3.42 0 70-.806 1.946 3.42 3.42 0 71-3.138 3.138 3.42 3.42 0 70-1.946.806 3.42 3.42 0 71-4.438 0 3.42 3.42 0 70-1.946-.806 3.42 3.42 0 71-3.138-3.138 3.42 3.42 0 70-.806-1.946 3.42 3.42 0 710-4.438 3.42 3.42 0 70.806-1.946 3.42 3.42 0 713.138-3.138z"></path>
                </svg>
                <h4 style="color: white; font-size: 0.875rem;">Awareness Sessions</h4>
              </div>
              <div class="card" style="padding: 1.5rem; text-align: center;">
                <svg style="width: 3rem; height: 3rem; margin: 0 auto 1rem; color: rgb(253, 224, 71);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <h4 style="color: white; font-size: 0.875rem;">Corporate Adoption</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 12: Competitive Edge -->
      <div class="print-slide">
        <div class="slide-content">
          <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h1 class="text-center mb-12">Competitive Edge</h1>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem; width: 100%; max-width: 80rem;">
              <div class="card" style="padding: 2rem; background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(248, 113, 113, 0.3);">
                <h3 style="color: white; margin-bottom: 1.5rem;">Other Tools</h3>
                <ul style="list-style: none; padding: 0; color: rgba(255, 255, 255, 0.8);">
                  <li style="margin-bottom: 1rem;">• Block risky content only</li>
                  <li style="margin-bottom: 1rem;">• No education component</li>
                  <li style="margin-bottom: 1rem;">• Limited analytics</li>
                  <li>• Not scalable</li>
                </ul>
                <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(239, 68, 68, 0.3); border-radius: 0.5rem;">
                  <span style="color: #fca5a5;">⚠️ Limited Functionality</span>
                </div>
              </div>
              
              <div class="card" style="padding: 2rem; background: rgba(34, 197, 94, 0.2); border: 1px solid rgba(74, 222, 128, 0.3);">
                <h3 style="color: white; margin-bottom: 1.5rem;">Digital Guard</h3>
                <ul style="list-style: none; padding: 0; color: rgba(255, 255, 255, 0.8);">
                  <li style="margin-bottom: 1rem;">✓ Educates + Prevents + Tracks</li>
                  <li style="margin-bottom: 1rem;">✓ Privacy-first architecture</li>
                  <li style="margin-bottom: 1rem;">✓ Complete analytics</li>
                  <li>✓ Infinitely scalable</li>
                </ul>
                <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(34, 197, 94, 0.3); border-radius: 0.5rem;">
                  <span style="color: #86efac;">🚀 Complete Ecosystem</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 13: Business Potential -->
      <div class="print-slide">
        <div class="slide-content">
          <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h1 class="text-center mb-12">Business Potential</h1>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; width: 100%; max-width: 80rem; align-items: center;">
              <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                <div class="card" style="padding: 1.5rem;">
                  <svg style="width: 3rem; height: 3rem; margin-bottom: 1rem; color: rgb(134, 239, 172);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                  <h3 style="color: white; margin-bottom: 0.5rem;">Growing Market</h3>
                  <p style="color: rgba(255, 255, 255, 0.8);">EdTech + Cyber Safety expanding globally</p>
                </div>
                <div class="card" style="padding: 1.5rem;">
                  <svg style="width: 3rem; height: 3rem; margin-bottom: 1rem; color: rgb(147, 197, 253);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 714.438 0 3.42 3.42 0 701.946.806 3.42 3.42 0 713.138 3.138 3.42 3.42 0 70.806 1.946 3.42 3.42 0 710 4.438 3.42 3.42 0 70-.806 1.946 3.42 3.42 0 71-3.138 3.138 3.42 3.42 0 70-1.946.806 3.42 3.42 0 71-4.438 0 3.42 3.42 0 70-1.946-.806 3.42 3.42 0 71-3.138-3.138 3.42 3.42 0 70-.806-1.946 3.42 3.42 0 710-4.438 3.42 3.42 0 70.806-1.946 3.42 3.42 0 713.138-3.138z"></path>
                  </svg>
                  <h3 style="color: white; margin-bottom: 0.5rem;">Government & CSR Focus</h3>
                  <p style="color: rgba(255, 255, 255, 0.8);">Rising focus on digital hygiene</p>
                </div>
                <div class="card" style="padding: 1.5rem;">
                  <svg style="width: 3rem; height: 3rem; margin-bottom: 1rem; color: rgb(196, 181, 253);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                  </svg>
                  <h3 style="color: white; margin-bottom: 0.5rem;">Global Expansion</h3>
                  <p style="color: rgba(255, 255, 255, 0.8);">Schools, colleges, corporates worldwide</p>
                </div>
              </div>
              <div>
                <img src="${imageUrls.businessDashboard}" alt="Business Dashboard" style="width: 100%; height: 24rem; object-fit: cover; border-radius: 1rem;" />
                <p style="color: white; text-align: center; margin-top: 1rem;">Enterprise Analytics & Insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 14: Team Dynamo WITH MAYANK'S PHOTO -->
      <div class="print-slide">
        <div class="slide-content">
          <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h1 class="text-center mb-8">Team Dynamo</h1>
            
            <div style="margin-bottom: 2rem; text-align: center;">
              <p style="color: white; font-size: 1.25rem;">Meet the Innovators</p>
              <p style="color: rgba(255, 255, 255, 0.8);">Passionate developers building the future of digital safety</p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; width: 100%; max-width: 80rem;">
              <div class="card" style="padding: 2rem; text-align: center;">
                <div style="width: 6rem; height: 6rem; margin: 0 auto 1.5rem; border-radius: 50%; border: 3px solid rgba(255, 255, 255, 0.2); overflow: hidden; background: rgba(255, 255, 255, 0.1);">
                  <img src="${imageUrls.mayankPhoto}" alt="Mayank Raj" style="width: 100%; height: 100%; object-fit: contain;" />
                </div>
                <div style="margin-bottom: 1rem;">
                  <span style="font-size: 0.75rem; background: rgba(16, 185, 129, 0.3); color: white; padding: 0.25rem 0.75rem; border-radius: 9999px;">📸 Team Member</span>
                </div>
                <h3 style="color: white; margin-bottom: 0.5rem;">Mayank Raj</h3>
                <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">Technical Development</p>
                <p style="color: rgba(255, 255, 255, 0.6); font-size: 0.875rem;">Website & Extension</p>
                <div style="margin-top: 1rem; padding: 0.5rem; background: rgba(255, 255, 255, 0.1); border-radius: 0.5rem;">
                  <span style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">Full-Stack Developer</span>
                </div>
              </div>
              
              <div class="card" style="padding: 2rem; text-align: center;">
                <div style="width: 6rem; height: 6rem; margin: 0 auto 1.5rem; border-radius: 50%; border: 3px solid rgba(255, 255, 255, 0.2); overflow: hidden; background: rgba(255, 255, 255, 0.1);">
                  <img src="${imageUrls.atulyaPhoto}" alt="Atulya Jha" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;" />
                </div>
                <div style="margin-bottom: 1rem;">
                  <span style="font-size: 0.75rem; background: rgba(147, 51, 234, 0.3); color: white; padding: 0.25rem 0.75rem; border-radius: 9999px;">📸 Team Member</span>
                </div>
                <h3 style="color: white; margin-bottom: 0.5rem;">Atulya Jha</h3>
                <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">Research & Surveys</p>
                <p style="color: rgba(255, 255, 255, 0.6); font-size: 0.875rem;">Market Analysis</p>
                <div style="margin-top: 1rem; padding: 0.5rem; background: rgba(255, 255, 255, 0.1); border-radius: 0.5rem;">
                  <span style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">Data Analyst</span>
                </div>
              </div>
              
              <div class="card" style="padding: 2rem; text-align: center;">
                <div style="width: 6rem; height: 6rem; margin: 0 auto 1.5rem; border-radius: 50%; border: 3px solid rgba(255, 255, 255, 0.2); overflow: hidden; background: rgba(255, 255, 255, 0.1);">
                  <img src="${imageUrls.lavanyaPhoto}" alt="Lavanya Pataiya" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;" />
                </div>
                <div style="margin-bottom: 1rem;">
                  <span style="font-size: 0.75rem; background: rgba(249, 115, 22, 0.3); color: white; padding: 0.25rem 0.75rem; border-radius: 9999px;">📸 Team Member</span>
                </div>
                <h3 style="color: white; margin-bottom: 0.5rem;">Lavanya Pataiya</h3>
                <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">Design & Presentation</p>
                <p style="color: rgba(255, 255, 255, 0.6); font-size: 0.875rem;">UI/UX Design</p>
                <div style="margin-top: 1rem; padding: 0.5rem; background: rgba(255, 255, 255, 0.1); border-radius: 0.5rem;">
                  <span style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">UI/UX Specialist</span>
                </div>
              </div>
            </div>
            
            <div style="margin-top: 2rem; text-center;">
              <div class="card" style="padding: 1.5rem; max-width: 48rem; margin: 0 auto;">
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; text-align: center;">
                  <div>
                    <div style="font-size: 1.5rem; font-weight: bold; color: #93c5fd;">3</div>
                    <div style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">Core Members</div>
                  </div>
                  <div>
                    <div style="font-size: 1.5rem; font-weight: bold; color: #c084fc;">100%</div>
                    <div style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">Dedicated</div>
                  </div>
                  <div>
                    <div style="font-size: 1.5rem; font-weight: bold; color: #86efac;">1</div>
                    <div style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">Shared Vision</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 15: Thank You -->
      <div class="print-slide">
        <div class="slide-content">
          <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <div style="margin-bottom: 2rem;">
              <div style="width: 6rem; height: 6rem; margin: 0 auto 2rem;">
                <img src="${imageUrls.brandLogo}" alt="Digital Guard Logo" style="width: 100%; height: 100%; object-fit: contain;" />
              </div>
            </div>
            
            <h1 style="margin-bottom: 3rem; font-size: 4rem;">Thank You</h1>
            
            <div class="card" style="padding: 2rem; max-width: 48rem; margin: 0 auto 2rem;">
              <div style="display: flex; align-items: center; justify-content: center; gap: 0.75rem; margin-bottom: 1rem;">
                <svg style="width: 1.5rem; height: 1.5rem; color: #fbbf24;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                <span style="color: white; font-size: 1.25rem; font-weight: 500;">Our Vision</span>
                <svg style="width: 1.5rem; height: 1.5rem; color: #fbbf24;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <p style="font-size: 1.125rem; margin-bottom: 1rem;">
                "We aim to make safe digital habits a reality for every teen, school, and company."
              </p>
            </div>
            
            <div style="display: flex; gap: 2rem; align-items: center; justify-content: center;">
              <svg style="width: 1.5rem; height: 1.5rem; color: rgba(255, 255, 255, 0.8);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
              <span style="color: white; font-size: 2rem;">Digital Guard</span>
              <svg style="width: 1.5rem; height: 1.5rem; color: rgba(255, 255, 255, 0.8);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
            
            <div style="color: rgba(255, 255, 255, 0.6); font-size: 1.125rem; margin-top: 2rem;">
              Team Dynamo • Protecting Digital Futures
            </div>
          </div>
        </div>
      </div>
    `;
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 flex flex-col">
        {/* Navigation Header */}
        <div className="flex justify-between items-center p-4 bg-black/20 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 1}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-white/90">
              {currentSlide} / {slides.length}
            </span>
            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="text-white/90">{slides[currentSlide - 1].title}</div>
          
          <div className="flex items-center gap-2">
            <Button
              onClick={exportToPDF}
              disabled={isExporting}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              {isExporting ? (
                <Printer className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              <span className="ml-2">
                {isExporting ? 'Generating PDF...' : 'Export PDF'}
              </span>
            </Button>
          </div>
        </div>

      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl h-full">
          {currentSlide === 1 && <TitleSlide />}
          {currentSlide === 2 && <ProblemSlide />}
          {currentSlide === 3 && <SolutionSlide />}
          {currentSlide === 4 && <WhyNowSlide />}
          {currentSlide === 5 && <UVPSlide />}
          {currentSlide === 6 && <HowItWorksSlide />}
          {currentSlide === 7 && <ProductDemoSlide />}
          {currentSlide === 8 && <RevenueModelSlide />}
          {currentSlide === 9 && <CostStructureSlide />}
          {currentSlide === 10 && <RoadmapSlide />}
          {currentSlide === 11 && <ImpactSlide />}
          {currentSlide === 12 && <CompetitiveEdgeSlide />}
          {currentSlide === 13 && <BusinessPotentialSlide />}
          {currentSlide === 14 && <TeamSlide />}
          {currentSlide === 15 && <VisionSlide />}
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="flex justify-center gap-2 p-4">
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(slide.id)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === slide.id 
                ? 'bg-white w-6' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>

  </>
  );
}

// Slide Components (shortened for brevity, keeping only essential ones)

// Slide 1: Title/Cover
function TitleSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>
      
      <div className="mb-12 relative z-10">
        <div className="w-32 h-32 mb-8 mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-md opacity-75 animate-pulse"></div>
          <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
            <ImageWithFallback 
              src={croppedBrandLogo} 
              alt="Digital Guard Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
          <span className="text-sm font-medium text-white/90">Team Dynamo Presents</span>
        </div>
      </div>
      
      <div className="relative z-10">
        <h1 className="mb-6 text-center max-w-4xl mx-auto bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent text-7xl font-bold">
          Digital Guard
        </h1>
        <p className="text-2xl mb-12 text-white/90 max-w-3xl mx-auto font-light">
          Your digital life, protected & future-ready.
        </p>
        
        <div className="flex gap-8 text-white/80 justify-center mb-8">
          <div className="flex flex-col items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="font-medium">Website</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="font-medium">Extension</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-full">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="font-medium">Dashboards</span>
          </div>
        </div>
        
        <div className="text-white/60 text-lg font-light">
          Comprehensive Digital Safety Ecosystem
        </div>
      </div>
    </div>
  );
}

// Simplified component stubs for other slides (to keep the file manageable)
function ProblemSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-8 text-center">The Problem</h1>
      <div className="grid grid-cols-2 gap-8 max-w-6xl">
        <div>
          <ImageWithFallback 
            src={teenagerPhoneImage}
            alt="Teenagers using social media"
            className="w-full h-80 object-cover rounded-2xl"
          />
        </div>
        <div className="space-y-6">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <h3 className="text-xl font-semibold mb-2">73% of teens regret posts</h3>
            <p className="text-white/80">Oversharing online with lasting consequences</p>
          </Card>
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <h3 className="text-xl font-semibold mb-2">Deleted ≠ Gone</h3>
            <p className="text-white/80">Digital footprints remain forever</p>
          </Card>
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <h3 className="text-xl font-semibold mb-2">Rising Cyber Threats</h3>
            <p className="text-white/80">42% yearly increase in risks</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

function SolutionSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-12 text-center">Our Solution</h1>
      <div className="grid grid-cols-3 gap-8 max-w-6xl">
        <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
          <Globe className="w-16 h-16 mb-6 text-blue-400 mx-auto" />
          <h3 className="text-xl font-semibold mb-4">Website Platform</h3>
          <p className="text-white/80">Interactive guides & educational resources</p>
        </Card>
        <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
          <Zap className="w-16 h-16 mb-6 text-purple-400 mx-auto" />
          <h3 className="text-xl font-semibold mb-4">Smart Extension</h3>
          <p className="text-white/80">AI-powered real-time protection</p>
        </Card>
        <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
          <BarChart3 className="w-16 h-16 mb-6 text-green-400 mx-auto" />
          <h3 className="text-xl font-semibold mb-4">Analytics Dashboard</h3>
          <p className="text-white/80">Insights for schools & enterprises</p>
        </Card>
      </div>
    </div>
  );
}

function WhyNowSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-12 text-center">Why Now?</h1>
      <div className="grid grid-cols-2 gap-12 max-w-6xl items-center">
        <div className="space-y-6">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <h3 className="text-xl font-semibold mb-2">1.3B+ Teenagers online daily</h3>
            <p className="text-white/80">Growing 15% yearly</p>
          </Card>
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <h3 className="text-xl font-semibold mb-2">Cyber Threats Rising 42%</h3>
            <p className="text-white/80">Year over year increase</p>
          </Card>
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <h3 className="text-xl font-semibold mb-2">85% Want Protection</h3>
            <p className="text-white/80">Parents & schools seeking solutions</p>
          </Card>
        </div>
        <div>
          <ImageWithFallback 
            src={growthChartImage}
            alt="Market Growth"
            className="w-full h-96 object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

function UVPSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-12 text-center">Unique Value Proposition</h1>
      <div className="grid grid-cols-2 gap-8 max-w-6xl">
        <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
          <Sparkles className="w-16 h-16 mb-6 text-yellow-400 mx-auto" />
          <h3 className="text-xl font-semibold mb-4">First Complete Ecosystem</h3>
          <p className="text-white/80">Education + Prevention + Analytics</p>
        </Card>
        <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
          <Shield className="w-16 h-16 mb-6 text-green-400 mx-auto" />
          <h3 className="text-xl font-semibold mb-4">Privacy-First</h3>
          <p className="text-white/80">Local processing, no data storage</p>
        </Card>
        <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
          <TrendingUp className="w-16 h-16 mb-6 text-purple-400 mx-auto" />
          <h3 className="text-xl font-semibold mb-4">Infinitely Scalable</h3>
          <p className="text-white/80">Teens to global enterprises</p>
        </Card>
        <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
          <Award className="w-16 h-16 mb-6 text-blue-400 mx-auto" />
          <h3 className="text-xl font-semibold mb-4">Education-First</h3>
          <p className="text-white/80">Behavior change, not just blocking</p>
        </Card>
      </div>
    </div>
  );
}

function HowItWorksSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-12 text-center">How It Works</h1>
      <div className="flex items-center gap-8 max-w-6xl">
        <div className="text-center">
          <Globe className="w-20 h-20 text-blue-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Learn</h3>
          <p className="text-white/80">Website</p>
        </div>
        <div className="text-white/60 text-4xl">→</div>
        <div className="text-center">
          <Shield className="w-20 h-20 text-green-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Protect</h3>
          <p className="text-white/80">Extension</p>
        </div>
        <div className="text-white/60 text-4xl">→</div>
        <div className="text-center">
          <BarChart3 className="w-20 h-20 text-purple-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Analyze</h3>
          <p className="text-white/80">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function ProductDemoSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-12 text-center">Product Demo</h1>
      <div className="grid grid-cols-3 gap-8 max-w-6xl">
        <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
          <h3 className="text-xl font-semibold mb-4">Website Homepage</h3>
          <ImageWithFallback 
            src={homepageImage} 
            alt="Digital Guard Website Homepage" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-white/80">Educational Platform</p>
        </Card>
        
        <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
          <h3 className="text-xl font-semibold mb-4">Browser Extension</h3>
          <ImageWithFallback 
            src={extensionImage} 
            alt="Digital Guard Browser Extension" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-white/80">Real-time Protection</p>
        </Card>
        
        <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
          <h3 className="text-xl font-semibold mb-4">Analytics Dashboard</h3>
          <ImageWithFallback 
            src={dashboardImage} 
            alt="Digital Guard Analytics Dashboard" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-white/80">Institutional Insights</p>
        </Card>
      </div>
    </div>
  );
}

function RevenueModelSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-12 text-center">Revenue Model</h1>
      <div className="max-w-6xl">
        <div className="grid grid-cols-5 gap-4 mb-8">
          {[
            { title: "Website Ads", price: "₹5K+/month" },
            { title: "Premium Extension", price: "₹99/year" },
            { title: "School Licenses", price: "₹5-15K/year" },
            { title: "Corporate", price: "₹25K+/year" },
            { title: "CSR Partnerships", price: "₹50K+/project" }
          ].map((item, index) => (
            <Card key={index} className="p-4 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-green-300">{item.price}</p>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-3 gap-6 text-center">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <div className="text-2xl font-bold text-green-300 mb-2">Year 1</div>
            <div className="text-xl">₹3L+</div>
          </Card>
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <div className="text-2xl font-bold text-blue-300 mb-2">Year 2</div>
            <div className="text-xl">₹12L+</div>
          </Card>
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <div className="text-2xl font-bold text-purple-300 mb-2">Year 3</div>
            <div className="text-xl">₹45L+</div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Abbreviated functions for remaining slides
function CostStructureSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-12 text-center">Cost Structure</h1>
      <div className="grid grid-cols-2 gap-8 max-w-4xl">
        {[
          { icon: Zap, title: "Development & Maintenance", description: "Platform development & technical support" },
          { icon: Globe, title: "Hosting & Infrastructure", description: "Cloud services & server costs" },
          { icon: TrendingUp, title: "Marketing & Outreach", description: "Digital marketing & awareness campaigns" },
          { icon: Users, title: "Training & Support", description: "Educational content & user support" }
        ].map((cost, index) => (
          <Card key={index} className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
            <cost.icon className="w-16 h-16 mb-6 text-red-300 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">{cost.title}</h3>
            <p className="text-white/80">{cost.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

function RoadmapSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-12 text-center">Development Roadmap</h1>
      <div className="grid grid-cols-5 gap-6 max-w-6xl">
        {[
          { phase: "Current", items: ["Website Live", "Extension Beta"] },
          { phase: "Q1 2025", items: ["Free teen version", "Alert system"] },
          { phase: "Q2 2025", items: ["Gamification", "Advanced AI"] },
          { phase: "Q3 2025", items: ["School Dashboard", "Corporate Version"] },
          { phase: "2026+", items: ["Mobile app", "Global certification"] }
        ].map((roadmap, index) => (
          <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <h4 className="font-semibold mb-4 text-blue-300">{roadmap.phase}</h4>
            <ul className="space-y-2">
              {roadmap.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm text-white/80">• {item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ImpactSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-12 text-center">Impact & Key Metrics</h1>
      <div className="grid grid-cols-5 gap-6 max-w-6xl">
        {[
          { title: "Students Trained", icon: Users },
          { title: "Extension Downloads", icon: Zap },
          { title: "Threats Prevented", icon: Shield },
          { title: "Awareness Sessions", icon: Award },
          { title: "Corporate Adoption", icon: Target }
        ].map((metric, index) => (
          <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
            <metric.icon className="w-12 h-12 mb-4 text-yellow-300 mx-auto" />
            <h4 className="text-sm">{metric.title}</h4>
          </Card>
        ))}
      </div>
    </div>
  );
}

function CompetitiveEdgeSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-12 text-center">Competitive Edge</h1>
      <div className="grid grid-cols-2 gap-12 max-w-6xl">
        <Card className="p-8 bg-red-500/20 border-red-300/30 text-white">
          <h3 className="text-2xl font-semibold mb-6">Other Tools</h3>
          <ul className="space-y-4 text-white/80">
            <li>• Block risky content only</li>
            <li>• No education component</li>
            <li>• Limited analytics</li>
            <li>• Not scalable</li>
          </ul>
          <div className="mt-6 p-4 bg-red-600/30 rounded-lg">
            <span className="text-red-300">⚠️ Limited Functionality</span>
          </div>
        </Card>
        
        <Card className="p-8 bg-green-500/20 border-green-300/30 text-white">
          <h3 className="text-2xl font-semibold mb-6">Digital Guard</h3>
          <ul className="space-y-4 text-white/80">
            <li>✓ Educates + Prevents + Tracks</li>
            <li>✓ Privacy-first architecture</li>
            <li>✓ Complete analytics</li>
            <li>✓ Infinitely scalable</li>
          </ul>
          <div className="mt-6 p-4 bg-green-600/30 rounded-lg">
            <span className="text-green-300">🚀 Complete Ecosystem</span>
          </div>
        </Card>
      </div>
    </div>
  );
}

function BusinessPotentialSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-12 text-center">Business Potential</h1>
      <div className="grid grid-cols-2 gap-8 max-w-6xl items-center">
        <div className="space-y-6">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <TrendingUp className="w-12 h-12 mb-4 text-green-300" />
            <h3 className="text-xl font-semibold mb-2">Growing Market</h3>
            <p className="text-white/80">EdTech + Cyber Safety expanding globally</p>
          </Card>
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Award className="w-12 h-12 mb-4 text-blue-300" />
            <h3 className="text-xl font-semibold mb-2">Government & CSR Focus</h3>
            <p className="text-white/80">Rising focus on digital hygiene</p>
          </Card>
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Globe className="w-12 h-12 mb-4 text-purple-300" />
            <h3 className="text-xl font-semibold mb-2">Global Expansion</h3>
            <p className="text-white/80">Schools, colleges, corporates worldwide</p>
          </Card>
        </div>
        <div>
          <ImageWithFallback 
            src={businessDashboardImage}
            alt="Business Dashboard"
            className="w-full h-96 object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

function TeamSlide() {
  const team = [
    { 
      name: "Mayank Raj", 
      role: "Technical Development", 
      focus: "Website & Extension", 
      photo: mayankPhoto
    },
    { 
      name: "Atulya Jha", 
      role: "Research & Surveys", 
      focus: "Market Analysis", 
      photo: atulyaPhoto
    },
    { 
      name: "Lavanya Pataiya", 
      role: "Design & Presentation", 
      focus: "UI/UX Design", 
      photo: lavanyaPhoto
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-12 text-center">Team Dynamo</h1>
      
      <div className="mb-8 text-center">
        <p className="text-xl text-white/90 mb-2">Meet the Innovators</p>
        <p className="text-white/70">Passionate developers building the future of digital safety</p>
      </div>

      <div className="grid grid-cols-3 gap-8 max-w-6xl">
        {team.map((member, index) => (
          <Card key={index} className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              {member.photo ? (
                <div className="w-full h-full rounded-full border-4 border-white/20 overflow-hidden bg-white/10">
                  <ImageWithFallback 
                    src={member.photo} 
                    alt={`${member.name} photo`} 
                    className={`w-full h-full ${member.name === "Mayank Raj" ? "object-contain" : "object-cover object-top"}`}
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center border-4 border-white/20">
                  <Users className="w-16 h-16 text-white/60" />
                </div>
              )}
            </div>
            
            <div className="mb-4">
              <span className="text-xs bg-blue-500/30 px-3 py-1 rounded-full text-white">
                {member.photo ? "📸 Team Member" : "📷 Photo Coming Soon"}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">{member.name}</h3>
            <p className="text-white/90 font-medium mb-2">{member.role}</p>
            <p className="text-white/70 text-sm">{member.focus}</p>
            
            <div className="mt-4 p-3 bg-white/10 rounded-lg">
              <span className="text-white/80 text-sm">
                {index === 0 ? "Full-Stack Developer" : index === 1 ? "Data Analyst" : "UI/UX Specialist"}
              </span>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-300">3</div>
              <div className="text-white/80 text-sm">Core Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-300">100%</div>
              <div className="text-white/80 text-sm">Dedicated</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-300">1</div>
              <div className="text-white/80 text-sm">Shared Vision</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function VisionSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
      <div className="mb-12 relative z-10">
        <div className="w-32 h-32 mb-8 mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-md opacity-75 animate-pulse"></div>
          <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
            <ImageWithFallback 
              src={croppedBrandLogo} 
              alt="Digital Guard Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      
      <div className="relative z-10 space-y-8">
        <h1 className="text-center max-w-4xl mx-auto text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-8">
          Thank You
        </h1>
        
        <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-300" />
            <span className="text-2xl font-medium">Our Vision</span>
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </div>
          <p className="text-xl font-light leading-relaxed">
            "We aim to make safe digital habits a reality for every teen, school, and company."
          </p>
        </Card>
        
        <div className="flex gap-8 text-white/80 items-center justify-center mt-12">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-light">Digital Guard</span>
            <div className="p-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        
        <div className="text-white/50 text-lg font-light mt-6">
          Team Dynamo • Protecting Digital Futures
        </div>
      </div>
    </div>
  );
}