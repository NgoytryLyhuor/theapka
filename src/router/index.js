// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Invitation from '../components/Invitation.vue'
import home from '../components/home.vue'

const routes = [
  // Home route (optional - you can remove this)
  {
    path: '/',
    name: 'Home',
    component: home,
    props: {
      guestName: 'Dear Guest',
      guestSlug: 'default',
      personalMessage: 'You are cordially invited to celebrate our special day with us!'
    }
  },

  // ========================================
  // PERSONALIZED GUEST ROUTES
  // Add one route for each guest/family
  // ========================================

  // Friend 1 - Sarah & Family
  {
    path: '/sarah-family',
    name: 'SarahFamily',
    component: Invitation,
    props: {
      guestName: 'Sarah & Family',
      guestSlug: 'sarah-family',
      personalMessage: 'We would be honored to have you celebrate this special moment with us!'
    }
  },

  // Friend 2 - John Doe
  {
    path: '/john-doe',
    name: 'JohnDoe',
    component: Invitation,
    props: {
      guestName: 'John Doe',
      guestSlug: 'john-doe',
      personalMessage: 'Your presence would mean the world to us on our wedding day!'
    }
  },

  // Friend 3 - Michael & Emma
  {
    path: '/michael-emma',
    name: 'MichaelEmma',
    component: Invitation,
    props: {
      guestName: 'Michael & Emma',
      guestSlug: 'michael-emma',
      personalMessage: 'We cannot imagine celebrating without you both there!'
    }
  },

  // Friend 4 - The Johnson Family
  {
    path: '/johnson-family',
    name: 'JohnsonFamily',
    component: Invitation,
    props: {
      guestName: 'The Johnson Family',
      guestSlug: 'johnson-family',
      personalMessage: 'Your entire family is warmly invited to join us in celebration!'
    }
  },

  // Friend 5 - Lisa Chen
  {
    path: '/lisa-chen',
    name: 'LisaChen',
    component: Invitation,
    props: {
      guestName: 'Lisa Chen',
      guestSlug: 'lisa-chen',
      personalMessage: 'We would be thrilled to have you share in our joy!'
    }
  },

  // Friend 6 - David & Maria
  {
    path: '/david-maria',
    name: 'DavidMaria',
    component: Invitation,
    props: {
      guestName: 'David & Maria',
      guestSlug: 'david-maria',
      personalMessage: 'Your friendship means everything to us. Please join us!'
    }
  },

  // Friend 7 - The Anderson Family
  {
    path: '/anderson-family',
    name: 'AndersonFamily',
    component: Invitation,
    props: {
      guestName: 'The Anderson Family',
      guestSlug: 'anderson-family',
      personalMessage: 'We would love to have your whole family celebrate with us!'
    }
  },

  // Friend 8 - Robert Smith
  {
    path: '/robert-smith',
    name: 'RobertSmith',
    component: Invitation,
    props: {
      guestName: 'Robert Smith',
      guestSlug: 'robert-smith',
      personalMessage: 'Your presence would make our day truly complete!'
    }
  },

  // ADD MORE GUESTS HERE...
  // Just copy the pattern above and change:
  // - path: the URL (keep it clean and lowercase)
  // - name: unique name for the route
  // - guestName: the name that appears on the invitation
  // - guestSlug: identifier for RSVP (use same as path without /)
  // - personalMessage: custom message for this guest

  // Example template to copy:
  /*
  {
    path: '/guest-name',
    name: 'GuestName',
    component: Invitation,
    props: {
      guestName: 'Guest Full Name',
      guestSlug: 'guest-name',
      personalMessage: 'Your custom message here!'
    }
  },
  */

  // 404 Not Found - Catch all unmatched routes
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Invitation,
    props: {
      guestName: 'Dear Guest',
      guestSlug: 'unknown',
      personalMessage: 'We are happy to invite you to our special day!'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router