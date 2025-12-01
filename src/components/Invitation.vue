<template>
  <div class="invitation-wrapper">
    <div class="invitation-card">
      
      <!-- Background Image Overlay -->
      <div class="background-overlay"></div>
      
      <!-- Content -->
      <div class="content">
        
        <!-- Top Text -->
        <h3 class="top-text">សូមអញ្ជើញចូលរួមពិធីមង្គល</h3>
        
        <!-- Couple Names -->
        <div class="couple-section">
          <h1 class="groom-name">{{ groomName }}</h1>
          <div class="heart">♥</div>
          <h1 class="bride-name">{{ brideName }}</h1>
        </div>
        
        <!-- Guest Name with Border -->
        <div class="guest-box">
          <p class="guest-label">សូមគោរពអញ្ជើញ</p>
          <h2 class="guest-name">{{ guestName }}</h2>
        </div>
        
        <!-- Date & Time -->
        <div class="date-time">
          <p class="date-text">ថ្ងៃទី ២៥ ខែ ១២ ឆ្នាំ ២០២៥ ម៉ោង ៦:០០ ល្ងាច</p>
          <p class="location">ភ្នំពេញ</p>
        </div>
        
        <!-- Bottom Decorative Line -->
        <div class="decorative-line">
          <span class="line-left"></span>
          <span class="heart-icon">♥</span>
          <span class="line-right"></span>
        </div>
        
        <!-- Add to Calendar Button -->
        <button class="calendar-button">
          📅 Add to Calendar
        </button>
        
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Props from router
const props = defineProps({
  groomName: {
    type: String,
    default: 'ថៃរ៉េត្រី លីហ្គូ'
  },
  brideName: {
    type: String,
    default: 'នីន ស្រីលេន'
  },
  guestName: {
    type: String,
    default: 'លោកអ្នក'
  },
  guestSlug: {
    type: String,
    default: 'guest'
  }
});
</script>

<style scoped>
/* Khmer Font Import */
@import url('https://fonts.googleapis.com/css2?family=Battambang:wght@400;700&family=Moul&display=swap');

.invitation-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 1rem;
  font-family: 'Battambang', 'Moul', serif;
}

.invitation-card {
  position: relative;
  width: 100%;
  max-width: 600px;
  min-height: 800px;
  background-image: url('https://images.unsplash.com/photo-1519741497674-611481863552?w=800');
  background-size: cover;
  background-position: center;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
}

.background-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

.content {
  position: relative;
  z-index: 10;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 800px;
  text-align: center;
  color: white;
}

/* Top Text */
.top-text {
  font-family: 'Moul', serif;
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  color: #ffd700;
}

/* Couple Section */
.couple-section {
  margin-bottom: 3rem;
}

.groom-name,
.bride-name {
  font-family: 'Moul', serif;
  font-size: 2.5rem;
  font-weight: 400;
  margin: 0.5rem 0;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.9);
  letter-spacing: 1px;
}

.heart {
  font-size: 2.5rem;
  color: #ff6b9d;
  margin: 1rem 0;
  animation: heartbeat 1.5s ease-in-out infinite;
  text-shadow: 0 0 20px rgba(255, 107, 157, 0.8);
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

/* Guest Box */
.guest-box {
  border: 3px solid #ffd700;
  border-radius: 8px;
  padding: 2rem 3rem;
  margin: 2rem 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  box-shadow: 0 8px 32px rgba(255, 215, 0, 0.3);
}

.guest-label {
  font-family: 'Moul', serif;
  font-size: 1.1rem;
  color: #ffd700;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.guest-name {
  font-family: 'Moul', serif;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: #fff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
}

/* Date & Time */
.date-time {
  margin: 2rem 0;
}

.date-text {
  font-family: 'Battambang', serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);
  letter-spacing: 1px;
}

.location {
  font-family: 'Moul', serif;
  font-size: 1.3rem;
  color: #ffd700;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);
}

/* Decorative Line */
.decorative-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  width: 80%;
}

.line-left,
.line-right {
  flex: 1;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    #ffd700,
    transparent
  );
}

.heart-icon {
  font-size: 2rem;
  color: #ff6b9d;
  text-shadow: 0 0 15px rgba(255, 107, 157, 0.8);
}

/* Calendar Button */
.calendar-button {
  padding: 1rem 2.5rem;
  font-family: 'Battambang', serif;
  font-size: 1.1rem;
  font-weight: 600;
  background: rgba(255, 215, 0, 0.9);
  color: #1a1a2e;
  border: 2px solid #ffd700;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
  margin-top: 1rem;
}

.calendar-button:hover {
  background: #ffd700;
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 215, 0, 0.6);
}

.calendar-button:active {
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 640px) {
  .content {
    padding: 2rem 1.5rem;
  }
  
  .top-text {
    font-size: 1.1rem;
  }
  
  .groom-name,
  .bride-name {
    font-size: 2rem;
  }
  
  .guest-name {
    font-size: 1.5rem;
  }
  
  .guest-box {
    padding: 1.5rem 2rem;
  }
  
  .date-text {
    font-size: 1rem;
  }
}
</style>