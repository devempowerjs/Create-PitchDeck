const generateRemainingSlides = (imageUrls) => {
  return `
    <!-- Slide 3: Our Solution -->
    <div class="print-slide">
      <div class="slide-content">
        <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <h1 class="text-center mb-12">Our Solution</h1>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; width: 100%; max-width: 72rem;">
            <div class="card" style="padding: 2rem; text-align: center;">
              <div style="width: 4rem; height: 4rem; margin: 0 auto 1rem; padding: 1rem; background: linear-gradient(45deg, #60a5fa, #06b6d4); border-radius: 1rem;">
                <svg style="width: 100%; height: 100%; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
              </div>
              <h3 style="color: white; margin-bottom: 1rem;">Website Platform</h3>
              <p style="color: rgba(255, 255, 255, 0.8);">Interactive guides & privacy education</p>
            </div>
            <div class="card" style="padding: 2rem; text-align: center;">
              <div style="width: 4rem; height: 4rem; margin: 0 auto 1rem; padding: 1rem; background: linear-gradient(45deg, #a855f7, #ec4899); border-radius: 1rem;">
                <svg style="width: 100%; height: 100%; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 style="color: white; margin-bottom: 1rem;">Smart Extension</h3>
              <p style="color: rgba(255, 255, 255, 0.8);">Real-time detection & privacy alerts</p>
            </div>
            <div class="card" style="padding: 2rem; text-align: center;">
              <div style="width: 4rem; height: 4rem; margin: 0 auto 1rem; padding: 1rem; background: linear-gradient(45deg, #10b981, #3b82f6); border-radius: 1rem;">
                <svg style="width: 100%; height: 100%; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 style="color: white; margin-bottom: 1rem;">Analytics Dashboard</h3>
              <p style="color: rgba(255, 255, 255, 0.8);">Insights for schools & enterprises</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Slide 4: Why Now? -->
    <div class="print-slide">
      <div class="slide-content">
        <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <h1 class="text-center mb-12">Why Now?</h1>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; width: 100%; max-width: 80rem; align-items: center;">
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
              <div class="card" style="padding: 1.5rem;">
                <h3 style="color: white; margin-bottom: 0.5rem;">1.3B+ teenagers worldwide</h3>
                <p style="color: rgba(255, 255, 255, 0.8);">active on social media</p>
              </div>
              <div class="card" style="padding: 1.5rem;">
                <h3 style="color: white; margin-bottom: 0.5rem;">Rising cases (+42%)</h3>
                <p style="color: rgba(255, 255, 255, 0.8);">of cyberbullying & data misuse</p>
              </div>
              <div class="card" style="padding: 1.5rem;">
                <h3 style="color: white; margin-bottom: 0.5rem;">Active seeking (85%)</h3>
                <p style="color: rgba(255, 255, 255, 0.8);">Parents, schools want solutions</p>
              </div>
              <div class="card" style="padding: 1.5rem; background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(248, 113, 113, 0.3);">
                <h3 style="color: white; margin-bottom: 0.5rem;">Gap: Most tools block</h3>
                <p style="color: rgba(255, 255, 255, 0.8);">but don't educate</p>
              </div>
            </div>
            <div>
              <img src="\${imageUrls.growthChart}" alt="Digital technology growth" style="width: 100%; height: 24rem; object-fit: cover; border-radius: 0.5rem;" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Slide 5: UVP -->
    <div class="print-slide">
      <div class="slide-content">
        <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <h1 class="text-center mb-12">Unique Value Proposition</h1>
          <div style="width: 100%; max-width: 64rem;">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
              <div class="card" style="padding: 2rem; text-align: center;">
                <svg style="width: 3rem; height: 3rem; margin: 0 auto 1rem; color: rgb(253, 224, 71);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                <p>First teen-friendly + corporate-ready ecosystem</p>
              </div>
              <div class="card" style="padding: 2rem; text-align: center;">
                <svg style="width: 3rem; height: 3rem; margin: 0 auto 1rem; color: rgb(253, 224, 71);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                <p>Combines education + prevention + analytics</p>
              </div>
              <div class="card" style="padding: 2rem; text-align: center;">
                <svg style="width: 3rem; height: 3rem; margin: 0 auto 1rem; color: rgb(253, 224, 71);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                <p>Privacy-first (local processing, no data stored)</p>
              </div>
              <div class="card" style="padding: 2rem; text-align: center;">
                <svg style="width: 3rem; height: 3rem; margin: 0 auto 1rem; color: rgb(253, 224, 71);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                <p>Scalable across schools, companies, and CSR initiatives</p>
              </div>
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
                  <h3 style="color: white; margin-bottom: 0.5rem;">Awareness</h3>
                  <p style="color: rgba(255, 255, 255, 0.8);">Website</p>
                </div>
                <div style="color: rgba(255, 255, 255, 0.6); font-size: 2rem;">→</div>
                <div style="text-align: center;">
                  <svg style="width: 4rem; height: 4rem; color: rgb(134, 239, 172); margin: 0 auto 1rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 style="color: white; margin-bottom: 0.5rem;">Prevention</h3>
                  <p style="color: rgba(255, 255, 255, 0.8);">Extension</p>
                </div>
                <div style="color: rgba(255, 255, 255, 0.6); font-size: 2rem;">→</div>
                <div style="text-align: center;">
                  <svg style="width: 4rem; height: 4rem; color: rgb(196, 181, 253); margin: 0 auto 1rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                  <h3 style="color: white; margin-bottom: 0.5rem;">Analytics</h3>
                  <p style="color: rgba(255, 255, 255, 0.8);">Dashboards</p>
                </div>
              </div>
            </div>
            <div class="card" style="padding: 2rem; text-align: center;">
              <p style="font-size: 1.125rem;">Comprehensive ecosystem for digital safety education and protection</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Slide 7: Product Demo -->
    <div class="print-slide">
      <div class="slide-content">
        <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <h1 class="text-center mb-12">Product Demo</h1>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; width: 100%; max-width: 72rem;">
            <div class="card" style="padding: 1.5rem;">
              <h3 style="color: white; margin-bottom: 1rem;">Website Homepage</h3>
              <img src="\${imageUrls.homepage}" alt="Digital Guard Website Homepage" style="width: 100%; height: 10rem; object-fit: cover; border-radius: 0.5rem; margin-bottom: 1rem;" />
              <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">Digital Privacy Awareness Platform</p>
            </div>
            <div class="card" style="padding: 1.5rem;">
              <h3 style="color: white; margin-bottom: 1rem;">Extension Popup UI</h3>
              <img src="\${imageUrls.extension}" alt="Digital Guard Browser Extension" style="width: 100%; height: 10rem; object-fit: cover; border-radius: 0.5rem; margin-bottom: 1rem;" />
              <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">Real-time Privacy Protection Tools</p>
            </div>
            <div class="card" style="padding: 1.5rem;">
              <h3 style="color: white; margin-bottom: 1rem;">Dashboard Sample</h3>
              <img src="\${imageUrls.dashboard}" alt="Digital Guard Analytics Dashboard" style="width: 100%; height: 10rem; object-fit: cover; border-radius: 0.5rem; margin-bottom: 1rem;" />
              <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">Schools & Companies Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Slides 8-15 in compact format -->
    <div class="print-slide"><div class="slide-content"><div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"><h1 class="text-center mb-12">Revenue Model</h1><div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1.5rem; width: 100%; max-width: 72rem;"><div class="card" style="padding: 1.5rem; text-align: center;"><h4 style="color: white; margin-bottom: 0.5rem; font-size: 1rem;">Website Ads</h4><p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">₹50K+/month</p></div><div class="card" style="padding: 1.5rem; text-align: center;"><h4 style="color: white; margin-bottom: 0.5rem; font-size: 1rem;">Premium Extension</h4><p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">₹199/year</p></div><div class="card" style="padding: 1.5rem; text-align: center;"><h4 style="color: white; margin-bottom: 0.5rem; font-size: 1rem;">School Licenses</h4><p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">₹10K-20K/year</p></div><div class="card" style="padding: 1.5rem; text-align: center;"><h4 style="color: white; margin-bottom: 0.5rem; font-size: 1rem;">Corporate Contracts</h4><p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">₹50K+/year</p></div><div class="card" style="padding: 1.5rem; text-align: center;"><h4 style="color: white; margin-bottom: 0.5rem; font-size: 1rem;">CSR Partnerships</h4><p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">₹1L+/project</p></div></div></div></div></div>
    <div class="print-slide"><div class="slide-content"><div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"><h1 class="text-center mb-12">Cost Structure</h1><div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; width: 100%; max-width: 64rem;"><div class="card" style="padding: 2rem; text-align: center;"><h3 style="color: white;">Development & maintenance</h3></div><div class="card" style="padding: 2rem; text-align: center;"><h3 style="color: white;">Hosting + cloud costs</h3></div><div class="card" style="padding: 2rem; text-align: center;"><h3 style="color: white;">Marketing & awareness campaigns</h3></div><div class="card" style="padding: 2rem; text-align: center;"><h3 style="color: white;">Trainers/volunteers</h3></div></div></div></div></div>
    <div class="print-slide"><div class="slide-content"><div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"><h1 class="text-center mb-12">Roadmap</h1><div style="width: 100%; max-width: 72rem;"><div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem;"><div class="card" style="padding: 1.5rem;"><h4 style="color: white; margin-bottom: 1rem;">Current</h4><ul style="list-style: none; padding: 0;"><li style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">• Website Live</li></ul></div><div class="card" style="padding: 1.5rem;"><h4 style="color: white; margin-bottom: 1rem;">Q1 2025</h4><ul style="list-style: none; padding: 0;"><li style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">• Free teen version</li></ul></div><div class="card" style="padding: 1.5rem;"><h4 style="color: white; margin-bottom: 1rem;">Q2 2025</h4><ul style="list-style: none; padding: 0;"><li style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">• Gamification</li></ul></div><div class="card" style="padding: 1.5rem;"><h4 style="color: white; margin-bottom: 1rem;">Q3 2025</h4><ul style="list-style: none; padding: 0;"><li style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">• School Dashboard</li></ul></div><div class="card" style="padding: 1.5rem;"><h4 style="color: white; margin-bottom: 1rem;">2026+</h4><ul style="list-style: none; padding: 0;"><li style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem;">• Mobile app</li></ul></div></div></div></div></div></div>
    <div class="print-slide"><div class="slide-content"><div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"><h1 class="text-center mb-12">Impact & Key Metrics</h1><div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1.5rem; width: 100%; max-width: 72rem;"><div class="card" style="padding: 1.5rem; text-align: center;"><h4 style="color: white; font-size: 0.875rem;">Students trained</h4></div><div class="card" style="padding: 1.5rem; text-align: center;"><h4 style="color: white; font-size: 0.875rem;">Extension downloads</h4></div><div class="card" style="padding: 1.5rem; text-align: center;"><h4 style="color: white; font-size: 0.875rem;">Unsafe attempts detected</h4></div><div class="card" style="padding: 1.5rem; text-align: center;"><h4 style="color: white; font-size: 0.875rem;">Awareness sessions</h4></div><div class="card" style="padding: 1.5rem; text-align: center;"><h4 style="color: white; font-size: 0.875rem;">Corporate adoption</h4></div></div></div></div></div>
    <div class="print-slide"><div class="slide-content"><div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;"><div style="position: absolute; top: 2rem; right: 2rem; width: 4rem; height: 4rem; opacity: 0.3;"><img src="\${imageUrls.brandLogo}" alt="Digital Guard Logo" style="width: 100%; height: 100%; object-fit: contain;" /></div><h1 class="text-center mb-12">Competitive Edge</h1><div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; width: 100%; max-width: 80rem;"><div class="card" style="padding: 2rem; background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(248, 113, 113, 0.3);"><h3 style="color: white; margin-bottom: 1.5rem;">Other tools</h3><p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 1rem;">• Only block risky content</p><p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 1rem;">• No education component</p><p style="color: rgba(255, 255, 255, 0.8);">• Limited analytics</p></div><div class="card" style="padding: 2rem; background: rgba(34, 197, 94, 0.2); border: 1px solid rgba(74, 222, 128, 0.3);"><h3 style="color: white; margin-bottom: 1.5rem;">Digital Guard</h3><div style="color: rgb(74, 222, 128);"><p style="margin-bottom: 0.5rem;">✓ Educates + prevents + tracks</p><p style="margin-bottom: 0.5rem;">✓ Open-source, privacy-first</p><p>✓ Infinitely scalable</p></div></div></div></div></div></div>
    <div class="print-slide"><div class="slide-content"><div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"><h1 class="text-center mb-12">Business Potential</h1><div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; width: 100%; max-width: 80rem; align-items: center;"><div style="display: flex; flex-direction: column; gap: 1.5rem;"><div class="card" style="padding: 1.5rem;"><h3 style="color: white; margin-bottom: 0.5rem;">Growing EdTech + Cyber Safety market</h3></div><div class="card" style="padding: 1.5rem;"><h3 style="color: white; margin-bottom: 0.5rem;">Rising government & CSR focus</h3><p style="color: rgba(255, 255, 255, 0.8);">on digital hygiene</p></div><div class="card" style="padding: 1.5rem;"><h3 style="color: white; margin-bottom: 0.5rem;">Expansion potential</h3><p style="color: rgba(255, 255, 255, 0.8);">schools, colleges, corporates worldwide</p></div></div><div><img src="\${imageUrls.businessDashboard}" alt="Business analytics dashboard" style="width: 100%; height: 24rem; object-fit: cover; border-radius: 0.5rem;" /></div></div></div></div></div>
    <div class="print-slide"><div class="slide-content"><div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"><h1 class="text-center mb-12">Team Dynamo</h1><div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; width: 100%; max-width: 80rem;"><div class="card" style="padding: 2rem; text-align: center;"><div style="width: 6rem; height: 6rem; background: rgba(255, 255, 255, 0.2); border-radius: 50%; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center;"><svg style="width: 3rem; height: 3rem; color: rgba(255, 255, 255, 0.6);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path></svg></div><h3 style="color: white; margin-bottom: 0.5rem;">Mayank Raj</h3><p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">Technical Development</p><p style="color: rgba(255, 255, 255, 0.6); font-size: 0.875rem;">Website & Extension</p></div><div class="card" style="padding: 2rem; text-align: center;"><div style="width: 6rem; height: 6rem; background: rgba(255, 255, 255, 0.2); border-radius: 50%; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center;"><svg style="width: 3rem; height: 3rem; color: rgba(255, 255, 255, 0.6);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path></svg></div><h3 style="color: white; margin-bottom: 0.5rem;">Atulya Jha</h3><p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">Research & Surveys</p><p style="color: rgba(255, 255, 255, 0.6); font-size: 0.875rem;">Market Analysis</p></div><div class="card" style="padding: 2rem; text-align: center;"><div style="width: 6rem; height: 6rem; background: rgba(255, 255, 255, 0.2); border-radius: 50%; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center;"><svg style="width: 3rem; height: 3rem; color: rgba(255, 255, 255, 0.6);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path></svg></div><h3 style="color: white; margin-bottom: 0.5rem;">Lavanya Pataiya</h3><p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">Design & Presentation</p><p style="color: rgba(255, 255, 255, 0.6); font-size: 0.875rem;">UI/UX Design</p></div></div></div></div></div>
    <div class="print-slide"><div class="slide-content"><div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; position: relative; overflow: hidden;"><div style="margin-bottom: 3rem; position: relative; z-index: 10;"><div style="width: 8rem; height: 8rem; margin: 0 auto 2rem; position: relative;"><div style="position: absolute; inset: 0; background: linear-gradient(45deg, #60a5fa, #a855f7, #ec4899); border-radius: 50%; filter: blur(1rem); opacity: 0.75; animation: pulse 2s infinite;"></div><div style="position: relative; width: 100%; height: 100%; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 50%; padding: 1rem; border: 1px solid rgba(255, 255, 255, 0.2);"><img src="\${imageUrls.brandLogo}" alt="Digital Guard Logo" style="width: 100%; height: 100%; object-fit: contain;" /></div></div></div><div style="position: relative; z-index: 10; display: flex; flex-direction: column; align-items: center; gap: 2rem;"><h1 style="text-align: center; max-width: 64rem; margin-left: auto; margin-right: auto; background: linear-gradient(45deg, #ffffff, #dbeafe, #e0e7ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 4rem; font-weight: bold; margin-bottom: 2rem;">Thank You</h1><div class="card" style="padding: 2rem; max-width: 48rem; margin: 0 auto 2rem;"><p style="font-size: 1.125rem; margin-bottom: 1rem;">"We aim to make safe digital habits a reality for every teen, school, and company."</p></div><div style="display: flex; gap: 1.5rem; color: rgba(255, 255, 255, 0.8); align-items: center; justify-content: center;"><span style="font-size: 1.5rem;">✨ Digital Guard ✨</span></div><div style="color: rgba(255, 255, 255, 0.5); font-size: 1.125rem; margin-top: 1.5rem;">Team Dynamo • Protecting Digital Futures</div></div></div></div></div>
  `;
};